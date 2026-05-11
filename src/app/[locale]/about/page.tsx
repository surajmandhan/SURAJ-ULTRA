import React from 'react';
import AboutAndStats01 from '@/components/shadcn-space/blocks/about-us-01/index';
import { DotPattern } from '@/components/ui/backgrounds/dot-pattern';
import { cn } from '@/lib/utils';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] opacity-20",
          )}
        />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
            Innovating the <span className="text-blue-500">Future</span>
          </h1>
          <p className="text-zinc-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            UltraTechHub is a full-stack digital agency dedicated to building bold brands and high-performance digital experiences.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <AboutAndStats01 />
      </section>

      {/* Vision Section */}
      <section className="py-24 px-6 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-square rounded-3xl bg-zinc-900 border border-zinc-800 p-12 relative overflow-hidden">
             <div className="absolute inset-0 bg-blue-500/10 blur-[100px]" />
             <div className="relative z-10 h-full flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  To become the world's most trusted partner for startups and enterprises seeking to redefine their digital presence through thoughtful design and cutting-edge engineering.
                </p>
             </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Driven by Passion, <br/>Defined by Results.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              We don't just build websites; we create digital ecosystems that grow with your business. Our team of designers, engineers, and strategists work in harmony to turn your vision into reality.
            </p>
            <div className="pt-4">
               <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="size-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">10+</div>
                  <div>
                    <h4 className="text-white font-semibold">Years of Experience</h4>
                    <p className="text-zinc-500 text-sm">Delivering excellence since 2014</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
