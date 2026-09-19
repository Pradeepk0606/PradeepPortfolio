export interface FeaturedProject {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  visualType: "booking" | "traceability" | "career" | "hospital";
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  year: string;
  description: string;
  technologies: string[];
  visualLabel: string;
  visualSnippet: string;
}

export interface SkillCategory {
  title: string;
  items: { name: string; icon?: string }[];
}

export interface CertificationItem {
  id?: string;
  title: string;
  issuer: string;
  year: string;
  image?: string;
  badgeUrl?: string;
  credentialUrl?: string;
}

export type CertificateItem = CertificationItem;

export interface AchievementItem {
  title: string;
  event: string;
  project: string;
  highlight: string;
  description?: string;
  badge?: string;
  category?: string;
  year?: string;
  subtitle?: string;
}

export type Project = FeaturedProject;

export const portfolioData = {
  personal: {
    name: "PradeepKumar R",
    primaryTitle: "Software Developer",
    secondaryTitle: "Full Stack Developer",
    location: "Coimbatore, Tamil Nadu, India",
    email: "Pradeeprajamanickam1234@gmail.com",
    github: "https://github.com/Pradeepk0606",
    linkedin: "https://www.linkedin.com/in/pradeepk143",
    heroPositioning: "Building practical software with modern technologies.",
    eyebrow: "SOFTWARE DEVELOPER · FULL STACK",
    headlineStart: "I build practical software that solves ",
    headlineHighlight: "real problems.",
    supportingText:
      "I'm a Computer Science Engineering student and aspiring Software Developer focused on full-stack development, APIs, databases, AI integrations, and practical applications.",
    status: "Open to Software Development Opportunities",
    profileImage: "/profile.jpg",
    resumeUrl: "/resume.pdf",
    education: {
      degree: "B.E. Computer Science & Engineering",
      institution: "SNS College of Engineering",
      location: "Coimbatore, India",
      period: "2023 – 2027",
      cgpa: "8.5",
      hsc: "81.83%",
      sslc: "73.2%"
    },
    educationDetails: {
      degree: "B.E. Computer Science & Engineering",
      institution: "SNS College of Engineering",
      location: "Coimbatore, India",
      period: "2023 – 2027",
      cgpa: "8.5",
      hsc: "81.83%",
      sslc: "73.2%"
    },
    aboutNarrative: [
      "I'm a Computer Science Engineering student and aspiring Software Developer interested in building practical applications.",
      "My experience spans frontend, backend, databases, APIs, AI integrations, automation, and full-stack development.",
      "I enjoy turning ideas into working software and continuously improving my engineering skills."
    ]
  },

  recruiterSnapshot: [
    {
      number: "01",
      title: "Full Stack Development",
      description: "Hands-on engineering across React frontends, Node.js/Express backends, RESTful APIs, and database architectures."
    },
    {
      number: "02",
      title: "Multiple Internship Experiences",
      description: "Real-world engineering workflows, team collaboration, code reviews, and production features across 5 internships."
    },
    {
      number: "03",
      title: "Real-world Applications",
      description: "Production-ready solutions tackling healthcare scheduling, supply chain verification, and career diagnostics."
    },
    {
      number: "04",
      title: "Computer Science Engineering",
      description: "Strong academic grounding in Data Structures, Algorithms, OOP, Database Systems, and computer networks."
    }
  ],

  experiences: [
    {
      id: "gonex",
      company: "GO NEX INNOVATIONS",
      role: "Full Stack Developer Intern",
      period: "2026",
      year: "2026",
      description:
        "Worked on company web applications using the MERN stack, REST APIs, MongoDB, responsive UI development, third-party integrations, Agile workflows, code reviews, and technical documentation.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      visualLabel: "Production Web Applications & API Workflows",
      visualSnippet: "MERN Stack · MongoDB Collections · Agile CI/CD"
    },
    {
      id: "mindfulai",
      company: "MINDFULAI",
      role: "Full Stack Developer Intern",
      period: "2025",
      year: "2025",
      description:
        "Worked on an AI-integrated full-stack application involving authentication, appointment scheduling, responsive dashboards, REST APIs, and third-party AI services.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "AI APIs"],
      visualLabel: "AI-Integrated Dashboard & Appointment Scheduling",
      visualSnippet: "Secure Auth · AI Prompt Pipeline · Realtime Booking"
    },
    {
      id: "thiranex",
      company: "THIRANEX",
      role: "Full Stack Developer Intern",
      period: "2025",
      year: "2025",
      description:
        "Worked on React frontend development, Node.js/Express backend development, REST APIs, debugging, performance optimization, and deployment.",
      technologies: ["React", "Node.js", "Express.js", "REST APIs"],
      visualLabel: "Component Engineering & Backend Optimization",
      visualSnippet: "Modular Architecture · Endpoint Latency Optimization"
    },
    {
      id: "innovate-intern",
      company: "INNOVATE INTERN",
      role: "Python Developer Intern",
      period: "2024",
      year: "2024",
      description:
        "Worked on Python automation applications, SQL databases, API integration, backend workflows, OOP, and code optimization.",
      technologies: ["Python", "SQL", "APIs", "OOP"],
      visualLabel: "Python Automated Pipelines & Database Engine",
      visualSnippet: "Data Normalization · Background Tasks · SQL Queries"
    },
    {
      id: "internpe",
      company: "INTERNPE",
      role: "Python Developer Intern",
      period: "2024",
      year: "2024",
      description:
        "Worked on a Python-based competency scoring application involving Python, SQL, APIs, and automated reports.",
      technologies: ["Python", "SQL", "APIs"],
      visualLabel: "Competency Scoring Engine & Analytics",
      visualSnippet: "Analytical Scoring · Structured Output Reporting"
    }
  ] as ExperienceItem[],

  featuredProjects: [
    {
      id: "bookit-now",
      number: "01",
      title: "BOOKIT NOW",
      category: "Appointment Booking Platform",
      tagline: "End-to-end appointment management with dual user and administrative workflows.",
      description:
        "A full-stack appointment booking application where users can manage appointments and administrators can review, approve, or reject appointment requests.",
      features: [
        "Authentication",
        "Appointment booking",
        "Appointment history",
        "Admin dashboard",
        "Approval / rejection workflow",
        "Responsive UI"
      ],
      technologies: ["React", "JavaScript", "Firebase", "MERN"],
      image: "/projects/Career Guidance.png",
      githubUrl: "https://github.com/Pradeepk0606/PradeepPortfolio",
      visualType: "booking"
    },
    {
      id: "ayurchaintrace",
      number: "02",
      title: "AYURCHAINTRACE",
      category: "Herb Traceability Platform",
      tagline: "Supply chain verification pipeline from harvest origin to consumer verification.",
      description:
        "A digital platform focused on improving the traceability and transparency of Ayurvedic herbs across the supply chain.",
      features: [
        "Herb traceability",
        "Geo-tagging",
        "QR authentication",
        "Multi-role dashboards",
        "Digital provenance",
        "Quality analytics"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AI", "Blockchain"],
      image: "/projects/Ayurchain trace.png",
      githubUrl: "https://github.com/Pradeepk0606",
      visualType: "traceability"
    },
    {
      id: "pathwise",
      number: "03",
      title: "PATHWISE",
      category: "AI Career Guidance Platform",
      tagline: "Automated student assessment and intelligent roadmap counseling platform.",
      description:
        "A career guidance platform designed to help students explore career paths and receive personalized guidance.",
      features: [
        "Career recommendations",
        "SWOT analysis",
        "AI career counselling",
        "Automated guidance workflows"
      ],
      technologies: ["AI", "Python", "Web Technologies"],
      image: "/projects/Career Guidance.png",
      githubUrl: "https://github.com/Pradeepk0606",
      visualType: "career"
    },
    {
      id: "mac-portal",
      number: "04",
      title: "MAC PORTAL",
      category: "Smart Hospital Management System",
      tagline: "Operational intelligence platform for emergency triage, bed allocations, and queues.",
      description:
        "A hospital management platform designed to support hospital operations and improve workflow management.",
      features: [
        "Patient inflow forecasting",
        "Bed allocation",
        "Doctor scheduling",
        "Ambulance allocation",
        "Queue management",
        "Analytics dashboard"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Python"],
      image: "/projects/MAC portal.jpg",
      githubUrl: "https://github.com/Pradeepk0606",
      visualType: "hospital"
    }
  ] as FeaturedProject[],

  moreProjects: [
    {
      title: "Gonex Company Website",
      category: "Corporate Web Portal",
      description: "Modern high-performance corporate platform with dynamic service catalogs and client lead capture.",
      technologies: ["React", "Node.js", "Tailwind / CSS", "REST APIs"],
      githubUrl: "https://github.com/Pradeepk0606"
    },
    {
      title: "Gonex Digitals Website",
      category: "Digital Agency Platform",
      description: "Interactive portfolio and service showcase platform with refined responsive layout and performance.",
      technologies: ["React", "JavaScript", "Modern CSS"],
      githubUrl: "https://github.com/Pradeepk0606"
    },
    {
      title: "LitLingua",
      category: "Language Learning Application",
      description: "Interactive language training portal featuring vocabulary modules, audio cues, and contextual drills.",
      technologies: ["JavaScript", "React", "Web Speech API"],
      githubUrl: "https://github.com/Pradeepk0606"
    },
    {
      title: "Language Portal",
      category: "Multilingual Assessment Engine",
      description: "Linguistic learning platform tailored for multilingual skill evaluations and real-time comprehension scoring.",
      technologies: ["React", "Node.js", "Express", "REST APIs"],
      githubUrl: "https://github.com/Pradeepk0606"
    },
    {
      title: "Land Price Prediction System",
      category: "Predictive Real Estate Analytics",
      description: "Machine learning regression model estimating real estate property valuations from multi-parameter regional inputs.",
      technologies: ["Python", "Pandas", "Scikit-Learn", "Flask"],
      githubUrl: "https://github.com/Pradeepk0606"
    },
    {
      title: "Solar Panel Positioning System",
      category: "Hardware / Embedded Tracking",
      description: "Arduino UNO dual-axis solar tracker optimizing photovoltaic panel angle for peak daytime irradiance.",
      technologies: ["Arduino C++", "LDR Sensors", "Servo Motors", "Embedded Systems"],
      githubUrl: "https://github.com/Pradeepk0606"
    },
    {
      title: "Mini e-Sevai",
      category: "Civic Services Portal",
      description: "Streamlined public utility and government documentation assistance portal designed for high accessibility.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Forms Automation"],
      githubUrl: "https://github.com/Pradeepk0606"
    },
    {
      title: "Edutech Timesup",
      category: "Academic Productivity Timer",
      description: "Focused study interval application with task tracking, time allocation statistics, and distraction safeguards.",
      technologies: ["React", "LocalStorage", "Modern CSS"],
      githubUrl: "https://github.com/Pradeepk0606"
    }
  ] as ProjectItem[],

  skills: [
    {
      title: "PRIMARY",
      items: [
        { name: "Python" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "Java" },
        { name: "C" }
      ]
    },
    {
      title: "FRONTEND",
      items: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "React.js" }
      ]
    },
    {
      title: "BACKEND",
      items: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "REST APIs" }
      ]
    },
    {
      title: "DATABASE",
      items: [
        { name: "MongoDB" },
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "Firebase" }
      ]
    },
    {
      title: "TOOLS",
      items: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "Docker" },
        { name: "Figma" }
      ]
    },
    {
      title: "AI",
      items: [
        { name: "OpenAI APIs" },
        { name: "Claude" },
        { name: "LangChain" },
        { name: "Hugging Face" },
        { name: "Prompt Engineering" },
        { name: "AI Workflow Automation" }
      ]
    }
  ],

  currentlyImproving: [
    "Python & DSA",
    "Full Stack Development",
    "SQL",
    "Docker",
    "AWS",
    "Automation"
  ],

  currentlyBuilding: [
    "BookIt Now Platform",
    "AyurChainTrace Provenance Ledger",
    "PathWise AI Engine",
    "MAC Smart Hospital Portal"
  ],

  certifications: [
    {
      title: "Enterprise Design Thinking Practitioner",
      issuer: "IBM",
      year: "2024"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      year: "2024"
    },
    {
      title: "MERN Stack Development",
      issuer: "GUVI Geek Networks",
      year: "2024"
    },
    {
      title: "Python Programming",
      issuer: "PrepInsta",
      year: "2024"
    },
    {
      title: "Java Programming",
      issuer: "PrepInsta",
      year: "2024"
    },
    {
      title: "Prompt to Product AI Workshop",
      issuer: "SNS Groups",
      year: "2024"
    }
  ] as CertificationItem[],

  achievements: [
    {
      title: "Hackfest Intra-College Winner",
      event: "SNS Hackfest",
      project: "MAC Portal",
      highlight: "Awarded 1st place for architecting an emergency triage & smart hospital management system.",
      description: "Awarded 1st place for architecting an emergency triage & smart hospital management system.",
      badge: "1st Place",
      category: "Competition",
      year: "2024"
    },
    {
      title: "Arduino UNO Bootcamp Winner",
      event: "Hardware Innovation Bootcamp",
      project: "Solar Panel Positioning System",
      highlight: "Designed real-time dual-axis solar irradiance tracking mechanism using embedded sensors.",
      description: "Designed real-time dual-axis solar irradiance tracking mechanism using embedded sensors.",
      badge: "Winner",
      category: "Technical Events",
      year: "2024"
    },
    {
      title: "Generative AI Bootcamp Winner",
      event: "Intra-College GenAI Challenge",
      project: "AI Application Workflow",
      highlight: "Recognized for building practical prompt-chaining and AI API integration prototypes.",
      description: "Recognized for building practical prompt-chaining and AI API integration prototypes.",
      badge: "Top Performer",
      category: "Industry Readiness",
      year: "2024"
    },
    {
      title: "NPTEL Cloud Computing Certification",
      event: "National Programme on Technology Enhanced Learning",
      project: "Cloud Fundamentals & Virtualization",
      highlight: "Successfully completed rigorous national certification on distributed architectures.",
      description: "Successfully completed rigorous national certification on distributed architectures.",
      badge: "Elite National",
      category: "Certification",
      year: "2024"
    }
  ] as AchievementItem[],

  journey: [
    {
      year: "2024",
      badge: "Industry",
      title: "Web Development Intern at CodeBind Technologies",
      subtitle: "Full Stack & Production Systems",
      description: "Delivered responsive web interfaces and core backend APIs using React.js and Node.js with SQL integration."
    },
    {
      year: "2024",
      badge: "Hackathons",
      title: "Intra-College Hackfest & Bootcamps Champion",
      subtitle: "Rapid Prototyping & System Design",
      description: "Won 1st prize at SNS Hackfest for MAC Hospital Portal and Hardware Bootcamp for Solar Panel Tracking."
    },
    {
      year: "2023",
      badge: "Academics",
      title: "Started B.E. in Computer Science & Engineering",
      subtitle: "SNS College of Engineering (8.5 CGPA)",
      description: "Built strong foundations in Data Structures, Algorithms, Object-Oriented Design, and Database Management."
    }
  ],

  softSkills: [
    "Analytical Problem Solving",
    "Continuous Learning & Adaptation",
    "Collaborative Team Mindset",
    "Technical Documentation",
    "System Design & Ownership",
    "Effective Communication"
  ],

  currentlyLearning: [
    { title: "Advanced Python & Algorithmic Patterns", stage: "Active", focus: "Data Structures, Dynamic Programming & Complexity" },
    { title: "Docker & Containerization", stage: "In Progress", focus: "Multi-stage builds, isolated environments & deployment" },
    { title: "Distributed System Patterns", stage: "Exploration", focus: "API Gateway architectures, Redis caching & message queues" }
  ],

  whatIBring: [
    { title: "Rapid Execution & Adaptability", description: "Quickly grasp modern tech stacks and ship working, authenticated features with minimal friction." },
    { title: "Production Hygiene", description: "Strict typing with TypeScript, responsive UI layouts, clean API endpoints, and clean git commits." },
    { title: "Hunger to Learn", description: "High technical curiosity and relentless drive to improve system performance and software craftsmanship." }
  ],

  beyondCode: [
    { icon: "♟️", title: "Chess & Strategy Games", description: "Analyzing tactical patterns and endgame foresight that directly inform algorithmic thinking." },
    { icon: "🛠️", title: "Hardware Prototyping", description: "Tinkering with microcontrollers, Arduino circuits, and sensor-driven automation projects." },
    { icon: "📚", title: "Tech Reading & Architecture", description: "Exploring engineering blogs, system design case studies, and open-source ecosystems." }
  ]
};
