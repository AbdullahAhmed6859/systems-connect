import React from "react";
import SystemsLogo from "@/layout/SystemsLogo";

export function CompanyInfo() {
  return (
    <div className="space-y-4">
      <SystemsLogo />
      <p className="text-sm text-muted-foreground">
        Building the future of connected systems and seamless integrations.
      </p>
    </div>
  );
}

export default CompanyInfo;
