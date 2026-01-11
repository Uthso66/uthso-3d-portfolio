
# 🚀✨ 3D Motion-First Portfolio — Next.js + R3F + GSAP

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge\&logo=next.js\&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge\&logo=three.js\&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge\&logo=greensock\&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge\&logo=typescript\&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-0F172A?style=for-the-badge\&logo=tailwind-css\&logoColor=38BDF8)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge\&logo=vercel\&logoColor=white)

A **motion-first, 3D-driven portfolio website** built to showcase **Md. Tarikul Islam Uthso** as a **Creative Frontend Engineer** who thinks in **systems, space, and interaction** — not static pages.

This isn’t a portfolio that *tells* you what I know.
It **shows it running in real time**.

👉 **Live Demo**
🔗 [https://uthso-3d-portfolio.vercel.app/](https://uthso-3d-portfolio.vercel.app/)

---

## 🚀 Key Engineering Features

* 🌌 **3D Hero Environment:** Animated particle systems using **React Three Fiber**, creating spatial depth from the first frame.
* ⌨️ **Typewriter Role Transitions:** Dynamic role switching with precise timing control (no jank, no cheap loops).
* 🎨 **Gradient Typography & Motion:** Carefully animated headings with attention to hierarchy and readability.
* 📊 **Live Stats Dashboard:** Competitive programming achievements rendered as interactive UI, not static text.
* 🪐 **Dual Project Views:** Toggle between a traditional grid and a **3D orbital system** where projects behave like planets.
* 🧠 **Smart Filtering:** Filter projects by domain (3D / AI / Web) and technology with real-time state updates.
* 📱 **Touch-Aware 3D Controls:** Mobile-safe interactions with performance-adaptive rendering.

---

## 🧱 Tech Stack

| Layer         | Technology                   |
| ------------- | ---------------------------- |
| **Framework** | Next.js 14 (App Router)      |
| **Language**  | TypeScript                   |
| **3D**        | React Three Fiber (Three.js) |
| **Animation** | GSAP                         |
| **Styling**   | Tailwind CSS                 |
| **Utilities** | @react-three/drei            |
| **Hosting**   | Vercel                       |

---

## 🎯 Why This Project Exists

I built this portfolio to:

* Escape flat, scroll-only layouts
* Demonstrate **motion literacy**, not just animation usage
* Show **real 3D system design** inside a React app
* Prove performance discipline while pushing visuals
* Let recruiters *experience* my skills instead of reading bullet points

This is a **technical artifact**, not a theme.

---

## 🎞️ Animation & Interaction Breakdown

### 🟢 Motion-First Philosophy

Every animation has intent:

* Motion guides attention
* Transitions establish hierarchy
* State changes are visible and understandable

No animation exists “just because”.

---

### 🟢 3D Project Orbit System

* Projects are mapped into a **3D orbital layout**
* Camera movement and object rotation are synchronized
* Smooth interpolation prevents motion sickness
* Grid ↔ 3D toggle maintains state continuity

---

### 🟢 UI + 3D Synchronization

* React state drives both DOM UI and WebGL scenes
* Shared data layer prevents desync between views
* Animations are lifecycle-aware and properly cleaned up

---

## ⚖️ Challenges & Trade-offs (recruiter-important section)

### 🎯 Visual Ambition vs Performance

3D + motion can destroy frame rates if abused.

**Decision:**
Use **dynamic imports**, controlled particle counts, and lazy loading for off-screen scenes.

**Trade-off:**
More architectural complexity — far better runtime performance.

---

### 🎯 Motion Density vs Clarity

Too much motion = visual noise.

**Decision:**
Motion is restrained to **state changes, navigation, and storytelling moments**.

**Trade-off:**
Less “flash”, more professional readability.

---

### 🎯 Abstraction vs Control

High-level libraries speed development but can hide performance costs.

**Decision:**
Use R3F declaratively, drop to refs only where precision is required.

**Trade-off:**
Slightly steeper learning curve — massive maintainability gain.

---

### 🎯 Mobile GPUs Are Fragile

Phones don’t forgive bad shaders.

**Decision:**
Adaptive rendering quality based on viewport and interaction type.

**Trade-off:**
Lower fidelity on mobile — dramatically better stability and battery usage.

---

## 📱 Responsive & Accessibility Notes

* 📱 Mobile-first layout strategy
* 🖐 Touch-optimized interactions
* 🧭 Keyboard-safe navigation
* 🌓 Dark-mode-first theming
* ♿ Accessibility-aware contrast and structure

---

## 💻 Local Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Uthso66/uthso-3d-portfolio.git
cd uthso-3d-portfolio
```

### 2️⃣ Install & run

```bash
npm install
npm run dev
```

Runs locally at:
👉 [http://localhost:3000](http://localhost:3000)

---

## 🧪 Notes

* Frontend-focused by design
* No backend dependencies
* Heavy emphasis on motion, interaction, and system thinking
* Intended as a **living technical showcase**

---

## 🧔 Author

**Md. Tarikul Islam Uthso**
*Motion-First Frontend Engineer • Software QA Engineer • Security Enthusiast • AI/ML Hobbyist*

🐙 GitHub: [https://github.com/Uthso66](https://github.com/Uthso66)
💼 LinkedIn: [https://www.linkedin.com/in/tarikul-islam-uthso/](https://www.linkedin.com/in/tarikul-islam-uthso/)

---

## 🪄 License

MIT License © 2025 Md. Tarikul Islam Uthso

