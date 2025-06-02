"use client";
import React, { useState } from "react";
import SystemsLogo from "@repo/shadcn/components/SystemsLogo";
import Link from "next/link";
import { ModeToggle } from "@repo/shadcn/components/ModeToggle";
import { Button, buttonVariants } from "@repo/shadcn/components/ui/button";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full fixed top-0 z-10 h-14 bg-background shadow flex justify-center">
        <div className="w-full md:container lg:px-24 px-4 flex items-center justify-between">
          <div>
            <SystemsLogo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:gap-6 lg:gap-10">
            <Link href="/" className={buttonVariants({ variant: "ghost" })}>
              Home
            </Link>
            <Link href="/" className={buttonVariants({ variant: "ghost" })}>
              Feed
            </Link>
            <Link href="/" className={buttonVariants({ variant: "ghost" })}>
              Friends
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3 lg:gap-5">
            <Button>Login</Button>
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
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
            <Link
              href="/"
              className={buttonVariants({
                variant: "ghost",
                className: "w-full justify-start",
              })}
              onClick={() => setIsMenuOpen(false)}
            >
              Feed
            </Link>
            <Link
              href="/"
              className={buttonVariants({
                variant: "ghost",
                className: "w-full justify-start",
              })}
              onClick={() => setIsMenuOpen(false)}
            >
              Friends
            </Link>
            <Button className="w-full">Login</Button>
          </div>
        </div>
      )}

      <div className="h-14 w-full" />
    </>
  );
}

export default Navbar;
