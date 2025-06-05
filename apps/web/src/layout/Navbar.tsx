"use client";
import React from "react";
import SystemsLogo from "./SystemsLogo";
import NavbarRightSide from "./NavbarRightSide";
import NavbarCenter from "./NavbarCenter";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
    // TODO: Implement global search functionality
    // This could include:
    // - Searching posts
    // - Searching users
    // - Searching communities
    // - Navigating to search results page
  };

  return (
    <>
      {/* Main Navbar */}
      <div className="w-full fixed top-0 z-10 h-14 bg-background shadow flex justify-center">
        <div className="w-full flex items-center justify-between container xl:px-16 lg:px-8 px-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <SystemsLogo />
          </div>

          {/* Center Section - Navigation & Search */}
          <NavbarCenter onSearch={handleSearch} />

          {/* Right Side - User Menu & Controls */}
          <NavbarRightSide />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu onSearch={handleSearch} />

      {/* Spacer */}
      <div className="h-14 w-full" />
    </>
  );
}

export default Navbar;
