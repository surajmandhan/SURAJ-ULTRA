import Contact from '@/components/Contact';
import portfolioData from '@/dummy.json';
import { Portfolio } from '@/types/portfolio';
import { DotPattern } from '@/components/ui/backgrounds/dot-pattern';
import { cn } from '@/lib/utils';

export default function ContactPage() {
  const { social_handles } = portfolioData as Portfolio;

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
            LET&apos;S <span className="text-zinc-600 italic">TALK</span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto">
            Have a project in mind? Looking to partner? Or just want to say hi? We&apos;re all ears.
          </p>
        </div>
      </section>

      {/* Main Contact Component */}
      <Contact social_handle={social_handles} />
      
      {/* FAQ / Support Section */}
      <section className="py-24 px-6 bg-zinc-950/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "What is your typical project timeline?", a: "Most projects take between 4-12 weeks depending on complexity and scope." },
              { q: "Do you offer maintenance and support?", a: "Yes, we provide ongoing maintenance and support packages for all our digital products." },
              { q: "How do you handle project pricing?", a: "We offer both project-based fixed pricing and dedicated team models depending on your needs." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-white font-bold mb-3">{item.q}</h3>
                <p className="text-zinc-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
