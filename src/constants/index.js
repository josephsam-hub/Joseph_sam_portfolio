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
        title: "AI Data Annotator",
        company_name: "Innodata (Multimango Platform)",
        iconBg: "#accbe1",
        date: "2026",
        points: [
            "Worked as a crowd-sourced AI data annotator on the Multimango platform under Innodata, an AI data solutions company.",
            "Contributed to AI data labeling projects involving text, video, image, audio, classification, and quality evaluation tasks.",
            "Ensured high-quality training data for production-grade machine learning models.",
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
            "Finalist — Top 20 among 1000+ teams. Autonomous robot navigating farm paths to deliver crop crates. Orchestrated LangGraph agents and Reinforcement Learning for line following and accuracy scoring. Stack: LangGraph, STM32, CoppeliaSim, OpenCV, YOLOv8.",
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
            "Top 50 out of 1000+ teams at A2HackFest 2k25. Deep learning + Google Maps API for emergency triage in under 60–120 seconds. 4-agent orchestration for nearby hospital finder and first-aid guidance, trained on health datasets.",
        link: "https://github.com/josephsam-hub",
    },
    {
        iconUrl: pytorch,
        theme: "btn-back-black",
        name: "UPI Fraud Detection System",
        description:
            "Finalist at Mumbai Hacks 2025 — one of India's largest hackathons. Real-time fintech fraud detection using 5-agent orchestration managed by Orkes Conductor. ML stack: Isolation Forest and Reinforcement Learning for anomaly detection on UPI transactions.",
        link: "https://github.com/josephsam-hub",
    },
    {
        iconUrl: tensorflow,
        theme: "btn-back-yellow",
        name: "EduTech AI — GenAI Student Transition Platform",
        description:
            "Finalist at ML CBE GenAI Hackathon by GDG at iamneo. AI-powered platform helping students transition to the next stage of education using Generative AI and Groq API for personalized guidance and recommendations.",
        link: "https://github.com/josephsam-hub",
    },
];
