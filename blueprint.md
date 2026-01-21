# Blueprint for Web Project in Firebase Studio

## Overview
This document outlines the operational principles and capabilities of the AI agent interacting with this framework-less web project (HTML, CSS, JavaScript) within the Firebase Studio environment. The goal is to enable an efficient, automated, and error-resilient application design and development workflow that leverages modern, widely supported web standards (Baseline).

## Project Features and Design
This project will leverage the following principles and features as implemented by the AI:

### Environment & Context Awareness
- Project Structure: Assumes a basic web project structure with `index.html` as the primary entry point, and linked `style.css` and `main.js`.
- `.idx/dev.nix` Configuration: AI is aware of this file for environment configuration.
- Preview Server: AI monitors the running preview server for real-time feedback.
- Firebase Integration: AI recognizes standard Firebase integration patterns (CDN SDKs, config object).

### Code Modification & Dependency Management
- Core Code Assumption: AI primarily modifies `.html`, `.css`, and `.js` files, creating new ones as needed and linking them in `index.html`.
- Dependency Management: Prefers ES Modules for JavaScript. Uses CDN links with SRI for third-party libraries or npm if `package.json` is present.

### Modern HTML: Web Components
- Custom Elements: Defines new HTML tags with custom behavior.
- Shadow DOM: Encapsulates component HTML, styling, and behavior.
- HTML Templates (`<template>` and `<slot>`): Creates inert markup for reuse.

### Modern CSS (Baseline Features)
- Container Queries (`@container`): Responsive components based on container size.
- Cascade Layers (`@layer`): Manages CSS cascade to prevent conflicts.
- The `:has()` Selector: Selects parent elements based on children.
- Logical Properties: Uses properties like `margin-inline-start`.
- Modern Color Spaces (`oklch`, `lch`): Access to vibrant, perceptually uniform colors.
- CSS Variables: For theming and maintenance.

### Modern JavaScript (Baseline Features)
- ES Modules: Organizes code into reusable modules.
- Async/Await: Clean asynchronous operations.
- The `fetch` API: For network requests.
- Promises: Structured asynchronous results.
- Modern Syntax: Arrow functions, destructuring, spread/rest, optional chaining.

### Advanced Capabilities (as requested)
- **3D Graphics with Three.js**: For 3D graphics, using Scene, Camera, WebGLRenderer, Meshes, and optimization techniques.
- **High-Performance with WebAssembly (WASM)**: For computationally intensive tasks, integrating WASM modules.

### Automated Error Detection & Remediation
- Post-Modification Checks: Monitors IDE diagnostics and browser console for errors.
- Automatic Error Correction: Attempts to fix syntax errors, incorrect file paths, and common JS runtime errors.
- Problem Reporting: Reports unresolved errors with details and suggestions.

### Visual Design
- Aesthetics: Focuses on modern components, balanced layout, clean spacing, and polished styles.
- Responsiveness: Ensures mobile responsiveness.
- Design Elements: Proposes colors, fonts, typography, iconography, animation, effects, layouts, texture, drop shadows, gradients. Uses relevant and appropriately sized images/placeholders.
- Interactivity: Utilizes modern, interactive iconography, images, UI components (buttons, text fields, animation, effects, gestures, sliders, carousels, navigation) with "glow" effects.
- Accessibility (A11Y): Implements features to empower all users.

## Plan for Current Change
**Objective**: Create the `blueprint.md` file to document the project's capabilities and serve as a reference for future changes.

**Steps**:
1. Read the `GEMINI.md` file to understand the AI's operational guidelines and capabilities.
2. Structure the `blueprint.md` file with an overview, detailed features/design, and a plan for the current change.
3. Populate the `blueprint.md` file with information extracted from `GEMINI.md`.
4. Save the `blueprint.md` file to the project's root directory.