"use client";
import { useState } from "react";
import Head from "next/head";
import {
  FaCode,
  FaPenNib,
  FaMap,
  FaMoneyBillTrendUp,
  FaPhone,
  FaAndroid,
} from "react-icons/fa6";
import Skills from "../../component/skills";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../component/Navbar";

const services = [
  {
    icon: <FaCode />,
    color: "text-blue-500",
    title: "Web Development",
    desc: "Custom result-driven designs for businesses and portfolios.",
    link: "/web-services",
  },
  {
    icon: <FaAndroid />,
    color: "text-purple-500",
    title: "Mobile App",
    desc: "Cross-platform development using React Native / Expo, focusing on scalable architecture, API integration, and high-performance UX.",
    link: "/mobile-services",
  },
  {
    icon: <FaMap />,
    color: "text-green-500",
    title: "GIS",
    desc: "Market division, customer profiling, and data mapping.",
    link: "/gis-services",
  },
  {
    icon: <FaMoneyBillTrendUp />,
    color: "text-emerald-600",
    title: "Marketing",
    desc: "Strategic market growth and lead generation.",
    link: "/marketing-services",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("skills");

  const [formMsg, setFormMsg] = useState("");

  const handleTabOpen = (tabName) => {
    setActiveTab(tabName);
  };

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

  return (
    <div className="bg-[#080808] text-white font-sans scroll-smooth">
      {/* --- NAVIGATION --- */}
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section
        id="home"
        className="relative h-screen w-full flex items-center pt-[36px] justify-center bg-[url('/background1.jpg')] bg-cover bg-center bg-no-repeat"
      >
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 perspective-1000">
            I &apos; m
            {/* Changed from hover:rotate to a constant animation class */}
            <span className="inline-block ml-4 mt-8 cursor-default  animate-bounce  text-[#deb887]">
              UCHE CHUKWUEMEKA DANIEL
            </span>
          </h1>

          <p className="text-[#deb887] font-medium tracking-widest uppercase mb-4 animate-fade-in">
            Welcome to my portfolio
          </p>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-[2px] h-30 bg-gradient-to-b from-[#deb887] to-transparent"></div>
        </div>
      </section>

      {/* --- ABOUT --- */}
      <div id="about" className="py-20 px-4 md:px-20 scroll-mt-20">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="basis-full relative md:basis-[35%] h-[400px] md:h-[500px]">
            <Image
              src="/profileimage2.png"
              alt="Profile"
              fill
              className="object-cover rounded-2xl" // remove 'absolute' — fill handles that
            />
          </div>
          <div className="basis-full md:basis-[60%]">
            <h1 className="text-4xl md:text-6xl font-semibold mb-6">
              About Me
            </h1>
            <p className="text-gray-300 leading-relaxed">
              A Software Engineer with 6+ years of experience building
              responsive, high-performance web applications and mobile apps in
              React.js, TypeScript, and Next.js and delivering measurable user
              engagement improvements and collaborating with cross-functional
              product teams.
            </p>

            <div className="flex mt-8 mb-10 border-b border-gray-700">
              {["skills", "experience"].map((tab) => (
                <p
                  key={tab}
                  className={`mr-12 text-lg font-medium cursor-pointer relative pb-2 capitalize ${activeTab === tab ? "text-white" : "text-gray-400"}`}
                  onClick={() => handleTabOpen(tab)}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-[-2px] left-0 w-1/2 h-[3px] bg-[#f59211] transition-all duration-500"></span>
                  )}
                </p>
              ))}
            </div>

            {/* TAB CONTENTS */}
            <div className={activeTab === "skills" ? "block" : "hidden"}>
              <Skills />
            </div>

            <div className={activeTab === "experience" ? "block" : "hidden"}>
              <div className={activeTab === "experience" ? "block" : "hidden"}>
                <ul className="space-y-6">
                  {/* Current Technical Role */}
                  <li>
                    <span className="text-[#f59211] font-bold text-lg">
                      2025 - 2026
                    </span>
                    <p className="text-white font-medium uppercase tracking-wider">
                      Full Stack Developer | Mobile Lead
                    </p>
                    <p className="text-gray-400 text-sm">
                      BLUE CYBERTAUR TECHNOLOGIES LTD(Afamilia Project)
                    </p>
                    <p className="text-xs text-gray-500 mt-2 max-w-lg leading-relaxed">
                      Architected and deployed **Afamilia**, a cross-platform
                      mobile application designed to bridge family connectivity.
                      Engineered real-time messaging architectures, secure media
                      sharing protocols, and integrated cloud-based backend
                      services to ensure a seamless, high-performance user
                      experience on both iOS and Android.
                    </p>
                  </li>

                  {/* Zanga / Academic Role Reframed */}
                  <li>
                    <span className="text-[#f59211] font-bold text-lg">
                      2023 - 2024
                    </span>
                    <p className="text-white font-medium uppercase tracking-wider">
                      Full Stack Developer
                    </p>
                    <p className="text-gray-400 text-sm">Zangah Africa</p>
                    <p className="text-xs text-gray-500 mt-2 max-w-lg leading-relaxed">
                      Developed and maintained an immersive **Cultural
                      Showcasing platform**, engineering a dynamic Content
                      Management System (CMS) to preserve and display rich
                      multimedia heritage. Optimized frontend performance for
                      high-resolution visual storytelling while managing secure
                      backend architectures for digital archiving.
                    </p>
                  </li>

                  {/* Spatial Data / Full Stack Foundation */}
                  <li>
                    <span className="text-[#f59211] font-bold text-lg">
                      2017 - 2018
                    </span>
                    <p className="text-white font-medium uppercase tracking-wider">
                      Junior Spatial Data Engineer (Intern)
                    </p>
                    <p className="text-gray-400 text-sm">GIS Consult Ltd</p>
                    <p className="text-xs text-gray-500 mt-2 max-w-lg">
                      Bridging Geography and Software Engineering through
                      spatial data analysis, database management, and automated
                      mapping using ArcGIS/QGIS.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- SERVICES --- */}
      <div
        id="services"
        className="py-12 px-8 md:px-16 scroll-mt-20 bg-[#1a1a1a] text-white"
      >
        <h1 className="text-4xl font-semibold mb-10">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-[#262626] p-10 rounded-xl hover:bg-[#deb887] hover:-translate-y-2 transition-all duration-500 group"
            >
              {/* Render the icon component and ensure it has a size */}
              <div
                className={`text-5xl mb-8 ${service.color} group-hover:text-white transition-colors flex items-center`}
              >
                {service.icon}
              </div>

              <h2 className="text-2xl font-light mb-4 group-hover:text-black transition-colors">
                {service.title}
              </h2>

              <div className="flex flex-col gap-6">
                <div className="h-[50px]">
                  <p className="text-sm font-light mb-6 group-hover:text-gray-800 transition-colors">
                    {service.desc}
                  </p>
                </div>

                <div className="h-[50px]">
                  <a
                    href={service.link}
                    className="text-[#f59211] text-xs font-bold group-hover:text-black uppercase tracking-widest transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- PORTFOLIO --- */}
      <div id="portfolio" className="py-24 px-8 md:px-16 scroll-mt-20">
        <h1 className="text-4xl font-semibold mb-10">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              img: "img22.png",
              title: "Web App",
              desc: "Custom built for scale.",
              link: "/web-app",
            },
            {
              img: "img102.jpg",
              title: "GIS Project",
              desc: "Data-driven mapping.",
              link: "#",
            },
            {
              img: "img103.jpg",
              title: "Mobile App",
              desc: "High-performance mobile solution built for a seamless user experience.",
              link: "/mobile-app",
            },
          ].map((work, i) => (
            <div key={i} className="rounded-xl relative overflow-hidden group">
              <img
                src={`/${work.img}`}
                className="w-full rounded-xl h-full group-hover:scale-110 transition-transform duration-500"
              />
              <a
                href={work.link}
                className="absolute inset-0 h-0 group-hover:h-full bg-gradient-to-t from-[#f59211] to-black/60 flex flex-col items-center justify-center px-10 text-center transition-all duration-500 overflow-hidden"
              >
                <h3 className="font-medium mb-4">{work.title}</h3>
                <p className="text-sm">{work.desc}</p>
                <span className="mt-4 bg-white text-red-600 w-12 h-12 rounded-full flex items-center justify-center text-xl">
                  <i className="fas fa-arrow-up-right-from-square"></i>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* --- CONTACT --- */}
      <div id="contact" className="py-16 px-8 md:px-20 scroll-mt-20">
        <div className="flex flex-wrap gap-12">
          <div className="basis-full md:basis-[35%]">
            <h1 className="text-4xl font-semibold mb-8">Contact Me</h1>
            <p className="flex items-center gap-4 mb-4">
              <i className="fas fa-inbox text-[#f59211] text-2xl"></i>{" "}
              soliddreamsdev@gmail.com
            </p>
            <p className="flex items-center gap-4 mb-8">
              <i className="fas fa-phone text-[#f59211] text-2xl"></i>{" "}
              +2349017648449
            </p>
            <div className="flex gap-4 mb-8">
              {[
                { name: "github", link: "https://github.com/S0liddreams" }, // Professional dev link
                {
                  name: "linkedin",
                  link: "https://www.linkedin.com/in/uche-daniel-ck/",
                },

                { name: "whatsapp", link: "https://wa.me/2349017648449" }, // Replace with your number
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-300 hover:text-[#f59211] hover:-translate-y-1 transition-all duration-300"
                >
                  <i className={`fab fa-${social.name}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="basis-full md:basis-[60%]">
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-[#262626] p-4 outline-none rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-[#262626] p-4 outline-none rounded-md"
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                className="w-full bg-[#262626] p-4 outline-none rounded-md"
              ></textarea>
              <button
                type="submit"
                className="bg-[#f59211] px-14 py-4 text-lg rounded-md cursor-pointer"
              >
                Submit
              </button>
            </form>
            <span className="text-[#f59211] mt-4 block">{formMsg}</span>
          </div>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="bg-[#deb887] py-6 text-center text-black font-medium mt-10">
        <p>Copyright &copy; Soliddreamdevs.</p>
      </footer>
    </div>
  );
}
