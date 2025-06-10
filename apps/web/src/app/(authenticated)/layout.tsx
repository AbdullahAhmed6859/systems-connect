import AuthenticateProvider from "@/auth/AuthenticateProvider";
import { ProfileSidebar } from "@/posts";
import React from "react";

type Props = { children: React.ReactNode };

function layout({ children }: Props) {
  return (
    <div className="container mx-auto xl:px-16 lg:px-8 px-4 py-8">
      <div className="flex gap-8">
        <div className="hidden lg:block w-80 flex-shrink-0">
          <div className="sticky top-20">
            <ProfileSidebar />
          </div>
        </div>
        <div className="flex-1 max-w-4xl mx-auto lg:mx-0">
          <AuthenticateProvider>{children}</AuthenticateProvider>
        </div>
      </div>
    </div>
  );
}

export default layout;
