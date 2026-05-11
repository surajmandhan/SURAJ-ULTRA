"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import { SectionHeading, TextReveal } from "./ui/Typography";
import { Project } from "@/types/portfolio";
import ProjectDialog from "./ProjectDialog";
import { ArrowUpRight } from "./ui/Icons";
import { cn } from "@/lib/utils";
import { DotPattern } from "./ui/backgrounds/dot-pattern";
import Filters from "./filters";
import { SlideIn, Transition } from "./ui/Transitions";

function Projects() {
  const t = useTranslations('projects');
  const tl = useTranslations('projects_list');
  
  const projects = [
    {
      _id: "p1",
      title: tl('0.title'),
      description: tl('0.description'),
      techStack: [tl('0.techStack.0'), tl('0.techStack.1'), tl('0.techStack.2')],
      image: { url: tl('0.image'), public_id: "" },
      liveurl: "#",
      githuburl: "#",
      enabled: true,
      sequence: 1
    },
    {
      _id: "p2",
      title: tl('1.title'),
      description: tl('1.description'),
      techStack: [tl('1.techStack.0'), tl('1.techStack.1'), tl('1.techStack.2')],
      image: { url: tl('1.image'), public_id: "" },
      liveurl: "#",
      githuburl: "#",
      enabled: true,
      sequence: 2
    },
    {
      _id: "p3",
      title: tl('2.title'),
      description: tl('2.description'),
      techStack: [tl('2.techStack.0'), tl('2.techStack.1'), tl('2.techStack.2')],
      image: { url: tl('2.image'), public_id: "" },
      liveurl: "#",
      githuburl: "#",
      enabled: true,
      sequence: 3
    }
  ];

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [filterValue, setFilterValue] = useState("all");
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const numProjectToShow = 6;

  useEffect(() => {
    const filtered = applyFilters(projects, filterValue);
    setFilteredProjects(filtered);
  }, [filterValue]);

  const applyFilters = (data: any[], filterValues: string) => {
    if (!filterValues || filterValues === "all") {
      return data;
    }

    return data.filter((project) =>
      project.techStack.some((tech: string) => filterValues === tech.trim())
    );
  };

  return (
    <section className="md:p-16 p-6 mt-10 relative bg-[#0a0a0a]" id="projects">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)] opacity-20",
        )}
      />
      <SectionHeading className="md:pl-12">
        <SlideIn className="text-white/40 block">{t('title1')}</SlideIn>
        <SlideIn className="text-white block">{t('title2')}</SlideIn>
      </SectionHeading>
      
      <Filters
        projects={projects.filter(p => p.enabled)}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />

      <motion.div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 relative max-w-7xl mx-auto">
        {filteredProjects
          .slice(0, showMore ? filteredProjects.length : numProjectToShow)
          .map((project, index) => (
            <Transition
              transition={{ delay: 0.1 + (index % 3) * 0.1 }}
              viewport={{ once: true }}
              key={project._id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer"
            >
              <Card {...project} />
            </Transition>
          ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDialog
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        )}
      </AnimatePresence>

      <div className="grid place-items-center py-16">
        {filteredProjects.length > numProjectToShow && (
          <button
            className="flex items-center justify-center gap-4 py-4 px-10 rounded-full border border-white/20 mt-6 group relative overflow-hidden text-white hover:bg-white hover:text-black transition-all duration-500"
            onClick={() => setShowMore(!showMore)}
          >
            <TextReveal className="font-bold uppercase tracking-widest text-sm">
              {showMore ? t('less') : t('more')}
            </TextReveal>
          </button>
        )}
      </div>
    </section>
  );
}

const Card = ({ title, image, techStack }: Project) => {
  const t = useTranslations('projects');
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      layout="position"
      className="relative rounded-3xl overflow-hidden aspect-square bg-zinc-900/50 border border-white/10 group flex flex-col"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Card Header (Visible on Desktop) */}
      <div className="px-6 py-6 relative z-10 max-md:hidden">
        <div className="flex justify-between items-center mb-1">
          <p className="text-xl font-bold text-white tracking-tight">
            {title}
          </p>
          <div className="flex items-center gap-2">
            <TextReveal className="text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300">{t('explore')}</TextReveal>
            <span className="bg-white text-black rounded-full p-1.5 group-hover:bg-zinc-200 transition-colors">
              <ArrowUpRight size={14} />
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-5 relative">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: hover ? 0 : 20, opacity: hover ? 1 : 0 }}
            className="text-zinc-500 text-xs uppercase tracking-[0.1em] font-medium"
          >
            {techStack.slice(0, 3).join(" • ")}
          </motion.p>
        </div>
      </div>

      {/* Card Image Wrapper */}
      <div className="flex-1 relative overflow-hidden rounded-t-3xl md:rounded-t-none">
        <img
          src={image.url}
          alt={title}
          className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Mobile Title Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-6 z-10 md:hidden bg-gradient-to-t from-black to-transparent">
          <p className="text-white text-xl font-bold">{title}</p>
          <p className="text-white/60 text-xs uppercase tracking-widest mt-1">
            {techStack[0]}
          </p>
        </div>
      </div>

      {/* Hover Icon (Overlay center) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20">
        <div className="bg-white text-black rounded-full p-5 scale-50 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
          <ArrowUpRight size={32} />
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
