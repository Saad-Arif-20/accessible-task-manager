# 🎯 Accessible Task Manager

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG-2.1%20AA-blue.svg)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Vanilla JS](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A production-ready task management application built with **accessibility-first** principles, ensuring usability for everyone including users with disabilities. Fully compliant with **WCAG 2.1 Level AA** standards.

## 🌟 Why This Project?

In modern web development, accessibility isn't optional—it's a legal requirement and moral imperative. This project demonstrates how to build inclusive applications from the ground up, not as an afterthought. **15% of the world's population** lives with some form of disability, making accessibility critical for reaching all users.

### Key Highlights
- ✅ **Zero Dependencies** - Pure HTML5, CSS3, and Vanilla JavaScript
- ♿ **Full WCAG 2.1 AA Compliance** - Verified accessibility standards
- ⌨️ **Keyboard-First Navigation** - Complete keyboard control without mouse
- 🎨 **High Contrast Mode** - Built-in theme for visual impairments
- 📢 **Screen Reader Optimized** - ARIA live regions and semantic HTML
- 🚀 **Instant Setup** - No build process, runs directly in browser

---

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/Saad-Arif-20/accessible-task-manager.git
cd accessible-task-manager

# Open in browser (no build required!)
open index.html

# Or serve locally
npx serve .
```

### Usage

1. **Add Tasks**: Click "Add Task" or press `Alt + N`
2. **Navigate**: Use `Tab` to move between elements
3. **Toggle Theme**: Click the contrast button or press `Alt + T`
4. **Screen Reader**: Works seamlessly with NVDA, JAWS, or VoiceOver

---

## 🏗️ Architecture

```
accessible-task-manager/
├── src/
│   ├── css/
│   │   ├── variables.css    # CSS Custom Properties (theming)
│   │   └── main.css         # Core styles
│   └── js/
│       └── app.js           # Application logic
├── docs/
│   └── ACCESSIBILITY_AUDIT.md
└── index.html               # Entry point
```

**Design Principles:**
- **Separation of Concerns**: HTML (structure), CSS (presentation), JS (behavior)
- **Progressive Enhancement**: Works without JavaScript, enhanced with it
- **Mobile-First**: Responsive design for all screen sizes

---

## ♿ Accessibility Features

### 1. **High Contrast Engine**
One-click toggle between standard and high-contrast themes using CSS Custom Properties. The entire UI repaints instantly without page reload.

```css
/* Theme switching via CSS variables */
[data-theme="high-contrast"] {
  --color-bg: #000;
  --color-text: #FFFF00;
}
```

### 2. **Screen Reader Support**
- **ARIA Live Regions**: Announces task additions/deletions automatically
- **Semantic HTML5**: Proper landmarks (`<main>`, `<nav>`, `<section>`)
- **Descriptive Labels**: All form inputs have explicit labels

### 3. **Keyboard Navigation**
- **Skip Links**: Jump directly to main content (`Tab` on page load)
- **Focus Management**: Visible focus indicators and logical tab order
- **Keyboard Shortcuts**: All actions accessible via keyboard

### 4. **Visual Accessibility**
- **Color Contrast**: Minimum 4.5:1 ratio for text
- **Focus Indicators**: Clear visual feedback for keyboard users
- **Scalable Text**: Supports browser zoom up to 200%

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Accessibility**: ARIA, WCAG 2.1 AA
- **Storage**: LocalStorage API
- **Testing**: Manual testing with NVDA, JAWS, VoiceOver

---

## 🎯 Use Cases

- **Developers**: Learn accessibility best practices
- **Businesses**: Template for accessible web applications
- **Educators**: Teaching material for inclusive design
- **Compliance**: Starting point for WCAG-compliant projects

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**Accessibility Guidelines**: All contributions must maintain WCAG 2.1 AA compliance.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Saad Arif**
- GitHub: [@Saad-Arif-20](https://github.com/Saad-Arif-20)
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn URL]

---

## 🙏 Acknowledgments

- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Web accessibility standards
- [MDN Web Docs](https://developer.mozilla.org/) - Comprehensive web development resources
- [WebAIM](https://webaim.org/) - Accessibility evaluation tools

---

**Built with ❤️ and accessibility in mind** | © 2025 Saad Arif
