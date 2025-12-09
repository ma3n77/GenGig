# Gengig Design System

## Overview
This document outlines the modernized design system implemented for the Gengig platform, focusing on accessibility, consistency, and modern web standards. The design system is built around Gengig's core brand colors and emphasizes safety, innovation, and youth empowerment.

## Brand Identity

### Logo
- **Primary Logo**: `gen_logo.png` - Used in navigation and footer
- **Usage**: Always maintain proper spacing and contrast
- **Minimum Size**: 32px width for digital applications

### Brand Colors
The design system uses CSS custom properties for consistent theming based on Gengig's official brand palette:

#### Core Brand Colors
- **Primary Navy**: `#013A63` (`--color-brand-900`) - Main brand color, used for primary actions and headers
- **Warm Orange**: `#FFC085` (`--color-accent-500`) - Accent color for highlights and call-to-actions
- **Light Purple**: `#B2B2D2` (`--color-secondary-500`) - Secondary color for subtle elements

#### Extended Palettes
- **Brand Colors**: Navy blue palette (`--color-brand-*`) - 50 to 900 scale
- **Accent Colors**: Orange palette (`--color-accent-*`) - 50 to 900 scale
- **Secondary Colors**: Purple-gray palette (`--color-secondary-*`) - 50 to 900 scale
- **Neutral Colors**: Gray palette (`--color-neutral-*`) - For text and backgrounds
- **Semantic Colors**: Success, Warning, Error palettes - For system feedback

#### Color Usage Guidelines
- **Primary Actions**: Use `--color-brand-900` for buttons, links, and key interactive elements
- **Accents & Highlights**: Use `--color-accent-500` for call-to-action elements and important highlights
- **Secondary Elements**: Use `--color-secondary-500` for subtle backgrounds and secondary information
- **Text**: Use neutral grays with sufficient contrast ratios for accessibility

#### Implementation
Colors are implemented as CSS custom properties in `globals.css` and can be accessed via:
```css
background-color: var(--color-brand-900);
color: var(--color-accent-500);
border-color: var(--color-secondary-300);
```

### Typography
- **Primary Font**: Inter (system font fallback)
- **Secondary Font**: Plus Jakarta Sans
- **Font Sizes**: Responsive scale from `--font-size-xs` to `--font-size-5xl`

### Spacing
Consistent spacing scale using CSS custom properties:
- `--spacing-xs` (0.25rem) to `--spacing-3xl` (4rem)

## Components

### Buttons
Modern button system with multiple variants:

```jsx
// Primary button
<button className="btn btn-primary btn-md">Primary</button>

// Secondary button
<button className="btn btn-secondary btn-md">Secondary</button>

// Outline button
<button className="btn btn-outline btn-md">Outline</button>

// Ghost button
<button className="btn btn-ghost btn-md">Ghost</button>

// Gradient button
<button className="btn btn-gradient btn-md">Gradient</button>
```

#### Button Sizes
- `btn-sm`: Small buttons
- `btn-md`: Medium buttons (default)
- `btn-lg`: Large buttons
- `btn-xl`: Extra large buttons

### Forms
Enhanced form components with better UX:

```jsx
<div className="form-group">
  <label className="form-label">Email</label>
  <input className="input-field" type="email" />
  <p className="form-help">We'll never share your email</p>
</div>
```

### Cards
Flexible card system with hover effects:

```jsx
<div className="card">Content</div>
<div className="card-hover">Hover effect</div>
<div className="card-interactive">Interactive card</div>
```

## Navbar Component

### Features
- **Responsive Design**: Mobile-first approach with hamburger menu
- **Accessibility**: ARIA labels, keyboard navigation, focus management
- **Smooth Animations**: Backdrop blur, scroll effects, transitions
- **Modern Styling**: Glass morphism, gradient logo, hover effects

### Usage
```jsx
import Navbar from '../components/Navbar'

export default function Layout() {
  return (
    <div>
      <Navbar />
      {/* Your content */}
    </div>
  )
}
```

## Animations & Interactions

### CSS Classes
- `animate-fade-in`: Fade in animation
- `animate-slide-up`: Slide up animation
- `animate-scale-in`: Scale in animation
- `hover-lift`: Lift effect on hover
- `hover-glow`: Glow effect on hover

### Micro-interactions
- Button hover states with smooth transitions
- Card hover effects with subtle transforms
- Navbar scroll effects with backdrop blur
- Loading states with shimmer effects

## Accessibility Features

### Focus Management
- Custom focus-visible styles
- Proper focus indicators for all interactive elements
- Keyboard navigation support

### Color Contrast
- WCAG AA compliant color combinations
- High contrast focus states
- Semantic color usage

### Screen Readers
- Proper ARIA labels and roles
- Semantic HTML structure
- Screen reader friendly animations

## Responsive Design

### Breakpoints
Following Tailwind CSS breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Mobile-First Approach
All components are designed mobile-first with progressive enhancement for larger screens.

## Performance Optimizations

### Font Loading
- `font-display: swap` for better loading performance
- System font fallbacks
- Preloaded critical fonts

### CSS Optimizations
- CSS custom properties for theming
- Efficient animations using transform and opacity
- Minimal repaints and reflows

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement for older browsers
- Graceful degradation of advanced features

## Future Enhancements
- Dark mode support
- Additional component variants
- Animation library integration
- Advanced accessibility features
