"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>What I build for</SectionHeading>
      <div className="grid gap-4 text-left sm:grid-cols-3">
        {skillsData.map((group, index) => (
          <motion.div
            className="rounded-2xl border border-black/5 bg-gray-100 p-6 dark:border-white/10 dark:bg-white/5"
            key={group.heading}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-white/40">
              {group.heading}
            </p>
            <h3 className="mt-1 text-xl font-semibold">{group.subheading}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-white/70">
              {group.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
