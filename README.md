# Plantitude - Premium Potted Plants E-Commerce

A modern, responsive e-commerce website for premium potted plants featuring advanced web performance optimizations and accessibility-first design.

## 🌿 Live Demo

[View Live Site](#) <!-- Add your deployed URL here -->

## 📋 Project Overview

Plantitude is a potted plant e-commerce platform that showcases modern web development techniques including:

- Responsive design with fluid typography using `clamp()`
- Lazy loading for images and maps
- Scroll-driven animations with IntersectionObserver
- Accessibility-first approach with `prefers-reduced-motion` support
- Slide-in order form with smooth animations
- Mobile-first design with hamburger menu

## 🛠️ Tech Stack

- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Modern CSS with custom properties, Grid, Flexbox
- **JavaScript (ES6+)** - Vanilla JS with IntersectionObserver API
- **Font Awesome** - Icon library for UI elements
- **Google Maps Embed API** - Store location integration

## ✨ Key Features

### Performance Optimizations
- **Lazy Loading**: Images and maps load only when approaching viewport
- **Responsive Images**: `<picture>` elements with multiple image sources
- **Fluid Typography**: CSS `clamp()` for scalable text across devices
- **Efficient Animations**: Hardware-accelerated CSS transforms

### User Experience
- **Slide-in Order Form**: Smooth right-to-left animation for product orders
- **Scroll Animations**: Fade-in, slide-up, and slide-left/right effects
- **Mobile Navigation**: Animated hamburger menu with backdrop blur
- **Smooth Scrolling**: Native CSS scroll-behavior for anchor links

### Accessibility
- **Motion Preferences**: All animations respect `prefers-reduced-motion`
- **Keyboard Navigation**: Full keyboard support with ESC to close modals
- **Semantic HTML**: Proper heading hierarchy and ARIA labels
- **Focus Management**: Visible focus states for interactive elements

### Design Features
- **Frosted Glass Navigation**: Backdrop blur effect with transparency
- **Product Cards**: Hover effects with elevation and shadow
- **CTA Animations**: Icon slide-in on button hover
- **Skeleton Loaders**: Loading states for lazy-loaded images

## 📁 Project Structure

```
plantitude/
├── index.html              # Redirects to products.html
├── products.html           # Main products page with hero section
├── about.html             # About us and store location
├── style.css              # All styles with CSS custom properties
├── script.js              # JavaScript functionality
└── images/                # Product and hero images
    ├── hero_lg.jpeg       # Desktop hero image
    ├── hero_sm.jpeg       # Mobile hero image
    ├── about_plants.jpg   # About section image
    └── [product images]   # Product catalog images
```

## 🚀 Local Development

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd plantitude
   ```

2. **Option 1: Using Python's built-in server**
   ```bash
   # Python 3
   python -m http.server 8000

   # Then open: http://localhost:8000
   ```

3. **Option 2: Using Node.js live-server**
   ```bash
   npx live-server
   ```

4. **Option 3: Using VS Code Live Server extension**
   - Install "Live Server" extension
   - Right-click on `products.html`
   - Select "Open with Live Server"

5. **Option 4: Direct file opening**
   - Simply open `products.html` in your browser
   - Note: Some features may not work without a server

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 column grid)
- **Tablet**: 640px - 1024px (2 column grid)
- **Desktop**: > 1024px (4 column grid, desktop navigation)


**Plantitude** - Beauty of Nature · Joy of Potted Plants 🌱
