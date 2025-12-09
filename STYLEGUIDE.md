# Plantitude Design System & Style Guide

**Team Stack – where ideas take root in design**

This document serves as the **Single Source of Truth** for all design tokens (CSS Custom Properties), component patterns, and code snippets used in the Plantitude project.

---

## 📋 Table of Contents

1. [Design Tokens](#design-tokens)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing Scale](#spacing-scale)
5. [Component Library](#component-library)
6. [Animation Guidelines](#animation-guidelines)
7. [Accessibility](#accessibility)

---

## 🎨 Design Tokens

All design tokens are defined as CSS Custom Properties in `:root` for global access and easy maintenance.

### Complete Token Reference

```css
:root {
  /* Brand Colors */
  --color-primary: #10652F;
  --color-primary-dark: #14532d;
  --color-primary-light: #15803d;
  --color-accent: #4ade80;
  
  /* Neutral Colors */
  --color-bg-main: #f9fafb;
  --color-bg-card: #ffffff;
  --color-text-primary: #1f2937;
  --color-text-secondary: #4b5563;
  --color-text-light: #d1d5db;
  --color-border: #e5e7eb;
  
  /* Typography Scale */
  --font-family-base: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-size-hero: clamp(2.25rem, 4vw, 3rem);
  --font-size-h1: clamp(1.75rem, 3.5vw, 2.5rem);
  --font-size-h2: clamp(1.25rem, 2.5vw, 1.5rem);
  --font-size-h3: clamp(1.1rem, 2vw, 1.25rem);
  --font-size-base: clamp(1rem, 2vw, 1.25rem);
  --font-size-small: clamp(0.875rem, 1.5vw, 1rem);
  
  /* Spacing Scale */
  --spacing-xs: clamp(0.5rem, 1vw, 0.75rem);
  --spacing-sm: clamp(1rem, 2vw, 1.5rem);
  --spacing-md: clamp(1.5rem, 3vw, 2rem);
  --spacing-lg: clamp(2.5rem, 6vw, 4rem);
  --spacing-xl: clamp(3rem, 8vw, 5rem);
  
  /* Layout */
  --container-max-width: 1200px;
  --container-padding: clamp(1rem, 3vw, 2.5rem);
  --grid-gap: clamp(1rem, 3vw, 2rem);
  
  /* Borders & Shadows */
  --border-radius-sm: 8px;
  --border-radius-md: 12px;
  --border-radius-lg: 16px;
  --border-radius-full: 9999px;
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;
  
  /* Z-index Scale */
  --z-base: 1;
  --z-nav: 50;
  --z-overlay: 100;
  --z-modal: 200;
}
```

---

## 🎨 Color System

### Primary Brand Colors

**Forest Green** - Represents nature, growth, and sustainability
- Primary: `#10652F`
- Dark: `#14532d`
- Light: `#15803d`
- Accent: `#4ade80`

**Usage:**
- Primary buttons and CTAs
- Link colors
- Brand elements
- Active states

### Neutral Colors

**Backgrounds:**
- Main: `#f9fafb` - Page background
- Card: `#ffffff` - Product cards, modals

**Text:**
- Primary: `#1f2937` - Main content
- Secondary: `#4b5563` - Supporting text
- Light: `#d1d5db` - Muted text, footer

---

## 📐 Typography

### Font Family
```css
font-family: var(--font-family-base);
/* "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif */
```

### Fluid Type Scale

All font sizes use `clamp()` for fluid, responsive typography:

```css
/* Hero Section */
font-size: var(--font-size-hero);  /* 36px - 48px */

/* Headings */
font-size: var(--font-size-h1);    /* 28px - 40px */
font-size: var(--font-size-h2);    /* 20px - 24px */
font-size: var(--font-size-h3);    /* 17.6px - 20px */

/* Body */
font-size: var(--font-size-base);  /* 16px - 20px */
font-size: var(--font-size-small); /* 14px - 16px */
```

### Font Weights
- Normal: `400` - Body text
- Medium: `500` - Buttons, navigation
- Bold: `700` - Headings

---

## 📏 Spacing Scale

Consistent spacing using fluid values:

```css
/* Extra Small */ var(--spacing-xs)  /* 8px - 12px */
/* Small */       var(--spacing-sm)  /* 16px - 24px */
/* Medium */      var(--spacing-md)  /* 24px - 32px */
/* Large */       var(--spacing-lg)  /* 40px - 64px */
/* Extra Large */ var(--spacing-xl)  /* 48px - 80px */
```

**Usage Examples:**
```css
/* Section padding */
padding: var(--spacing-lg) 0;

/* Card padding */
padding: var(--spacing-sm);

/* Grid gap */
gap: var(--grid-gap);
```

---

## 🧩 Component Library

### Navigation Bar

**Features:**
- Frosted glass effect with `backdrop-filter: blur(10px)`
- Sticky positioning
- Responsive hamburger menu
- Smooth transitions

```html
<header>
  <div class="nav-container container">
    <a href="products.html" class="logo">
      <i class="fa-solid fa-leaf"></i>
      <h1>Plantitude</h1>
    </a>
    <nav class="desktop-nav">
      <a href="#products" class="nav-link">Products</a>
      <a href="about.html" class="nav-link">About Us</a>
    </nav>
    <button id="menuBtn" class="menu-btn">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</header>
```

### Product Card

**Features:**
- Container query support
- Lazy-loaded images
- Hover animations
- Responsive layout

```html
<div class="product-card scroll-animate">
  <picture>
    <source media="(min-width: 768px)" data-srcset="images/plant-large.jpg">
    <img data-src="images/plant-small.jpg" alt="Plant Name" class="product-img lazy-load">
  </picture>
  <div class="product-info">
    <h3>Product Name</h3>
    <p>Description text</p>
    <div class="product-footer">
      <span class="product-price">$35</span>
      <button class="add-cart-btn">Order Now</button>
    </div>
  </div>
</div>
```

### CTA Button

**Features:**
- Icon slide-in on hover
- Rounded full style
- Accessible focus states

```html
<a href="#products" class="cta-btn">Discover Your Perfect Plant</a>
```

```css
.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  background-color: var(--color-primary);
  color: #ffffff;
  border-radius: var(--border-radius-full);
  text-decoration: none;
  font-weight: 500;
}
```

### SVG Vine Decoration

**Features:**
- Scroll-triggered growth animation
- Unfurling leaf effects
- Responsive positioning

```html
<svg class="vine-decoration vine-left" viewBox="0 0 200 600">
  <path class="vine-path" d="M 50 0 Q 80 100 60 200..." 
        stroke="url(#vineGradient)" stroke-width="3" fill="none" />
  <g class="leaf" data-delay="0.2">
    <ellipse cx="80" cy="100" rx="15" ry="25" fill="#10652F" />
  </g>
</svg>
```

---

## 🎬 Animation Guidelines

### Performance Rules

1. **Only animate `transform` and `opacity`**
2. **Use `will-change` sparingly**
3. **Respect `prefers-reduced-motion`**

### Standard Pattern

```css
@media (prefers-reduced-motion: no-preference) {
  .element {
    transition: transform var(--transition-base), 
                opacity var(--transition-base);
  }
  
  .element:hover {
    transform: translateY(-5px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .element {
    /* Static or minimal animation */
  }
}
```

### Scroll Animations

Use IntersectionObserver for scroll-triggered animations:

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, { threshold: 0.1 });
```

---

## ♿ Accessibility

### Required Features

✅ **Semantic HTML** - Use proper heading hierarchy  
✅ **ARIA Labels** - Add to interactive elements  
✅ **Keyboard Navigation** - All interactive elements focusable  
✅ **Focus Indicators** - Visible focus states  
✅ **Color Contrast** - WCAG AA minimum (4.5:1 for text)  
✅ **Reduced Motion** - Respect user preferences  

### Reduced Motion Pattern

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Focus States

```css
.button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
/* Mobile:  Default (< 640px) */
/* Tablet:  640px */
/* Desktop: 1024px */

@media (min-width: 640px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
```

---

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Progressive Enhancement

- Container Queries (fallback to media queries)
- `backdrop-filter` (fallback to solid background)
- CSS Grid (with Flexbox fallback)

---

## 📝 Code Standards

### CSS Naming Convention

- **BEM-inspired** but simplified
- Descriptive class names
- Component-based organization

### File Organization

```
style.css structure:
1. Design Tokens (Custom Properties)
2. Global Base Styles
3. Layout Components (Header, Nav, Footer)
4. Page Sections (Hero, Products, About)
5. UI Components (Buttons, Cards, Forms)
6. Animations & Interactions
7. Responsive Media Queries
```

---

## 📚 Resources

- [MDN CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [CSS Tricks - clamp()](https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/)
- [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Last Updated**: December 9, 2025  
**Version**: 2.0.0  
**Maintained by**: Team Stack

For implementation questions, refer to [README.md](README.md) or the source code in `style.css` and `script.js`.
