const projectDataDetails = [
  {
    title: "The MedFinder",
    slug: "medfinder",
    subtitle: "Healthcare Inventory & Geolocation System",
    date: "2026",
    role: "Lead Software Architect",
    stack: ["Next.js", "Firebase", "Tailwind CSS", "Google Maps API"],
    overview:
      "MedFinder was born from a critical gap in the Nigerian healthcare market: the inability to locate life-saving medication during emergencies. I engineered a solution that connects pharmacies directly to consumers.",
    challenge:
      "The primary technical hurdle was synchronizing fragmented inventory data across multiple pharmacy branches while ensuring the user interface remained accessible for non-technical users in high-stress situations.",
    solution:
      "I implemented a role-based admin dashboard for pharmacy managers to update stock in real-time. On the frontend, I used Geofencing and Proximity Analysis to show users the nearest available stock, rather than just a list of names.",
    outcomes: [
      "Reduced medication search time from hours to seconds.",
      "Successfully onboarded multiple pharmacies with a zero-learning-curve dashboard.",
      "Implemented an offline-first search cache for users with unstable internet.",
    ],
  },
  {
    title: "Afamilia",
    slug: "afamilia",
    subtitle: "Secure Private Family Network & Asset Vault",
    date: "2025",
    role: "Full Stack Developer",
    stack: ["React Native", "Node.js", "AES-256 Encryption", "PostgreSQL"],
    overview:
      "Afamilia was designed to give families a 'digital sanctuary'—a place to store sensitive documents, coordinate schedules, and communicate without the data-mining or noise of public social media.",
    challenge:
      "The challenge was building a 'Zero-Knowledge' encryption system that kept family documents private while ensuring the UI was simple enough for children and grandparents to navigate effortlessly.",
    solution:
      "I developed an encrypted vault for assets and a shared calendar system. By implementing a customized notification engine, I ensured that family-critical updates reached members without contributing to notification fatigue.",
    outcomes: [
      "Eliminated reliance on insecure group chats for family logistics.",
      "Achieved 100% data privacy through end-to-end encryption of shared documents.",
      "Integrated a legacy planning feature for secure digital asset transfer.",
    ],
  },
  {
    title: "Global Outreach Strategy",
    slug: "global-outreach-strategy",
    subtitle: "Conversion-Engineered SEO & Lead Gen Funnel",
    date: "2026",
    role: "Technical SEO Strategist",
    stack: ["Next.js", "SSG", "Google Search Console", "Vercel Analytics"],
    overview:
      "A service provider had a world-class offering but zero digital footprint. I transformed their web presence into a lead-generating machine by focusing on technical performance and semantic search optimization.",
    challenge:
      "The market was dominated by legacy competitors with high domain authority. I had to build a site that was technically faster and more relevant than established giants to win the SEO battle.",
    solution:
      "I utilized Static Site Generation (SSG) for near-instant load speeds and implemented a geo-targeted content strategy. I also built a custom lead-capture funnel that automatically qualified prospects before they reached the sales team.",
    outcomes: [
      "Reached the #1 spot on Google for 10+ high-converting industry keywords.",
      "Increased organic lead volume by 300% in the first 90 days.",
      "Reduced acquisition cost per lead by over 40%.",
    ],
  },

  {
    title: "DejavuMoveInOut",
    slug: "dejavumoveinout",
    subtitle: "Spatial Logistics & Relocation Management",
    date: "2025",
    role: "Lead Frontend Engineer",
    stack: ["React", "Google Maps Matrix API", "Tailwind CSS", "GIS Data"],
    overview:
      "Relocation in urban Nigeria is notoriously stressful due to opaque pricing and traffic. DejavuMoveInOut professionalizes the process through data-driven logistics and route optimization.",
    challenge:
      "Calculating fair, binding prices for moves required accounting for distance, vehicle volume, and real-time traffic data, which traditional moving companies usually estimate poorly.",
    solution:
      "I integrated the Google Maps Matrix API to build a dynamic pricing engine. I also created a spatial dashboard that clusters move requests geographically, allowing drivers to optimize their daily routes.",
    outcomes: [
      "Standardized pricing across the platform, eliminating haggling.",
      "Reduced fuel consumption and transit time by 20% through route clustering.",
      "Built a real-time 'Move Tracker' for clients to monitor their belongings during transit.",
    ],
  },
  {
    title: "Zangah",
    slug: "zangah",
    subtitle: "Collaborative Social Platform for African Creatives",
    date: "2026",
    role: "Frontend Architect",
    stack: ["Next.js", "Framer Motion", "Cloudinary SDK", "Supabase"],
    overview:
      "Zangah is a high-performance community hub built to showcase the diversity of African creativity. It bridges the gap between individual portfolios and collaborative networking.",
    challenge:
      "A media-heavy platform can easily become slow and sluggish. I needed to ensure that 4K portfolio images loaded instantly without hurting the Core Web Vitals.",
    solution:
      "I implemented an aggressive image optimization pipeline using Cloudinary and built fluid, app-like transitions with Framer Motion. I also engineered a 'Project-Based Networking' system where users can link their profiles to specific collaborative works.",
    outcomes: [
      "Maintained a Lighthouse performance score of 95+ despite heavy media use.",
      "Facilitated over 100 cross-discipline creative collaborations in the first month.",
      "Reduced user bounce rate by providing a seamless, immersive 'infinite scroll' experience.",
    ],
  },
];

export default projectDataDetails;
