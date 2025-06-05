// Common interfaces for layout components

export interface SearchHandler {
  onSearch?: (query: string) => void;
}

export interface NavLinkItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface User {
  id: string;
  firstName: string;
  email: string;
  picture?: string;
}

export interface NavbarProps {
  className?: string;
}

export interface SearchBarVariant {
  variant?: "default" | "compact";
}

export interface ResponsiveComponent {
  type: "desktop" | "mobile";
}
