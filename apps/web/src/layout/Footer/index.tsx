import React from "react";
import CompanyInfo from "./CompanyInfo";
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";
import FooterBottom from "./FooterBottom";

// Footer data configuration
const productLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/integrations", label: "Integrations" },
  { href: "/docs", label: "Documentation" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border mt-auto">
      <div className="container mx-auto xl:px-16 lg:px-8 px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <CompanyInfo />

          {/* Product Links */}
          <FooterLinks title="Product" links={productLinks} />

          {/* Company Links */}
          <FooterLinks title="Company" links={companyLinks} />

          {/* Social Links */}
          <SocialLinks />
        </div>

        {/* Bottom Section */}
        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;
