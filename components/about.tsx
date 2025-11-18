"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                I'm a{" "}
                <span className="font-medium">
                    Computer Science undergrad at the University of Toledo
                </span>{" "}
                who enjoys creating things that actually get used. I've worked on{" "}
                <span className="font-medium">
                    university tools, ML projects, and full-stack apps
                </span>
                . I just like learning new stuff and applying it.
            </p>

            <p>
                <span className="italic">Outside of class</span>, I like showing up at
                hackathons, talking to new people, and occasionally winning stuff.
                Otherwise, I'm probably gaming, listening to music, or just exploring
                some random ideas. If you're building something cool, want to
                collaborate, or just chat about code and philosophy - I'm around.
            </p>
        </motion.section>
    );
}
