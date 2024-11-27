import Hero from '@/components/hero';
import Services from '@/components/services';
import ProcessSteps from '@/components/process-steps';
import Portfolio from '@/components/portfolio';
import Team from '@/components/team';
import Pricing from '@/components/pricing';
import FAQs from '@/components/faqs';
import Contact from '@/components/contact';
import FeaturedSection from "@/components/home/featured-section";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <ProcessSteps />
      <Portfolio />
      <Team />
      <Pricing />
      <FeaturedSection />
      <FAQs />
      <Contact />
    </main>
  );
}