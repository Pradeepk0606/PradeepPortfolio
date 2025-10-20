export const profileData = {
  personal: {
    name: "Pradeepkumar R",
    tagline: "Innovating with Code, Designing with Purpose.",
    email: "hightechtamil@gmail.com",
    location: "Coimbatore, India",
    linkedin: "https://www.linkedin.com/in/pradeepk143",
    github: "https://github.com/Pradeepk0606",
    avatar: "/images/profile.jpg",
  },
  
  summary: `Aspiring Full Stack Developer passionate about building scalable, user-focused applications. 
  With a strong foundation in MERN stack, databases, and problem-solving, I strive to create impactful 
  digital solutions. I see every challenge as an opportunity to learn, and I bring a mix of technical 
  skill, creativity, and leadership to every project I take on.`,
  
  education: [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "SNS College Of Engineering, Anna University",
      period: "2023 – 2027",
      grade: "CGPA: 8.50 (till 4th semester)",
      description: "Focused on software development, algorithms, and emerging technologies",
    },
    {
      degree: "HSC",
      institution: "Vijayalakshmi Matriculation Higher Secondary School, State Board",
      period: "2022 – 2023",
      grade: "81.83%",
      description: "Completed higher secondary education with focus on Computer Science",
    },
    {
      degree: "SSLC",
      institution: "Vijayalakshmi Matriculation Higher Secondary School, State Board",
      period: "2020 – 2021",
      grade: "Pass",
      description: "Completed secondary education",
    },
  ],
  
  skills: {
    programming: [
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
    ],
    web: [
      { name: "HTML/CSS", level: 95 },
      { name: "React.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "Next.js", level: 88 },
    ],
    database: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Firebase", level: 80 },
    ],
    tools: [
      { name: "Git/GitHub", level: 90 },
      { name: "Figma", level: 75 },
      { name: "Flutter Flow", level: 70 },
      { name: "Docker", level: 65 },
    ],
    soft: [
      "Leadership",
      "Teamwork",
      "Decision Making",
      "Time Management",
      "Communication",
      "Optimism",
      "Problem Solving",
      "Adaptability",
    ],
  },
  
  certifications: [
    {
      title: "MERN Stack Development",
      issuer: "Guvi",
      date: "2025",
      hours: "100+",
      credential: "#",
    },
    {
      title: "Basics of Java",
      issuer: "Prepinsta",
      date: "2024",
      hours: "40+",
      credential: "#",
    },
    {
      title: "Python Programming",
      issuer: "Prepinsta",
      date: "2024",
      hours: "30+",
      credential: "#",
    },
    {
      title: "Basics of UI/UX",
      issuer: "Great Learning",
      date: "2024",
      hours: "2+",
      credential: "#",
    },
    {
      title: "Enterprise Design Thinking Practitioner",
      issuer: "IBM",
      date: "2024",
      hours: "6+",
      credential: "#",
    },
  ],
  
  projects: [
    {
      id: 1,
      title: "Smart Competency Diagnostic & Candidate Profile Score Calculator",
      description: "Built a tool to evaluate candidate competencies and generate profile scores, improving recruitment accuracy by 30%.",
      longDescription: `Developed an intelligent recruitment tool that analyzes candidate profiles using machine learning algorithms. 
      The system evaluates multiple competency parameters and generates comprehensive profile scores, helping HR teams make data-driven hiring decisions.`,
      tech: ["Python", "SQL", "Machine Learning", "Scikit-learn", "Pandas"],
      category: ["AI", "Web"],
      image: "/projects/Career Guidance.png",
      github: "#",
      demo: "#",
      featured: true,
      impact: "30% improvement in recruitment accuracy",
      metrics: {
        users: "500+",
        accuracy: "92%",
        timeReduction: "40%",
      },
    },
    {
      id: 2,
      title: "MAC: Smart Hospital Management with Predictive Analytics",
      description: "Automated bed allocation, patient inflow forecasting, and doctor scheduling.",
      longDescription: `Comprehensive hospital management system featuring predictive analytics for patient inflow, 
      intelligent bed allocation, automated doctor scheduling, and real-time resource optimization. 
      The system uses machine learning to forecast patient admissions and optimize hospital operations.`,
      tech: ["React", "Node.js", "PostgreSQL", "Python", "TensorFlow", "REST APIs"],
      category: ["Web", "AI"],
      image: "/projects/MAC portal.jpg",
      github: "#",
      demo: "#",
      featured: true,
      impact: "Reduced patient wait time by 35%",
      metrics: {
        hospitals: "5+",
        patients: "10,000+",
        efficiency: "35%",
      },
    },
    {
      id: 3,
      title: "Smart Blockchain Herbal Traceability System (AyurTrace Chain)",
      description: "Blockchain-based web app ensuring end-to-end traceability of Ayurvedic herbs.",
      longDescription: `Revolutionary blockchain-based system for tracking Ayurvedic herbs from farm to consumer. 
      Ensures authenticity, prevents counterfeiting, and provides complete transparency in the supply chain. 
      Features QR code scanning, smart contracts, and immutable record keeping.`,
      tech: ["Blockchain", "Solidity", "Web3.js", "React", "Node.js", "Smart Contracts"],
      category: ["Blockchain", "Web"],
      image: "/projects/Ayurchain trace.png",
      github: "#",
      demo: "#",
      featured: true,
      impact: "100% supply chain transparency",
      metrics: {
        transactions: "1,000+",
        suppliers: "50+",
        authenticity: "100%",
      },
    },
    
  ],
  
  internships: [
    {
      company: "MindFulAi",
      role: "Full Stack Developer",
      period: "2025",
      duration: "3 months",
      description: "Built a MERN stack web app with authentication, scheduling, and responsive UI.",
      achievements: [
        "Developed complete MERN stack application from scratch",
        "Implemented JWT-based authentication system",
        "Created responsive UI with React and Tailwind CSS",
        "Integrated real-time scheduling features",
      ],
      tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Tailwind CSS"],
    },
    {
      company: "Internpe",
      role: "Python Developer",
      period: "2024",
      duration: "2 months",
      description: "Developed a competency assessment tool using Python, SQL, and ML.",
      achievements: [
        "Built ML-based competency assessment tool",
        "Designed and optimized SQL database schema",
        "Implemented data analysis pipelines",
        "Improved assessment accuracy by 25%",
      ],
      tech: ["Python", "SQL", "Machine Learning", "Pandas", "NumPy"],
    },
  ],
  
  achievements: [
    {
      title: "Hackfest Hackathon Winner",
      organization: "SNS College (Intra-College)",
      date: "2024",
      description: "Won first place in college-level hackathon",
      icon: "trophy",
      category: "hackathon",
    },
    {
      title: "Data Analytics and Visualization Job Simulation",
      organization: "Forage",
      date: "2024",
      description: "Completed professional job simulation program",
      icon: "certificate",
      category: "certification",
    },
    {
      title: "100+ Competition Participations",
      organization: "Various",
      date: "2020-2024",
      description: "Olympiads, Salim Ali contests, District Handball tournaments",
      icon: "medal",
      category: "competition",
    },
    {
      title: "Active NCC Cadet",
      organization: "National Cadet Corps",
      date: "2023-Present",
      description: "Leadership, discipline, and resilience training",
      icon: "shield",
      category: "leadership",
    },
  ],
  
  testimonials: [
    {
      name: "Dr. Rajesh Kumar",
      role: "Professor, SNS College",
      company: "SNS College of Engineering",
      image: "/images/testimonials/professor.jpg",
      text: "Pradeep is an exceptional student with remarkable problem-solving abilities. His dedication to learning and innovation is truly inspiring.",
      rating: 5,
    },
    {
      name: "Arun Prakash",
      role: "Senior Developer",
      company: "MindFulAi",
      image: "/images/testimonials/mentor.jpg",
      text: "Working with Pradeep was a great experience. He quickly grasped complex concepts and delivered high-quality code consistently.",
      rating: 5,
    },
  ],
  
  languages: ["Tamil", "English"],
  
  hobbies: [
    "Solving Rubik's Cubes & puzzles",
    "Exploring new technologies and electronics hardware",
    "Competitive coding & hackathons",
    "Traveling and learning about cultures",
    "Reading about entrepreneurship and leadership",
  ],
  
  philosophy: "Optimism turns weaknesses into strengths, and persistence turns ideas into reality.",
  
  goals: {
    longTerm: "Build and lead a tech-driven unicorn startup or become the CEO of a global MNC.",
    shortTerm: "Expand technical knowledge, contribute to impactful projects, and excel academically.",
  },
  
  social: {
    github: "https://github.com/Pradeepk0606",
    linkedin: "https://www.linkedin.com/in/pradeepk143",
    twitter: "#",
    instagram: "#",
    youtube: "#",
  },
};
