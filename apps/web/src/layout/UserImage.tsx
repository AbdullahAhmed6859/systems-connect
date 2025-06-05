import React from "react";
import { User } from "../auth";
import Image from "next/image";

function UserImage({ user }: { user: User }) {
  return (
    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
      {user?.picture && (
        <Image
          className="rounded-full"
          src={user.picture}
          width={40}
          height={40}
          alt={user.firstName}
        />
      )}
    </div>
  );
}

export default UserImage;
