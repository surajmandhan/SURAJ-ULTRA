"use client";

import React, { useEffect, useRef } from 'react';
import { DotPattern } from '@/components/ui/backgrounds/dot-pattern';
import { cn } from '@/lib/utils';
import { 
  Infinity, 
  Cloud, 
  Terminal, 
  ShieldCheck, 
  Zap, 
  Settings, 
  ArrowUpRight,
  Database,
  Monitor,
  Code2,
  Box
} from 'lucide-react';

export default function DevOpsPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w: number, h: number, centerX: number, centerY: number, particles: Particle[] = [];
    const BUSES: { x1: number, y1: number, x2: number, y2: number }[] = [];

    function init() {
      const parent = canvas?.parentElement;
      w = canvas!.width = parent?.clientWidth || window.innerWidth;
      h = canvas!.height = parent?.clientHeight || window.innerHeight; 
      BUSES.length = 0;

      centerX = w / 4;
      centerY = h / 2.5; 

      // Define buses
      for (let i = -2; i <= 2; i++) {
        BUSES.push({ x1: centerX, y1: centerY + i * 20, x2: w, y2: centerY + i * 20 });   // Right
        BUSES.push({ x1: centerX, y1: centerY + i * 20, x2: 0, y2: centerY + i * 20 });   // Left
        BUSES.push({ x1: centerX + i * 20, y1: centerY, x2: centerX + i * 20, y2: h });   // Down
        BUSES.push({ x1: centerX + i * 20, y1: centerY, x2: centerX + i * 20, y2: 0 });   // Up
      }
    }

    class Particle {
      bus: any;
      progress: number = 0;
      speed: number = 0;

      constructor() {
        this.reset();
      }
      reset() {
        this.bus = BUSES[Math.floor(Math.random() * BUSES.length)];
        this.progress = 0;
        this.speed = 0.005 + Math.random() * 0.01;
      }
      update() {
        this.progress += this.speed;
        if (this.progress > 1) this.reset();
      }
      draw() {
        if (!ctx) return;
        const x = this.bus.x1 + (this.bus.x2 - this.bus.x1) * this.progress;
        const y = this.bus.y1 + (this.bus.y2 - this.bus.y1) * this.progress;
        ctx.fillStyle = '#00ffcc';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00ffcc';
        ctx.fillRect(x - 2, y - 2, 4, 4);
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.fillStyle = 'rgba(5, 10, 5, 0.2)';
      ctx.fillRect(0, 0, w, h);

      // Draw Chipset (Exact Design from Code)
      ctx.fillStyle = '#1a1a1a';
      ctx.strokeStyle = '#00ffcc';
      ctx.lineWidth = 3;
      ctx.strokeRect(centerX - 50, centerY - 50, 100, 100);
      ctx.fillRect(centerX - 50, centerY - 50, 100, 100);
      ctx.fillStyle = '#00ffcc';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('DEVOPS', centerX, centerY + 5);

      // Draw Buses
      ctx.strokeStyle = '#004433';
      ctx.lineWidth = 1;
      ctx.shadowBlur = 0;
      BUSES.forEach(b => {
        ctx.beginPath();
        ctx.moveTo(b.x1, b.y1);
        ctx.lineTo(b.x2, b.y2);
        ctx.stroke();
      });

      // Data particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animate);
    }

    init();
    particles = Array.from({ length: 80 }, () => new Particle());
    const animationFrame = requestAnimationFrame(animate);

    const handleResize = () => init();
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const shopifyServices = [
    {
      title: "Infrastructure as Code",
      desc: "Managing and provisioning infrastructure through machine-readable definition files, rather than physical hardware configuration.",
      icon: <Code2 className="size-6 text-[#00ffcc]" />,
    },
    {
      title: "Cloud Migration",
      desc: "Seamlessly transitioning your applications and data to leading cloud platforms with zero downtime and maximum security.",
      icon: <Cloud className="size-6 text-[#00ffcc]" />,
    },
    {
      title: "Containerization",
      desc: "Packaging your software into standardized units (Docker) to ensure it runs reliably across different computing environments.",
      icon: <Box className="size-6 text-[#00ffcc]" />,
    },
    {
      title: "CI/CD Pipelines",
      desc: "Automating the steps in your software delivery process to increase deployment frequency and improve code quality.",
      icon: <Zap className="size-6 text-[#00ffcc]" />,
    },
    {
      title: "SRE & Monitoring",
      desc: "Proactive site reliability engineering and 24/7 monitoring to ensure your platform remains resilient and performant.",
      icon: <Monitor className="size-6 text-[#00ffcc]" />,
    }
  ];

  const partners = [
    "AWS Partner",
    "Azure Certified",
    "Google Cloud",
    "HashiCorp",
    "GitHub Enterprise"
  ];

  return (
    <main className="min-h-screen bg-[#050a05] text-white">
      {/* Hero Section with Animation */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 z-0 opacity-100"
        />
        
        <div className="max-w-6xl mx-auto relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ffcc]/10 border border-[#00ffcc]/20 text-[#00ffcc] text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ffcc] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ffcc]"></span>
            </span>
            Enterprise Cloud Automation
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
            Accelerate Your <br/>
            <span className="text-[#00ffcc] shopify-shimmer">Delivery Pipeline</span>
          </h1>
          
          <p className="text-zinc-400 text-xl md:text-2xl max-w-2xl mx-auto mb-12">
            Modernizing infrastructure with high-fidelity automation and enterprise-grade reliability.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 z-30">
            <button className="group relative text-sm font-medium rounded-full h-14 p-1 ps-8 pe-16 transition-all duration-500 hover:ps-16 hover:pe-8 w-fit overflow-hidden cursor-pointer bg-[#00ffcc] text-black border-none flex items-center justify-center">
                <span className="relative z-10 transition-all duration-500 font-bold">
                  Optimize My Infra
                </span>
                <span className="absolute right-1 w-12 h-12 bg-black text-[#00ffcc] rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-52px)] group-hover:rotate-45">
                  <ArrowUpRight size={20} />
                </span>
            </button>
            <button className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all font-bold">
              View Case Studies
            </button>
          </div>
        </div>

        <style jsx>{`
          .shopify-shimmer {
            background: linear-gradient(
              90deg,
              #ffffff 0%,
              #ffffff 25%,
              #00ffcc 50%,
              #ffffff 75%,
              #ffffff 100%
            );
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 3s linear infinite;
          }

          @keyframes shimmer {
            to {
              background-position: 200% center;
            }
          }
        `}</style>
       </section>
 
       {/* Stacking Service Cards */}

      {/* Stacking Service Cards */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          {shopifyServices.map((service, i) => (
            <div 
              key={i} 
              className="sticky top-32 card-container"
              style={{
                zIndex: i + 1,
              }}
            >
              <div className="card__content relative p-8 md:p-16 rounded-[40px] bg-[#141414] border border-white/5 flex flex-col justify-center items-start overflow-hidden min-h-[400px] md:min-h-[500px]">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ffcc]/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <span className="number absolute right-8 top-0 text-[12rem] font-black text-white/5 select-none leading-none">
                  0{i + 1}
                </span>
                
                <div className="relative z-10">
                  <div className="size-16 rounded-2xl bg-[#00ffcc]/10 flex items-center justify-center mb-8 border border-[#00ffcc]/20 shadow-[0_0_20px_rgba(0,255,204,0.1)]">
                    {service.icon}
                  </div>
                  <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter text-white">{service.title}</h3>
                  <p className="text-zinc-400 text-lg md:text-xl max-w-xl leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .card-container {
            view-timeline-name: --card-stack;
            view-timeline-axis: block;
          }
          
          .card__content {
            --index: 1;
            transform-origin: 50% 0%;
            animation: sticky-stack linear forwards;
            animation-timeline: --card-stack;
            animation-range: entry 100% exit 0%;
          }

          @keyframes sticky-stack {
            to {
              transform: scale(calc(1 - (0.05 * (5 - var(--index))))) translateY(calc(-20px * var(--index)));
              filter: brightness(0.5);
            }
          }
        `}</style>
      </section>

      {/* Integration Horizontal Gallery */}
      <section className="py-24 overflow-hidden border-y border-white/5 bg-[#050a05]">
        <div className="flex flex-col gap-8">
          <div 
            ref={scrollRef}
            className="flex gap-0 overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            {/* Intro Text Slide */}
            <div className="slide text-slide flex-none w-full md:w-[33vw] h-screen md:h-[60vh] flex flex-col justify-center p-12 md:p-16 border-r border-white/10 snap-center">
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 leading-[0.9]">
                  Cloud <br/>
                  <span className="text-[#00ffcc]">Ecosystem</span>
                </h2>
                <p className="text-zinc-500 text-lg md:text-xl leading-relaxed mb-8">
                  Seamlessly integrating industry-leading tools for ultimate performance.
                </p>
                <div className="text-[#00ffcc] text-xs font-bold tracking-[0.3em] uppercase animate-pulse">
                  &rarr; Scroll to Explore
                </div>
              </div>
            </div>

            {[
              { 
                title: "AWS Infrastructure", 
                desc: "Enterprise-grade cloud hosting and serverless orchestration.",
                num: "01"
              },
              { 
                title: "GitHub Actions", 
                desc: "Automated workflows and code-to-cloud security pipelines.",
                num: "02"
              },
              { 
                title: "Terraform IaC", 
                desc: "Declarative infrastructure provisioning for total scalability.",
                num: "03"
              },
              { 
                title: "Kubernetes Ops", 
                desc: "Container management and self-healing cluster automation.",
                num: "04"
              },
              { 
                title: "Datadog Vision", 
                desc: "Full-stack observability and real-time incident detection.",
                num: "05"
              },
              { 
                title: "Jenkins Core", 
                desc: "Battle-tested automation server for complex build logic.",
                num: "06"
              }
            ].map((item, i) => (
              <div key={i} className="group relative flex-none w-full md:w-[33vw] h-screen md:h-[60vh] border-r border-white/10 p-12 md:p-16 flex flex-col justify-between snap-center bg-zinc-950/50 hover:bg-[#0a0a0a] transition-all duration-700 overflow-hidden">
                 {/* Premium Glow Effect */}
                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,255,204,0.08)_0%,transparent_70%)]" />
                    <div className="absolute bottom-0 right-0 w-full h-px bg-linear-to-r from-transparent via-[#00ffcc]/20 to-transparent" />
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
                    <div className="text-[12rem] md:text-[18rem] font-black text-white/[0.02] leading-none absolute -bottom-12 -left-8 select-none group-hover:text-[#00ffcc]/[0.03] transition-all duration-1000 group-hover:-translate-y-8">
                      {item.num}
                    </div>
                    <p className="text-zinc-500 group-hover:text-zinc-200 transition-colors duration-700 max-w-md text-base md:text-lg leading-relaxed relative z-20">
                      {item.desc}
                    </p>
                 </div>
              </div>
            ))}

            {/* Footer Slide */}
            <div className="slide text-slide flex-none w-full md:w-[33vw] h-screen md:h-[60vh] flex flex-col justify-center p-12 md:p-16 border-r border-white/10 snap-center bg-[#0a1a0a]">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6 leading-[0.9]">
                  Scale <br/>
                  <span className="text-[#00ffcc]">Without Limits</span>
                </h2>
                <p className="text-zinc-500 text-base md:text-lg leading-relaxed mb-8">
                  We build the foundation that supports your growth.
                </p>
                <button className="group/btn-collab relative text-sm font-medium rounded-full h-14 p-1 ps-8 pe-16 transition-all duration-500 hover:ps-16 hover:pe-8 w-fit overflow-hidden cursor-pointer bg-[#00ffcc] text-black border-none flex items-center justify-center">
                  <span className="relative z-10 transition-all duration-500 font-bold">
                    Start Automating
                  </span>
                  <span className="absolute right-1 w-12 h-12 bg-black text-[#00ffcc] rounded-full flex items-center justify-center transition-all duration-500 group-hover/btn-collab:right-[calc(100%-52px)] group-hover/btn-collab:rotate-45">
                    <ArrowUpRight size={20} />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-end gap-4 px-12 md:px-24">
            <button 
              onClick={() => scroll('left')}
              className="size-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-[#00ffcc] hover:text-black hover:border-[#00ffcc] transition-all group"
            >
              <ArrowUpRight className="rotate-[225deg] transition-transform group-hover:scale-110" size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="size-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-[#00ffcc] hover:text-black hover:border-[#00ffcc] transition-all group"
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
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[50px] bg-[#00ffcc] relative overflow-hidden text-center group">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
           <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10 tracking-tighter text-black">Ready for enterprise <br/>automation?</h2>
           <p className="text-black/70 text-lg mb-12 relative z-10 max-w-xl mx-auto font-medium">
             Deploy faster, scale reliably, and reduce infrastructure costs with our expert DevOps team.
           </p>
           <button className="mx-auto group/btn relative text-sm font-medium rounded-full h-16 p-1 ps-10 pe-20 transition-all duration-500 hover:ps-20 hover:pe-10 w-fit overflow-hidden cursor-pointer bg-black text-[#00ffcc] border-none flex items-center justify-center shadow-xl">
                <span className="relative z-10 transition-all duration-500 text-lg font-bold">
                  Free Architecture Audit
                </span>
                <span className="absolute right-1 w-14 h-14 bg-[#00ffcc] text-black rounded-full flex items-center justify-center transition-all duration-500 group-hover/btn:right-[calc(100%-60px)] group-hover/btn:rotate-45">
                  <ArrowUpRight size={24} />
                </span>
           </button>
        </div>
      </section>
    </main>
  );
}
