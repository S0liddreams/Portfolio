"use client";
import React, { useState } from "react";
import {
  FaArrowLeft,
  FaCode,
  FaLightbulb,
  FaCheckDouble,
  FaTools,
} from "react-icons/fa";
import Link from "next/link";
import ContactModal from "./ContactModal";

const ProjectDetails = ({ project }) => {
  const [formMsg, setFormMsg] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // If using the modal

  // 2. Define the missing handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormMsg("Sending...");

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyocdLsYxQZZdReANPVE1OWgJEgU8bqxUZUT5dFU7qWTI3Y3JpqHcVxVAkHyQrzhvc/exec";

    // Important: Google Apps Script works best with standard FormData
    // but requires the 'no-cors' mode when called from a local development environment.
    try {
      await fetch(scriptURL, {
        method: "POST",
        body: new FormData(e.target),
        mode: "no-cors", // This prevents the 'Failed to fetch' CORS error
      });

      // Note: With 'no-cors', we can't actually check if response.ok is true
      // because the response is "opaque". We assume success if no error is caught.
      setFormMsg("Message Sent successfully");
      e.target.reset();

      setTimeout(() => setFormMsg(""), 5000);
    } catch (error) {
      console.error("Error!", error.message);
      setFormMsg("Something went wrong. Please try again.");
    }
  };
  // Fallback to prevent crashes if data is missing during transition
  if (!project) return <div className="min-h-screen bg-[#0f0f0f]" />;

  const data = project;

  return (
    <section className="min-h-screen bg-[#0f0f0f] text-[#faf2eb] py-20 px-6 font-sans">
      <div className="max-w-[2560px] mx-auto px-[20px] lg:px-[72px]">
        {/* Navigation */}
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#f59211] transition-all mb-12 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Case Studies
        </Link>

        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex flex-wrap gap-3 mb-6">
            {data.stack?.map((tech) => (
              <span
                key={tech}
                className="bg-[#1a1a1a] text-[#f59211] text-[10px] font-bold px-3 py-1 rounded-full border border-[#f59211]/20 uppercase tracking-tighter"
              >
                {tech}
              </span>
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">
            {data.title}
          </h1>
          <p className="text-xl text-gray-400 font-medium">{data.subtitle}</p>
        </div>

        {/* Project Metadata */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-gray-900 mb-16">
          <div>
            <p className="text-[10px] uppercase text-gray-600 font-black mb-1">
              Year
            </p>
            <p className="font-bold">{data.date}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase text-gray-600 font-black mb-1">
              Role
            </p>
            <p className="font-bold">{data.role}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase text-gray-600 font-black mb-1">
              Impact
            </p>
            <p className="font-bold text-[#f59211]">High Growth</p>
          </div>
          <div>
            <p className="text-[10px] uppercase text-gray-600 font-black mb-1">
              Status
            </p>
            <p className="font-bold text-green-500 italic">Production</p>
          </div>
        </div>

        {/* Detailed Narrative */}
        <div className="space-y-20">
          {/* Section 1: The Strategic Overview */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-10">
            <div className="flex gap-4">
              <FaLightbulb className="text-[#f59211] text-2xl shrink-0" />
              <h2 className="text-2xl font-bold">The Strategic Overview</h2>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg italic">
              "{data.overview}"
            </p>
          </div>

          {/* Section 2: Technical Challenge */}
          <div className="bg-[#161616] p-10 rounded-[2.5rem] border border-gray-800">
            <div className="flex gap-4 mb-6">
              <FaTools className="text-[#f59211] text-2xl shrink-0" />
              <h2 className="text-2xl font-bold">The Engineering Challenge</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">{data.challenge}</p>
          </div>

          {/* Section 3: Execution & Solution */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-10">
            <div className="flex gap-4">
              <FaCode className="text-[#f59211] text-2xl shrink-0" />
              <h2 className="text-2xl font-bold">Execution & Solution</h2>
            </div>
            <div className="text-gray-400 leading-relaxed space-y-4">
              <p>{data.solution}</p>
              <div className="p-6 bg-black rounded-2xl border border-gray-800 font-mono text-xs text-gray-500">
                // Scalability & Performance Note <br />
                "System architecture optimized for low-latency interactions and
                high-concurrency throughput across all target devices."
              </div>
            </div>
          </div>

          {/* Section 4: Key Results */}
          <div className="border-l-2 border-[#f59211] pl-8 py-4">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <FaCheckDouble className="text-[#f59211]" /> Final Outcomes
            </h2>
            <ul className="space-y-6">
              {data.outcomes?.map((outcome, i) => (
                <li key={i} className="flex gap-4 text-lg font-medium">
                  <span className="text-[#f59211] font-black">0{i + 1}.</span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Call to Action */}
        <div className="mt-32 text-center">
          <p className="text-gray-500 mb-6 uppercase tracking-widest text-xs font-bold">
            Interested in similar results?
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block bg-[#f59211] text-black px-12 py-5 rounded-full font-black hover:scale-105 transition-all shadow-xl"
          >
            Let's Discuss Your Project
          </button>
        </div>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        handleSubmit={handleSubmit}
        formMsg={formMsg}
      />
    </section>
  );
};

export default ProjectDetails;
