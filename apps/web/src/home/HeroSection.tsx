import { Button } from "@repo/shadcn/components/ui/button";

function HeroSection() {
  return (
    <div className="grid grid-cols-2 container lg:px-24 px-4 h-[40rem]">
      <div className="flex flex-col items-center justify-center px-4 gap-5">
        <h1 className="text-5xl font-extrabold">
          Connect with your colleagues like never before
        </h1>
        <p className="txt-lg font-semibold">
          SystemsLtd Connect brings together the entire Systems Limited
          community in one place. Share updates, ask questions, and build
          meaningful connections.
        </p>
      </div>
      <div className="flex flex-row items-center justify-center px-4 gap-5">
        <Button>Learn More</Button>
        <Button></Button>
      </div>
    </div>
  );
}

export default HeroSection;
