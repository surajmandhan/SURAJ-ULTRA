"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { DotPattern } from "./ui/backgrounds/dot-pattern";
import { ParallaxText } from "./ui/ParallaxText";

function Skills() {
  const t = useTranslations('skills');
  const skills = [
    t('0.name'), t('1.name'), t('2.name'), t('3.name'), t('4.name'),
    t('5.name'), t('6.name'), t('7.name'), t('8.name'), t('9.name'),
    t('10.name'), t('11.name'), t('12.name'), t('13.name'), t('14.name'),
    t('15.name'), t('16.name'), t('17.name'), t('18.name'), t('19.name')
  ];
  
  return (
    <section id="skills" className="relative bg-[#0a0a0a] overflow-hidden py-10">
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
      <ParallaxText baseVelocity={-2}>
        {skills.map((name, index) => (
          <span
            key={`skill-${index}-1`}
            className="md:text-7xl text-xl font-semibold uppercase text-white/30 tracking-tighter"
          >
            {name} •&nbsp;
          </span>
        ))}
      </ParallaxText>
      <ParallaxText baseVelocity={2}>
        {skills.map((name, index) => (
          <span
            key={`skill-${index}-2`}
            className="md:text-7xl text-xl font-semibold uppercase text-white/30 tracking-tighter"
          >
            {name} •&nbsp;
          </span>
        ))}
      </ParallaxText>
      <ParallaxText baseVelocity={-1.5}>
        {skills.map((name, index) => (
          <span
            key={`skill-${index}-3`}
            className="md:text-7xl text-xl font-semibold uppercase text-white/30 tracking-tighter"
          >
            {name} •&nbsp;
          </span>
        ))}
      </ParallaxText>
    </section>
  );
}

export default Skills;
