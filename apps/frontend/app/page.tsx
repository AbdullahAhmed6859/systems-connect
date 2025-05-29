"use client";
import { Button } from "@repo/shadcn/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-dvw h-dvh">
      <h1 className="text-2xl">Hello</h1>
      <Button onClick={() => alert("Button clicked")}>Wow</Button>
    </div>
  );
}
