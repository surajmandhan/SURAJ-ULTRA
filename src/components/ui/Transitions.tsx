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
  const init = initial ? initial : { opacity: 0, y: 20 };
  const inView = whileInView ? whileInView : { opacity: 1, y: 0 };
  const trans = transition ? transition : { duration: 0.4, delay: 0.1 };

  return (
    <motion.span
      initial={init}
      whileInView={inView}
      transition={trans}
      viewport={viewport ? viewport : { once: true, amount: 0.1 }}
      className={cn("inline-block overflow-hidden will-change-transform", className)}
      {...rest}
    />
  );
};

interface TransitionProps extends HTMLMotionProps<"div"> {}
export const Transition = ({
  initial,
  whileInView,
  transition,
  viewport,
  ...rest
}: TransitionProps) => {
  const init = initial ? initial : { opacity: 0, y: 20 };
  const inView = whileInView ? whileInView : { opacity: 1, y: 0 };
  const trans = transition ? transition : { duration: 0.5, delay: 0.1 };

  return (
    <motion.div
      initial={init}
      whileInView={inView}
      transition={trans}
      viewport={viewport ? viewport : { once: true, amount: 0.1 }}
      className={cn("will-change-transform", rest.className)}
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
          scrub: 0.2,
          start: "top 85%",
          end: "bottom 15%",
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
