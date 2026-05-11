"use client";

import React from 'react';
import { DotPattern } from '@/components/ui/backgrounds/dot-pattern';
import { cn } from '@/lib/utils';
import { 
  ShoppingBag, 
  Zap, 
  Layout, 
  Search, 
  ShieldCheck, 
  Rocket, 
  ArrowUpRight,
  Store,
  Settings,
  Code2,
  BarChart3
} from 'lucide-react';
import { Marquee } from '@/components/ui/marquee';

export default function ShopifyDevelopmentPage() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const shopifyServices = [
    {
      title: "Store Setup & Migration",
      desc: "Complete end-to-end setup and data migration from platforms like Magento, WooCommerce, and BigCommerce with zero downtime.",
      icon: <Store className="size-6 text-[#95BF47]" />,
    },
    {
      title: "Custom Theme Development",
      desc: "High-performance, bespoke Liquid themes designed to maximize your brand identity and provide a unique shopping experience.",
      icon: <Layout className="size-6 text-[#95BF47]" />,
    },
    {
      title: "App & API Integration",
      desc: "Developing custom private apps and integrating third-party APIs for ERP, CRM, and logistics automation.",
      icon: <Code2 className="size-6 text-[#95BF47]" />,
    },
    {
      title: "Conversion Optimization",
      desc: "Data-backed UX/UI audits and A/B testing to significantly increase your Average Order Value (AOV) and conversion rates.",
      icon: <BarChart3 className="size-6 text-[#95BF47]" />,
    },
    {
      title: "Shopify Plus Enterprise",
      desc: "Tailored solutions for high-volume merchants, utilizing advanced Plus features like Shopify Scripts and Flow.",
      icon: <ShieldCheck className="size-6 text-[#95BF47]" />,
    },
    {
      title: "Headless Commerce",
      desc: "Building lightning-fast storefronts using Next.js and Shopify Storefront API for the ultimate performance and flexibility.",
      icon: <Zap className="size-6 text-[#95BF47]" />,
    },
    {
      title: "Speed & Performance",
      desc: "Comprehensive Core Web Vitals optimization to ensure sub-1s load times and improved search engine rankings.",
      icon: <Rocket className="size-6 text-[#95BF47]" />,
    },
    {
      title: "Maintenance & Support",
      desc: "Dedicated ongoing technical support and proactive updates to ensure your store remains secure and functional 24/7.",
      icon: <Settings className="size-6 text-[#95BF47]" />,
    }
  ];

  const partners = [
    "Shopify Plus Partner",
    "Klaviyo Master",
    "Recharge Certified",
    "Gorgias Partner",
    "Yotpo Elite"
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
        
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#95BF47]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#95BF47]/10 border border-[#95BF47]/20 text-[#95BF47] text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#95BF47] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#95BF47]"></span>
            </span>
            Official Shopify Experts
          </div>
          
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.9] flex flex-col md:block">
            <span className="block md:inline">We build profitable</span>
            <span className="flex items-baseline justify-center md:inline-flex md:ml-4">
              <span className="shopify-shimmer">Shopify</span>
              <span className="shopify-outline ml-2">Stores</span>
            </span>
          </h1>

          <style jsx>{`
            .shopify-shimmer {
              background: linear-gradient(
                90deg,
                #ffffff 0%,
                #ffffff 25%,
                #95BF47 50%,
                #ffffff 75%,
                #ffffff 100%
              );
              background-size: 280% 100%;
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: shimmer 4.2s ease-in-out infinite 1.4s;
            }

            .shopify-outline {
              -webkit-text-stroke: 2px #ffffff;
              color: transparent;
            }

            @keyframes shimmer {
              0%, 100% {
                background-position: 220% center;
              }
              40%, 60% {
                background-position: -5% center;
              }
            }
          `}</style>
          
          <p className="text-zinc-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12">
            Unlock the full potential of your e-commerce business with high-performance, custom-built Shopify solutions designed to scale.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <button className="group relative text-sm font-medium rounded-full h-14 p-1 ps-8 pe-16 transition-all duration-500 hover:ps-16 hover:pe-8 w-fit overflow-hidden cursor-pointer bg-[#95BF47] hover:bg-[#32e012] text-black border-none flex items-center justify-center">
                <span className="relative z-10 transition-all duration-500 font-bold">
                  Start Your Project
                </span>
                <span className="absolute right-1 w-12 h-12 bg-black text-[#95BF47] rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-52px)] group-hover:rotate-45">
                  <ArrowUpRight size={20} />
                </span>
             </button>
             <button className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-zinc-300">
                View Case Studies
             </button>
          </div>
        </div>
      </section>

      {/* Portfolio Marquee */}
      <section className="py-12 border-y border-white/5 bg-zinc-950/50">
        <Marquee pauseOnHover className="[--duration:30s]" repeat={4}>
          {["LUXE INTERIORS", "TECH HUB", "MODERN FIT", "GLOW SKINCARE", "PURE ORGANICS", "URBAN STYLE"].map((brand) => (
            <div key={brand} className="flex items-center gap-4 mx-12">
               <ShoppingBag className="size-5 text-[#95BF47]/50" />
               <span className="text-2xl font-bold text-zinc-700 tracking-tighter hover:text-[#95BF47]/50 transition-colors cursor-default">
                 {brand}
               </span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Stacking Services Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <ul id="stacking-cards" className="list-none p-0 grid grid-cols-1 gap-12">
            {shopifyServices.map((service, i) => (
              <li 
                key={i} 
                className="card sticky top-24 pt-4"
                style={{ "--index": i + 1 } as React.CSSProperties}
              >
                <div className="card__content relative p-8 md:p-16 rounded-[40px] bg-[#141414] border border-white/5 flex flex-col justify-center items-start overflow-hidden min-h-[400px] md:min-h-[500px]">
                  {/* Background Glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#95BF47]/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                  
                  <span className="number absolute right-8 top-0 text-[12rem] font-black text-white/5 select-none leading-none">
                    0{i + 1}
                  </span>
                  
                  <div className="relative z-10">
                    <div className="size-16 rounded-2xl bg-[#95BF47]/10 flex items-center justify-center mb-8 border border-[#95BF47]/20 shadow-[0_0_20px_rgba(57,255,20,0.1)]">
                      {service.icon}
                    </div>
                    <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter text-white">{service.title}</h3>
                    <p className="text-zinc-400 text-lg md:text-2xl max-w-2xl leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <style jsx>{`
          #stacking-cards {
            grid-template-rows: repeat(8, 500px);
            padding-bottom: calc(8 * 40px);
          }

          .card {
            perspective: 1000px;
            height: 500px;
            top: calc(10vh + (var(--index) * 20px));
          }

          .card__content {
            transform-origin: 50% 0%;
            will-change: transform, filter;
            transform-style: preserve-3d;
            transition: all 0.5s ease;
            
            /* Custom CSS-only Scroll Animation */
            animation: scale-card linear forwards;
            animation-timeline: view();
            animation-range: exit-crossing 0% exit-crossing 100%;
          }

          @keyframes scale-card {
            to {
              transform: scale(calc(1 - ( (8 - var(--index)) * 0.05 ))) translateY(-10vh) rotateX(-10deg);
              filter: brightness(0.4);
              box-shadow: 0 50px 80px -10px rgba(57, 255, 20, 0.2);
            }
          }

          .number {
            font-family: var(--font-outfit), sans-serif;
          }

          @media (max-width: 768px) {
            #stacking-cards {
              grid-template-rows: repeat(8, 400px);
            }
            .card {
              height: 400px;
            }
            @keyframes scale-card {
              to {
                transform: scale(0.9) translateY(-5vh);
                filter: brightness(0.5);
              }
            }
          }
        `}</style>
      </section>

      {/* Partners Section */}
      <section className="py-24 px-6 bg-[#95BF47]/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#95BF47]/20 to-transparent" />
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#95BF47] font-medium tracking-[0.2em] uppercase text-xs mb-8">Our Ecosystem</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
            {partners.map((p) => (
              <span key={p} className="text-lg md:text-2xl font-bold tracking-tighter text-zinc-400 hover:text-[#95BF47] transition-colors cursor-default">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center">
           <div className="relative">
              <div className="aspect-square rounded-[40px] bg-zinc-900 border border-white/5 p-4 relative">
                 <div className="absolute -top-12 -left-12 size-64 bg-[#95BF47]/10 blur-[80px] rounded-full" />
                 <div className="w-full h-full rounded-[32px] overflow-hidden bg-zinc-950 border border-white/5 flex items-center justify-center">
                    <div className="space-y-4 w-2/3">
                       <div className="h-4 w-full bg-zinc-800 rounded-full" />
                       <div className="h-4 w-2/3 bg-zinc-800 rounded-full" />
                       <div className="grid grid-cols-3 gap-4 pt-4">
                          <div className="aspect-square bg-[#95BF47]/20 rounded-xl border border-[#95BF47]/30" />
                          <div className="aspect-square bg-zinc-900 rounded-xl" />
                          <div className="aspect-square bg-zinc-900 rounded-xl" />
                       </div>
                    </div>
                 </div>
              </div>
              <div className="absolute -bottom-8 -right-8 p-6 rounded-3xl bg-[#95BF47] border-4 border-[#0a0a0a] shadow-2xl text-black">
                 <Rocket className="size-8" />
              </div>
           </div>
           <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter leading-tight">
                Designed for speed, <br/>built for growth.
              </h2>
              <ul className="space-y-6">
                {[
                  { t: "Fast Loading", d: "Stores optimized for sub-1s load times.", i: <Zap className="size-5" /> },
                  { t: "SEO Optimized", d: "Built-in search engine best practices.", i: <Search className="size-5" /> },
                  { t: "Mobile First", d: "Seamless shopping experience on any device.", i: <ShoppingBag className="size-5" /> },
                  { t: "Secure & Reliable", d: "Enterprise-grade security for your store.", i: <ShieldCheck className="size-5" /> }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="size-10 rounded-full bg-[#95BF47]/10 border border-[#95BF47]/20 flex items-center justify-center text-[#95BF47] shrink-0">
                      {item.i}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.t}</h4>
                      <p className="text-zinc-400 text-sm">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
           </div>
        </div>
      </section>

      {/* Shopify Integrations Horizontal Gallery */}
      <section className="py-24 overflow-hidden border-y border-white/5 bg-[#0d0d0d]">
        <div className="flex flex-col gap-8">
          <div 
            ref={scrollRef}
            className="flex gap-0 overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            {/* Intro Text Slide */}
            <div className="slide text-slide flex-none w-full md:w-[33vw] h-screen md:h-[60vh] flex flex-col justify-center p-12 md:p-16 border-r border-white/10 snap-center">
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 leading-[0.9]">
                  Shopify <br/>
                  <span className="text-[#95BF47]">Integrations</span>
                </h2>
                <p className="text-zinc-500 text-lg md:text-xl leading-relaxed mb-8">
                  Upgrade your store's functionality with cutting-edge integrations.
                </p>
                <div className="text-[#95BF47] text-xs font-bold tracking-[0.3em] uppercase animate-pulse">
                  &rarr; Scroll to Explore
                </div>
              </div>
            </div>

            {[
              { 
                title: "AR Product Preview", 
                desc: "Immersive shopping experiences with AR-powered previews.",
                num: "01"
              },
              { 
                title: "Headless Hydrogen", 
                desc: "Supercharge your store with Hydrogen's high-speed architecture.",
                num: "02"
              },
              { 
                title: "Custom Logic Functions", 
                desc: "Personalized pricing and delivery rules using Shopify Functions.",
                num: "03"
              },
              { 
                title: "Smart Checkout", 
                desc: "Tailored payment methods and terms for a better experience.",
                num: "04"
              },
              { 
                title: "Cart Transform API", 
                desc: "Customize shopping carts in real-time to improve efficiency.",
                num: "05"
              },
              { 
                title: "VR Virtual Store", 
                desc: "Create 360-degree virtual environments for customers.",
                num: "06"
              }
            ].map((item, i) => (
              <div key={i} className="group relative flex-none w-full md:w-[33vw] h-screen md:h-[60vh] border-r border-white/10 p-12 md:p-16 flex flex-col justify-between snap-center bg-zinc-950/50 hover:bg-[#0a0a0a] transition-all duration-700 overflow-hidden">
                 {/* Premium Glow Effect */}
                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.08)_0%,transparent_70%)]" />
                    <div className="absolute bottom-0 right-0 w-full h-px bg-linear-to-r from-transparent via-[#95BF47]/20 to-transparent" />
                 </div>

                 <div className="relative z-10">
                    <div>
                      <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[0.85] mb-4 transition-all group-hover:translate-x-4">
                        {item.title.split(' ').map((word, j) => (
                          <React.Fragment key={j}>{word}<br/></React.Fragment>
                        ))}
                      </h3>
                    </div>
                 </div>

                 <div className="relative z-10">
                    <div className="text-[12rem] md:text-[18rem] font-black text-white/[0.02] leading-none absolute -bottom-12 -left-8 select-none group-hover:text-[#95BF47]/[0.03] transition-all duration-1000 group-hover:-translate-y-8">
                      {item.num}
                    </div>
                    <p className="text-zinc-500 group-hover:text-zinc-200 transition-colors duration-700 max-w-md text-base md:text-lg leading-relaxed relative z-20">
                      {item.desc}
                    </p>
                 </div>
              </div>
            ))}

            {/* Footer Slide */}
            <div className="slide text-slide flex-none w-full md:w-[33vw] h-screen md:h-[60vh] flex flex-col justify-center p-12 md:p-16 border-r border-white/10 snap-center bg-[#141414]">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6 leading-[0.9]">
                  Scaling <br/>
                  <span className="text-[#95BF47]">Beyond Limits</span>
                </h2>
                <p className="text-zinc-500 text-base md:text-lg leading-relaxed mb-8">
                  We curate experiences that define the future of digital commerce.
                </p>
                <button className="group/btn-collab relative text-sm font-medium rounded-full h-14 p-1 ps-8 pe-16 transition-all duration-500 hover:ps-16 hover:pe-8 w-fit overflow-hidden cursor-pointer bg-[#95BF47] text-black border-none flex items-center justify-center">
                  <span className="relative z-10 transition-all duration-500 font-bold">
                    Let's Collaborate
                  </span>
                  <span className="absolute right-1 w-12 h-12 bg-black text-[#95BF47] rounded-full flex items-center justify-center transition-all duration-500 group-hover/btn-collab:right-[calc(100%-52px)] group-hover/btn-collab:rotate-45">
                    <ArrowUpRight size={20} />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Buttons - Right Aligned */}
          <div className="flex justify-end gap-4 px-12 md:px-24">
            <button 
              onClick={() => scroll('left')}
              className="size-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-[#95BF47] hover:text-black hover:border-[#95BF47] transition-all group"
            >
              <ArrowUpRight className="rotate-[225deg] transition-transform group-hover:scale-110" size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="size-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-[#95BF47] hover:text-black hover:border-[#95BF47] transition-all group"
            >
              <ArrowUpRight className="rotate-45 transition-transform group-hover:scale-110" size={20} />
            </button>
          </div>
        </div>

        <style jsx>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .slide {
            transition: all 0.5s ease;
          }
        `}</style>
       </section>
 
       {/* CTA Section */}

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[50px] bg-[#95BF47] relative overflow-hidden text-center group">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
           <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10 tracking-tighter text-black">Ready to scale your <br/>Shopify store?</h2>
           <p className="text-black/70 text-lg mb-12 relative z-10 max-w-xl mx-auto font-medium">
             Join 100+ brands that have scaled their revenue with our expert Shopify development services.
           </p>
           <button className="mx-auto group/btn relative text-sm font-medium rounded-full h-16 p-1 ps-10 pe-20 transition-all duration-500 hover:ps-20 hover:pe-10 w-fit overflow-hidden cursor-pointer bg-black text-[#95BF47] border-none flex items-center justify-center shadow-xl">
                <span className="relative z-10 transition-all duration-500 text-lg font-bold">
                  Get a Free Audit
                </span>
                <span className="absolute right-1 w-14 h-14 bg-[#95BF47] text-black rounded-full flex items-center justify-center transition-all duration-500 group-hover/btn:right-[calc(100%-60px)] group-hover/btn:rotate-45">
                  <ArrowUpRight size={24} />
                </span>
           </button>
        </div>
      </section>
    </main>
  );
}
