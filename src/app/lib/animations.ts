import gsap from "gsap";

// Fade in animation
export const fadeIn = (element: gsap.TweenTarget, delay = 0) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, delay, ease: "power2.out" }
  );
};

// Slide in from left
export const slideInLeft = (element: gsap.TweenTarget, delay = 0) => {
  return gsap.fromTo(
    element,
    { opacity: 0, x: -50 },
    { opacity: 1, x: 0, duration: 0.8, delay, ease: "power3.out" }
  );
};

// Slide in from right
export const slideInRight = (element: gsap.TweenTarget, delay = 0) => {
  return gsap.fromTo(
    element,
    { opacity: 0, x: 50 },
    { opacity: 1, x: 0, duration: 0.8, delay, ease: "power3.out" }
  );
};

// Stagger children animation
export const staggerChildren = (
  parent: gsap.TweenTarget,
  children: string,
  stagger = 0.1,
  delay = 0
) => {
  return gsap.fromTo(
    children,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay,
      stagger,
      ease: "power2.out",
    }
  );
};

// Hover scale animation
export const hoverScale = (element: HTMLElement, scale = 1.05) => {
  gsap.to(element, {
    scale,
    duration: 0.3,
    ease: "power2.out",
    paused: true,
  });

  element.addEventListener("mouseenter", () =>
    gsap.to(element, { scale, duration: 0.3 })
  );
  element.addEventListener("mouseleave", () =>
    gsap.to(element, { scale: 1, duration: 0.3 })
  );
};

// Pulse animation
export const pulseAnimation = (element: gsap.TweenTarget, repeat = -1) => {
  return gsap.to(element, {
    scale: 1.1,
    duration: 1,
    repeat,
    yoyo: true,
    ease: "power1.inOut",
  });
};
