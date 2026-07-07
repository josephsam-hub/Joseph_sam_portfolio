import {
    contact,
    git,
    github,
    linkedin,
    python,
    pytorch,
    tensorflow,
    langchain,
    langgraph,
    opencv,
    docker,
    fastapi,
    flutter,
    aws,
    yolo,
    postgresql,
    react,
    nodejs,
} from "../assets/icons";

export const skills = [
    { imageUrl: python, name: "Python", type: "AI/ML" },
    { imageUrl: pytorch, name: "PyTorch", type: "AI/ML" },
    { imageUrl: tensorflow, name: "TensorFlow", type: "AI/ML" },
    { imageUrl: langchain, name: "LangChain", type: "Agentic AI" },
    { imageUrl: langgraph, name: "LangGraph", type: "Agentic AI" },
    { imageUrl: opencv, name: "OpenCV", type: "Computer Vision" },
    { imageUrl: yolo, name: "YOLOv8", type: "Computer Vision" },
    { imageUrl: fastapi, name: "FastAPI", type: "Backend" },
    { imageUrl: flutter, name: "Flutter", type: "Mobile" },
    { imageUrl: aws, name: "AWS", type: "Cloud" },
    { imageUrl: docker, name: "Docker", type: "DevOps" },
    { imageUrl: postgresql, name: "PostgreSQL", type: "Database" },
    { imageUrl: react, name: "React", type: "Frontend" },
    { imageUrl: nodejs, name: "Node.js", type: "Backend" },
    { imageUrl: git, name: "Git", type: "Version Control" },
    { imageUrl: github, name: "GitHub", type: "Version Control" },
];

export const experiences = [
    {
        title: "Cisco Virtual Intern — AI & Data Analytics",
        company_name: "Cisco Networking Academy",
        iconBg: "#d4e6f1",
        date: "May 2026 – Jun 2026",
        points: [
            "Completed the official Apply AI: Analyze Customer Reviews certification pathway via Cisco Networking Academy.",
            "Applied ML principles and LLMs to perform thematic analysis, structuring raw unstructured customer feedback into categorized data points.",
            "Implemented systematic human review frameworks to validate AI-generated summaries, mitigating hallucinations and ensuring high output reliability.",
        ],
    },
    {
        title: "AI Data Annotator",
        company_name: "Innodata (Multimango Platform)",
        iconBg: "#accbe1",
        date: "Mar 2026 – May 2026",
        points: [
            "Worked as a crowd-sourced AI data annotator on the Multimango platform under Innodata, an AI data solutions company.",
            "Contributed to AI data labeling projects involving text, video, image, audio, classification, and quality evaluation tasks.",
            "Performed data maintenance, data monitoring, and ensured high-quality training data for production-grade ML models.",
        ],
    },
    {
        title: "ServiceNow University Virtual Intern",
        company_name: "ServiceNow & AICTE",
        iconBg: "#e8d5f5",
        date: "2026",
        points: [
            "Completed an intensive 8-week virtual program covering platform administration, micro-certifications, and Automated Test Framework (ATF).",
            "Built skills in Agentic AI and workflow automation to optimize business processes.",
            "Completed rigorous coursework aligning with ServiceNow University standards.",
        ],
    },
    {
        title: "AI Engineer Intern",
        company_name: "SynapsLogic",
        iconBg: "#b7e4c7",
        date: "2025",
        points: [
            "Developed a Sentinel-2 satellite image anomaly detection system using CNN to automate manual detection workflows.",
            "Built an Agentic AI pipeline for autonomous labeling and classification of satellite imagery.",
            "Integrated external LLM APIs with tool-calling for multi-model AI orchestration.",
        ],
    },
    {
        title: "App Development Intern",
        company_name: "EntroGroups",
        iconBg: "#fbc3bc",
        date: "2025",
        points: [
            "Built Flutter mobile app screens and UI/UX flows with API ingestion.",
            "Integrated Firebase for backend and data management, controlling end-to-end data flow.",
            "Gained hands-on experience in Flutter Web and Android Studio development.",
        ],
    },
];

export const certifications = [
    { name: "Apply AI: Analyze Customer Reviews", issuer: "Cisco Networking Academy", date: "Jun 2026" },
    { name: "Micro's AI Interview", issuer: "Micro AI (UK)", date: "Jun 2026" },
    { name: "AI Essentials & ServiceNow Administration", issuer: "ServiceNow University", date: "May 2026" },
    { name: "Database Management Systems", issuer: "HackerRank", date: "Nov 2025" },
    { name: "Foundations of Java", issuer: "Oracle", date: "Aug 2025" },
    { name: "Design Thinking Premier", issuer: "NPTEL", date: "Dec 2025" },
    { name: "Robotics, AI & Linux", issuer: "The Construct", date: "Nov 2025" },
    { name: "C and C++ Programming", issuer: "IIT Bombay", date: "Dec 2024" },
];

export const achievements = [
    {
        title: "Guidewire DEVTrails 2026 — Top 5 / 4,400+ Teams",
        prize: "₹1 Lakh Cash Prize",
        description:
            "Built Susanoo, an AI-powered parametric insurance platform for gig delivery workers. Auto-triggers UPI payouts using weather disruption data. XGBoost pricing, Isolation Forest fraud detection, DSS city risk scoring. Stack: Flutter, FastAPI, AWS, Razorpay. Powered by AWS & EY, Bengaluru.",
    },
    {
        title: "E-Yantra — IIT Bombay Finalist (Top 5 / 1,000+ Teams)",
        prize: "National Finalist",
        description:
            "Autonomous agri-robot combining LangGraph agents and RL for coordination, OpenCV & YOLOv8 for crop detection. PCB and STM32 as the root of the system.",
    },
    {
        title: "InsureBot — ValuEnable 2025 Finalist (Top 5 / 150+ Teams)",
        prize: "National Finalist",
        description:
            "Real-time multilingual voice agent using ElevenLabs and Groq + LLaMA 3 for insurance queries. Auto-generated call summaries via ElevenLabs API, Express backend, Node.js.",
    },
    {
        title: "Mumbai Hacks 2025 — Finalist",
        prize: "National Finalist",
        description:
            "One of India's largest hackathons. Built a real-time UPI Fraud Detection system using 5-agent orchestration managed by Orkes Conductor. ML stack: Isolation Forest and Reinforcement Learning.",
    },
    {
        title: "ML CBE GenAI Hackathon (GDG × iamneo) — Finalist",
        prize: "Finalist",
        description:
            "Built an EduTech AI platform for students transitioning to the next stage of education using Generative AI and Groq.",
    },
    {
        title: "Creatathon — 1st Place (2024)",
        prize: "Winner",
        description:
            "Ranked 1st among thousands of participants from college in a Design Thinking competition.",
    },
];

export const leadership = [
    {
        title: "Hackathon Ambassador",
        org: "Hackhazards '26",
        date: "2026",
        points: [
            "Organizing a world-level hackathon with $6K prize pool and 10K+ team registrations.",
        ],
    },
    {
        title: "App Dev Co-Lead",
        org: "Google Developer Groups (GDG) — SECE",
        date: "2025–2026",
        points: [
            "Co-organized 3 technical events with 1,000+ student participation: TechSprint, National CTF, HackSprint.",
            "Conducted Google AI Tools workshop on campus.",
        ],
    },
    {
        title: "Open Source Contributor",
        org: "Google Timesketch & Tweakcn",
        date: "2026",
        points: [
            "Active contributor to Google Timesketch — forensic timeline analysis and workflow tool.",
            "Contributor to Tweakcn — UX/UI customization platform.",
        ],
    },
];

export const socialLinks = [
    {
        name: "Contact",
        iconUrl: contact,
        link: "/contact",
    },
    {
        name: "GitHub",
        iconUrl: github,
        link: "https://github.com/josephsam-hub",
    },
    {
        name: "LinkedIn",
        iconUrl: linkedin,
        link: "https://www.linkedin.com/in/joseph-sam-m",
    },
];

export const projects = [
    {
        iconUrl: langchain,
        theme: "btn-back-red",
        name: "Susanoo — AI Parametric Insurance",
        description:
            "Top 5 of 4,400+ teams at Guidewire DEVTrails 2026. AI-powered parametric insurance for gig delivery workers. Auto-triggers UPI payouts via weather disruption data. XGBoost pricing, Isolation Forest fraud detection. Flutter, FastAPI, AWS, Razorpay. Cash Prize ₹1 Lakh — Powered by AWS & EY.",
        link: "https://github.com/josephsam-hub",
    },
    {
        iconUrl: langgraph,
        theme: "btn-back-green",
        name: "E-Yantra Autonomous Agri Robot (IIT Bombay)",
        description:
            "Finalist — Top 5 among 1,000+ teams. Autonomous robot navigating farm paths to deliver crop crates. Orchestrated LangGraph agents and Reinforcement Learning for line following and accuracy scoring. Stack: LangGraph, STM32, CoppeliaSim, OpenCV, YOLOv8.",
        link: "https://github.com/josephsam-hub",
    },
    {
        iconUrl: opencv,
        theme: "btn-back-blue",
        name: "InsureBot — Multilingual AI Voice Agent",
        description:
            "Top 5 Finalist at ValuEnable 2025 (150+ teams). Real-time multilingual voice agent for insurance queries. ElevenLabs for voice, Groq + LLaMA 3 for query parsing, LangChain for latency and interruption detection, adaptive sentiment analysis.",
        link: "https://github.com/josephsam-hub",
    },
    {
        iconUrl: python,
        theme: "btn-back-pink",
        name: "MedAlert AI — Emergency Medical Assistant",
        description:
            "Top 50 out of 1,000+ teams at A2HackFest 2k25. Deep learning + Google Maps API for emergency triage in under 60–120 seconds. 4-agent orchestration for nearby hospital finder and first-aid guidance.",
        link: "https://github.com/josephsam-hub",
    },
    {
        iconUrl: pytorch,
        theme: "btn-back-black",
        name: "UPI Fraud Detection System",
        description:
            "Finalist at Mumbai Hacks 2025 — one of India's largest hackathons. Real-time fintech fraud detection using 5-agent orchestration managed by Orkes Conductor. ML stack: Isolation Forest and Reinforcement Learning.",
        link: "https://github.com/josephsam-hub",
    },
    {
        iconUrl: tensorflow,
        theme: "btn-back-yellow",
        name: "EduTech AI — GenAI Student Transition Platform",
        description:
            "Finalist at ML CBE GenAI Hackathon by GDG at iamneo. AI-powered platform helping students transition to the next stage of education using Generative AI and Groq API for personalized guidance.",
        link: "https://github.com/josephsam-hub",
    },
];
