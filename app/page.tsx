import Hero from '@/components/hero';
import Services from '@/components/services';
import ProcessSteps from '@/components/process-steps';
import Portfolio from '@/components/portfolio';
import Team from '@/components/team';
import Pricing from '@/components/pricing';
import FAQs from '@/components/faqs';
import Contact from '@/components/contact';
import FeaturedBlogs from '@/components/blog/featured-blogs';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ProcessSteps />
      <Portfolio />
      <Team />
      <Pricing />
      <FeaturedBlogs />
      <FAQs />
      <Contact />
    </>
  );
}