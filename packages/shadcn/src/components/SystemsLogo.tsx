function Logo({ type }: { type: "light" | "dark" }) {
  const logoNum = {
    light: "1",
    dark: "2",
  };
  return (
    <>
      <img
        src={`https://www.systemsltd.com/themes/custom/sysltd/SystemsLogo-0${logoNum[type]}.svg`}
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
    <>
      <div className="dark:hidden flex items-center h-14 w-24 gap-1">
        <Logo type="light" />
      </div>
      <div className="hidden dark:flex dark:items-center h-14 w-24 gap-1">
        <Logo type="dark" />
      </div>
    </>
  );
}

export default SystemsLogo;
