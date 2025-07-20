import { HeroBanner } from "@/components/HeroBanner";
import { FeaturesSection } from "@/components/FeaturesSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      <FeaturesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
    </div>
  );
};

export default Index;
