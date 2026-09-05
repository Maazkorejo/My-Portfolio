export const personal = {
  name: "Muhammad Maaz Korejo",
  title: "AI Developer · Backend Engineer",
  location: "Hyderabad, Pakistan",
  email: "maazkorejo00@gmail.com",
  phone: "+92 345 661 8618",
  linkedin: "https://linkedin.com/in/muhammad-maaz-korejo",
  github: "https://github.com/Maazkorejo",
  bio: "AI Developer & Backend Engineer specializing in LLM-integrated systems, Intelligent Document Processing (IDP), and offline evaluation architectures. Research Engineer Fellow at INFERENCE Lab (llm-eval-kit), AI Developer Intern at Nebulark, and creator of open-source tooling (CTX-Bridge on PyPI). 3rd-year IT student at University of Sindh holding 12 Anthropic-verified credentials and Google AI Essentials specialization.",
};

export const skillGroups = [
  {
    label: "AI & LLM Engineering",
    icon: "Sparkles",
    items: [
      "Claude / Anthropic API",
      "Claude Code (Subagents & Agent Skills)",
      "Model Context Protocol (MCP)",
      "LangGraph",
      "Mistral AI",
      "Groq API (LLaMA 3.3 70B)",
      "sentence-transformers",
      "llm-eval-kit",
      "Prompt Engineering",
      "Vector Memory (pgvector / Supabase)",
    ],
  },
  {
    label: "Document Intelligence & OCR",
    icon: "FileText",
    items: [
      "Intelligent Document Processing (IDP)",
      "Mistral-OCR-4",
      "Chandra-OCR",
      "Docling",
      "LiteParse",
      "DocLayout-YOLO",
      "Ray Parallel Processing",
      "Label-Studio",
      "MinerU / Unstructured",
      "Agentic Workflow Design",
      "n8n",
    ],
  },
  {
    label: "Machine Learning",
    icon: "BrainCircuit",
    items: [
      "XGBoost",
      "Random Forest",
      "Scikit-learn",
      "SHAP",
      "Pandas",
      "Feature Engineering",
    ],
  },
  {
    label: "Backend & Cloud",
    icon: "Server",
    items: [
      "Python (Flask)",
      "Flask-SocketIO",
      "REST APIs (OpenAPI / Swagger)",
      "Docker",
      "PostgreSQL (RLS Tenant Isolation)",
      "Supabase",
      "Railway",
      "Gunicorn",
      "APScheduler",
      "Git / GitHub",
      "CI/CD",
    ],
  },
  {
    label: "Frontend & Testing",
    icon: "LayoutTemplate",
    items: [
      "pytest (100% Coverage)",
      "Typer CLI",
      "React 18",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
];

export const projects = [
  {
    name: "CTX-Bridge",
    tagline: "Open-Source AI Context Handoff CLI",
    live: "https://pypi.org/project/ctx-bridge",
    repo: "https://github.com/Maazkorejo/CTX-Bridge",
    stack: ["Python", "Typer CLI", "Rich", "pytest", "PyPI", "Git"],
    points: [
      "Engineered and published an open-source CLI developer tool (pip install ctx-bridge) to package codebase context with zero-friction handoff for LLMs (Claude, Cursor, ChatGPT).",
      "Built automated language detection, intelligent gitignore filtering, token counting, and automated secret redaction (API keys, env tokens).",
      "Implemented template presets for Claude Code subagents, Cursor rules, and architecture specs with clean terminal UI and 100% test coverage.",
    ],
  },
  {
    name: "llm-eval-kit",
    tagline: "Offline LLM Evaluation Library",
    live: "https://pypi.org/project/llm-eval-kit",
    repo: "https://github.com/Inference-LAB/llm-eval-kit",
    stack: ["Python", "sentence-transformers", "PyTorch", "NumPy", "pytest", "Scikit-learn"],
    points: [
      "Built an open-source, lightweight Python library for offline, deterministic LLM response evaluation without costly LLM-as-a-judge API calls.",
      "Implemented 4 core evaluation metrics: Factual Grounding, Question Relevance, Refusal Detection, and Response Completeness using local all-MiniLM-L6-v2 embeddings.",
      "Engineered thread-safe singleton model caching and strict numeric mismatch verification to prevent false-positive semantic matches in quantitative evaluations.",
    ],
  },
  {
    name: "Self-Reflective RAG Engine",
    tagline: "Self-RAG Architecture on LLaMA 3.3 70B",
    live: null,
    repo: "https://github.com/Maazkorejo/self-rag-engine",
    stack: ["Python", "Groq API", "LLaMA 3.3 70B", "LangGraph", "ChromaDB / pgvector", "Docker", "pytest"],
    points: [
      "Implemented the Self-RAG architecture (Asai et al.) over Groq LLaMA 3.3 70B, integrating 4 automated reflection checkpoints (Retrieve, IsRel, IsSup, IsUse) for adaptive document retrieval.",
      "Designed multi-step fallback logic dynamically triggering query rewriting and web search fallback when retrieved local documents fail relevance scoring.",
      "Containerized with Docker and achieved 100% unit & integration test coverage (46 pytest test cases) validating reflection token generation and state transitions.",
    ],
  },
  {
    name: "Alfred",
    tagline: "Personal AI Operating Assistant",
    live: "https://alfred-personal-assistant.vercel.app",
    repo: "https://github.com/Maazkorejo/Alfred-Personal-Assistant",
    stack: ["Flask", "Flask-SocketIO", "LangGraph", "Mistral AI", "PostgreSQL", "pgvector", "React 18", "Piper TTS", "Railway", "Vercel"],
    points: [
      "Architected an agentic desktop/web operating assistant with 14 custom tools (email, calendar, filesystem, shell, web search) and persistent pgvector long-term memory.",
      "Implemented real-time streaming WebSocket trace panel exposing agent reasoning and step-by-step tool invocation logs.",
      "Integrated offline local Piper TTS speech synthesis and a lightweight FFT spectral clap-to-wake detector for hands-free local triggering.",
    ],
  },
  {
    name: "AI Pundit Rankings",
    tagline: "FIFA World Cup 2026 Prediction Platform",
    live: "https://football-pundit.vercel.app",
    repo: "https://github.com/Maazkorejo/football-pundit",
    stack: ["Flask", "React 18", "Supabase", "PostgreSQL", "Mistral AI", "APScheduler", "Vercel", "Railway"],
    points: [
      "Built a full-stack social prediction platform for the FIFA World Cup 2026 with a 6-module REST API and a 5-table relational schema.",
      "Engineered an automated AI-scoring pipeline (APScheduler + Mistral AI) that grades user predictions against live match results and generates real-time roasts, eliminating manual scoring.",
      "Integrated live football data via the API-Football feed; deployed to production on Vercel (frontend) and Railway (backend).",
    ],
  },
  {
    name: "Network Intrusion Detection System",
    tagline: "ML pipeline on CICIDS-2017",
    live: null,
    repo: "https://github.com/Maazkorejo/NIDS-Machine-Learning",
    stack: ["Python", "XGBoost", "Random Forest", "scikit-learn", "SHAP", "pandas"],
    points: [
      "Built an end-to-end ML pipeline on the CICIDS-2017 dataset, classifying 14 network attack categories (DDoS, Port Scan, Botnet, Brute Force) at ~99% accuracy with a near-zero false-positive rate.",
      "Applied SHAP for model explainability, identifying the top predictive features driving each attack classification.",
      "Packaged the pipeline as a reproducible module (requirements.txt, setup script) for one-command reuse.",
    ],
  },
];

export const repos = [
  {
    name: "Alfred-Personal-Assistant",
    description: "LangGraph-based personal AI operating assistant with 14 custom tools and pgvector memory.",
    url: "https://github.com/Maazkorejo/Alfred-Personal-Assistant",
    homepage: "https://alfred-personal-assistant.vercel.app",
    language: "Python",
  },
  {
    name: "self-rag-engine",
    description: "Self-Reflective RAG architecture over Groq LLaMA 3.3 70B with 4 reflection checkpoints and 100% test coverage.",
    url: "https://github.com/Maazkorejo/self-rag-engine",
    homepage: null,
    language: "Python",
  },
  {
    name: "CTX-Bridge",
    description: "Open-source AI context handoff CLI with automated language & secret redaction and agent presets.",
    url: "https://github.com/Maazkorejo/CTX-Bridge",
    homepage: "https://pypi.org/project/ctx-bridge",
    language: "Python",
  },
  {
    name: "llm-eval-kit",
    description: "Open-source Python library for offline, deterministic LLM evaluation with zero external judge API calls.",
    url: "https://github.com/Inference-LAB/llm-eval-kit",
    homepage: "https://pypi.org/project/llm-eval-kit",
    language: "Python",
  },
  {
    name: "football-pundit",
    description: "Full-stack AI football prediction platform with automated roasting pipeline for the FIFA World Cup 2026.",
    url: "https://github.com/Maazkorejo/football-pundit",
    homepage: "https://football-pundit.vercel.app",
    language: "JavaScript",
  },
  {
    name: "NIDS-Machine-Learning",
    description: "Network Intrusion Detection System classifying 14 attack types with SHAP explainability on CICIDS-2017.",
    url: "https://github.com/Maazkorejo/NIDS-Machine-Learning",
    homepage: null,
    language: "Python",
  },
];

// Certificate images — real scanned certificates & screenshots.
import antMcp from "@/assets/certs_real/anthropic-mcp.jpg";
import antMcpAdvanced from "@/assets/certs_real/anthropic-mcp-advanced.png";
import antClaudeApi from "@/assets/certs_real/anthropic-claude-api.jpg";
import antClaudeVertexAi from "@/assets/certs_real/anthropic-claude-vertex-ai.png";
import antAgentSkills from "@/assets/certs_real/anthropic-agent-skills.jpg";
import antSubagents from "@/assets/certs_real/anthropic-subagents.jpg";
import antClaudeCode from "@/assets/certs_real/anthropic-claude-code-action.jpg";
import antClaudeCode101 from "@/assets/certs_real/anthropic-claude-code-101.png";
import antClaudePlatform101 from "@/assets/certs_real/anthropic-claude-platform-101.png";
import antFluencyFramework from "@/assets/certs_real/anthropic-ai-fluency-framework.jpg";
import antClaude101 from "@/assets/certs_real/anthropic-claude-101.jpg";
import antFluencyStudents from "@/assets/certs_real/anthropic-ai-fluency-students.jpg";

import googleAiEssentials from "@/assets/certs_real/google-ai-essentials.png";
import googleAiFundamentals from "@/assets/certs_real/google-ai-fundamentals.png";
import googleAiResearchInsights from "@/assets/certs_real/google-ai-research-insights.png";
import linuxFoundationLfc102 from "@/assets/certs_real/linux-foundation-lfc102.png";

import forageDatacom from "@/assets/certs_real/forage-datacom-cybersec.jpg";
import forageMastercard from "@/assets/certs_real/forage-mastercard-cybersec.jpg";
import ibmJobLandscape from "@/assets/certs_real/ibm-cybersec-job-landscape.jpg";
import ibmGettingStarted from "@/assets/certs_real/ibm-getting-started-cybersec.jpg";
import ibmMalwarebytes from "@/assets/certs_real/ibm-malwarebytes.jpg";
import ibmCybersecData from "@/assets/certs_real/ibm-cybersec-data.jpg";
import simplilearnCyber from "@/assets/certs_real/simplilearn-cybersec.jpg";
import hpAi from "@/assets/certs_real/hp-life-ai-beginners.jpg";
import pitpDesigner from "@/assets/certs_real/pitp-graphic-designer.jpg";

import uaPythonDs from "@/assets/certs_real/uniathena-python-ds-ml.jpg";
import uaDataStructure from "@/assets/certs_real/uniathena-data-structure-python.jpg";
import uaOops from "@/assets/certs_real/uniathena-oops-python.jpg";
import uaFunctions from "@/assets/certs_real/uniathena-functions-python.jpg";
import uaModules from "@/assets/certs_real/uniathena-modules-python.jpg";
import uaDataTypes from "@/assets/certs_real/uniathena-datatypes-python.jpg";
import uaBasics from "@/assets/certs_real/uniathena-basics-python.jpg";

export const certificateImages = [
  // Anthropic (12 Credentials)
  { title: "Introduction to Model Context Protocol (MCP)", issuer: "Anthropic", src: antMcp, image: antMcp },
  { title: "Model Context Protocol: Advanced Topics", issuer: "Anthropic", src: antMcpAdvanced, image: antMcpAdvanced },
  { title: "Claude with the Anthropic API", issuer: "Anthropic", src: antClaudeApi, image: antClaudeApi },
  { title: "Claude with Google Vertex AI", issuer: "Anthropic", src: antClaudeVertexAi, image: antClaudeVertexAi },
  { title: "Introduction to Agent Skills", issuer: "Anthropic", src: antAgentSkills, image: antAgentSkills },
  { title: "Introduction to Subagents", issuer: "Anthropic", src: antSubagents, image: antSubagents },
  { title: "Claude Code in Action", issuer: "Anthropic", src: antClaudeCode, image: antClaudeCode },
  { title: "Claude Code 101", issuer: "Anthropic", src: antClaudeCode101, image: antClaudeCode101 },
  { title: "Claude Platform 101", issuer: "Anthropic", src: antClaudePlatform101, image: antClaudePlatform101 },
  { title: "AI Fluency: Framework & Foundations", issuer: "Anthropic", src: antFluencyFramework, image: antFluencyFramework },
  { title: "Claude 101", issuer: "Anthropic", src: antClaude101, image: antClaude101 },
  { title: "AI Fluency for Students", issuer: "Anthropic", src: antFluencyStudents, image: antFluencyStudents },

  // Google & Linux Foundation
  { title: "Google AI Essentials (5-Course Specialization)", issuer: "Google · Coursera", src: googleAiEssentials, image: googleAiEssentials },
  { title: "AI Fundamentals", issuer: "Google · Coursera", src: googleAiFundamentals, image: googleAiFundamentals },
  { title: "AI for Research and Insights", issuer: "Google · Coursera", src: googleAiResearchInsights, image: googleAiResearchInsights },
  { title: "Inclusive Open Source Community Orientation (LFC102)", issuer: "The Linux Foundation", src: linuxFoundationLfc102, image: linuxFoundationLfc102 },

  // Cybersecurity & Professional Simulations
  { title: "Cyber Security Operations Job Simulation", issuer: "Datacom · Forage", src: forageDatacom, image: forageDatacom },
  { title: "Cybersecurity Job Simulation", issuer: "Mastercard · Forage", src: forageMastercard, image: forageMastercard },
  { title: "Your Future in Cybersecurity: The Job Landscape", issuer: "IBM SkillsBuild", src: ibmJobLandscape, image: ibmJobLandscape },
  { title: "Getting Started with Cybersecurity", issuer: "IBM SkillsBuild", src: ibmGettingStarted, image: ibmGettingStarted },
  { title: "Protecting a Device with Malwarebytes", issuer: "IBM SkillsBuild", src: ibmMalwarebytes, image: ibmMalwarebytes },
  { title: "Cybersecurity and Data", issuer: "IBM SkillsBuild", src: ibmCybersecData, image: ibmCybersecData },
  { title: "Introduction to Cyber Security", issuer: "Simplilearn SkillUp", src: simplilearnCyber, image: simplilearnCyber },
  { title: "AI for Beginners", issuer: "HP LIFE · HP Foundation", src: hpAi, image: hpAi },
  { title: "Certified Graphic Designer", issuer: "PITP–MUET · Govt of Sindh", src: pitpDesigner, image: pitpDesigner },

  // Python Specialization (UniAthena / CIQ)
  { title: "Python for Data Science & Machine Learning", issuer: "UniAthena · CIQ", src: uaPythonDs, image: uaPythonDs },
  { title: "Data Structure in Python", issuer: "UniAthena · CIQ", src: uaDataStructure, image: uaDataStructure },
  { title: "OOPs Concept in Python", issuer: "UniAthena · CIQ", src: uaOops, image: uaOops },
  { title: "Functions in Python", issuer: "UniAthena · CIQ", src: uaFunctions, image: uaFunctions },
  { title: "Modules, Packages & Files in Python", issuer: "UniAthena · CIQ", src: uaModules, image: uaModules },
  { title: "Data Types & Statements in Python", issuer: "UniAthena · CIQ", src: uaDataTypes, image: uaDataTypes },
  { title: "Basics of Python Programming", issuer: "UniAthena · CIQ", src: uaBasics, image: uaBasics },
];

export const experience = [
  {
    role: "AI Developer Intern",
    org: "Nebulark (IDP SaaS)",
    period: "Jul 2026 – Present",
    points: [
      "Conducted a comprehensive 14-tool benchmark across OCR, layout parsing, and table extraction engines (Docling, Mistral-OCR-4, Chandra-OCR, DocLayout-YOLO, Reducto, LandingAI DPT-3, PaddleOCR, LiteParse).",
      "Architected a 3-tier cost-optimized hybrid extraction pipeline (0.5s LiteParse heuristic pre-check -> local Docling on CPU -> Mistral-OCR-4 / Chandra-OCR cloud fallback), slashing cloud API costs by 80–90%.",
      "Implemented Ray parallel actor processing achieving 3.3x speedup for batch PDF document extraction; fine-tuned DocLayout-YOLO (9 document layout classes) using Label-Studio annotations.",
      "Conducted OpenMAIC provider-registry architectural review and enforced PostgreSQL Row-Level Security (RLS) policies for multi-tenant isolation.",
    ],
  },
  {
    role: "Research / Implementation Engineer",
    org: "INFERENCE Lab Fellowship",
    period: "Jul 2026 – Present",
    points: [
      "Selected from 130+ applicants for Cohort 01 building llm-eval-kit, an open-source, pip-installable Python library for offline, deterministic LLM evaluation.",
      "Designed and implemented 4 core evaluation modules (Factual Grounding, Relevance, Refusal Detection, Completeness) with zero external LLM-as-judge API calls using local sentence-transformers (all-MiniLM-L6-v2).",
      "Engineered thread-safe singleton embedding model loader and numeric-mismatch verification layer to prevent false positives in semantic similarity scoring.",
    ],
  },
  {
    role: "Cloud Computing Intern",
    org: "PITP–MUET, Jamshoro (Govt of Sindh)",
    period: "Mar – May 2026",
    points: [
      "Delivered a capstone Flask + PostgreSQL + Railway platform with automated CI/CD as part of a government-backed technical training program.",
      "Reduced lab environment setup time by ~30% by scripting automated VM configuration for trainee onboarding.",
    ],
  },
  {
    role: "Certified Graphic Designer Intern",
    org: "PITP–MUET (Govt of Sindh)",
    period: "Jan – Mar 2025",
    points: [
      "Produced 10+ branded visual assets for institutional print and digital communications under a government-accredited design program.",
    ],
  },
];

export const education = {
  degree: "BS Information Technology",
  school: "University of Sindh, Jamshoro",
  period: "Feb 2024 – Dec 2027 · 6th Semester",
  coursework: [
    "AI & Machine Learning",
    "Advanced DBMS",
    "Cybersecurity",
    "Cloud Computing",
    "Computer Networks",
  ],
};

export const certifications = [
  {
    group: "Anthropic — 12 Verified Credentials",
    items: [
      "Model Context Protocol (MCP) — Apr 2026",
      "MCP: Advanced Topics",
      "Claude with the Anthropic API",
      "Claude with Google Vertex AI",
      "Introduction to Agent Skills",
      "Introduction to Subagents",
      "Claude Code in Action",
      "Claude Code 101",
      "Claude Platform 101",
      "AI Fluency: Framework & Foundations",
      "Claude 101",
      "AI Fluency for Students",
    ],
  },
  {
    group: "Google & Linux Foundation",
    items: [
      "Google AI Essentials Specialization (5-Course Specialization)",
      "AI Fundamentals — Google / Coursera",
      "AI for Research and Insights — Google / Coursera",
      "Inclusive Open Source Community Orientation (LFC102) — Linux Foundation",
    ],
  },
  {
    group: "Programs, Awards & Fellowships",
    items: [
      "INFERENCE Lab Fellowship — Cohort 01 Fellow (Jul 2026)",
      "Top Participant — HEC/NAVTTC ACT AI SkillBridge (2026)",
      "McKinsey Forward Program — McKinsey.org (Jun 2026)",
    ],
  },
  {
    group: "Cybersecurity & Foundations",
    items: [
      "IBM SkillsBuild — Your Future in Cybersecurity: The Job Landscape",
      "IBM SkillsBuild — Getting Started with Cybersecurity",
      "IBM SkillsBuild — Protecting a Device with Malwarebytes",
      "IBM SkillsBuild — Cybersecurity and Data",
      "Forage — Mastercard Cybersecurity Job Simulation",
      "Forage — Datacom Cyber Security Operations Job Simulation",
      "Simplilearn SkillUp — Introduction to Cyber Security",
      "HP LIFE — AI for Beginners (HP Foundation)",
      "PITP–MUET — Certified Graphic Designer (Govt of Sindh)",
      "UniAthena / CIQ — Python Specialization (×7 Certifications)",
    ],
  },
];
