import { HeroSection } from "@/components/home/HeroSection";
import { AtAGlanceSection } from "@/components/home/AtAGlanceSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { CTASection } from "@/components/home/CTASection";

export default function Index() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <AtAGlanceSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <ClientsSection />
      <CTASection />
    </div>
  );
}
