import {
  FaArrowRight,
  FaChartBar,
  FaGlobe,
  FaMobileAlt,
  FaTruckLoading,
  FaUsers,
} from "react-icons/fa";

const projectsData = [
  {
    title: "MedFinder",
    category: "Healthcare Logic & Growth",
    problem:
      "Patients struggled to locate specific medications in local pharmacies, leading to delayed treatments.",
    solution:
      "Engineered a real-time inventory tracking dashboard and a geolocation-based search interface for users.",
    result:
      "Optimized pharmacy management efficiency and reduced user search time by 60%.",
    icon: <FaChartBar className="text-[#f59211]" />,
    tags: ["System Architecture", "API Integration"],
  },
  {
    title: "Afamilia",
    category: "Niche Social Ecosystem",
    problem:
      "Families needed a secure, private space to coordinate life away from the noise of public social media.",
    solution:
      "Developed an encrypted mobile-first platform focusing on shared calendars and private asset management.",
    result:
      "Created a 'zero-noise' environment that increased daily family engagement for initial beta users.",
    icon: <FaMobileAlt className="text-[#f59211]" />,
    tags: ["Mobile Strategy", "UX Engineering"],
  },
  {
    title: "Global Outreach Strategy",
    category: "Technical Marketing",
    problem:
      "A service provider was invisible in organic search despite having a high-quality offering.",
    solution:
      "Implemented a technical SEO overhaul and a geo-targeted lead generation funnel.",
    result:
      "300% increase in qualified organic leads within the first quarter post-launch.",
    icon: <FaGlobe className="text-[#f59211]" />,
    tags: ["SEO", "Lead Generation"],
  },
  {
    title: "DejavuMoveInOut",
    slug: "dejavumoveinout",
    category: "Logistics & Spatial Planning",
    problem:
      "Moving logistics in dense urban areas like Lagos suffered from unpredictable pricing and poor route optimization.",
    solution:
      "Built a logistics platform integrating Google Maps API for precise distance-based quoting and a driver-matching algorithm.",
    result:
      "Achieved 95% quote accuracy and reduced fuel consumption by 20% through efficient route clustering.",
    icon: <FaTruckLoading className="text-[#f59211]" />,
    tags: ["GIS Integration", "Logistics Tech", "Next.js"],
    // Deep Dive Details
    year: "2025",
    role: "Lead Frontend Developer",
    overview:
      "DejavuMoveInOut is a specialized moving service platform designed to professionalize the relocation industry through automated scheduling and spatial data.",
    challenge:
      "The primary hurdle was calculating realistic transit times in high-traffic zones. I had to integrate traffic-aware spatial data to ensure the 'Move-In' window was actually achievable.",
    architecture:
      "The frontend utilizes Tailwind CSS for a 'rugged yet clean' aesthetic. The core is a custom pricing engine that consumes spatial coordinates and outputs immediate, binding quotes.",
    outcomes: [
      "Successfully automated 100% of the initial quoting process.",
      "Integrated a real-time tracking interface for clients.",
      "Streamlined driver communication via a dedicated dashboard.",
    ],
  },
  {
    title: "Zangah",
    slug: "zangah",
    category: "Community & Culture",
    problem:
      "Creative professionals lacked a centralized digital space to showcase collaborative projects and find niche talent.",
    solution:
      "Developed a media-heavy social hub with a focus on high-performance image rendering and user-to-user networking.",
    result:
      "Onboarded 200+ creatives in the first month with an average session duration of 12 minutes.",
    icon: <FaUsers className="text-[#f59211]" />,
    tags: ["Social Engineering", "UI/UX Design", "Performance"],
    // Deep Dive Details
    year: "2026",
    role: "Full Stack Engineer",
    overview:
      "Zangah was built as a portfolio-first community platform, emphasizing visual storytelling and professional networking for the modern African creative.",
    challenge:
      "Handling large media uploads without sacrificing PageSpeed. I implemented an aggressive lazy-loading strategy and an edge-delivery CDN to keep the experience fluid.",
    architecture:
      "Built with a mobile-first approach using React and Framer Motion for high-end transitions. It features a custom 'Collaboration' portal where users can co-author project posts.",
    outcomes: [
      "Maintained a 98/100 Lighthouse performance score despite high image density.",
      "Engineered a unique 'Discover' algorithm based on skill-tags.",
      "Facilitated over 50 cross-discipline collaborations in the beta phase.",
    ],
  },
];
export default projectsData;
