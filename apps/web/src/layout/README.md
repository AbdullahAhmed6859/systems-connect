# Layout Components

This directory contains all the layout-related components for the application, organized for maximum reusability and maintainability.

## Structure

### Main Components

- **`Navbar/`** - Complete navbar implementation in a dedicated folder
  - **`Navbar.tsx`** - Main navigation bar component
  - **`index.ts`** - Barrel export for the navbar (exports Navbar as default)
- **`Footer.tsx`** - Application footer
- **`index.ts`** - Main barrel export for all layout components

### Navbar Folder Structure (`/Navbar/`)

- **`Navbar.tsx`** - Main navbar orchestrator component
- **`NavbarCenter.tsx`** - Center section with navigation links and search
- **`NavbarRightSide.tsx`** - Right section with user menu and controls
- **`MobileMenu.tsx`** - Mobile navigation menu overlay
- **`NavLinks.tsx`** - Navigation links (responsive)
- **`SearchBar.tsx`** - Reusable search component with variants
- **`SystemsLogo.tsx`** - Application logo component
- **`UserImage.tsx`** - User avatar component
- **`UserMenuButtons.tsx`** - User menu action buttons
- **`UserMenuDropdown.tsx`** - User dropdown menu
- **`index.ts`** - Exports default Navbar and all sub-components

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

## Import Patterns

### Importing the Main Navbar

```tsx
import Navbar from "@/layout/Navbar"; // Default export from Navbar folder
// OR
import { Navbar } from "@/layout"; // From main layout barrel export
```

### Importing Navbar Sub-components

```tsx
// Individual imports for specific components
import { SearchBar, NavbarCenter } from "@/layout/Navbar";

// OR from main layout barrel
import { SearchBar, NavbarCenter } from "@/layout";
```

### Using Components

```tsx
// Use SearchBar with callback
<SearchBar
  placeholder="Search posts..."
  onSearch={(query) => console.log(query)}
  variant="compact"
/>
```

## Organization Benefits

### Modular Structure

- **Separation of Concerns**: Each navbar component has a single responsibility
- **Easier Testing**: Individual components can be tested in isolation
- **Better Maintainability**: Changes to navbar don't affect other layout components

### Clean Imports

- **Barrel Exports**: Main components easily accessible via index files
- **Hierarchical Organization**: Related components grouped together
- **Flexible Importing**: Choose between specific or grouped imports

### Scalability

- **Easy Extension**: New navbar features can be added as separate components
- **Reusable Components**: SearchBar and other components can be used elsewhere
- **Clear Dependencies**: Import paths clearly show component relationships

## Development Notes

- All navbar components are client-side (`"use client"`)
- Uses Jotai for state management
- Integrates with shadcn/ui components
- Follows consistent naming conventions
- Proper relative import paths within the Navbar folder
- The login button redirects to `${BACKEND_URL}/auth/google` from config
