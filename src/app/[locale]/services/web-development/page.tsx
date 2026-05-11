import React from 'react';
import AgencyHeroSection from "@/components/shadcn-space/blocks/hero-01";
import { DotPattern } from '@/components/ui/backgrounds/dot-pattern';
import { cn } from '@/lib/utils';

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <AgencyHeroSection />
      
      {/* Content Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] opacity-10",
          )}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Next-Gen Web Solutions
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                We specialize in building high-performance, scalable web applications using the latest technologies. From responsive marketing sites to complex enterprise platforms, we deliver excellence at every step.
              </p>
              <ul className="space-y-4">
                {['Custom React Applications', 'E-commerce Platforms', 'headless CMS Integration', 'Performance Optimization'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-zinc-300">
                    <div className="size-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-square rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-center p-12">
               <div className="text-zinc-600 italic">Project Showcase / Illustration</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
