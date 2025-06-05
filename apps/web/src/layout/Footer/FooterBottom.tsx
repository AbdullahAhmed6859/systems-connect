import React from "react";
import Link from "next/link";

export function FooterBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
      <p className="text-xs text-muted-foreground">
        © {currentYear} Systems Connect. All rights reserved.
      </p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <Link
          href="/privacy"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          Terms of Service
        </Link>
        <Link
          href="/cookies"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          Cookie Policy
        </Link>
      </div>
    </div>
  );
}

export default FooterBottom;
