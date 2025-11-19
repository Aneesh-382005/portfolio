"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <p className="text-center mt-8">
        Find more of my work/contributions{" "}
        <a
          href="https://github.com/Aneesh-382005"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-950 dark:hover:text-white"
        >
          here
        </a>
        .
      </p>
    </section>
  );
}
