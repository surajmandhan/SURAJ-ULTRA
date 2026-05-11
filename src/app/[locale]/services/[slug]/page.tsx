import React from 'react';
import { getTranslations } from 'next-intl/server';
import { DotPattern } from '@/components/ui/backgrounds/dot-pattern';
import { cn } from '@/lib/utils';

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = await getTranslations('services');

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 px-6">
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
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 capitalize">
          {slug.replace(/-/g, ' ')}
        </h1>
        <p className="text-zinc-400 text-xl leading-relaxed">
          This page is currently under construction. We are working hard to bring you detailed information about our {slug.replace(/-/g, ' ')} offerings.
        </p>
        
        <div className="mt-12 h-64 border border-white/10 rounded-3xl bg-white/5 flex items-center justify-center">
          <p className="text-zinc-500 italic">Detailed content coming soon...</p>
        </div>
      </div>
    </main>
  );
}
