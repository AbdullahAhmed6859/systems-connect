# Path Alias Configuration

This document explains the `@/` path alias setup for the web application.

## Setup

The `@/` alias is configured in `tsconfig.json` to point to the `src` directory:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## Usage Examples

### Before (Relative Imports)

```tsx
// ❌ Hard to read, breaks when moving files
import { useAuth } from "../../auth";
import { navMenuAtom } from "../../utils/atoms";
import AuthButton from "../auth/AuthButton";
import { SearchHandler } from "../types";
```

### After (Alias Imports)

```tsx
// ✅ Clean, consistent, maintainable
import { useAuth } from "@/auth";
import { navMenuAtom } from "@/utils/atoms";
import AuthButton from "@/auth/AuthButton";
import { SearchHandler } from "@/layout/types";
```

## Available Imports

| Path              | Maps To             | Usage                                    |
| ----------------- | ------------------- | ---------------------------------------- |
| `@/auth`          | `src/auth`          | Authentication components and context    |
| `@/layout`        | `src/layout`        | Layout components (Navbar, Footer, etc.) |
| `@/layout/Navbar` | `src/layout/Navbar` | Navbar-specific components               |
| `@/layout/types`  | `src/layout/types`  | Layout-related TypeScript types          |
| `@/utils`         | `src/utils`         | Utility functions and configurations     |
| `@/home`          | `src/home`          | Home page components                     |

## Benefits

### Developer Experience

- **No Relative Path Hell**: Eliminates `../` chains
- **IDE Support**: Better autocomplete and navigation
- **Consistent**: All internal imports use the same pattern
- **Refactor-Safe**: Moving files doesn't break imports

### Code Quality

- **Readable**: Import paths clearly show where code comes from
- **Maintainable**: Easier to understand and modify
- **Professional**: Follows modern React/Next.js best practices

## Examples in Practice

### Layout Components

```tsx
// Navbar component imports
import { useAuth } from "@/auth";
import { navMenuAtom } from "@/utils/atoms";
import { SearchHandler } from "@/layout/types";

// Footer component
import SystemsLogo from "@/layout/Navbar/SystemsLogo";
```

### Page Components

```tsx
// Main layout
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import { AuthProvider } from "@/auth";

// Home page
import HeroSection from "@/home/HeroSection";
import AuthButton from "@/auth/AuthButton";
```

## IDE Configuration

Most modern IDEs (VS Code, WebStorm, etc.) automatically recognize the TypeScript path mapping and provide:

- Autocomplete for paths starting with `@/`
- Go-to-definition navigation
- Automatic import suggestions
- Refactoring support

## Best Practices

1. **Always use `@/` for internal imports**: Never mix relative and alias imports
2. **Keep external packages as-is**: Use normal imports for npm packages
3. **Be consistent**: If you start with alias, use it everywhere
4. **Update documentation**: Keep this file updated when adding new directories

## Migration Notes

All relative imports in the codebase have been converted to use the `@/` alias for better maintainability and developer experience.
