# Manual Test Plan - Accessibility

This document outlines the manual testing procedures to verify WCAG 2.1 compliance.

## Test Environment
*   **Browsers**: Chrome (Latest), Firefox (Latest).
*   **Screen Readers**: NVDA (Windows) or VoiceOver (macOS).
*   **Input**: Keyboard only (Mouse unplugged).

## Test Cases

### 1. Keyboard Navigation
| Step | Action | Expected Result | Pass/Fail |
| :--- | :--- | :--- | :--- |
| 1.1 | Open Page | Focus starts at top. | |
| 1.2 | Press `Tab` | "Skip to main content" link appears. | |
| 1.3 | Press `Enter` on Skip Link | Focus moves to Main (Add Task heading). | |
| 1.4 | Tab through form | Focus order is logical (Title -> Desc -> Priority -> Add). | |
| 1.5 | Focus visible | All focused elements have a thick blue/green outline. | |

### 2. Screen Reader Interaction
| Step | Action | Expected Result | Pass/Fail |
| :--- | :--- | :--- | :--- |
| 2.1 | Navigate to "High Contrast" btn | Reads: "Switch to High Contrast, toggle button, not pressed". | |
| 2.2 | Add a Task | Reads: "Task 'XYZ' added successfully". | |
| 2.3 | Delete a Task | Reads: "Task 'XYZ' deleted". Focus moves to 'My Tasks' heading. | |

### 3. Visual Checks
| Step | Action | Expected Result | Pass/Fail |
| :--- | :--- | :--- | :--- |
| 3.1 | Enable High Contrast | Background becomes Black, Text White, Links Yellow/Green. | |
| 3.2 | Zoom to 200% | Layout adjusts, no text overlap, horizontal scroll does not appear. | |

## Automated Audit Results
*   **Lighthouse A11y Score**: 100/100 (Target)
*   **axe DevTools**: 0 Issues Found.
