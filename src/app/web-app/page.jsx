"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import Breadcrumbs from "../../../component/Breadcrumbs,";
import Footer from "../../../component/Footer";

const Projects = () => {
  const projects = [
    {
      title: "The MedFinder",
      category: "Healthcare",
      description:
        "A full-stack pharmacy management system and customer-facing drug discovery platform built with Next.js and Node.js.",
      image: "/medfinder.png",
      tags: ["Next.js", "MongoDB", "Node.js", "Tailwind"],
      liveLink: "#",
      repoLink: "#",
    },
    {
      title: "The Overflow",
      category: "Community",
      description:
        "A digital ecosystem for a vibrant community of worshipers and creatives using multimedia storytelling and event sync.",
      image: "/overflow.png",
      tags: ["Next.js", "Tailwind CSS", "Firebase", "Cloudinary"],
      liveLink: "#",
      repoLink: "#",
    },
    {
      title: "Dejavumoveinout",
      category: "Logistics",
      description:
        "A specialized cross-platform React Native application designed for seamless logistics and relocation management.",
      image: "/dejavu.png",
      tags: ["React Native", "Firebase", "Express"],
      liveLink: "https://dejavumoveinout.com/",
      repoLink: "#",
    },
    {
      title: "Zangah",
      category: "Cultural",
      description:
        "An immersive platform for preserving African heritage through high-performance multimedia storytelling and a custom CMS.",
      image: "/zangah.png",
      tags: ["React", "PostgreSQL", "Cloudinary"],
      liveLink: "https://zangah.com/",
      repoLink: "#",
    },
  ];

  // 1. Get unique categories from projects
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  // 2. State for active filter
  const [activeCategory, setActiveCategory] = useState("All");

  // 3. Filter projects based on state
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section
        id="work"
        className="w-full min-h-screen bg-[#0f0f0f] text-[#faf2eb] py-10 "
      >
        <Breadcrumbs />
        <div className="max-w-[2560px] px-[20px] lg:px-[72px] mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Website <span className="text-[#f59211]">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-[#f59211]"></div>
          </div>

          {/* --- CATEGORY FILTER --- */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-[#f59211] border-[#f59211] text-black"
                    : "border-gray-700 text-gray-400 hover:border-[#f59211] hover:text-[#f59211]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title} // Better to use title than index for lists
                className="group bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:border-[#f59211]/50 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
              >
                {/* Project Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-[#f59211]/10 group-hover:bg-transparent z-10 transition-colors duration-300"></div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <span className="text-[#f59211] text-xs font-bold uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-black px-2 py-1 rounded text-gray-300 border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                    <a
                      href={project.repoLink}
                      className="flex items-center gap-2 text-sm hover:text-[#f59211] transition-colors"
                    >
                      <FaCode size={16} /> Code
                    </a>
                    <a
                      href={project.liveLink}
                      className="flex items-center gap-2 text-sm hover:text-[#f59211] transition-colors"
                    >
                      View Live <FaExternalLinkAlt size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
