"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { DotPattern } from "./ui/backgrounds/dot-pattern";
import { InfiniteScroll } from "./ui/InfiniteScroll";
import { SlideIn, Transition } from "./ui/Transitions";
import { SectionHeading } from "./ui/Typography";

const Testimonials = () => {
  const t = useTranslations('testimonials');
  const tl = useTranslations('testimonials_list');
  
  const testimonials = [
    {
      _id: "t1",
      name: tl('0.name'),
      position: tl('0.position'),
      review: tl('0.review'),
      image: { url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357726628-c4dr18.png" },
      enabled: true
    },
    {
      _id: "t2",
      name: tl('1.name'),
      position: tl('1.position'),
      review: tl('1.review'),
      image: { url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357705657-aimydg.png" },
      enabled: true
    },
    {
      _id: "t3",
      name: "Marcus Thorne",
      position: "CEO at TechVision",
      review: "The team at UltraTechHub transformed our outdated platform into a high-performance engine. Their DevOps expertise is unmatched in the industry.",
      image: { url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706290914024-725ytf" },
      enabled: true
    },
    {
      _id: "t4",
      name: "Elena Rodriguez",
      position: "Product Lead at CloudStream",
      review: "Seamless integration and beautiful design. They don't just build websites; they build digital experiences that drive real business growth.",
      image: { url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357680224-phijt.png" },
      enabled: true
    },
    {
      _id: "t5",
      name: "James Wilson",
      position: "Founder of ShopFlow",
      review: "Our Shopify store's conversion rate increased by 40% after the redesign. The attention to detail and performance optimization is incredible.",
      image: { url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357668346-ke8kgt.jpeg" },
      enabled: true
    }
  ];

  return (
    <section className="py-24 relative bg-[#0a0a0a] overflow-hidden" id="testimonials">
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
      {/* Background Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/2 h-1/2 bg-[#00ffcc]/5 blur-[120px] rounded-full -z-10 blur-gradient" />
      
      <SectionHeading className="md:pl-28 mb-16">
        <SlideIn className="text-white/40 block">{t('title1')}</SlideIn>
        <SlideIn className="text-white block">{t('title2')}</SlideIn>
      </SectionHeading>
 
      <div className="flex flex-col gap-8">
        <TestimonialRow testimonials={testimonials} speed="normal" direction="right" />
        <TestimonialRow testimonials={testimonials} speed="normal" direction="left" />
      </div>
    </section>
  );
};

interface TestimonialRowProps {
  testimonials: any[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
}

const TestimonialRow = ({
  testimonials,
  direction,
  speed,
}: TestimonialRowProps) => {
  return (
    <Transition viewport={{ once: true }}>
      <InfiniteScroll
        direction={direction}
        speed={speed}
        pauseOnHover
        className="pb-4"
      >
        {testimonials.map((val) => (
          <li
            key={val._id}
            className="p-6 bg-zinc-900/50 border border-white/5 md:w-[450px] w-[320px] h-[280px] rounded-2xl flex flex-col justify-between relative overflow-hidden group hover:bg-zinc-800/50 transition-colors duration-500 z-0"
          >
            <div className="relative z-10">
              <span className="text-9xl absolute -top-12 -left-4 text-zinc-800/50 pointer-events-none group-hover:text-zinc-700 transition-colors leading-none font-serif">
                &quot;
              </span>
              <p className="opacity-90 text-zinc-300 md:text-lg text-sm leading-relaxed md:line-clamp-4 line-clamp-3 relative z-10 font-[family-name:var(--font-manrope)]">
                {val.review}
              </p>
            </div>
            
            <div className="flex items-center gap-4 pt-6 mt-auto">
              <img
                src={val.image.url}
                alt={val.name}
                className="size-12 rounded-full object-cover border border-white/10 bg-black"
              />
              <div>
                <h4 className="text-white font-bold tracking-tight text-base">{val.name}</h4>
                <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold font-[family-name:var(--font-manrope)]">
                  {val.position}
                </p>
              </div>
            </div>

            {/* Decorative Background Icon */}
            <span className="absolute -bottom-6 -right-2 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity -z-10">
              <svg width="100" height="150" viewBox="0 0 80 176" fill="none">
                <path d="M80 0.311005L80 75.7528L66.8466 87.9639L79.9853 100.869L79.9853 176H57.5783L57.5783 123.751L22.9432 157.376L6.80805 142.143L50.6601 99.1772L0 99.1772L0 77.0325L49.6613 77.0325L6.90351 34.3051L22.7082 18.7178L56.9467 52.1552L56.9467 0H80" fill="white" />
              </svg>
            </span>
          </li>
        ))}
      </InfiniteScroll>
    </Transition>
  );
};

export default Testimonials;
