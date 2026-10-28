import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import academicAllyImg from "@/public/academicAlly.png";
// import audioDeepfakeImg from "@/public/audioDeepfake.png";
// import indoorNavImg from "@/public/indoorNav.png";
// import deepResearchImg from "@/public/deepResearch.png";
// import patchItImg from "@/public/patchIt.png";
import playgroundImg from "@/public/playground.png";
import focusBoardImg from "@/public/FocusBoard.png";
import folioMcpImg from "@/public/folioMcp.png";
import orbitalImg from "@/public/orbital.png";
import nightshiftImg from "@/public/nightshift.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Software Engineering Intern - EventPin, Inc.",
    location: "Holland, OH",
    description:
      "Backend intern building features and improving performance on a live event-discovery platform.",
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2026 - Jan 2027",
  },
  {
    title: "Computer Science Tutor - University of Toledo Learning Enhancement Center",
    location: "Toledo, OH",
    description:
      "Course tutor for Non-Linear Data Structures, Software Engineering, and Database Management Systems.",
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2026 - Present",
  },
  {
    title: "University of Toledo",
    location: "Toledo, OH",
    description:
      "Pursuing Bachelor of Science in Computer Science & Engineering. Relevant coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Architecture, Discrete Structures, and Artificial Intelligence.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2025 - Present",
  },
  {
    title: "AcademicAlly - ACM Thapar Student Chapter",
    location: "Thapar Institute of Engineering & Technology",
    description:
      "Built and maintained a production-grade university timetable parser used by 10,000+ students. Designed the backend using Python, Pandas, and Openpyxl, cutting parsing errors by 95%.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2024 - Aug 2025",
  },
] as const;

export const projectsData = [
  {
    title: "folio.mcp - Personal MCP Server",
    description:
      "Remote MCP server on Cloudflare Workers that exposes my GitHub activity, portfolio data, and a contact tool for LLMs to call directly.",
    tags: ["TypeScript", "Cloudflare Workers", "Hono", "MCP SDK"],
    imageUrl: folioMcpImg,
    githubUrl: "https://github.com/Aneesh-382005/folio.mcp",
    demoUrl: "https://mcp.aneeshgrover.me/",
  },

  {
    title: "FocusBoard - Whiteboard Task Capture",
    description:
      "Android app that scans whiteboards, extracts structured JSON, and pushes tasks to a shared E-Ink display.",
    tags: ["Kotlin", "FastAPI", "CRAFT", "TrOCR", "Phi-3 Mini", "TFLite"],
    imageUrl: focusBoardImg,
    githubUrl: "https://github.com/Focus-Board",
    demoUrl: "",
  },
  {
    title: "AcademicAlly",
    description:
      "University timetable parser for 10,000+ students. Built with Python, Pandas, and Openpyxl, handling backend and deployment.",
    tags: ["Python", "Pandas", "Openpyxl", "Full-Stack", "University Tools"],
    imageUrl: academicAllyImg,
    githubUrl: "https://github.com/Aneesh-382005/AcademicAlly",
    demoUrl: "https://timetable.acmthapar.in/",
  },

  {
    title: "Orbital - Cloud Dev Environment Manager",
    description:
      "Spins up isolated VS Code environments on demand, with JWT auth, a Docker provisioner, and state reconciliation so no workspace runs unaccounted for.",
    tags: ["Go", "Docker", "REST APIs"],
    imageUrl: orbitalImg,
    githubUrl: "https://github.com/Aneesh-382005/Orbital",
    demoUrl: "",
  },

  {
    title: "Nightshift - Autonomous Device Fixer",
    description:
      "An AI agent that fixes what breaks on your devices overnight: policy-gated, snapshotted, and auto-rolled-back if a health check fails. Risky fixes wait for a physical approval press; built solo at MHacks 26.",
    tags: ["TypeScript", "SpacetimeDB", "MCP", "Self-Hosted"],
    imageUrl: nightshiftImg,
    githubUrl: "https://github.com/Aneesh-382005/nightshift",
    demoUrl: "",
  },

  {
    title: "Playground: Text-to-Manim",
    description:
      "Turn algorithm and math ideas into rendered Manim CE animations from a simple prompt.",
    tags: ["React", "FastAPI", "Manim CE", "Groq", "AI", "Full-Stack", "Visualization"],
    imageUrl: playgroundImg,
    githubUrl: "https://github.com/Aneesh-382005/Playground",
    demoUrl: "https://playground.aneeshgrover.me/",
  },

  /*
  {
    title: "PatchIt - Civic Infrastructure Monitoring",
    description:
      "YOLO-based pothole detection with 85.8% precision. Explored MiDaS & Depth Anything V2 for 3D geometry and cost estimation.",
    tags: ["Python", "YOLO", "Computer Vision", "Depth Estimation", "Hackathon"],
    imageUrl: patchItImg,
    githubUrl: "https://github.com/kshitiz510/patch-it",
    demoUrl: "",
  },
  {
    title: "Audio Deepfake Detection",
    description:
      "Fine-tuned AASIST & AASIST-L on ASVspoof 2019, achieving 3.37% EER and 0.10 t-DCF on a constrained GPU setup.",
    tags: ["Python", "PyTorch", "Deep Learning", "Audio AI", "Graph Attention"],
    imageUrl: audioDeepfakeImg,
    githubUrl: "https://github.com/Aneesh-382005/Audio-Deepfake-Detection",
    demoUrl: "",
  },
  {
    title: "Plug-and-Play Indoor Navigation",
    description:
      "Full-stack indoor navigation with real-time floorplan editing & route rendering. Built with Next.js, FastAPI, and Supabase.",
    tags: ["Next.js", "FastAPI", "Supabase", "Full-Stack", "Realtime"],
    imageUrl: indoorNavImg,
    githubUrl: "https://github.com/Aneesh-382005/smart-store-map",
    demoUrl: "https://smart-store-map.vercel.app/admin",
  },
  {
    title: "DeepResearch - Multi-Agent Research Assistant",
    description:
      "Multi-agent pipeline using LangGraph, Tavily, and Groq LLaMA3 for automated research with citation-aware RAG.",
    tags: ["Python", "LangGraph", "RAG", "FAISS", "HuggingFace"],
    imageUrl: deepResearchImg,
    githubUrl: "https://github.com/Aneesh-382005/DeepResearch",
    demoUrl: "",
  },
  */
] as const;

export const skillsData = [
  {
    heading: "Interfaces",
    subheading: "Tools for Agents",
    description:
      "Interfaces LLMs use to act, not just apps for humans to click through.",
    tags: ["TypeScript", "MCP", "Cloudflare Workers", "Hono", "REST APIs", "Next.js"],
  },
  {
    heading: "Infrastructure",
    subheading: "Systems for Developers",
    description:
      "Distributed systems and backend services that other tools get built on.",
    tags: ["Go", "Docker", "WebSockets", "Distributed Systems", "FastAPI", "Vercel", "Oracle Cloud (OCI)"],
  },
] as const;
