"use client";
import React, { useState } from "react";
import {
  FaCheckCircle,
  FaChartLine,
  FaShieldAlt,
  FaMobileAlt,
  FaBolt,
  FaLayerGroup,
} from "react-icons/fa";
import Footer from "../../../component/Footer";
import Breadcrumbs from "../../../component/Breadcrumbs,";
import ContactModal from "../../../component/ContactModal";

const BusinessSolutions = () => {
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
  const coreDeliverables = [
    {
      title: "Conversion-Focused Design",
      icon: <FaChartLine className="text-[#f59211]" size={24} />,
      points: [
        "Clear Call-to-Actions",
        "User Behavior Optimization",
        "Brand Authority Styling",
      ],
    },
    {
      title: "Ultra-Fast Performance",
      icon: <FaBolt className="text-[#f59211]" size={24} />,
      desc: "Built with Next.js for sub-second loading speeds that keep customers from leaving.",
      icon2: <FaLayerGroup />,
    },
    {
      title: "Mobile-First Accessibility",
      icon: <FaMobileAlt className="text-[#f59211]" size={24} />,
      points: [
        "Thumb-friendly Navigation",
        "Adaptive Layouts",
        "App-like Experience",
      ],
    },
  ];

  return (
    <>
      <section className="w-full min-h-screen bg-[#0f0f0f] text-[#faf2eb] py-10  font-sans">
        <Breadcrumbs />
        <div className="max-w-[2560px] px-[20px] lg:px-[72px] mx-auto">
          {/* Business-Centric Hero */}
          <div className="max-w-3xl mb-24">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              High-Performance <br />
              <span className="text-[#f59211]">
                Website Application.
              </span> for <br />
              Modern Businesses.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              I build high-performance digital platforms that work as hard as
              you do. Moving beyond basic web design, I engineer scalable
              systems focused on capturing leads, establishing market authority,
              and turning your visitors into long-term customers
            </p>
          </div>

          {/* Solution Standards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {coreDeliverables.map((item, index) => (
              <div
                key={index}
                className="bg-[#161616] border border-gray-800 p-10 rounded-3xl hover:border-[#f59211]/30 transition-all"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-6">{item.title}</h3>
                <ul className="space-y-4">
                  {(item.points || [item.desc]).map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-400 text-sm"
                    >
                      <FaCheckCircle
                        className="text-[#f59211] mt-1 shrink-0"
                        size={14}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Targeted Industry Solutions */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Solutions Tailored to Your Industry
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-black border border-gray-800">
                <h4 className="text-[#f59211] font-bold mb-2">
                  For Service Providers
                </h4>
                <p className="text-gray-400 text-sm">
                  Healthcare, Logistics, and Professional Services platforms
                  focused on seamless booking and client management.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-black border border-gray-800">
                <h4 className="text-[#f59211] font-bold mb-2">
                  For Luxury & Creative Brands
                </h4>
                <p className="text-gray-400 text-sm">
                  High-end visual storytelling and immersive landing page that
                  justify premium pricing and establish authority.
                </p>
              </div>
            </div>
          </div>

          {/* Reassurance Section (Security/Support) */}
          <div className="bg-[#deb887] text-black rounded-[3rem] p-10 md:p-20 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Built to be Secure. <br />
                Managed by You.
              </h2>
              <p className="font-medium opacity-80 leading-relaxed">
                Every solution I build includes an intuitive management
                interface designed for business owners. This eliminates the need
                for ongoing maintenance fees for simple updates, allowing your
                team to manage your digital presence independently and
                efficiently.
              </p>
            </div>
            <div className="shrink-0">
              <div className="p-8 bg-black/10 rounded-full border border-black/20">
                <FaShieldAlt size={80} />
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-32 text-center">
            <h3 className="text-2xl font-bold text-gray-500 mb-4 uppercase tracking-widest">
              The Next Step
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-10">
              Ready to Upgrade Your <br />
              Digital Presence?
            </h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-transparent border-2 border-[#f59211] text-[#f59211] hover:bg-[#f59211] hover:text-black px-12 py-5 rounded-full font-bold text-lg transition-all duration-300"
            >
              Request a Consultation
            </button>
          </div>
        </div>
      </section>
      <Footer />

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        handleSubmit={handleSubmit}
        formMsg={formMsg}
      />
    </>
  );
};

export default BusinessSolutions;
