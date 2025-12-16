Building a Portfolio That Supports Both Angular & React
Overview

Instead of choosing a single framework for my portfolio, I wanted to show how I think as a frontend engineer, not just what I code in.
That led me to design the portfolio as a shell-based system where Angular and React can coexist cleanly.


🧩 Problem

I wanted my portfolio to:
Showcase both Angular and React
Avoid duplicating UI or maintaining two separate sites
Keep frameworks independent, not mixed
Reflect real-world frontend architecture, not demos
Using iframes or separate deployments felt like shortcuts and didn’t align with how large frontend systems are built.


🎯 Goal

Create a single portfolio experience that:
Uses Angular for structure and navigation
Loads React only when needed
Keeps ownership and lifecycle clear
Is scalable and explainable in interviews

🏗️ Solution

I implemented a Micro-Frontend architecture using Module Federation:
Angular → Host / Shell
React (Vite) → Remote / Micro-frontend
React is loaded at runtime, only when the user navigates to the React section of the portfolio.
This keeps both frameworks:
Framework-native
Independently built
Independently reasoned about


🧠 Key Architectural Decisions
1. Angular as the Shell

Angular handles:
Routing
Layout
Navigation
Lifecycle control
This aligns with Angular’s strengths in structure and orchestration.


2. React as a Remote

React is treated as a remote module, not a full SPA:
It exposes a mount and unmount function
It does not auto-render
The host decides when and where it appears.

3. Explicit Lifecycle Control

Instead of letting React manage itself:
Angular mounts React when entering the route
Angular unmounts React on navigation
This prevents memory leaks and keeps ownership clear.

4. Contract-Based Communication

Data is passed from Angular → React via explicit props.
No shared global state.
No cross-framework imports.
This keeps the boundary clean and predictable.

⚠️ Challenges & Learnings

Tooling Mismatch
Angular uses Webpack
React uses Vite (ESM)
This required understanding:
ESM vs script loading
Correct Module Federation configuration
Runtime behavior vs dev assumptions.

Runtime Debugging

Several issues only appeared at runtime:
Remote not loading due to port mismatch
Exposed file not matching expected contract
Lifecycle functions not available due to wrong exposure
Solving these reinforced an important lesson:
Micro-frontends fail more often due to environment alignment than conceptual mistakes.

✅ Outcome

Angular and React coexist cleanly
React loads only when required
Lifecycle and data flow are explicit
Portfolio reflects architectural thinking, not just UI skills


🧠 Why This Matters

This project wasn’t about adding complexity for its own sake.
It was about learning:
Runtime composition
Ownership boundaries
Framework coexistence
Real-world frontend architecture patterns
These concepts apply beyond micro-frontends and influence how I design any frontend system.

🧾 One-line Summary (for resume / LinkedIn)

Designed a portfolio using Angular as a shell and React as a micro-frontend via Module Federation, focusing on runtime loading, lifecycle control, and clean framework boundaries.