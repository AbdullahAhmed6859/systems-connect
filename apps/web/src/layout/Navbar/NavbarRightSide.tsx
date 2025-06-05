import { ModeToggle } from "@repo/shadcn/components/ModeToggle";
import { Button } from "@repo/shadcn/components/ui/button";
import React from "react";
import AuthButton from "@/auth/AuthButton";
import { useAuth } from "@/auth";
import { Bell, Menu, X } from "lucide-react";
import { useAtom } from "jotai";
import { isUserMenuOpenAtom, navMenuAtom } from "@/utils/atoms";
import UserImage from "./UserImage";
import UserMenuDropdown from "./UserMenuDropdown";
import { useSetAtom } from "jotai";

function NavbarRightSide() {
  const { isAuthenticated, user } = useAuth();
  const setIsUserMenuOpen = useSetAtom(isUserMenuOpenAtom);
  const [isMenuOpen, setIsMenuOpen] = useAtom(navMenuAtom);

  return (
    <>
      <div className="hidden md:flex items-center gap-3 lg:gap-5">
        {isAuthenticated ? (
          <>
            {/* Notifications */}
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>

            {/* User Menu */}
            <div className="relative">
              <Button
                variant="ghost"
                className="flex items-center gap-2 px-3"
                onClick={() => setIsUserMenuOpen((s) => !s)}
              >
                <UserImage user={user} />
                <span className="hidden lg:block">{user.firstName}</span>
              </Button>
              <UserMenuDropdown user={user} />
            </div>
          </>
        ) : (
          <AuthButton />
        )}

        <ModeToggle />
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden items-center gap-3">
        {isAuthenticated ? (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        ) : (
          <AuthButton size="sm" />
        )}
        <ModeToggle />
      </div>
    </>
  );
}

export default NavbarRightSide;
