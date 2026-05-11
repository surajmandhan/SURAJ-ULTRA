"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Zap, Shield, Cpu, Layers, Globe } from 'lucide-react';
import { DotPattern } from '@/components/ui/backgrounds/dot-pattern';
import { cn } from '@/lib/utils';
import { Transition, SlideIn } from '@/components/ui/Transitions';

const features = [
  {
    icon: <Zap className="size-6" />,
    title: "High Performance",
    description: "Native-speed performance for both iOS and Android platforms."
  },
  {
    icon: <Shield className="size-6" />,
    title: "Secure by Design",
    description: "Enterprise-grade security and data protection at the core."
  },
  {
    icon: <Cpu className="size-6" />,
    title: "Latest Tech",
    description: "Leveraging React Native and Flutter for cross-platform excellence."
  }
];

export default function MobileDevelopmentPage() {
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
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <SlideIn>
            <span className="px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-sm font-medium mb-6 inline-block">
              Mobile Excellence
            </span>
          </SlideIn>
          <Transition>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter">
              Mobile Apps that <br/>
              <span className="text-purple-500">Define Categories</span>
            </h1>
          </Transition>
          <Transition delay={0.2}>
            <p className="text-zinc-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              We build seamless native and cross-platform mobile experiences that engage users and drive business value across all devices.
            </p>
          </Transition>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Transition key={index} delay={index * 0.1} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors group">
                <div className="size-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </Transition>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 px-6 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-zinc-900 border border-zinc-800 p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-500/5 blur-[80px]" />
                <Smartphone className="size-48 text-purple-500/20 absolute" />
                <div className="grid grid-cols-2 gap-4 relative z-10 w-full">
                  {[Globe, Layers, Cpu, Shield].map((Icon, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-black/40 border border-white/5 flex flex-col items-center gap-3">
                      <Icon className="size-8 text-purple-400" />
                      <div className="h-1.5 w-12 bg-purple-500/20 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 w-2/3" />
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              One Codebase, <br/>Infinite Possibilities.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Our cross-platform approach ensures that your app reaches the widest audience without compromising on quality or performance. We handle everything from UI design to cloud integration.
            </p>
            <div className="space-y-4">
              {['React Native Experts', 'Flutter Solutions', 'Native iOS/Android', 'App Store Optimization'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-zinc-300">
                  <div className="size-2 rounded-full bg-purple-500" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
