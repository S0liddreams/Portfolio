"use client";
import React, { useState } from "react";
import {
  FaGlobeAfrica,
  FaChartPie,
  FaMapMarkedAlt,
  FaLayerGroup,
  FaSearchLocation,
  FaProjectDiagram,
} from "react-icons/fa";
import Footer from "../../../component/Footer";
import Breadcrumbs from "../../../component/Breadcrumbs,";
import ContactModal from "../../../component/ContactModal";

const GISSolutions = () => {
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
  const services = [
    {
      title: "Market Division & Territory Planning",
      icon: <FaLayerGroup className="text-[#f59211]" />,
      desc: "Optimizing sales territories and service zones using spatial clustering. I help businesses eliminate overlap and maximize coverage efficiency.",
    },
    {
      title: "Customer Geospatial Profiling",
      icon: <FaSearchLocation className="text-[#f59211]" />,
      desc: "Visualizing where your customers live, work, and spend. By mapping demographic data against location, I reveal hidden patterns in consumer behavior.",
    },
    {
      title: "Custom Web-GIS Integration",
      icon: <FaMapMarkedAlt className="text-[#f59211]" />,
      desc: "Integrating powerful maps (Leaflet, Mapbox, Google Maps API) into your existing software to turn static data into interactive spatial dashboards.",
    },
  ];

  return (
    <>
      <section className="w-full min-h-screen bg-[#0f0f0f] text-[#faf2eb] py-10  overflow-hidden">
        <Breadcrumbs />
        <div className="max-w-[2560px] px-[20px] lg:px-[72px] mx-auto">
          {/* Hero Section */}
          <div className="relative mb-32">
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#f59211]/5 blur-[120px] rounded-full"></div>
            <span className="text-[#f59211] font-mono text-sm tracking-[0.3em] uppercase">
              Spatial Data Engineering
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mt-6 mb-8 leading-tight">
              Turn Location <br />
              Into <span className="text-[#f59211]">Intelligence.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              I combine my B.Sc. in Geography with full-stack engineering to
              build location-aware applications. I don't just put points on a
              map—I build the logic that tells you{" "}
              <strong>why those points matter.</strong>
            </p>
          </div>

          {/* Core Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {services.map((service, i) => (
              <div
                key={i}
                className="group p-8 rounded-[2rem] bg-[#161616] border border-gray-800 hover:border-[#f59211]/30 transition-all duration-500"
              >
                <div className="text-3xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* The "Why Hire Me" Section */}
          <div className="bg-[#1a1a1a] rounded-[3rem] p-8 md:p-16 border border-gray-800 relative mb-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Why Hire a{" "}
                  <span className="text-[#f59211]">GIS-Specialist</span>{" "}
                  Engineer?
                </h2>
                <p className="text-gray-400 mb-8">
                  A standard developer treats a location as two numbers
                  (Latitude/Longitude). As a Geography graduate, I understand{" "}
                  <strong>Spatial Topology</strong>,
                  <strong>Proximity Analysis</strong>, and{" "}
                  <strong>Geofencing</strong>.
                </p>

                <ul className="space-y-4">
                  {[
                    "Precision Market Segmentation",
                    "Supply Chain & Logistics Mapping",
                    "Real Estate & Site Selection Analytics",
                    "Interactive Demographic Heatmaps",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm font-semibold"
                    >
                      <div className="w-1.5 h-1.5 bg-[#f59211] rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                {/* Visual Representation of Mapping */}
                <div className="aspect-square bg-black rounded-3xl border border-gray-700 flex items-center justify-center relative overflow-hidden group">
                  <FaGlobeAfrica className="text-[#f59211]/10 text-[300px] absolute animate-pulse" />
                  <div className="z-10 text-center p-6">
                    <FaChartPie className="text-[#f59211] text-5xl mx-auto mb-4" />
                    <h4 className="text-xl font-bold">Data Visualization</h4>
                    <p className="text-gray-500 text-xs mt-2 italic">
                      Converting complex spatial queries into readable business
                      charts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-12 bg-[#deb887] rounded-[2rem] text-black">
            <div>
              <h3 className="text-3xl font-black mb-2">
                Ready to Map Your Success?
              </h3>
              <p className="font-medium opacity-70">
                Let’s discuss how spatial data can optimize your business
                operations.
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="whitespace-nowrap bg-[#f59211] text-black px-12 py-5 rounded-2xl font-black hover:bg-black hover:text-[#f59211] transition-all shadow-xl"
            >
              Get A Spatial Audit
            </button>
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

export default GISSolutions;
