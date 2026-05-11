'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { DotPattern } from './ui/backgrounds/dot-pattern';
import { OpacityTextReveal, SlideIn, Transition } from './ui/Transitions';

const AboutSection = () => {
  const t = useTranslations('about');
  
  const content = {
    title: t('title'),
    quote: t('quote'),
    description: t('description')
  };

  return (
    <section id="about" className="relative bg-[#0a0a0a] overflow-hidden py-[10vh] md:py-[15vh]">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] opacity-40",
        )}
      />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Animated Title */}
        <div className="mb-12">
          <SlideIn className="text-white text-lg md:text-xl font-medium uppercase tracking-[0.2em] opacity-40" style={{ fontFamily: 'var(--font-heading)' }}>
            {content.title}
          </SlideIn>
        </div>

        {/* Big Quote with Reveal Effect */}
        <h3 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12" style={{ fontFamily: 'var(--font-heading)' }}>
          <OpacityTextReveal>
            {content.quote}
          </OpacityTextReveal>
        </h3>

        {/* Detailed Description with Reveal Effect */}
        <Transition viewport={{ once: true }} className="max-w-4xl">
          <p className="text-zinc-400 text-xl md:text-2xl lg:text-3xl font-light leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <OpacityTextReveal>
              {content.description}
            </OpacityTextReveal>
          </p>
        </Transition>

        {/* Footer Brand */}
        <div className="mt-20">
          <SlideIn className="text-zinc-500 text-lg md:text-xl italic font-medium">
            — UltraTechHub —
          </SlideIn>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
