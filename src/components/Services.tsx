"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { DotPattern } from "./ui/backgrounds/dot-pattern";
import { SlideIn, Transition } from "./ui/Transitions";
import { SectionHeading } from "./ui/Typography";
import { HoverImage } from "./ui/HoverImage";

function Services() {
  const t = useTranslations('services');
  const tl = useTranslations('services_list');
  
  const services = [
    { name: tl('0.name'), desc: tl('0.desc'), image: tl('0.image'), slug: "shopify-development" },
    { name: tl('1.name'), desc: tl('1.desc'), image: tl('1.image'), slug: "web-development" },
    { name: tl('2.name'), desc: tl('2.desc'), image: tl('2.image'), slug: "mobile-app-development" },
    { name: tl('3.name'), desc: tl('3.desc'), image: tl('3.image'), slug: "ecommerce-development" },
    { name: tl('4.name'), desc: tl('4.desc'), image: tl('4.image'), slug: "ui-ux-design" },
    { name: tl('5.name'), desc: tl('5.desc'), image: tl('5.image'), slug: "graphic-design" },
    { name: tl('6.name'), desc: tl('6.desc'), image: tl('6.image'), slug: "devops-services" },
    { name: tl('7.name'), desc: tl('7.desc'), image: tl('7.image'), slug: "ai-services" }
  ];

  return (
    <section className="px-6 py-24 relative bg-[#0a0a0a] overflow-hidden" id="services">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)] opacity-30",
        )}
      />
      {/* Background Glow */}
      <div className="absolute top-[20%] right-0 w-1/3 h-5/6 bg-purple-600/5 blur-[80px] rounded-full -z-10 opacity-50 blur-gradient" />
      
      <SectionHeading className="md:pl-16 overflow-hidden tracking-tighter">
        <SlideIn className="text-white/40 block">{t('title1')}</SlideIn>
        <SlideIn className="text-white block">{t('title2')}</SlideIn>
      </SectionHeading>
 
      <div className="mx-auto pt-16">
        {services.map((service, index) => (
          <Transition key={index}>
            <HoverImage
              heading={service.name}
              imgSrc={service.image}
              subheading={service.desc}
              href={`/services/${service.slug}`}
            />
          </Transition>
        ))}
      </div>
 
      <Transition className="flex items-center justify-center py-12 md:hidden">
        <Link
          href="#contact"
          className="px-8 py-4 rounded-full border border-white/50 flex items-center gap-2 text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          <span>{t('cta')}</span>
          <ArrowUpRight size={18} />
        </Link>
      </Transition>
    </section>
  );
}

export default Services;
