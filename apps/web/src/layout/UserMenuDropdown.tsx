import { useAtomValue } from "jotai";
import React from "react";
import { isUserMenuOpenAtom } from "../utils/atoms";
import { User } from "../auth";
import UserMenuButtons from "./UserMenuButtons";

function UserMenuDropdown({ user }: { user: User }) {
  const isUserMenuOpen = useAtomValue(isUserMenuOpenAtom);

  return (
    <>
      {isUserMenuOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-background border rounded-md shadow-lg z-50">
          <div className="p-3 border-b">
            <p className="text-sm font-medium">{user.firstName}</p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
          <div className="p-1">
            <UserMenuButtons />
          </div>
        </div>
      )}
    </>
  );
}

export default UserMenuDropdown;
