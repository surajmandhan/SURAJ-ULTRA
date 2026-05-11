"use client";

import { AnimatePresence, motion } from "motion/react";
import { Dispatch, SetStateAction } from "react";

import { cn } from "@/lib/utils";
import { Project } from "@/types/portfolio";
import { Transition } from "./ui/Transitions";

interface FilterProps {
  projects: Project[];
  filterValue: string;
  setFilterValue: Dispatch<SetStateAction<string>>;
}

const Filters = ({ projects, filterValue, setFilterValue }: FilterProps) => {
  const techStack = projects.flatMap((filter) =>
    filter.techStack.map((val) => val.trim())
  );
  const uniqueFilters = ["all", ...Array.from(new Set(techStack))];

  return (
    <div className="flex items-center gap-3 py-12 justify-center flex-wrap px-4">
      {uniqueFilters.map((filter, index) => {
        const isActive = filterValue === filter;
        
        return (
          <Transition
            key={filter}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.03 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setFilterValue(filter)}
              className={cn(
                "relative px-6 py-2.5 rounded-full border transition-all duration-500 text-[10px] font-black tracking-[0.2em] uppercase",
                isActive 
                  ? "border-white text-black" 
                  : "border-white/10 text-white/40 hover:text-white hover:border-white/40"
              )}
            >
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    layoutId="active-filter"
                    className="absolute inset-0 bg-white rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </AnimatePresence>
              <span className="relative z-10">{filter}</span>
            </button>
          </Transition>
        );
      })}
    </div>
  );
};

export default Filters;
