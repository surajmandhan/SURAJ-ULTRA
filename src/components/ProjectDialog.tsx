"use client";

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { motion } from "motion/react";

import { ExternalLink, Github, XMark } from "./ui/Icons";

interface DialogProps {
  selectedProject: any;
  setSelectedProject: Dispatch<SetStateAction<any | null>>;
}

const ProjectDialog = ({
  selectedProject,
  setSelectedProject,
}: DialogProps) => {
  return (
    <motion.div
      layoutId={selectedProject._id}
      className="fixed inset-0 z-[100] grid place-items-center bg-black/80 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && setSelectedProject(null)}
    >
      <div className="bg-[#0a0a0a] w-11/12 md:w-1/2 h-4/5 md:h-[90%] overflow-y-auto rounded-xl border border-white/10 scrollbar-hide">
        <div className="relative">
          <button
            className="absolute top-4 right-4 bg-black/60 backdrop-blur-md size-10 rounded-full border border-white/20 grid place-items-center text-white z-50 hover:bg-white hover:text-black transition-colors"
            onClick={() => setSelectedProject(null)}
          >
            <XMark />
          </button>
          <img
            src={selectedProject.image.url}
            alt={selectedProject.title}
            className="w-full h-full aspect-video md:aspect-[12/6] object-cover object-center"
          />
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h5 className="text-4xl font-bold text-white">{selectedProject.title}</h5>
              <div className="flex items-center gap-4">
                <Link href={selectedProject.githuburl} target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                  <Github />
                </Link>
                <Link href={selectedProject.liveurl} target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                  <ExternalLink />
                </Link>
              </div>
            </div>
            <div className="py-3 flex flex-wrap items-center gap-3 mb-6">
              {selectedProject.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-zinc-400 leading-relaxed text-lg">
              {selectedProject.description || "No description available for this project. This project represents a significant milestone in digital engineering, showcasing advanced technical implementation and user-centric design principles."}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDialog;
