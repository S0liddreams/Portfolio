"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaGithub, FaAppStoreIos, FaGooglePlay, FaCode } from "react-icons/fa";
import Breadcrumbs from "../../../component/Breadcrumbs,";
import Footer from "../../../component/Footer";

const MobileProjects = () => {
  const mobileProjects = [
    {
      title: "Mide Premium",
      category: "Utilities",
      description:
        " The Mide Premium App provides a simple and convenient way for customers to manage their fueling needs, access premium petroleum products, and enjoy rewards through its loyalty program.",
      image: "/mide.png",
      tags: ["Expo", "Redux Toolkit", "Node.js"],
      playStore:
        "https://play.google.com/store/apps/details?id=com.midepremiumoilandgasapp.mide",
      appStore: "https://apps.apple.com/us/app/mide-premium/id6575369364",
      repoLink: "#",
    },
    {
      title: "Afamilia",
      category: "Utilities",
      description:
        "A cross-platform mobile application developed with React Native and Firebase, designed to centralize family life",
      image: "/afamilia.png",

      tags: ["React Native", "Firebase", "Google Maps API"],
      playStore: "",
      appStore: "",
      repoLink: "#",
    },
    // Add more mobile-specific projects here
  ];

  const categories = ["All", ...new Set(mobileProjects.map((p) => p.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? mobileProjects
      : mobileProjects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="w-full min-h-screen bg-[#0f0f0f] text-[#faf2eb] py-10 ">
        <Breadcrumbs />
        <div className="max-w-[2560px] px-[20px] lg:px-[72px] mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mobile <span className="text-[#f59211]">Applications</span>
            </h2>
            <div className="w-20 h-1 bg-[#f59211]"></div>
            <p className="mt-6 text-gray-400 max-w-xl">
              Specialized in building high-performance, native-feel mobile
              experiences using React Native and Expo.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                  activeCategory === cat
                    ? "bg-[#f59211] border-[#f59211] text-black"
                    : "border-gray-800 text-gray-500 hover:border-gray-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile App Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className="group flex flex-col items-center"
              >
                {/* Phone Mockup Frame */}
                <div className="relative w-[280px] h-[580px] bg-[#1a1a1a] rounded-[3rem] border-[8px] border-[#262626] shadow-2xl overflow-hidden mb-8 group-hover:border-[#f59211]/30 transition-colors duration-500">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#262626] rounded-b-2xl z-20"></div>

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Details */}
                <div className="text-center w-full max-w-sm">
                  <span className="text-[#f59211] text-xs font-bold uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mt-3 mb-6 px-4">
                    {project.description}
                  </p>

                  <div className="flex justify-center gap-4">
                    <a
                      href={project.appStore}
                      className="p-3 bg-[#1a1a1a] rounded-full hover:text-[#f59211] border border-gray-800 transition-all"
                    >
                      <FaAppStoreIos size={20} />
                    </a>
                    <a
                      href={project.playStore}
                      className="p-3 bg-[#1a1a1a] rounded-full hover:text-[#f59211] border border-gray-800 transition-all"
                    >
                      <FaGooglePlay size={18} />
                    </a>
                    <a
                      href={project.repoLink}
                      className="p-3 bg-[#1a1a1a] rounded-full hover:text-[#f59211] border border-gray-800 transition-all"
                    >
                      <FaCode size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MobileProjects;
