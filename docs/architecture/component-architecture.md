# Component Architecture

## Overview

The NUU Cognition website follows a component-based architecture built on React 19 and Next.js 15's App Router. This document outlines the component structure, patterns, and best practices.

## Component Categories

### 1. Layout Components
Located in the root layouts, these provide the application shell.

```typescript
// src/app/layout.tsx
- RootLayout: Main application wrapper
- Includes: NavigationMinimal, FooterMinimal
- Server Component
```

### 2. UI Primitives
Base components from shadcn/ui pattern in `src/components/ui/`

```typescript
- button.tsx: Base button component with variants
- card.tsx: Container component
- separator.tsx: Visual divider
```

### 3. Feature Components
Higher-level components that compose UI primitives.

```typescript
// src/components/
- NavigationMinimal.tsx: Site navigation
- FooterMinimal.tsx: Site footer
```

## Component Patterns

### Variant System
Using class-variance-authority for type-safe variants:

```typescript
const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        default: "default-classes",
        secondary: "secondary-classes"
      },
      size: {
        default: "default-size",
        sm: "small-size"
      }
    }
  }
)
```

### Composition Pattern
Components accept className and compose with cn() utility:

```typescript
interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  // component specific props
}

export function Component({ className, ...props }: ComponentProps) {
  return (
    <div className={cn("base-styles", className)} {...props} />
  )
}
```

## Server vs Client Components

### Server Components (Default)
- Pages (page.tsx files)
- Layouts
- Static content components
- Data fetching components

### Client Components
- Interactive UI (buttons, menus)
- Browser API usage
- Event handlers
- State management

## Styling Architecture

### Tailwind CSS Strategy
1. Utility-first approach
2. Component-specific classes minimal
3. Consistent spacing scale
4. Design tokens via CSS variables

### CSS Variable System
```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 5%;
  --border: 0 0% 80%;
  /* ... more tokens */
}
```

## Component Development Guidelines

### 1. File Structure
```
components/
├── ui/           # Base UI components
├── features/     # Feature-specific components
├── layouts/      # Layout components
└── shared/       # Shared utilities
```

### 2. Naming Conventions
- PascalCase for component files
- Descriptive names (NavigationMinimal vs Nav)
- Co-locate related files

### 3. TypeScript Usage
- Props interfaces for all components
- Explicit return types
- No use of 'any'

### 4. Performance Considerations
- Use React.memo for expensive components
- Lazy load heavy components
- Optimize re-renders

## Future Component Needs

### Short-term
1. Form components (input, select, textarea)
2. Modal/Dialog system
3. Toast notifications
4. Loading states

### Medium-term
1. Data visualization components
2. Rich text editor
3. File upload
4. Search interface

### Long-term
1. Dashboard components
2. User profile components
3. Product-specific UI
4. Admin interfaces

## Component Library Evolution

### Phase 1: Foundation (Current)
- Basic UI primitives
- Simple layouts
- Static components

### Phase 2: Enhancement
- Complete shadcn/ui integration
- Storybook documentation
- Component tests

### Phase 3: Product Components
- Domain-specific components
- Complex interactions
- Performance optimizations

## Testing Strategy

### Unit Tests
```typescript
// Example test structure
describe('Button', () => {
  it('renders with correct variant', () => {
    // test implementation
  })
})
```

### Integration Tests
- Component composition
- User interactions
- Accessibility compliance

### Visual Regression
- Storybook snapshots
- Cross-browser testing
- Responsive design verification