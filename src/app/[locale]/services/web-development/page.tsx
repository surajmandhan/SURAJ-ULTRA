"use client";

import React from 'react';
import { DotPattern } from '@/components/ui/backgrounds/dot-pattern';
import { cn } from '@/lib/utils';
import { 
  Code2, 
  Zap, 
  Globe, 
  Smartphone, 
  ShieldCheck, 
  Rocket, 
  ArrowUpRight,
  Database,
  Layers,
  Cpu
} from 'lucide-react';
import { Transition, SlideIn } from '@/components/ui/Transitions';

export default function WebDevelopmentPage() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "Full-Stack Development",
      desc: "End-to-end web applications built with React, Next.js, and Node.js for maximum performance and scalability.",
      icon: <Layers className="size-6 text-blue-500" />,
    },
    {
      title: "Progressive Web Apps",
      desc: "Delivering app-like experiences in the browser with offline capabilities and high-speed performance.",
      icon: <Smartphone className="size-6 text-blue-500" />,
    },
    {
      title: "API Design & Integration",
      desc: "Robust, secure, and well-documented API architectures that power your frontend and connect your ecosystem.",
      icon: <Cpu className="size-6 text-blue-500" />,
    },
    {
      title: "Cloud-Native Solutions",
      desc: "Leveraging AWS and Azure to build resilient, distributed systems that grow with your user base.",
      icon: <Globe className="size-6 text-blue-500" />,
    },
    {
      title: "Database Optimization",
      desc: "High-concurrency data modeling and query optimization for complex, data-driven platforms.",
      icon: <Database className="size-6 text-blue-500" />,
    }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <SlideIn>
            <span className="px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm font-medium mb-8 inline-block">
              Web Engineering
            </span>
          </SlideIn>
          <Transition>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Building the <br/>
              <span className="text-blue-500 italic">Modern Web</span>
            </h1>
          </Transition>
          <Transition delay={0.2}>
            <p className="text-zinc-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12">
              We engineer high-performance web experiences that blend cutting-edge technology with seamless user interaction.
            </p>
          </Transition>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <button className="group relative text-sm font-medium rounded-full h-14 p-1 ps-8 pe-16 transition-all duration-500 hover:ps-16 hover:pe-8 w-fit overflow-hidden cursor-pointer bg-blue-600 text-white border-none flex items-center justify-center">
                <span className="relative z-10 transition-all duration-500 font-bold">
                  Start Building
                </span>
                <span className="absolute right-1 w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-52px)] group-hover:rotate-45">
                  <ArrowUpRight size={20} />
                </span>
             </button>
          </div>
        </div>
      </section>

      {/* Stacking Services */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          {services.map((service, i) => (
            <div key={i} className="sticky top-32">
              <div className="relative p-8 md:p-16 rounded-[40px] bg-[#141414] border border-white/5 flex flex-col justify-center items-start overflow-hidden min-h-[400px] md:min-h-[500px]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <span className="absolute right-8 top-0 text-[12rem] font-black text-white/5 select-none leading-none">
                  0{i + 1}
                </span>
                <div className="relative z-10">
                  <div className="size-16 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-8 border border-blue-600/20">
                    {service.icon}
                  </div>
                  <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter text-white">{service.title}</h3>
                  <p className="text-zinc-400 text-lg md:text-2xl max-w-xl leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 overflow-hidden border-y border-white/5 bg-[#050a0f]">
        <div className="flex flex-col gap-8">
          <div 
            ref={scrollRef}
            className="flex gap-0 overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            <div className="slide flex-none w-full md:w-[33vw] h-[50vh] flex flex-col justify-center p-12 md:p-16 border-r border-white/10 snap-center">
                <h2 className="text-4xl font-bold tracking-tighter text-white mb-4">Tech <span className="text-blue-500">Stack</span></h2>
                <p className="text-zinc-500">We use the best tools for the job.</p>
            </div>
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'].map((tool, i) => (
              <div key={i} className="flex-none w-full md:w-[33vw] h-[50vh] border-r border-white/10 p-12 md:p-16 flex flex-col justify-center items-center snap-center bg-zinc-950/50">
                 <span className="text-4xl md:text-6xl font-black text-white/10 mb-4">{tool}</span>
                 <p className="text-zinc-500 text-center">Industry-leading performance and developer experience.</p>
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-4 px-12 md:px-24">
            <button onClick={() => scroll('left')} className="size-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
              <ArrowUpRight className="rotate-[225deg]" size={20} />
            </button>
            <button onClick={() => scroll('right')} className="size-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
              <ArrowUpRight className="rotate-45" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[50px] bg-blue-600 relative overflow-hidden text-center">
           <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Ready for the next level?</h2>
           <button className="mx-auto flex items-center gap-3 px-10 py-5 rounded-full bg-white text-blue-600 font-bold uppercase tracking-widest hover:bg-zinc-100 transition-colors">
              Get Started <ArrowUpRight size={20} />
           </button>
        </div>
      </section>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </main>
  );
}
