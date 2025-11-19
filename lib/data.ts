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
      "Pursuing Bachelor of Science in Computer Science and Engineering. Relevant coursework includes Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Computer Architecture, Discrete Structures, and Artificial Intelligence.",
    icon: React.createElement(LuGraduationCap),
    date: "2025 - Present",
  },
  {
    title: "AcademicAlly (ACM Thapar Project)",
    location: "Thapar Institute of Engineering & Technology",
    description:
      "Built and maintained a university timetable parser for 10,000+ students. Led backend design using Python, Pandas, and Openpyxl, reducing parsing errors by 95%. Managed live deployment with continuous updates and bug tracking.",
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
  // Machine Learning & AI
  "Deep Learning", "PyTorch", "TensorFlow", "Transformers (NLP, RAG)", "CNNs", "GANs", "OCR", "Depth Estimation",

  // Computer Vision & Data Analytics
  "OpenCV", "PyTesseract", "Image Segmentation", "Object Detection", "ROI/3D Vision", "Pandas", "NumPy", "Scikit-learn", "Matplotlib",

  // Programming & Development
  "Python", "Java", "C", "C++", "Next.js", "FastAPI", "Supabase", "Streamlit", "TypeScript",

  // Tools & Platforms
  "Git", "CUDA", "Kaggle", "VS Code", "Google APIs", "Manim",

  // Web/Full-Stack
  "React", "Tailwind", "Prisma", "MongoDB", "PostgreSQL", "Framer Motion",
] as const;
