# Plantitude - Urban Plant Boutique Website

**Team Stack – where ideas take root in design**

A cutting-edge, responsive e-commerce website for Plantitude, a local urban plant boutique specializing in indoor plants, eco-friendly pots, and community workshops.

---

## 📋 Project Overview

**Client**: Plantitude - Local urban plant boutique  
**Goal**: Increase online product sales through an engaging, modern shopping experience  
**Primary CTA**: "Discover Your Perfect Plant"

Plantitude's mission is to bring calm, sustainability, and a sense of connection to city living through plants and mindful design. This website reflects that calming, eco-friendly brand identity while making it easy for customers to explore, discover, and purchase products directly.

---

## 🎯 Business Objective

The main objective is to **increase online product sales** by creating an engaging, sales-driven e-commerce experience that:
- Showcases premium indoor plants with high-quality imagery
- Provides seamless product discovery and ordering
- Reflects the brand's calming, sustainable values
- Drives conversions through clear CTAs and intuitive UX

---

## ✨ Cutting-Edge Features

### Responsive Web Design (RWD)
- **Fluid, organic product grid** inspired by natural plant patterns
- Adapts seamlessly across mobile, tablet, and desktop
- Uses CSS Grid and Flexbox for flexible layouts
- Implements Container Queries for truly modular components

### Advanced Animations
- **SVG vine animations** that "grow" as users scroll
- **Leaves unfurl** when entering viewport using IntersectionObserver
- Smooth, organic motions enhance the calm brand feel
- All animations respect `prefers-reduced-motion`

### Performance & Accessibility
- Lazy-loading for images and maps
- Scroll-driven animations with IntersectionObserver
- Keyboard navigation support
- WCAG accessibility standards
- Frosted glass sticky navigation
- Hamburger to X menu animation

---

## 🛠️ Tech Stack

- **HTML5** - Semantic, accessible markup
- **CSS3** - Modern CSS with:
  - Custom Properties (Design Tokens)
  - CSS Grid & Flexbox
  - Container Queries
  - `clamp()` for fluid typography/spacing
- **JavaScript (ES6+)** - Vanilla JS with:
  - IntersectionObserver API
  - ES6 modules pattern
  - No framework dependencies
- **SVG** - Inline SVG for animated decorations

---

## 🚀 Live Demo

[View Live Site](#) <!-- Add your live URL here -->

---

## 💻 Local Development

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (recommended)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd plantitude
   ```

2. **Using VS Code Live Server** (Recommended)
   - Install "Live Server" extension
   - Right-click on `products.html`
   - Select "Open with Live Server"

3. **Direct file opening**
   - Simply open `products.html` in your browser
   - Note: Some features may not work without a server

### File Structure
```
plantitude/
├── products.html       # Main products page
├── about.html          # About us page
├── style.css          # Main stylesheet with design tokens
├── script.js          # JavaScript functionality
├── README.md          # This file
├── STYLEGUIDE.md      # Design tokens & component docs
└── images/            # Image assets
```

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 column grid, hamburger menu)
- **Tablet**: 640px - 1024px (2 column grid)
- **Desktop**: > 1024px (4 column grid, full navigation)

---

## 🎨 Key Design Features

### Design Tokens (CSS Custom Properties)
All colors, spacing, typography, and other design values are centralized as CSS variables in `:root` for easy maintenance. See `STYLEGUIDE.md` for complete reference.

### Component Architecture
- Modular, reusable components
- Container Query support for context-aware styling
- Consistent spacing scale with `clamp()`
- Accessibility-first approach

---

## 👥 Team

**Team Stack**
- Jeffrey Omonibo - Dev A (Structure & RWD)
- Sanjyot Gargelwar - Dev B (Animation & Interaction)
- Jing Huang - Dev C (UX, Docs & QA)

---

## 📄 Documentation

- **STYLEGUIDE.md** - Complete design token reference and component documentation
- Inline code comments throughout
- Semantic HTML with ARIA labels where needed

---

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels for interactive elements
- Keyboard navigation support
- `prefers-reduced-motion` media query support
- Sufficient color contrast ratios
- Focus states for all interactive elements

---

## 🧪 Browser Testing

Tested and verified on:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

---

## 📝 License

© 2025 Plantitude. All rights reserved.

---

**Plantitude** - Beauty of Nature · Joy of Potted Plants 🌱
