# Large-Scale Accessible Software System

A "Task Manager" application engineered with an **Accessibility-First** methodology, demonstrating software engineering professionalism by ensuring the application is usable by people with diverse abilities, complying with **WCAG 2.1 Level AA** standards.

## Project Overview

In professional software development, accessibility cannot be an afterthought. This project was built from the ground up to support screen readers, keyboard-only navigation, and cognitive differences (high contrast).

### Key Objectives
- **Semantic Engineering**: Using proper HTML5 landmarks rather than `div` soup.
- **Inclusive Design**: "High Contrast Mode" built directly into the core architecture.
- **assistive Technology Support**: Full ARIA (Accessible Rich Internet Applications) integration.
- **Maintainability**: Modular CSS and JavaScript architecture.

---

## System Architecture

```
/accessible-task-manager
 ├── src/
 │   ├── css/              # Modular Styling
 │   │   ├── variables.css # Theming Engine
 │   │   └── main.css      # Core Layout
 │   ├── js/
 │   │   └── app.js        # Logic & State Management
 ├── docs/
 │   └── ACCESSIBILITY_AUDIT.md # WCAG Compliance Report
 └── index.html            # Semantic Entry Point
```

---

## Accessibility Features (The "Why")

### 1. High Contrast Engine
*   **Feature**: One-click toggle between "Standard" and "High Contrast" (Yellow on Black).
*   **Engineering**: Uses CSS Custom Properties (`var(--color-primary)`). Changing the theme attribute efficiently repaints the entire app without page reload.

### 2. Screen Reader Optimization
*   **Live Regions**: When a task is added/deleted, a hidden `aria-live="polite"` region text updates. Screen readers (NVDA/VoiceOver) announce "Task added" automatically.
*   **Semantic Forms**: Labels are explicitly bound to inputs via `for` attributes. Required fields are marked `aria-required="true"`.

### 3. Keyboard Efficiency
*   **Skip Links**: A hidden "Skip to Main Content" link appears on first tab, allowing users to bypass the header/navigation.
*   **Focus Management**: Custom `:focus-visible` styles ensure users always know where they are. JavaScript handles logic to prevent "Focus Loss" when deleting elements.

---

## Quick Start Guide

### Prerequisites
- Any modern web browser (Chrome, Firefox, Edge, Safari).
- No build step required (Vanilla JS/CSS).

### usage
1.  **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/accessible-task-manager.git
    ```
2.  **Run the App**
    Since this is a client-side app, you can just open `index.html` in your browser.
    ```bash
    # Or serve it locally
    npx serve accessible-task-manager
    ```

3.  **Test Accessibility**
    *   Press `Tab` repeatedly to navigate.
    *   Enable "High Contrast" via the toggle button.
    *   Use a screen reader (or Narrator on Windows: `Win + Ctrl + Enter`).

---

## Learning Context & Academic Alignment

This project demonstrates applied understanding of key software engineering concepts:

| Outcome | Implementation Evidence |
| :--- | :--- |
| **User Interface Design** | Clean, responsive UI with clear feedback states. |
| **Accessibility Compliance** | Full WCAG 2.1 AA adherence (verified in docs). |
| **Code Quality** | Separation of concerns (HTML structure vs CSS presentation vs JS logic). |
| **Professionalism** | Considering legal/ethical obligations of software access. |

**Related Concepts**:
*   Software engineering principles
*   Accessibility and usability
*   Web development standards

---

## License
MIT License.

**Author**: SAAD ARIF
**Year**: 2024
