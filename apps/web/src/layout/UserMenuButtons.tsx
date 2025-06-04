import { Button } from "@repo/shadcn/components/ui/button";
import React from "react";
import { LogOut, Settings, User } from "lucide-react";
import { useAuth } from "../auth";
import { useRouter } from "next/navigation";

function UserMenuButtons() {
  const { logout } = useAuth();
  const router = useRouter();
  return (
    <>
      <Button variant="ghost" className="w-full justify-start">
        <User className="w-4 h-4 mr-2" />
        Profile
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        <Settings className="w-4 h-4 mr-2" />
        Settings
      </Button>
      <Button
        variant="ghost"
        className="w-full justify-start text-destructive"
        onClick={async () => {
          await logout();
          router.push("/");
        }}
      >
        <LogOut className="w-4 h-4 mr-2" />
        Logout
      </Button>
    </>
  );
}

export default UserMenuButtons;
