"use client";
import { Button, buttonVariants } from "@repo/shadcn/components/ui/button";
import React from "react";
import { useAuth } from ".";
import { useRouter } from "next/navigation";
import { GoogleIcon } from "@repo/shadcn/components/ui/icons";
import { cn } from "@repo/shadcn/lib/utils";
import { VariantProps } from "class-variance-authority";

function AuthButton({
  redirectTo = "/feed",
  size,
  variant,
}: { redirectTo?: string } & VariantProps<typeof buttonVariants>) {
  const { isLoading, isAuthenticated, login } = useAuth();
  const router = useRouter();

  async function handleClick() {
    try {
      if (isAuthenticated) {
        router.push("/feed");
      } else {
        login(redirectTo);
      }
    } catch (err) {
      console.error("Something went wrong", err);
    }
  }

  const text = isLoading ? (
    <>Loading...</>
  ) : isAuthenticated ? (
    <>Continue to App</>
  ) : (
    <>
      <GoogleIcon className="w-4 h-4 mr-2" /> Sign in with Google
    </>
  );

  return (
    <Button
      onClick={handleClick}
      disabled={isLoading}
      className={cn(buttonVariants({ variant, size }))}
    >
      {text}
    </Button>
  );
}

export default AuthButton;
