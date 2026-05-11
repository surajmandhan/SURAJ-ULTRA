"use client";

import { useMotionValue, motion, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";
import { TextReveal } from "./Typography";

interface HoverImageProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  href?: string;
}

export const HoverImage = ({
  heading,
  imgSrc,
  subheading,
  href = "#contact",
}: HoverImageProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b border-white/10 py-4 transition-colors duration-500 md:py-6 md:px-16 hover:bg-white/5"
    >
      <Link href={href} ref={ref} className="flex-1 flex items-center justify-between">
        <div>
          <div className="flex items-center justify-between">
            <h4 className="relative z-10 block text-2xl sm:text-4xl font-semibold md:font-bold md:text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl tracking-tighter">
              {heading}
            </h4>
          </div>
          <p className="relative z-10 mt-2 block md:text-base text-sm text-zinc-400 transition-colors duration-500 group-hover:text-neutral-50 pt-2">
            {subheading}
          </p>
        </div>

        <motion.img
          style={{
            top,
            left,
            translateX: "-50%",
            translateY: "-50%",
          }}
          variants={{
            initial: { scale: 0, rotate: "-12.5deg" },
            whileHover: { scale: 1, rotate: "12.5deg" },
          }}
          transition={{ type: "spring" }}
          src={imgSrc}
          className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64 max-md:hidden pointer-events-none"
          alt={`Image representing a link for ${heading}`}
        />

        <motion.div
          variants={{
            initial: {
              x: "25%",
              opacity: 0,
            },
            whileHover: {
              x: "0%",
              opacity: 1,
            },
          }}
          transition={{ type: "spring" }}
          className="z-10 md:p-4 grid justify-items-end gap-2 max-md:hidden"
        >
          <div className="group/btn relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white hover:border-blue-600 flex items-center justify-center transition-colors duration-500">
            <span className="relative z-10 transition-all duration-500">
              Learn More
            </span>
            <span className="absolute right-1 w-10 h-10 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-full flex items-center justify-center transition-all duration-500 group-hover/btn:right-[calc(100%-44px)] group-hover/btn:rotate-45 group-hover/btn:bg-white group-hover/btn:text-blue-600">
              <ArrowUpRight size={18} />
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};
