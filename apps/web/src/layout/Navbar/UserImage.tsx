import React from "react";
import { User } from "@/auth";
import Image from "next/image";

function UserImage({ user }: { user: User }) {
  return (
    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium overflow-hidden">
      {user?.picture ? (
        <Image
          src={user.picture}
          width={32}
          height={32}
          alt={user.firstName}
          className="w-full h-full object-cover"
        />
      ) : (
        user.firstName.charAt(0).toUpperCase()
      )}
    </div>
  );
}

export default UserImage;
