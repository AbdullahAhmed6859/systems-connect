"use client";
import React, { useState } from "react";
import SystemsLogo from "@repo/shadcn/components/SystemsLogo";
import Link from "next/link";
import { ModeToggle } from "@repo/shadcn/components/ModeToggle";
import { Button, buttonVariants } from "@repo/shadcn/components/ui/button";
import { GoogleIcon } from "@repo/shadcn/components/ui/icons";
import { Menu, X, User, Settings, LogOut, Bell } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  // Mock authentication state - replace with your actual auth logic
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock user data - replace with actual user data
  const user = {
    name: "Ahmed Hassan",
    email: "ahmed.hassan@systemsltd.com",
    avatar: "AH",
  };

  const handleLogin = () => {
    // Mock login - replace with actual login logic
    setIsAuthenticated(true);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    // Mock logout - replace with actual logout logic
    setIsAuthenticated(false);
    setIsUserMenuOpen(false);
  };

  return (
    <>
      <div className="w-full fixed top-0 z-10 h-14 bg-background shadow flex justify-center">
        <div className="w-full flex items-center justify-between container xl:px-16 lg:px-8 px-4">
          <div>
            <SystemsLogo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:gap-6 lg:gap-10">
            {isAuthenticated && (
              <>
                <Link href="/" className={buttonVariants({ variant: "ghost" })}>
                  Home
                </Link>
                <Link
                  href="/feed"
                  className={buttonVariants({ variant: "ghost" })}
                >
                  Feed
                </Link>
                <Link
                  href="/friends"
                  className={buttonVariants({ variant: "ghost" })}
                >
                  Friends
                </Link>
                <Link
                  href="/communities"
                  className={buttonVariants({ variant: "ghost" })}
                >
                  Communities
                </Link>
              </>
            )}
          </div>

          {/* Desktop Right Side */}
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
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                      {user.avatar}
                    </div>
                    <span className="hidden lg:block">{user.name}</span>
                  </Button>

                  {/* User Dropdown */}
                  {isUserMenuOpen && (
                    <div className="absolute right-0 top-full mt-2 w-56 bg-background border rounded-md shadow-lg z-50">
                      <div className="p-3 border-b">
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                      <div className="p-1">
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                          size="sm"
                        >
                          <User className="w-4 h-4 mr-2" />
                          Profile
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                          size="sm"
                        >
                          <Settings className="w-4 h-4 mr-2" />
                          Settings
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-destructive"
                          size="sm"
                          onClick={handleLogout}
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Logout
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <Button onClick={handleLogin}>
                <GoogleIcon className="w-4 h-4 mr-2" />
                Sign in with Google
              </Button>
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
              <Button size="sm" onClick={handleLogin}>
                <GoogleIcon className="w-4 h-4 mr-2" />
                Sign in with Google
              </Button>
            )}
            <ModeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && isAuthenticated && (
        <div className="fixed top-14 left-0 right-0 bg-background z-10 border-b md:hidden">
          <div className="flex flex-col p-4 space-y-3">
            <Link
              href="/"
              className={buttonVariants({
                variant: "ghost",
                className: "w-full justify-start",
              })}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {isAuthenticated ? (
              <>
                <Link
                  href="/feed"
                  className={buttonVariants({
                    variant: "ghost",
                    className: "w-full justify-start",
                  })}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Feed
                </Link>
                <Link
                  href="/friends"
                  className={buttonVariants({
                    variant: "ghost",
                    className: "w-full justify-start",
                  })}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Friends
                </Link>
                <Link
                  href="/communities"
                  className={buttonVariants({
                    variant: "ghost",
                    className: "w-full justify-start",
                  })}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Communities
                </Link>

                {/* Mobile User Info */}
                <div className="border-t pt-3">
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                      {user.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-destructive"
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleLogout();
                    }}
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </div>
              </>
            ) : (
              <Button className="w-full" onClick={handleLogin}>
                <GoogleIcon className="w-4 h-4 mr-2" />
                Sign in with Google
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Click outside to close user menu */}
      {isUserMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsUserMenuOpen(false)}
        />
      )}

      <div className="h-14 w-full" />
    </>
  );
}

export default Navbar;
