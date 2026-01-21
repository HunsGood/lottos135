# Lotto v3 Project Blueprint

## 1. Project Overview

This project is an interactive web application with several features:
- **Lotto Number Generator:** Generates lottery numbers.
- **Fortune Telling:** A simple fortune-telling feature.
- **MBTI Test:** An interactive MBTI personality test.
- **Static Pages:** About, Contact, Privacy, and informational articles.

The goal is to modernize the application's design, improve user experience, fix existing bugs, and establish a clear development plan.

## 2. Style and Design Modernization

The current design will be overhauled to be more modern, intuitive, and visually appealing, following the guidelines in `GEMINI.md`.

### 2.1. Visual Identity
- **Color Palette:** Introduce a clean and modern color scheme. A primary color for interactive elements, a neutral background color, and accent colors will be defined.
- **Typography:** Utilize modern, readable web fonts. Font sizes and weights will be used to create a clear visual hierarchy (e.g., larger fonts for headings).
- **Layout:** Move from a legacy layout to a responsive design using Flexbox and CSS Grid. This will ensure the site looks great on all devices, from mobile phones to desktops.
- **UI Components:** Interactive elements like buttons and links will be restyled for a better user experience, including hover and focus states.
- **Visual Effects:** Subtle drop shadows and gradients will be used to add depth and a premium feel to the UI components.

### 2.2. Structure & Reusability
- **Shared Navigation:** A consistent navigation bar will be created and added to all pages. This will be a Web Component for easy reuse and maintenance.
- **CSS Refactor:** `style.css` will be completely rewritten to use modern CSS features like variables for colors and fonts, making future theme changes easier.

## 3. MBTI Quiz Functionality Fix

The MBTI quiz is currently not working. The plan to fix it is as follows:
1.  **Code Analysis:** Thoroughly review `mbti.js` to understand the quiz logic, how answers are tracked, and how the final result is calculated.
2.  **Bug Identification:** Pinpoint the exact cause of the error. This is likely an issue in the answer scoring logic or in the final step of matching the score to an MBTI type.
3.  **Logic Correction:** Rewrite the faulty logic to ensure answers are correctly scored and the corresponding MBTI result is displayed accurately.
4.  **Testing:** Verify the fix by mentally walking through the corrected logic with a sample test run.

## 4. Current Task: Site Refactor and MBTI Fix

This plan outlines the steps for the current user request.

1.  **[In Progress]** Create `blueprint.md` to outline the project plan.
2.  **[Pending]** Refactor and redesign the entire website for a modern look and feel.
    - Rewrite `style.css`.
    - Create a reusable navigation header as a Web Component in `main.js`.
    - Update all `.html` files to use the new styles and navigation header.
3.  **[Pending]** Fix the MBTI quiz functionality in `mbti.js`.
4.  **[Pending]** Commit all changes to the local git repository.
5.  **[Pending]** Instruct the user on how to push the changes and deploy.
