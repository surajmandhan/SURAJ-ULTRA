import HeroSection from '@/components/hero/HeroSection';
import AboutSection from '@/components/AboutSection';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import AboutAndStats01 from '@/components/shadcn-space/blocks/about-us-01/index';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import portfolioData from '@/dummy.json';
import { Portfolio } from '@/types/portfolio';

export default function Home() {
  const { social_handles } = portfolioData as Portfolio;

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <Skills />
      <Services />
      <Projects />
      <AboutAndStats01 />
      <Testimonials />
      <Contact social_handle={social_handles} />
    </main>
  );
}
