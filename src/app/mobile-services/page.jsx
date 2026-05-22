"use client";
import React, { useState } from "react";
import {
  FaMobile,
  FaLayerGroup,
  FaCloudUploadAlt,
  FaBolt,
  FaCodeBranch,
  FaCheckCircle,
} from "react-icons/fa";
import Footer from "../../../component/Footer";
import Breadcrumbs from "../../../component/Breadcrumbs,";
import ContactModal from "../../../component/ContactModal";

const MobileSolutions = () => {
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

  const capabilities = [
    {
      title: "Cross-Platform Efficiency",
      icon: <FaLayerGroup className="text-[#f59211]" size={24} />,
      desc: "Reach both iOS and Android users with a single, high-quality codebase. This reduces development costs by 40% and ensures feature parity across all devices.",
    },
    {
      title: "Seamless API Integration",
      icon: <FaCloudUploadAlt className="text-[#f59211]" size={24} />,
      desc: "Whether it’s real-time healthcare data or complex payment gateways, I build robust bridges between your app and your existing business data.",
    },
    {
      title: "Fluid, Native UX",
      icon: <FaBolt className="text-[#f59211]" size={24} />,
      desc: "60fps animations and gesture-based navigation. I prioritize the 'feel' of the app, ensuring zero lag and intuitive user journeys.",
    },
  ];

  return (
    <>
      <section className="w-full min-h-screen bg-[#0f0f0f] text-[#faf2eb] py-10 ">
        <Breadcrumbs />
        <div className="max-w-[2560px] px-[20px] lg:px-[72px] mx-auto">
          {/* Header Section */}
          <div className="mb-24">
            <span className="text-[#f59211] mb-10 font-mono text-sm tracking-[0.3em] uppercase">
              Mobile Development
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-8 leading-tight">
              Build once. <br />
              Deploy <span className="text-[#f59211]">Everywhere.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
              I develop scalable mobile applications that combine the speed of
              web development with the power of native performance. From concept
              to App Store deployment, I handle the technical complexity so you
              can focus on growth.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="p-10 rounded-[2rem] bg-[#161616] border border-gray-800 hover:border-[#f59211]/20 transition-all"
              >
                <div className="mb-6">{cap.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{cap.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Technical Process Section */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#f59211]/10 blur-3xl rounded-full"></div>
              <h2 className="text-4xl font-bold mb-8">
                Architected for{" "}
                <span className="text-[#f59211]">Scalability</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    t: "React Native & Expo",
                    d: "Industry-standard frameworks for rapid, reliable deployment.",
                  },
                  {
                    t: "State Management",
                    d: "Efficient data handling for complex app logic (Redux/Zustand).",
                  },
                  {
                    t: "Offline-First Design",
                    d: "Apps that work even when your users lose connection.",
                  },
                  {
                    t: "Automated Testing",
                    d: "Ensuring stability across hundreds of different device models.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <FaCheckCircle className="text-[#f59211] shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg">{item.t}</h4>
                      <p className="text-gray-500 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-12 rounded-[3rem] border border-gray-800 relative shadow-2xl">
              <FaMobile className="text-gray-800 absolute -bottom-10 -right-0 text-[200px] rotate-12 opacity-20" />
              <h3 className="text-2xl font-bold mb-6">Production Ready</h3>
              <p className="text-gray-400 mb-8 italic">
                "I don't just build apps that work on my machine. I build apps
                that pass App Store scrutiny and delight thousands of real-world
                users."
              </p>
              <div className="flex gap-4 flex-wrap">
                {["iOS", "Android", "Web", "Tablet"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-black rounded-full text-xs font-bold border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Case Study Callout / Proof */}
          <div className="bg-[#deb887] rounded-[2rem] p-10 md:p-16 text-black">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                Need a Mobile <br />
                Transformation?
              </h2>
              <p className="text-lg font-semibold mb-10 opacity-90">
                Whether it's a specialized tool like "The MedFinder" for
                healthcare or a private family ecosystem like "Afamilia," I
                build the architecture that makes your mobile vision a reality.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-black text-white px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
              >
                Let's Discuss Your App
              </button>
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

export default MobileSolutions;
