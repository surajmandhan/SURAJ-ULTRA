"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Palette, Eye, Layout, MousePointer2, Box, Sparkles } from 'lucide-react';
import { DotPattern } from '@/components/ui/backgrounds/dot-pattern';
import { cn } from '@/lib/utils';
import { Transition, SlideIn } from '@/components/ui/Transitions';

const processSteps = [
  {
    icon: <Eye className="size-6" />,
    title: "Discovery",
    description: "Understanding your users, goals, and market landscape."
  },
  {
    icon: <Layout className="size-6" />,
    title: "Wireframing",
    description: "Architecting the structure for optimal flow and usability."
  },
  {
    icon: <Palette className="size-6" />,
    title: "Visual Design",
    description: "Crafting beautiful interfaces that reflect your brand identity."
  },
  {
    icon: <MousePointer2 className="size-6" />,
    title: "Prototyping",
    description: "Interactive simulations to validate the user experience."
  }
];

export default function UIUXDesignPage() {
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
            "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] opacity-10",
          )}
        />
        {/* Glow */}
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-pink-600/10 blur-[150px] rounded-full -z-10" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-orange-600/10 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <SlideIn>
            <span className="px-4 py-1.5 rounded-full border border-pink-500/20 bg-pink-500/5 text-pink-400 text-sm font-medium mb-6 inline-block">
              Design Excellence
            </span>
          </SlideIn>
          <Transition>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter">
              Where Beauty Meets <br/>
              <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">Functionality</span>
            </h1>
          </Transition>
          <Transition delay={0.2}>
            <p className="text-zinc-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              We create user-centric designs that blend aesthetic brilliance with intuitive navigation to deliver unforgettable digital experiences.
            </p>
          </Transition>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Creative Process</h2>
              <p className="text-zinc-400 text-lg">Every great design starts with a deep understanding of the problem. We follow a rigorous process to ensure every pixel serves a purpose.</p>
            </div>
            <div className="hidden md:block">
               <Sparkles className="size-16 text-pink-500/20" />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <Transition key={index} delay={index * 0.1} className="relative p-8 rounded-3xl bg-zinc-900/50 border border-white/5 overflow-hidden group">
                <div className="absolute -top-4 -right-4 size-24 bg-pink-500/5 rounded-full blur-2xl group-hover:bg-pink-500/10 transition-colors" />
                <div className="size-12 rounded-2xl bg-gradient-to-br from-pink-500/20 to-orange-500/20 flex items-center justify-center text-pink-400 mb-6">
                  {step.icon}
                </div>
                <div className="text-4xl font-black text-white/5 absolute top-4 right-8 select-none">0{index + 1}</div>
                <h3 className="text-xl font-bold mb-3 relative z-10">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed relative z-10">
                  {step.description}
                </p>
              </Transition>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Design for <br/>the Human Eye.</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 size-6 rounded bg-pink-500/20 flex-shrink-0" />
                <p className="text-zinc-400 text-lg italic">"Design is not just what it looks like and feels like. Design is how it works."</p>
              </div>
              <p className="text-zinc-500 leading-relaxed">
                We believe in minimalism, accessibility, and emotional connection. Our UI/UX team works closely with developers to ensure that the vision is translated perfectly into the final product.
              </p>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-video rounded-3xl bg-zinc-900 border border-white/10 p-12 overflow-hidden relative">
                <div className="absolute inset-0 grid grid-cols-6 gap-2 opacity-20">
                  {Array.from({length: 24}).map((_, i) => (
                    <div key={i} className="border border-pink-500/30 rounded-lg" />
                  ))}
                </div>
                <div className="relative h-full w-full rounded-xl bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center p-8">
                   <Box className="size-32 text-pink-500/40 animate-pulse" />
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
