"use client";

import { useEffect } from "react";

const TERMINAL = "color: #4ade80; font-family: monospace;";
const TERMINAL_DIM = "color: #4ade80; font-family: monospace; opacity: 0.6;";
const TERMINAL_BOLD = "color: #4ade80; font-family: monospace; font-weight: bold;";

function printBox(lines: string[]) {
  const width = Math.max(...lines.map((l) => l.length)) + 2;
  const top = "+" + "-".repeat(width) + "+";
  console.log(`%c${top}`, TERMINAL_DIM);
  lines.forEach((line) => {
    console.log(`%c| ${line.padEnd(width - 1)}|`, TERMINAL);
  });
  console.log(`%c${top}`, TERMINAL_DIM);
}

function registerConsoleCommands() {
  const win = window as unknown as Record<string, unknown>;

  win.help = () => {
    console.log("%cavailable commands:", TERMINAL_BOLD);
    console.log("%c  whoami()   - who wrote this site", TERMINAL);
    console.log("%c  stack()    - what this site is built with", TERMINAL);
    console.log("%c  contact()  - jump to the contact form", TERMINAL);
    return undefined;
  };

  win.whoami = () => {
    printBox([
      "Aneesh Grover",
      "CS undergrad, University of Toledo",
      "Builds infra, agents, and dev tooling",
      "aneeshgrover.me/#contact",
    ]);
    return undefined;
  };

  win.stack = () => {
    console.log(
      "%cNext.js 16, TypeScript, Tailwind, framer-motion. No CMS, no bloat.",
      TERMINAL
    );
    return undefined;
  };

  win.sudo = () => {
    console.log("%cuser is not in the sudoers file. this incident will be reported.", TERMINAL);
    console.log("%c(it won't. but nice try.)", TERMINAL_DIM);
    return undefined;
  };

  win.contact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    console.log("%cscrolling you there now.", TERMINAL);
    return undefined;
  };
}

export default function ConsoleBanner() {
  useEffect(() => {
    registerConsoleCommands();

    console.log(
      "%ctrying to find a vulnerability, or just nosy?",
      "color: #4ade80; font-family: monospace; font-size: 13px;"
    );
    console.log(
      "%c> the real bugs are in production.",
      "color: #4ade80; font-family: monospace; font-size: 14px; font-weight: bold;"
    );
    console.log(
      "%cthere's more here if you want it. type help() to see what's callable.",
      TERMINAL_DIM
    );
  }, []);

  return null;
}
