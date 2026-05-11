"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useState } from "react";

export default function About() {
    const { ref } = useSectionInView("About");
    const [showEasterEgg, setShowEasterEgg] = useState(false);

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

            <div
                onMouseEnter={() => setShowEasterEgg(true)}
                onMouseLeave={() => setShowEasterEgg(false)}
                className="mt-6 inline-block cursor-pointer"
            >
                <span className="text-sm text-gray-600 underline decoration-dotted underline-offset-4 transition hover:text-gray-950 dark:text-white/60 dark:hover:text-white">
                    Why I keep building
                </span>
            </div>

            <motion.div
                id="why-i-build"
                className="overflow-hidden"
                initial={false}
                animate={{ height: showEasterEgg ? "auto" : 0, opacity: showEasterEgg ? 1 : 0 }}
                transition={{ duration: 0.25 }}
            >
                <div className="mx-auto mt-4 max-w-2xl rounded-2xl border border-black/10 bg-black/5 px-5 py-4 text-left text-sm leading-6 dark:border-white/10 dark:bg-white/5">
                    <p>
                        Honestly, it's my fascination with building things. I don't need a class, an assignment, or a deadline to start a project. I just get fascinated by a problem and can't stop until I've built something around it.
                    </p>
                    <p className="mt-3">
                        Campus Compute started at a hackathon. Orbital, another one of my projects [where a user can spin up isolated VSCode workspaces], started as a missed internship deadline I refused to abandon. The pattern is usually the same: curiosity first, then momentum, then a project that teaches me more than I expected.
                    </p>
                    <p className="mt-3">
                        That's how I am with other things I am doing right now, and that is what I feel the essence of engineering is.
                    </p>
                </div>
            </motion.div>
        </motion.section>
    );
}
