# NUU Cognition Design System
## Version 2.0 - Clarity Through Simplicity

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [Motion & Interaction](#motion--interaction)
7. [Brand Voice](#brand-voice)
8. [Implementation Guidelines](#implementation-guidelines)

---

## Design Philosophy

### Core Principles

**1. Clarity Above All**
- Every element serves a purpose
- No decorative distractions
- Information hierarchy through weight and spacing

**2. Confident Minimalism**
- Strong presence without being loud
- Black and white with purposeful grays
- Bold enough to be memorable, subtle enough to be timeless

**3. Thoughtful Interaction**
- Smooth, considered transitions
- Clear feedback on user actions
- Accessibility built-in, not added on

### Design Values

- **Clear**: Immediate understanding
- **Clean**: No visual clutter
- **Sharp**: Precise execution
- **Calm**: Promotes focused thinking

---

## Color System

### Primary Palette

```css
/* Core Colors */
--pure-white: #FFFFFF;      /* Background */
--pure-black: #0D0D0D;      /* Primary text (5% gray) */
--soft-gray: #F8F8F8;       /* Secondary backgrounds (97% white) */
--medium-gray: #4D4D4D;     /* Secondary text (30% black) */
--light-gray: #CCCCCC;      /* Borders (80% white) */
```

### Semantic Colors

```css
/* Background */
--background: 0 0% 100%;           /* Pure white */
--foreground: 0 0% 5%;            /* Almost black */

/* Interactive Elements */
--primary: 0 0% 5%;               /* Black for primary actions */
--primary-foreground: 0 0% 100%; /* White on black */

/* Supporting Colors */
--secondary: 0 0% 97%;            /* Very light gray */
--secondary-foreground: 0 0% 5%; /* Black on light gray */

/* Text Hierarchy */
--muted: 0 0% 97%;
--muted-foreground: 0 0% 30%;    /* Readable gray for secondary text */

/* UI Elements */
--border: 0 0% 80%;              /* Soft borders */
--ring: 0 0% 20%;                /* Focus rings */
```

### Usage Guidelines

1. **Primary Text**: Always pure black (#0D0D0D) on white
2. **Secondary Text**: 70% opacity for less important information
3. **Borders**: Light gray (#CCCCCC) at 20-50% opacity
4. **Backgrounds**: White with occasional soft gray (#F8F8F8) for subtle separation
5. **Interactive States**: Black/white inversion on hover

---

## Typography

### Font Stack

```css
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

### Type Scale

```css
/* Headings */
h1: 4rem (64px) - 6rem (96px)    /* Hero headlines */
h2: 2rem (32px) - 3rem (48px)    /* Page titles */
h3: 1.5rem (24px)                 /* Section headers */
h4: 1.125rem (18px)               /* Subsection headers */

/* Body Text */
body: 1rem (16px)                 /* Base size */
small: 0.875rem (14px)            /* Secondary text */
caption: 0.75rem (12px)           /* Minimal text */
```

### Font Weights

- **Regular (400)**: Body text, secondary information
- **Medium (500)**: Navigation, buttons, emphasis
- **Semibold (600)**: Headings, important elements
- **Bold (700)**: Rarely used, only for extreme emphasis

### Text Styling

```css
/* Consistent tracking */
letter-spacing: -0.01em;          /* Tighter for headings */
line-height: 1.5;                 /* Body text */
line-height: 1.2;                 /* Headings */

/* Always capitalize NUU */
NUU Cognition (not Nuu or nuu)
NUU Surf, NUU Echo, etc.
```

---

## Spacing & Layout

### Spacing Scale

```css
/* Base unit: 4px */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-32: 8rem;     /* 128px */
```

### Layout Principles

1. **Maximum Content Width**: 1152px (72rem)
2. **Reading Width**: 640px (40rem) for text-heavy content
3. **Padding**: Minimum 24px on mobile, 48px on desktop
4. **Vertical Rhythm**: Consistent spacing between sections

### Grid System

- **Desktop**: 12-column grid with 24px gutters
- **Tablet**: 8-column grid with 16px gutters
- **Mobile**: 4-column grid with 16px gutters

---

## Components

### Buttons

#### Primary Button
```css
/* Filled button for primary actions */
background: black;
color: white;
padding: 10px 24px;          /* px-6 py-2.5 */
border-radius: 9999px;        /* Fully rounded */
font-weight: 500;
font-size: 14px;
transition: all 200ms ease;
box-shadow: 0 1px 2px rgba(0,0,0,0.05); /* shadow-sm */

/* Hover */
background: transparent;
color: black;
border: 1px solid rgba(0,0,0,0.7);
transform: scale(1.05);
box-shadow: 0 4px 6px rgba(0,0,0,0.1); /* shadow-md */
```

#### Secondary Button
```css
/* Outlined button for secondary actions */
background: transparent;
color: black;
border: 1px solid rgba(0,0,0,0.7);  /* border-black/70 */
padding: 10px 24px;                  /* px-6 py-2.5 */
border-radius: 9999px;
font-weight: 500;
font-size: 14px;
transition: all 200ms ease;

/* Hover */
background: black;
color: white;
transform: scale(1.05);
```

### Navigation

```css
/* Absolute positioned navigation */
position: absolute;
top: 0;
left: 0;
right: 0;
z-index: 50;

/* Navigation items */
font-size: 14px;              /* text-sm */
font-weight: 500;              /* font-medium */
color: rgba(0,0,0,0.5);       /* text-foreground/50 */
transition: all 200ms ease;

/* Active/Hover state */
color: black;                  /* text-foreground */

/* External links */
display: flex;
align-items: center;
gap: 4px;                     /* gap-1 */
/* Include small external link icon */
```

### Cards & Containers

```css
/* Minimal containers */
background: white;
border: 1px solid rgba(0,0,0,0.1);
border-radius: 4px;           /* Subtle radius */
padding: 24px;

/* No shadows by default */
/* Use borders for separation */
```

### Forms

```css
/* Input fields */
border: 1px solid rgba(0,0,0,0.2);
border-radius: 4px;
padding: 8px 12px;
font-size: 14px;
transition: border-color 200ms ease;

/* Focus state */
border-color: black;
outline: none;
```

---

## Motion & Interaction

### Transition Timing

```css
/* Standard transitions */
--transition-fast: 150ms ease;
--transition-normal: 200ms ease;
--transition-slow: 300ms ease;

/* Easing functions */
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.45, 0, 0.55, 1);
```

### Hover States

1. **Links**: Opacity change or underline appearance
2. **Buttons**: Background/color inversion + scale(1.05) transform
3. **Cards**: Subtle border darkening
4. **Navigation**: Opacity 50% → 100%
5. **Interactive Elements**: Subtle scale transforms for enhanced feedback

### Focus States

```css
/* Keyboard navigation */
outline: none;
box-shadow: 0 0 0 2px white, 0 0 0 4px black;
```

---

## Brand Voice

### Visual Communication

- **Confident**: Strong type hierarchy
- **Intelligent**: Clean, considered layouts
- **Approachable**: Rounded buttons, smooth transitions
- **Professional**: Consistent spacing and alignment

### Content Principles

1. **Clear Headlines**: Direct, no jargon
2. **Concise Copy**: Every word earns its place
3. **Active Voice**: "We build" not "Tools are built by us"
4. **Human Scale**: Relatable without being casual

### Tagline Philosophy

**Current**: "Software to augment your mind"
- Focuses on enhancement, not replacement
- "Augment" suggests partnership between human and technology
- Clear value proposition without technical jargon
- Avoids overused terms while remaining accessible

---

## Implementation Guidelines

### CSS Architecture

```css
/* Use CSS custom properties for consistency */
:root {
  /* Colors */
  --color-background: #FFFFFF;
  --color-foreground: #0D0D0D;
  
  /* Spacing */
  --spacing-unit: 4px;
  
  /* Typography */
  --font-sans: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  
  /* Borders */
  --border-radius: 4px;
  --border-radius-full: 9999px;
}
```

### Component Structure

```tsx
/* Consistent component patterns */
<Component
  className={cn(
    "base-styles",
    variant && "variant-styles",
    className
  )}
>
  {children}
</Component>
```

### Responsive Design

```css
/* Mobile-first approach */
/* Base styles for mobile */
.component {
  padding: 16px;
}

/* Tablet and up */
@media (min-width: 768px) {
  .component {
    padding: 24px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .component {
    padding: 32px;
  }
}
```

### Accessibility

1. **Color Contrast**: Minimum 4.5:1 for body text
2. **Focus Indicators**: Always visible for keyboard users
3. **Touch Targets**: Minimum 44x44px
4. **Semantic HTML**: Proper heading hierarchy
5. **ARIA Labels**: Where semantic HTML isn't sufficient

### Performance

1. **System Fonts**: No external font loading
2. **Minimal CSS**: Under 50KB total
3. **No Unnecessary JavaScript**: CSS-only where possible
4. **Optimized Images**: WebP with fallbacks
5. **Lazy Loading**: For below-fold content

---

## Version History

- **v2.1** (Current) - Enhanced interactions and refined messaging
  - Updated button hover states with scale transforms
  - Revised primary button to invert on hover
  - New tagline: "Software to augment your mind"
  - Added external link indicators to navigation
  - Reduced button padding for more compact appearance
- **v2.0** - Clarity Through Simplicity redesign
- **v1.0** - Initial design with blue accents and custom fonts

---

This design system prioritizes clarity of thought through clarity of design. Every decision supports the goal of creating tools that enhance human cognition without adding cognitive load through the interface itself.