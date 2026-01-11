"use client";

import { useState, useEffect, useRef } from "react";

export function PerformanceMonitor() {
  const [fps, setFps] = useState(60);
  const [visible, setVisible] = useState(false);
  const frameCount = useRef(0);
  const lastTime = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Initialize lastTime only when component mounts
    lastTime.current = performance.now();
  }, []);

  useEffect(() => {
    // Toggle with Ctrl+Shift+P
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "P") {
        setVisible((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  useEffect(() => {
    if (!visible) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      return;
    }

    const calculateFps = () => {
      frameCount.current++;
      const currentTime = performance.now();

      if (currentTime >= lastTime.current + 1000) {
        setFps(
          Math.round(
            (frameCount.current * 1000) / (currentTime - lastTime.current)
          )
        );
        frameCount.current = 0;
        lastTime.current = currentTime;
      }

      rafRef.current = requestAnimationFrame(calculateFps);
    };

    // Reset counters when becoming visible
    frameCount.current = 0;
    lastTime.current = performance.now();

    rafRef.current = requestAnimationFrame(calculateFps);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [visible]);

  if (!visible) return null;

  const getPerformanceColor = () => {
    if (fps >= 50) return "text-green-400";
    if (fps >= 30) return "text-yellow-400";
    return "text-red-400";
  };

  const getPerformanceStatus = () => {
    if (fps >= 50) return "Excellent";
    if (fps >= 30) return "Good";
    return "Poor";
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-gray-900/90 backdrop-blur-sm rounded-lg p-4 border border-gray-700 shadow-lg">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-medium text-gray-300">
          Performance Monitor
        </h4>
        <button
          onClick={() => setVisible(false)}
          className="text-xs text-gray-500 hover:text-gray-300"
        >
          ✕
        </button>
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-400">FPS</span>
            <span className={`text-sm font-bold ${getPerformanceColor()}`}>
              {fps}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${getPerformanceColor().replace(
                "text-",
                "bg-"
              )}`}
              style={{ width: `${(Math.min(fps, 60) / 60) * 100}%` }}
            />
          </div>
        </div>

        <div className="text-xs text-gray-500">
          <div className="flex justify-between">
            <span>Status:</span>
            <span className={getPerformanceColor()}>
              {getPerformanceStatus()}
            </span>
          </div>
          <div className="flex justify-between mt-1">
            <span>Controls:</span>
            <span>Ctrl+Shift+P</span>
          </div>
        </div>
      </div>
    </div>
  );
}
