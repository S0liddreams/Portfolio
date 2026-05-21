import React from "react";
import Image from "next/image";

const Skills = () => {
  const techStack = [
    { name: "HTML", src: "/html.png" },
    { name: "JAVASCRIPT", src: "/javascript.png" },
    { name: "REACT", src: "/react.png" },
    { name: "TAILWINDCSS", src: "/tailwind.png" },
    { name: "GITHUB", src: "/github.png" },
    { name: "NODE JS", src: "/node.png" },
    { name: "MONGO DB", src: "/mongo.png" },
    { name: "REACT NATIVE", src: "/react-native-logo.png" },
    { name: "EXPO", src: "/expo.png" },
    { name: "NEXT.JS", src: "/nextjs.png" },
    { name: "FIGMA", src: "/figma.png" },
    { name: "GIS", src: "/gis1.png" },
  ];

  return (
    <div id="skills" className="w-full h-fit text-[#faf2eb]">
      {/* Container - Centered with w-fit to wrap tightly */}
      <div className="max-w-[1000px]  flex flex-col ">
        {/* The Flex Wrapper */}
        <div className="flex flex-wrap  gap-3 w-fit">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-[#383434] shadow-md shadow-[#040c16] rounded-lg p-3 hover:scale-110 duration-500 w-[90px]"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 relative">
                <Image
                  src={tech.src}
                  alt={`${tech.name} icon`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text - font size and margin adjusted for the small card */}
              <p className="mt-3 text-[10px] font-bold uppercase tracking-tight text-center">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
