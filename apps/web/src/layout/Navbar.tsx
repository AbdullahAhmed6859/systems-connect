"use client";
import React from "react";
import SystemsLogo from "./SystemsLogo";
import { useAuth } from "../auth";
import NavLinks from "./NavLinks";
import UserImage from "./UserImage";
import { useAtomValue } from "jotai";
import { navMenuAtom } from "../utils/atoms";
import NavbarRightSide from "./NavbarRightSide";
import UserMenuButtons from "./UserMenuButtons";

function Navbar() {
  const isMenuOpen = useAtomValue(navMenuAtom);
  const { isAuthenticated, user } = useAuth();

  return (
    <>
      <div className="w-full fixed top-0 z-10 h-14 bg-background shadow flex justify-center">
        <div className="w-full flex items-center justify-between container xl:px-16 lg:px-8 px-4">
          <div>
            <SystemsLogo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:gap-6 lg:gap-10">
            {isAuthenticated && <NavLinks type="desktop" />}
          </div>

          {/* Desktop Right Side */}
          <NavbarRightSide />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && isAuthenticated && (
        <div className="fixed top-14 left-0 right-0 bg-background z-10 border-b md:hidden">
          <div className="flex flex-col p-4 space-y-3">
            <NavLinks type="mobile" />

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
      )}

      <div className="h-14 w-full" />
    </>
  );
}

export default Navbar;
