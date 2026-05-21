"use client";
import React, { useState } from "react";
import {
  FaChartLine,
  FaUsers,
  FaBullseye,
  FaSearchDollar,
  FaMagnet,
  FaLayerGroup,
} from "react-icons/fa";
import Footer from "../../../component/Footer";
import Breadcrumbs from "../../../component/Breadcrumbs,";
import ContactModal from "../../../component/ContactModal";
import Link from "next/link";

const MarketingSolutions = () => {
  // 1. Define the missing state
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
  const pillars = [
    {
      title: "Strategic Growth Engineering",
      icon: <FaChartLine className="text-[#f59211]" size={32} />,
      desc: "Moving beyond basic reach. I analyze market gaps and technical trends to build long-term growth trajectories that actually scale.",
    },
    {
      title: "Precision Lead Generation",
      icon: <FaMagnet className="text-[#f59211]" size={32} />,
      desc: "Designing high-conversion funnels that attract high-intent prospects. I focus on quality over quantity to ensure your sales team spends time on the right leads.",
    },
    {
      title: "Technical SEO & Authority",
      icon: <FaSearchDollar className="text-[#f59211]" size={32} />,
      desc: "Optimizing your digital footprint from the root. I align technical performance with content strategy to dominate search rankings.",
    },
  ];

  return (
    <>
      <section className="w-full min-h-screen bg-[#0f0f0f] text-[#faf2eb] py-10 ">
        <Breadcrumbs />
        <div className="max-w-[2560px] px-[20px] lg:px-[72px] mx-auto">
          {/* Hero Section */}
          <div className="max-w-4xl mb-32">
            <span className="text-[#f59211] font-mono text-sm tracking-[0.4em] uppercase">
              Growth & Strategy
            </span>
            <h1 className="text-5xl md:text-8xl font-black mt-8 mb-10 leading-[0.9]">
              Growth <br />
              By <span className="text-[#f59211]">Design.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              I don't just buy ads; I build systems that find, attract, and
              retain your ideal customers. Combining technical precision with
              market psychology to drive **predictable revenue.**
            </p>
          </div>

          {/* The Strategy Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
            {pillars.map((pillar, i) => (
              <div key={i} className="relative group">
                <div className="mb-8 p-4 w-fit bg-[#1a1a1a] rounded-2xl border border-gray-800 group-hover:border-[#f59211]/50 transition-all duration-500">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Value Proposition Box */}
          <div className="bg-[#1a1a1a] rounded-[3rem] p-10 md:p-20 border border-gray-800 relative overflow-hidden mb-32">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <FaBullseye size={200} className="text-[#f59211]" />
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Built for <span className="text-[#f59211]">Conversion.</span>
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="text-[#f59211] font-black text-4xl">01</div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">
                        Market Profiling
                      </h4>
                      <p className="text-gray-500 text-sm">
                        Deep-dive customer persona analysis using actual market
                        data to find exactly where your audience spends their
                        time.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-[#f59211] font-black text-4xl">02</div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">
                        Technical Funnels
                      </h4>
                      <p className="text-gray-500 text-sm">
                        Custom landing pages and automated email flows that move
                        prospects from 'curious' to 'client' without manual
                        friction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center bg-black/40 p-10 rounded-3xl border border-gray-700">
                <h4 className="text-[#f59211] font-bold mb-4 uppercase tracking-widest text-xs">
                  The Result
                </h4>
                <p className="text-2xl font-bold mb-6">
                  "Daniel doesn't just manage marketing—he engineers growth
                  paths."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f59211] flex items-center justify-center text-black font-bold italic">
                    DM
                  </div>
                  <div>
                    <p className="font-bold">Uche C. Daniel</p>
                    <p className="text-gray-500 text-xs tracking-tighter">
                      Strategic Growth Lead
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="text-center py-20 border-t border-gray-900">
            <h3 className="text-3xl md:text-5xl font-black mb-10">
              Ready to Outperform <br />
              Your <span className="text-[#f59211]">Competition?</span>
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#f59211] text-black px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-lg"
              >
                Start My Growth Plan
              </button>
              <Link href="/case-studies">
                <div className="bg-transparent border border-gray-700 text-gray-400 px-12 py-5 rounded-2xl font-bold hover:text-white hover:border-white transition-all">
                  View Case Studies
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        handleSubmit={handleSubmit}
        formMsg={formMsg}
      />
      <Footer />
    </>
  );
};

export default MarketingSolutions;
