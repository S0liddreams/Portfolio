"use client";
import React from "react";
import {
  FaArrowRight,
  FaChartBar,
  FaGlobe,
  FaMobileAlt,
  FaTruckLoading,
  FaUsers,
} from "react-icons/fa";
import Link from "next/link";
import projectsData from "../../../data/projectsData";
import Footer from "../../../component/Footer";
import Breadcrumbs from "../../../component/Breadcrumbs,";

const CaseStudies = () => {
  return (
    <div className="">
      <section id="case-studies" className="py-10 bg-[#0f0f0f] ">
        <Breadcrumbs />
        <div className="max-w-[1440px] mx-auto px-[20px] lg:px-[72px]">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl text-white font-black mb-6">
              Proven <span className="text-[#f59211]">Results.</span>
            </h2>
            <p className="text-gray-400 max-w-xl">
              I don't just build features; I solve business problems. Here is
              how my technical and strategic work has delivered real-world
              impact.
            </p>
          </div>

          {/* Case Study Grid */}
          <div className="grid grid-cols-1 gap-8">
            {projectsData.map((project, i) => (
              <div
                key={i}
                className="group bg-[#161616] border border-gray-800 rounded-[2.5rem] p-8 md:p-12 hover:border-[#f59211]/40 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row gap-10">
                  {/* Left Side: Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-black rounded-xl border border-gray-800">
                        {project.icon}
                      </div>
                      <span className="text-[#f59211] font-bold text-sm tracking-widest uppercase">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-3xl text-[#f59211] font-bold mb-8 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>

                    <div className="grid sm:grid-cols-3 gap-8">
                      <div>
                        <h4 className="text-xs uppercase text-gray-500 font-black mb-2 tracking-tighter">
                          The Problem
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs uppercase text-gray-500 font-black mb-2 tracking-tighter">
                          The Solution
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs uppercase text-[#f59211] font-black mb-2 tracking-tighter">
                          The Result
                        </h4>
                        <p className="text-sm text-white font-medium leading-relaxed">
                          {project.result}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: CTA / Tags */}
                  <div className="md:w-48 flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-800 pt-8 md:pt-0 md:pl-10">
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] bg-black px-3 py-1 rounded-full border border-gray-700 text-gray-400 uppercase font-bold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/case-studies/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex items-center justify-between w-full group/btn text-sm font-bold text-gray-300 hover:text-[#f59211] transition-all cursor-pointer"
                    >
                      Full Details
                      <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Stat */}
          <div className="mt-20 p-10 bg-gradient-to-br from-[#1a1a1a] to-black rounded-[2rem] border border-gray-800 text-center">
            <p className="text-gray-400 italic">
              "Engineering success isn't about the code you write; it's about
              the growth you enable."
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CaseStudies;
