import { buttonVariants } from "@repo/shadcn/components/ui/button";
import Link from "next/link";
import { useSetAtom } from "jotai";
import { navMenuAtom } from "@/utils/atoms";
import { NavLinkItem, ResponsiveComponent } from "@/layout/types";

const links: NavLinkItem[] = [
  { name: "Home", href: "/" },
  { name: "Feed", href: "/feed" },
  { name: "Friends", href: "/friends" },
  { name: "Communities", href: "/communities" },
];

const buttonOptions = {
  mobile: buttonVariants({
    variant: "ghost",
    className: "w-full justify-start",
  }),
  desktop: buttonVariants({ variant: "ghost" }),
};

export default function NavLinks({ type }: ResponsiveComponent) {
  const setIsMenuOpen = useSetAtom(navMenuAtom);

  const handleMobileClick = () => {
    if (type === "mobile") {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={buttonOptions[type]}
          onClick={handleMobileClick}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
