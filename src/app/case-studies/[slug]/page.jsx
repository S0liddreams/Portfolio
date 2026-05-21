// app/case-studies/[slug]/page.js
import React from "react";
import Footer from "../../../../component/Footer";
import ProjectDetails from "../../../../component/ProjectDetails";
import ProjectDataDetails from "../../../../data/projectDataDetails";

// This function tells Next.js which slugs exist so it can pre-render them
export async function generateStaticParams() {
  return ProjectDataDetails.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  // Find the specific project object that matches the URL slug
  const project = ProjectDataDetails.find((p) => p.slug === slug);

  // Fallback: If a user types a wrong URL, you could return a 404
  if (!project) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <h1 className="text-[#faf2eb]">Project not found.</h1>
      </div>
    );
  }

  return (
    <main>
      {/* 
          Note: We pass 'project' as the prop because your 
          ProjectDetails component uses ({ project }) => ... 
      */}
      <ProjectDetails project={project} />

      <Footer />
    </main>
  );
}
