import Image from "next/image";
import Link from "next/link";

function Logo({ type }: { type: "light" | "dark" }) {
  const logoNum = {
    light: "1",
    dark: "2",
  };
  return (
    <>
      <Image
        width={96}
        height={56}
        src={`/SystemsLogo-0${logoNum[type]}.svg`}
        alt="Systems Logo"
      />
      <span className="text-lg font-semibold mb-0.5 text-[#61697D] dark:text-white">
        Connect
      </span>
    </>
  );
}

function SystemsLogo() {
  return (
    <Link href="/">
      <div className="dark:hidden flex items-center h-14 w-24 gap-1">
        <Logo type="light" />
      </div>
      <div className="hidden dark:flex dark:items-center h-14 w-24 gap-1">
        <Logo type="dark" />
      </div>
    </Link>
  );
}

export default SystemsLogo;
