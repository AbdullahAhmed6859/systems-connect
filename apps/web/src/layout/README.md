# Layout Components

This directory contains all the layout-related components for the application, organized for maximum reusability and maintainability.

## Structure

### Main Components

- **`Navbar.tsx`** - Main navigation bar component
- **`Footer.tsx`** - Application footer
- **`index.ts`** - Barrel export for clean imports

### Navbar Sub-components

- **`NavbarCenter.tsx`** - Center section with navigation links and search
- **`NavbarRightSide.tsx`** - Right section with user menu and controls
- **`MobileMenu.tsx`** - Mobile navigation menu overlay
- **`NavLinks.tsx`** - Navigation links (responsive)

### UI Components

- **`SearchBar.tsx`** - Reusable search component with variants
- **`SystemsLogo.tsx`** - Application logo component
- **`UserImage.tsx`** - User avatar component
- **`UserMenuButtons.tsx`** - User menu action buttons
- **`UserMenuDropdown.tsx`** - User dropdown menu

### Configuration

- **`types.ts`** - Shared TypeScript interfaces and types

## Features

### SearchBar

- **Variants**: `default` and `compact`
- **Features**:
  - Clear button when text is entered
  - Keyboard shortcuts (Escape to clear and unfocus)
  - Responsive design
  - Form submission support
  - Focus states with visual feedback

### Responsive Design

- Desktop navigation with inline search
- Mobile navigation with hamburger menu
- Mobile search in collapsible menu
- Adaptive layouts for different screen sizes

### Type Safety

- Shared interfaces for consistent props
- Strong typing for better development experience
- Reusable type definitions

## Usage

```tsx
// Import specific components
import { SearchBar, NavbarCenter } from "@/layout";

// Or import everything
import * as Layout from "@/layout";

// Use SearchBar with callback
<SearchBar
  placeholder="Search posts..."
  onSearch={(query) => console.log(query)}
  variant="compact"
/>;
```

## Development Notes

- All components are client-side (`"use client"`)
- Uses Jotai for state management
- Integrates with shadcn/ui components
- Follows consistent naming conventions
- Modular architecture for easy testing and maintenance
