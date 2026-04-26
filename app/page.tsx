import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { EdgeSection } from "@/components/sections/edge-section";
import { DomainSection } from "@/components/sections/domain-section";
import { SegmentationSection } from "@/components/sections/segmentation-section";
import { AudienceSection } from "@/components/sections/audience-section";
import { CatSection } from "@/components/sections/cat-section";
import { DeliverySection } from "@/components/sections/delivery-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { FaqSection } from "@/components/sections/faq-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { LeadSection } from "@/components/sections/lead-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <EdgeSection />
      <DomainSection />
      <SegmentationSection />
      <AudienceSection />
      <CatSection />
      <DeliverySection />
      <HowItWorksSection />
      <FaqSection />
      <TestimonialsSection />
      <LeadSection />
      <Footer />
    </main>
  );
}
