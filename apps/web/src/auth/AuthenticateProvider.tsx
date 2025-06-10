"use client";
import React from "react";
import { useAuth } from ".";

type Props = { children: React.ReactNode };

function AuthenticateProvider({ children }: Props) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="container mx-auto xl:px-16 lg:px-8 px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto xl:px-16 lg:px-8 px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h1 className="text-2xl font-bold mb-4">
            Welcome to Systems Connect
          </h1>
          <p className="text-muted-foreground mb-6 max-w-md">
            Connect with your colleagues, share updates, and stay informed about
            what&apos;s happening at Systems Limited.
          </p>
          <p className="text-sm text-muted-foreground">
            Please log in to continue.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

export default AuthenticateProvider;
