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
                I'm a <span className="font-medium">CS undergrad at the University of Toledo</span> who enjoys building and working with people who care about what they do. Whether it's a{" "}
                <span className="font-medium">distributed systems framework, a university tool, or a codegen agent</span>, I build because it interests me, not because I was told to. I pick up new technologies as I go and learn by doing. I'm not chasing perfect, I'm chasing interesting.
            </p>

            <p>
                <span className="italic">Outside of building</span>, you'll find me at hackathons, talking to people doing cool things, gaming, or going down some random stuff at 2AM. If you're working on something hard and moving fast, let's talk.
            </p>
        </motion.section>
    );
}
