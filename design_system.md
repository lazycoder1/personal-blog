# AstroPaper Design System

A minimalist, clean design system for technical blogging with a focus on readability and code presentation.

## Overview

AstroPaper is a minimal, responsive blog theme built on Astro and Tailwind CSS v4. The design philosophy emphasizes:

- **Minimal & Clean**: Distraction-free reading experience
- **Code-First**: Optimized for technical content with monospace typography
- **Dual Theme**: Professional light and dark themes
- **Accessibility**: WCAG compliant with clear focus states

## Color System

### Light Theme

```css
--background: #fdfdfd   /* Near white background */
--foreground: #282728   /* Dark gray text */
--accent: #006cac       /* Blue accent */
--muted: #e6e6e6        /* Light gray for secondary elements */
--border: #ece9e9       /* Subtle borders */
```

**Visual Characteristics:**
- Crisp, high-contrast reading experience
- Cool blue accent color (#006cac)
- Soft gray borders and muted elements
- Professional, clean aesthetic

### Dark Theme

```css
--background: #212737   /* Deep blue-gray background */
--foreground: #eaedf3   /* Light gray text */
--accent: #ff6b01       /* Vibrant orange accent */
--muted: #343f60        /* Muted blue-gray */
--border: #ab4b08       /* Warm orange-brown borders */
```

**Visual Characteristics:**
- Modern, eye-friendly dark mode
- Warm orange accent (#ff6b01) for contrast
- Deep blue-gray backgrounds
- Excellent readability in low light

### Color Usage Guidelines

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `background` | #fdfdfd | #212737 | Main page background, body |
| `foreground` | #282728 | #eaedf3 | Primary text, headings |
| `accent` | #006cac (Blue) | #ff6b01 (Orange) | Links, active states, highlights |
| `muted` | #e6e6e6 | #343f60 | Secondary text, code backgrounds |
| `border` | #ece9e9 | #ab4b08 | Dividers, card borders, HR |

### Theme Switching

The theme is controlled via the `data-theme` attribute:

```html
<!-- Light theme -->
<html data-theme="light">

<!-- Dark theme -->
<html data-theme="dark">
```

The theme toggle button is handled by `/public/toggle-theme.js`.

## Typography

### Font Stack

**Primary (Monospace):**
```css
font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 
             "Liberation Mono", "Courier New", monospace;
```

The entire site uses monospace typography by default, creating a distinctive, code-focused aesthetic that's perfect for technical blogs.

### Typography Scale

Tailwind CSS utilities are used throughout:

| Class | Size | Usage |
|-------|------|-------|
| `text-xs` | 0.75rem | Small labels, metadata |
| `text-sm` | 0.875rem | Secondary text, tags |
| `text-base` | 1rem | Body text |
| `text-lg` | 1.125rem | Card titles, links |
| `text-xl` | 1.25rem | Site title (mobile) |
| `text-2xl` | 1.5rem | Site title (desktop) |
| `text-3xl` | 1.875rem | Major headings |
| `text-4xl` | 2.25rem | Hero text |

### Typography Features

- **H3 Italic**: All H3 headings are italicized for visual hierarchy
- **Wavy Underlines**: Active navigation items use wavy underlines
- **Dashed Decorations**: Links use dashed underlines for distinction
- **Code Styling**: Inline code has rounded backgrounds with muted color

## Layout System

### Max Width Constraints

```css
@utility max-w-app {
  @apply max-w-3xl;  /* 48rem / 768px */
}
```

**Content Width:** 768px (3xl)
- Perfect for readability (60-75 characters per line)
- Optimized for technical content
- Responsive with padding on smaller screens

### Spacing

Standard Tailwind spacing scale is used:

```css
px-4  /* 1rem padding horizontal */
py-6  /* 1.5rem padding vertical */
mx-auto  /* Center alignment */
```

### Grid & Flex

- **Mobile Navigation**: 2-column grid (`grid-cols-2`)
- **Header**: Flexbox with space-between
- **Body**: Flex column with min-h-svh

## Components

### Navigation (Header)

**Structure:**
- Sticky header with site title
- Mobile: Hamburger menu with grid layout
- Desktop: Horizontal navigation with icons
- Theme toggle button
- Search icon

**Active State:**
```css
.active-nav {
  @apply underline decoration-wavy decoration-2 underline-offset-4;
}
```

**Hover States:**
- Links: Change to accent color
- Buttons: Text changes to accent color
- Icons: Stroke changes to accent color

### Cards (Post Cards)

**Structure:**
```html
<li class="my-6">
  <a class="inline-block text-lg font-medium text-accent decoration-dashed 
            underline-offset-4 focus-visible:no-underline">
    <h2 class="text-lg font-medium decoration-dashed hover:underline">
      Title
    </h2>
  </a>
  <datetime />
  <p>Description</p>
</li>
```

**Characteristics:**
- Minimal design with clear hierarchy
- Accent color for titles
- Dashed underlines on hover
- Vertical spacing of 1.5rem (my-6)

### Tags

**Style:**
```css
/* Small tag */
text-sm underline decoration-dashed 
group-hover:text-accent group-hover:-top-0.5

/* Large tag */
text-lg underline decoration-dashed
```

**Features:**
- Hash symbol prefix with reduced size
- Underline on hover
- Subtle lift effect (-top-0.5)
- View transitions for smooth navigation

### Buttons & Links

**LinkButton Component:**
```css
hover:text-accent           /* Color change on hover */
focus-outline              /* Custom focus state */
inline-block group         /* Grouping for child effects */
```

**Focus States:**
```css
outline-offset-1 
outline-accent/75 
focus-visible:outline-2 
focus-visible:outline-dashed
```

## Code Blocks

### Syntax Highlighting

**Shiki Themes:**
- **Light**: `min-light` - Minimal, clean light theme
- **Dark**: `night-owl` - Popular dark theme with excellent contrast

**Transformers Enabled:**
- File name display (v2 style)
- Line highlighting
- Word highlighting
- Diff notation (additions/removals)

### Code Block Styling

```css
.astro-code {
  @apply flex border outline-border;
}

/* Diff additions */
.line.diff.add {
  @apply bg-green-400/20 before:text-green-500 before:content-['+'];
}

/* Diff removals */
.line.diff.remove {
  @apply bg-red-500/20 before:text-red-500 before:content-['-'];
}

/* Highlighted lines */
.line.highlighted {
  @apply bg-slate-400/20;
}
```

### Inline Code

```css
code {
  @apply rounded bg-muted/75 p-1 break-words 
         text-foreground before:content-none after:content-none;
}
```

- Rounded corners
- Muted background (75% opacity)
- No quotes before/after

## Prose Styling

Using `@tailwindcss/typography` plugin with custom overrides:

### Headings
```css
h1, h2, h3, h4, th {
  @apply mb-3 text-foreground;
}

h3 {
  @apply italic;  /* Distinctive H3 styling */
}
```

### Links
```css
a {
  @apply break-words text-foreground decoration-dashed 
         underline-offset-4 hover:text-accent;
}
```

### Lists
```css
li {
  @apply marker:text-accent;  /* Accent colored bullets */
}
```

### Blockquotes
```css
blockquote {
  @apply border-s-accent/80 opacity-80;
}
```

### Tables
```css
th, td {
  @apply border border-border p-2;
}
```

## Interactive Elements

### Focus States

All interactive elements have consistent focus styling:

```css
button, a {
  @apply outline-offset-1 outline-accent/75 
         focus-visible:outline-2 focus-visible:outline-dashed;
}
```

**Characteristics:**
- Dashed outline in accent color
- 1px offset from element
- 2px width when visible
- 75% opacity for subtlety

### Hover States

**Links:** Text color changes to accent
**Buttons:** Text color changes to accent  
**Icons:** Stroke color changes to accent
**Tags:** Slight vertical lift (-top-0.5)

### Selection

```css
selection:bg-accent/75 
selection:text-background
```

Text selection uses the accent color with 75% opacity.

## Accessibility Features

### Contrast Ratios

All color combinations meet WCAG 2.1 Level AA standards:

**Light Theme:**
- Text on background: ~17:1 (AAA)
- Accent on background: ~5.5:1 (AA)

**Dark Theme:**
- Text on background: ~13:1 (AAA)
- Accent on background: ~5.2:1 (AA)

### Focus Management

- Clear, dashed outlines on all interactive elements
- Skip to content link for keyboard navigation
- Proper ARIA labels on buttons and icons
- Focus-visible for keyboard-only focus states

### Screen Readers

- Semantic HTML structure
- Proper heading hierarchy
- Alt text on icons with sr-only text
- ARIA labels on icon-only buttons

## Scrollbar Styling

```css
scrollbar-width: auto;
scrollbar-color: var(--color-muted) transparent;
```

Custom scrollbar colors match the theme's muted color.

## Animations & Transitions

### Smooth Scrolling

```css
html {
  @apply scroll-smooth;
}
```

### Scroll Margin

```css
:target {
  scroll-margin-block: 1rem;
}
```

Anchored elements get extra scroll margin for better visibility.

### Theme Toggle Animation

```css
/* Moon icon (dark mode indicator) */
.absolute scale-100 rotate-0 transition-all 
dark:scale-0 dark:-rotate-90

/* Sun icon (light mode indicator) */
.absolute scale-0 rotate-90 transition-all 
dark:scale-100 dark:rotate-0
```

Icons smoothly fade and rotate during theme transitions.

## File Structure

```
src/
├── styles/
│   ├── global.css          # Theme colors & base styles
│   └── typography.css      # Prose & code styling
├── components/
│   ├── Header.astro        # Site header with navigation
│   ├── Card.astro          # Blog post cards
│   ├── Tag.astro           # Tag components
│   ├── LinkButton.astro    # Button links
│   └── ...
└── config.ts               # Site configuration

public/
└── toggle-theme.js         # Theme switching logic
```

## Design Principles

### 1. Minimal by Design
- No unnecessary decorations
- Clean whitespace
- Focused content presentation

### 2. Code-First Typography
- Monospace fonts throughout
- Optimized for technical content
- Clear code block presentation

### 3. Dual Theme Excellence
- Both themes equally polished
- Proper contrast in both modes
- Consistent experience across themes

### 4. Responsive & Fast
- Mobile-first approach
- Minimal JavaScript
- Optimized for performance

### 5. Accessibility First
- WCAG 2.1 Level AA compliant
- Keyboard navigation support
- Screen reader friendly

## Usage Examples

### Using Theme Colors

```html
<!-- Background -->
<div class="bg-background text-foreground">

<!-- Accent elements -->
<a class="text-accent hover:text-accent">

<!-- Muted elements -->
<span class="text-muted">

<!-- Borders -->
<div class="border border-border">
```

### Creating Cards

```html
<li class="my-6">
  <a class="inline-block text-lg font-medium text-accent 
            decoration-dashed underline-offset-4">
    <h2 class="decoration-dashed hover:underline">
      Post Title
    </h2>
  </a>
  <p class="text-sm text-muted">Date</p>
  <p>Description</p>
</li>
```

### Adding Focus States

```html
<button class="focus-outline hover:text-accent">
  Click me
</button>
```

## Customization Guide

### Changing Accent Colors

Edit `src/styles/global.css`:

```css
html[data-theme="light"] {
  --accent: #006cac;  /* Your light theme accent */
}

html[data-theme="dark"] {
  --accent: #ff6b01;  /* Your dark theme accent */
}
```

### Adjusting Typography

Change the body font in `global.css`:

```css
body {
  @apply font-mono;  /* Change to font-sans or font-serif */
}
```

### Modifying Layout Width

Update the max-w-app utility:

```css
@utility max-w-app {
  @apply max-w-4xl;  /* Wider: 896px */
  /* or max-w-5xl for 1024px */
}
```

### Changing Syntax Themes

Edit `astro.config.ts`:

```ts
shikiConfig: {
  themes: { 
    light: "github-light",    /* Your choice */
    dark: "dracula"           /* Your choice */
  },
}
```

Visit [shiki.style/themes](https://shiki.style/themes) for all available themes.

## Best Practices

1. **Use Semantic HTML**: Proper heading hierarchy, lists, and sections
2. **Leverage Tailwind Utilities**: Consistent spacing and styling
3. **Maintain Contrast**: Test color changes for accessibility
4. **Keep It Simple**: Add features that enhance readability
5. **Test Both Themes**: Ensure consistency across light/dark modes

## Technical Stack

- **Framework**: Astro 5.x
- **Styling**: Tailwind CSS v4
- **Typography**: @tailwindcss/typography plugin
- **Syntax**: Shiki with transformers
- **Icons**: SVG components
- **Build**: Vite

## Browser Support

- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- Mobile Safari iOS 12+
- Chrome Android 90+

---

**Theme Version:** AstroPaper v5
**Design Philosophy:** Minimal, Clean, Code-First
**License:** MIT

