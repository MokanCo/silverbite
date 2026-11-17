import { AboutIntro } from "@/components/home/AboutIntro";
import { Approach } from "@/components/home/Approach";
import { ContactCta } from "@/components/home/ContactCta";
import { Ecosystem } from "@/components/home/Ecosystem";
import { FaqSection } from "@/components/home/FaqSection";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Hero } from "@/components/home/Hero";
import { IndustriesIndex } from "@/components/home/IndustriesIndex";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TechnologyField } from "@/components/home/TechnologyField";
import { Testimonials } from "@/components/home/Testimonials";
import { TrustStrip } from "@/components/home/TrustStrip";
import { WhySection } from "@/components/home/WhySection";

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutIntro />
      <ServicesGrid />
      <WhySection />
      <FeaturedWork />
      <IndustriesIndex />
      <Approach />
      <TechnologyField />
      <Ecosystem />
      <Testimonials />
      <FaqSection />
      <ContactCta />
    </>
  );
}
