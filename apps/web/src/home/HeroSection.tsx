import { Button } from "@repo/shadcn/components/ui/button";
import { ArrowRight, Users, MessageCircle } from "lucide-react";
import Image from "next/image";
import AuthButton from "@/auth/AuthButton";

function HeroSection() {
  return (
    <div className="w-full">
      <div className="container mx-auto xl:px-16 lg:px-8 px-4 py-16 lg:py-20">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="flex flex-col space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Connect with your colleagues like never before
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                SystemsLtd Connect brings together the entire Systems Limited
                community in one place. Share updates, ask questions, and build
                meaningful connections that drive innovation.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <AuthButton size="lg" />
              <Button size="lg" variant="outline">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  <strong className="text-foreground">2,500+</strong> Active
                  Members
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  <strong className="text-foreground">10K+</strong>{" "}
                  Conversations
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="relative">
            <Image
              src="/systems-employees.jpg"
              alt="Systems Limited Office Building"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              width={1000}
              height={1000}
            />
            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">
                Systems Limited Headquarters
              </h3>
              <p className="text-sm opacity-90">
                Where innovation meets collaboration
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
