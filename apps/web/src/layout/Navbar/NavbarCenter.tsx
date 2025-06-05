"use client";

import React from "react";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import { useAuth } from "@/auth";
import { SearchHandler } from "@/layout/types";

export function NavbarCenter({ onSearch }: SearchHandler) {
  const { isAuthenticated } = useAuth();

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
    onSearch?.(query);
    // TODO: Implement actual search functionality
  };

  return (
    <div className="hidden md:flex items-center gap-4 lg:gap-6 flex-1 max-w-2xl mx-4">
      {/* Navigation Links */}
      {isAuthenticated && (
        <div className="flex gap-4 lg:gap-6">
          <NavLinks type="desktop" />
        </div>
      )}

      {/* Search Bar */}
      {isAuthenticated && (
        <div className="flex-1 max-w-md">
          <SearchBar
            placeholder="Search posts, users, communities..."
            onSearch={handleSearch}
            variant="compact"
          />
        </div>
      )}
    </div>
  );
}

export default NavbarCenter;
