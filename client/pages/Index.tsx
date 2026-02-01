import { HeroSection } from "@/components/home/HeroSection";
import { AtAGlanceSection } from "@/components/home/AtAGlanceSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AtAGlanceSection />
      <ServicesSection />
      <FeaturedProjectsSection />
    </div>
  );
}
