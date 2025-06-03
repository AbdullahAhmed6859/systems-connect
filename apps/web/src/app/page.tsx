import HeroSection from "../home/HeroSection";
import FeaturesSection from "../home/FeaturesSection";
import CommunitySection from "../home/CommunitySection";
import StatsSection from "../home/StatsSection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <FeaturesSection />
      <CommunitySection />
      <StatsSection />
    </div>
  );
}
