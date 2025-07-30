# Development Workflow & Best Practices

## Current Development Setup

### Local Development
```bash
# Start development server
npm run dev

# Uses Turbopack for fast refresh
# Available at http://localhost:3000
```

### Available Scripts
- `npm run dev`: Start development server with Turbopack
- `npm run build`: Production build
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## Recommended Development Workflow

### 1. Git Workflow

#### Branch Strategy
```
main
├── staging
├── feature/add-blog
├── fix/navigation-bug
└── chore/update-deps
```

#### Branch Naming
- `feature/` - New features
- `fix/` - Bug fixes
- `chore/` - Maintenance tasks
- `docs/` - Documentation updates

#### Commit Convention
```bash
# Format: <type>(<scope>): <subject>

feat(blog): add MDX support for blog posts
fix(nav): correct mobile menu behavior
chore(deps): update Next.js to 15.1.5
docs(arch): add deployment strategy
```

### 2. Development Process

#### Feature Development Flow
1. Create feature branch from main
2. Implement feature with tests
3. Run quality checks
4. Create pull request
5. Code review
6. Merge to main

#### Quality Checks (To Implement)
```bash
# Pre-commit checks
npm run lint
npm run typecheck
npm run test
npm run build
```

### 3. Code Review Guidelines

#### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Manual testing completed
- [ ] No console errors

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
```

## Development Environment Setup

### Required Tools
```bash
# Node.js (v18+)
node --version

# npm (v8+)
npm --version

# Git
git --version

# VS Code (recommended)
code --version
```

### VS Code Configuration
```json
// .vscode/settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

### Recommended Extensions
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Error Lens
- GitLens
- Auto Rename Tag

## Code Style Guidelines

### TypeScript Best Practices
```typescript
// ✅ Good: Explicit types
interface ButtonProps {
  variant: 'primary' | 'secondary'
  onClick: () => void
  children: React.ReactNode
}

// ❌ Bad: Any types
const handleClick = (data: any) => {
  // ...
}

// ✅ Good: Type inference where obvious
const [count, setCount] = useState(0)

// ✅ Good: Const assertions
const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  TOOLS: '/tools'
} as const
```

### React Patterns
```typescript
// ✅ Good: Functional components
export function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>
}

// ✅ Good: Custom hooks for logic
function useWindowSize() {
  // implementation
}

// ✅ Good: Composition over inheritance
<Card>
  <CardHeader>Title</CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

### Tailwind CSS Guidelines
```tsx
// ✅ Good: Semantic grouping
className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"

// ✅ Good: Extract repeated patterns
const cardStyles = "p-4 border border-gray-200 rounded-lg"

// ❌ Bad: Arbitrary values everywhere
className="p-[17px] m-[23px] text-[13.5px]"
```

## Testing Strategy (To Implement)

### Unit Testing
```typescript
// components/__tests__/Button.test.tsx
import { render, screen } from '@testing-library/react'
import { Button } from '../Button'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})
```

### Integration Testing
```typescript
// app/__tests__/navigation.test.tsx
test('navigation works correctly', async () => {
  render(<Navigation />)
  const aboutLink = screen.getByText('About')
  await userEvent.click(aboutLink)
  expect(window.location.pathname).toBe('/about')
})
```

### E2E Testing
```typescript
// e2e/homepage.spec.ts
test('homepage loads correctly', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/NUU Cognition/)
  await page.click('text=Learn more')
  await expect(page).toHaveURL('/about')
})
```

## Performance Optimization

### Development Performance
1. Use Turbopack for faster builds
2. Optimize VS Code for large projects
3. Use .env.local for environment variables
4. Implement proper .gitignore

### Code Performance
1. Lazy load heavy components
2. Optimize images with next/image
3. Use dynamic imports for code splitting
4. Implement proper caching strategies

## Debugging Guidelines

### Client-Side Debugging
```typescript
// Use React DevTools
// Enable source maps in development
// Use console.log sparingly

if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', data)
}
```

### Server-Side Debugging
```typescript
// Use Node.js debugging
// VS Code launch.json configuration
{
  "type": "node",
  "request": "attach",
  "name": "Next.js Debug",
  "port": 9229
}
```

## Documentation Standards

### Code Documentation
```typescript
/**
 * Button component with variant support
 * @param variant - Visual style variant
 * @param onClick - Click handler
 * @param children - Button content
 */
export function Button({ variant, onClick, children }: ButtonProps) {
  // Implementation
}
```

### README Files
- Keep updated with setup instructions
- Document environment variables
- Include troubleshooting section
- Add architecture diagrams

## Continuous Improvement

### Code Quality Metrics
- TypeScript coverage: 100%
- Test coverage: >80% (future)
- Bundle size monitoring
- Lighthouse scores >90

### Regular Maintenance
- Weekly dependency updates
- Monthly security audits
- Quarterly architecture reviews
- Performance profiling

## Onboarding New Developers

### Setup Checklist
1. [ ] Clone repository
2. [ ] Install dependencies
3. [ ] Copy .env.example to .env.local
4. [ ] Run development server
5. [ ] Read architecture docs
6. [ ] Review code style guide
7. [ ] Set up VS Code
8. [ ] Join team channels

### Learning Resources
- Next.js documentation
- React documentation
- TypeScript handbook
- Tailwind CSS docs
- Internal architecture docs