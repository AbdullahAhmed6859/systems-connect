import React from "react";
import Link from "next/link";

interface LinkItem {
  href: string;
  label: string;
}

interface FooterLinksProps {
  title: string;
  links: LinkItem[];
}

export function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold">{title}</h3>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinks;
