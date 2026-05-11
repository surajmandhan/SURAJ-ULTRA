"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { type HTMLAttributes, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Props extends HTMLMotionProps<"span"> {}

export const SlideIn = ({
  className,
  initial,
  whileInView,
  transition,
  viewport,
  ...rest
}: Props) => {
  const init = initial ? initial : { opacity: 0, y: "100%" };
  const inView = whileInView ? whileInView : { opacity: 1, y: 0 };
  const trans = transition ? transition : { duration: 0.5, delay: 0.3 };

  return (
    <motion.span
      initial={init}
      whileInView={inView}
      transition={trans}
      viewport={viewport ? viewport : { once: true }}
      className={cn("inline-block overflow-hidden", className)}
      {...rest}
    />
  );
};

interface TransitionProps extends HTMLMotionProps<"div"> {}
export const Transition = ({
  initial,
  whileInView,
  transition,
  ...rest
}: TransitionProps) => {
  const init = initial ? initial : { opacity: 0 };
  const inView = whileInView ? whileInView : { opacity: 1 };
  const trans = transition ? transition : { duration: 0.8, delay: 0.4 };

  return (
    <motion.div
      initial={init}
      whileInView={inView}
      transition={trans}
      {...rest}
    />
  );
};

export const OpacityTextReveal = (props: HTMLAttributes<HTMLSpanElement>) => {
  const textRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(textRef.current, {
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
          trigger: textRef.current,
          scrub: 1,
          start: "top 80%",
          end: "bottom 20%",
        },
      });
    },
    { revertOnUpdate: true }
  );

  return (
    <span
      {...props}
      ref={textRef}
      className={cn("text-reveal", props.className)}
    />
  );
};
