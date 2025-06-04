import { buttonVariants } from "@repo/shadcn/components/ui/button";
import Link from "next/link";
import { type } from "os";

type Link = { name: string; href: string };

const links: Link[] = [
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

export default function NavLinks({ type }: { type: "desktop" | "mobile" }) {
  return (
    <>
      {links.map((l, i) => (
        <Link key={i} href={l.href} className={buttonOptions[type]}>
          {l.name}
        </Link>
      ))}
    </>
  );
}

// mobile
// {/* <>
//   <Link
//     href="/"
//     className={buttonVariants({
//       variant: "ghost",
//       className: "w-full justify-start",
//     })}
//     onClick={() => setIsMenuOpen(false)}
//   >
//     Home
//   </Link>
//   <Link
//     href="/feed"
//     className={buttonVariants({
//       variant: "ghost",
//       className: "w-full justify-start",
//     })}
//     onClick={() => setIsMenuOpen(false)}
//   >
//     Feed
//   </Link>
//   <Link
//     href="/friends"
//     className={buttonVariants({
//       variant: "ghost",
//       className: "w-full justify-start",
//     })}
//     onClick={() => setIsMenuOpen(false)}
//   >
//     Friends
//   </Link>
//   <Link
//     href="/communities"
//     className={buttonVariants({
//       variant: "ghost",
//       className: "w-full justify-start",
//     })}
//     onClick={() => setIsMenuOpen(false)}
//   >
//     Communities
//   </Link>

//   {/* Mobile User Info */}
//   <div className="border-t pt-3">
//     <div className="flex items-center gap-3 px-3 py-2">
//       <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
//         {user?.picture && (
//           <Image
//             src={user.picture}
//             width={32}
//             height={32}
//             alt={user.firstName}
//           />
//         )}
//       </div>
//       <div>
//         <p className="text-sm font-medium">{user.firstName}</p>
//         <p className="text-xs text-muted-foreground">{user.email}</p>
//       </div>
//     </div>
//     <Button
//       variant="ghost"
//       className="w-full justify-start"
//       onClick={() => setIsMenuOpen(false)}
//     >
//       <User className="w-4 h-4 mr-2" />
//       Profile
//     </Button>
//     <Button
//       variant="ghost"
//       className="w-full justify-start"
//       onClick={() => setIsMenuOpen(false)}
//     >
//       <Settings className="w-4 h-4 mr-2" />
//       Settings
//     </Button>
//     <Button
//       variant="ghost"
//       className="w-full justify-start text-destructive"
//       onClick={() => {
//         setIsMenuOpen(false);
//         logout();
//       }}
//     >
//       <LogOut className="w-4 h-4 mr-2" />
//       Logout
//     </Button>
//   </div>
// </>; */}
