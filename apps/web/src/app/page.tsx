import HeroSection from "@/home/HeroSection";
import FeaturesSection from "@/home/FeaturesSection";
import CommunitySection from "@/home/CommunitySection";
import StatsSection from "@/home/StatsSection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CommunitySection />
    </main>
  );
}
