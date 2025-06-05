"use client";

import React from "react";
import { useAtomValue } from "jotai";
import { navMenuAtom } from "@/utils/atoms";
import { useAuth } from "@/auth";
import NavLinks from "./NavLinks";
import UserImage from "./UserImage";
import UserMenuButtons from "./UserMenuButtons";
import SearchBar from "./SearchBar";
import { SearchHandler } from "@/layout/types";

export function MobileMenu({ onSearch }: SearchHandler) {
  const isMenuOpen = useAtomValue(navMenuAtom);
  const { isAuthenticated, user } = useAuth();

  const handleSearch = (query: string) => {
    console.log("Mobile search query:", query);
    onSearch?.(query);
    // TODO: Implement actual search functionality
  };

  if (!isMenuOpen || !isAuthenticated) {
    return null;
  }

  return (
    <div className="fixed top-14 left-0 right-0 bg-background z-10 border-b md:hidden">
      <div className="flex flex-col p-4 space-y-3">
        {/* Mobile Search */}
        <div className="pb-2">
          <SearchBar
            placeholder="Search..."
            onSearch={handleSearch}
            className="w-full"
          />
        </div>

        {/* Mobile Navigation Links */}
        <div className="space-y-1">
          <NavLinks type="mobile" />
        </div>

        {/* Mobile User Info */}
        <div className="border-t pt-3">
          <div className="flex items-center gap-3 px-3 py-2">
            <UserImage user={user} />
            <div>
              <p className="text-sm font-medium">{user.firstName}</p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
          </div>
          <UserMenuButtons />
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
