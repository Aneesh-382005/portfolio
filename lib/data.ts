import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import academicAllyImg from "@/public/academicAlly.png";
import audioDeepfakeImg from "@/public/audioDeepfake.png";
import indoorNavImg from "@/public/indoorNav.png";
import deepResearchImg from "@/public/deepResearch.png";
import patchItImg from "@/public/patchIt.png";

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
    title: "University of Toledo",
    location: "Toledo, OH",
    description:
      "Pursuing Bachelor of Science in Computer Science & Engineering. Relevant coursework: Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Computer Architecture, Discrete Structures, and Artificial Intelligence.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2025 - Present",
  },
  {
    title: "AcademicAlly - ACM Thapar Society Project",
    location: "Thapar Institute of Engineering & Technology",
    description:
      "Built and maintained a production-grade university timetable parser used by 10,000+ students. Designed the backend using Python, Pandas, and Openpyxl, cutting parsing errors by 95%. Deployed and actively maintained with ongoing improvements and updates.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2024 - Aug 2025",
  },
] as const;

export const projectsData = [
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
  /*
  {
    title: "Plug-and-Play Indoor Navigation",
    description:
      "Full-stack indoor navigation with real-time floorplan editing & route rendering. Built with Next.js, FastAPI, and Supabase.",
    tags: ["Next.js", "FastAPI", "Supabase", "Full-Stack", "Realtime"],
    imageUrl: indoorNavImg,
    githubUrl: "https://github.com/Aneesh-382005/smart-store-map",
    demoUrl: "https://smart-store-map.vercel.app/admin",
  },
  */
  {
    title: "DeepResearch - Multi-Agent Research Assistant",
    description:
      "Multi-agent pipeline using LangGraph, Tavily, and Groq LLaMA3 for automated research with citation-aware RAG.",
    tags: ["Python", "LangGraph", "RAG", "FAISS", "HuggingFace"],
    imageUrl: deepResearchImg,
    githubUrl: "https://github.com/Aneesh-382005/DeepResearch",
    demoUrl: "",
  },

  
  
] as const;

export const skillsData = [
  // Software Engineering & Full-Stack
  "TypeScript", "Python", "Java",
  "Next.js", "React", "FastAPI",
  "Supabase", "PostgreSQL",
  "API Design", "System Design",

  // Machine Learning Engineering
  "PyTorch", "Deep Learning",
  "Transformers", "RAG Systems", "FAISS",
  "MLOps",

  // Applied AI
  "CV Pipelines (OpenCV, Detection, OCR)",

  // Data & Analysis
  "Pandas", "NumPy", "Scikit-learn",

  // Infra & Deployment
  "Git", "CUDA",
  "Vercel", "Oracle Cloud (OCI)", "Cloudflare",
] as const;
