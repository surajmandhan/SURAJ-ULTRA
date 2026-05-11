import Projects from '@/components/Projects';
import { DotPattern } from '@/components/ui/backgrounds/dot-pattern';
import { cn } from '@/lib/utils';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Page Header */}
      <section className="relative pt-40 pb-12 px-6 overflow-hidden border-b border-white/5">
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
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter mb-4">
            SELECTED <span className="text-zinc-600 italic">WORKS</span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto">
            A curation of high-performance digital products we&apos;ve built for forward-thinking brands.
          </p>
        </div>
      </section>

      {/* Main Projects Component */}
      <div className="py-12">
        <Projects />
      </div>
      
      {/* CTA Section */}
      <section className="py-24 px-6 border-t border-white/5 bg-zinc-950/20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Your project could be next.</h2>
          <p className="text-zinc-400 text-lg mb-12">We&apos;re always looking for new challenges and bold ideas.</p>
          <a href="/contact" className="px-12 py-5 rounded-full bg-white text-black font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all inline-block">
            Start a Collaboration
          </a>
        </div>
      </section>
    </main>
  );
}
