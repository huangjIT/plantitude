# Plantitude Design System & Style Guide

This document serves as the **Single Source of Truth** for all design tokens, component patterns, and code snippets used in the Plantitude project.

## 🎨 Color Palette

### Primary Colors
```css
/* Green - Primary Brand Color */
--color-primary: #16a34a;
--color-primary-dark: #15803d;
--color-primary-darker: #14532d;

/* Backgrounds */
--color-bg-light: #f9fafb;
--color-bg-white: #ffffff;
--color-bg-green-light: #f0fdf4;
--color-bg-green-lighter: #dcfce7;
```

### Text Colors
```css
/* Text Hierarchy */
--color-text-primary: #1f2937;
--color-text-secondary: #4b5563;
--color-text-muted: #6b7280;
--color-text-light: #d1d5db;
```


## 📐 Typography

### Font Family
```css
--font-family-base: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Font Sizes (Fluid Typography)
```css
/* Headings */
--font-size-hero: clamp(2.25rem, 4vw, 3rem);        /* 36px - 48px */
--font-size-h1: clamp(1.75rem, 3.5vw, 2.5rem);     /* 28px - 40px */
--font-size-h2: clamp(1.25rem, 2.5vw, 1.5rem);     /* 20px - 24px */
--font-size-h3: clamp(1.1rem, 2vw, 1.25rem);       /* 17.6px - 20px */

/* Body Text */
--font-size-base: clamp(1rem, 2vw, 1.25rem);       /* 16px - 20px */
--font-size-small: 0.875rem;                        /* 14px */

/* UI Elements */
--font-size-logo: clamp(1rem, 2.5vw, 1.25rem);     /* 16px - 20px */
--font-size-logo-icon: clamp(1.25rem, 2vw, 1.5rem); /* 20px - 24px */
```

### Font Weights
```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Line Heights
```css
--line-height-tight: 1.2;
--line-height-normal: 1.5;
--line-height-relaxed: 1.6;
```

### Grid & Layout
```css
/* Grid Gaps */
--gap-sm: clamp(1rem, 3vw, 2rem);    /* Product grid */
--gap-md: 2rem;                       /* General spacing */
--gap-lg: 3rem;                       /* Section spacing */

/* Container */
--container-max-width: 1200px;
```

**Last Updated**: December 2025
**Version**: 1.0.0

For implementation questions, refer to [README.md](README.md) or the source code in `style.css` and `script.js`.
