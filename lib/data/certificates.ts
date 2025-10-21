export type CertKind = "image" | "pdf";

export type CertificateItem = {
  id: string;
  title: string;
  issuer?: string;
  year?: string;
  category: (
    | "Certificate"
    | "Forage"
    | "Prepinsta"
    | "Publication"
    | "Project"
    | "Internship"
  );
  href: string; // /projects/... from public
  kind: CertKind;
};

export const certificateItems: CertificateItem[] = [

  // Publication
  {
    id: "pub-pradeepkumar-career-guidance-paper",
    title: "Career Guidance Project Paper - Mr. Pradeepkumar R",
    issuer: "Paper Publishing",
    category: "Publication",
    href: "/projects/Career Guidance.png",
    kind: "image",
  },

  // General Certificates
  {
    id: "cert-balaji-rao-pm",
    title: "Product Manager Course Certificate",
    issuer: "Balaji Rao",
    category: "Certificate",
    href: "/projects/Balaji rao MBA Certificate.jpg",
    kind: "image",
  },
  {
    id: "cert-ibm-enterprise-design-thinking",
    title: "Enterprise Design Thinking Practitioner",
    issuer: "IBM",
    category: "Certificate",
    href: "/projects/Enterprise_Design_Thinking_Practitioner_Badge.jpg",
    kind: "image",
  },
  {
    id: "cert-guvi-mern",
    title: "MERN Stack - #LearnWithGUVI Season Two",
    issuer: "GUVI",
    category: "Certificate",
    href: "/projects/GuviCertification - MERN Stack.png",
    kind: "image",
  },
  {
    id: "cert-great-learning-uiux",
    title: "UI/UX Certificate",
    issuer: "Great Learning",
    category: "Certificate",
    href: "/projects/UiUx certificate.jpg",
    kind: "image",
  },

  // Forage
  {
    id: "forage-advanced-se",
    title: "Advanced Software Engineering Job Simulation",
    issuer: "Forage",
    category: "Forage",
    href: "/projects/Forage/Advanced Software Engineering Job Simulation.jpg",
    kind: "image",
  },
  {
    id: "forage-agile-methodology",
    title: "Agile Methodology",
    issuer: "Forage",
    category: "Forage",
    href: "/projects/Forage/Agile Methodology.jpg",
    kind: "image",
  },
  {
    id: "forage-data-analytics",
    title: "Data Analytics and Visualization Job",
    issuer: "Forage",
    category: "Forage",
    href: "/projects/Forage/Data Analytics and Visualization job.jpg",
    kind: "image",
  },
  {
    id: "forage-dev-tech-sim",
    title: "Developer and Technology Job Simulation",
    issuer: "Forage",
    category: "Forage",
    href: "/projects/Forage/Developer and Technology job Simulation.jpg",
    kind: "image",
  },
  {
    id: "forage-se-sim",
    title: "Software Engineering Job Simulation",
    issuer: "Forage",
    category: "Forage",
    href: "/projects/Forage/Software Engineering job Simulation.jpg",
    kind: "image",
  },

  // Prepinsta
  {
    id: "prepinsta-basic-coding",
    title: "Basic Coding Course",
    issuer: "Prepinsta",
    category: "Prepinsta",
    href: "/projects/Prepinsta/Basic Coding Courses.jpg",
    kind: "image",
  },
  {
    id: "prepinsta-css",
    title: "CSS",
    issuer: "Prepinsta",
    category: "Prepinsta",
    href: "/projects/Prepinsta/CSS.jpg",
    kind: "image",
  },
  {
    id: "prepinsta-dsa-c",
    title: "DSA in C",
    issuer: "Prepinsta",
    category: "Prepinsta",
    href: "/projects/Prepinsta/DSA in C.jpg",
    kind: "image",
  },
  {
    id: "prepinsta-git",
    title: "Git",
    issuer: "Prepinsta",
    category: "Prepinsta",
    href: "/projects/Prepinsta/Git.jpg",
    kind: "image",
  },
  {
    id: "prepinsta-html",
    title: "HTML",
    issuer: "Prepinsta",
    category: "Prepinsta",
    href: "/projects/Prepinsta/Html.jpg",
    kind: "image",
  },
  {
    id: "prepinsta-python",
    title: "Python",
    issuer: "Prepinsta",
    category: "Prepinsta",
    href: "/projects/Prepinsta/Python.jpg",
    kind: "image",
  },
  {
    id: "prepinsta-react",
    title: "React",
    issuer: "Prepinsta",
    category: "Prepinsta",
    href: "/projects/Prepinsta/certificate_React_625743.png",
    kind: "image",
  },
  {
    id: "prepinsta-statistics",
    title: "Statistics",
    issuer: "Prepinsta",
    category: "Prepinsta",
    href: "/projects/Prepinsta/Statistics.jpg",
    kind: "image",
  },
];
