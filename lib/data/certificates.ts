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
    href: "/projects/Mr.  Pradeepkumar R.pdf",
    kind: "pdf",
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
    href: "/projects/Forage/Advanced Software Engineering Job.pdf",
    kind: "pdf",
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
    href: "/projects/Forage/Data Analytics and Visualization Job.pdf",
    kind: "pdf",
  },
  {
    id: "forage-dev-tech-sim",
    title: "Developer and Technology Job Simulation",
    issuer: "Forage",
    category: "Forage",
    href: "/projects/Forage/Developer and Technology Job Simulation.pdf",
    kind: "pdf",
  },
  {
    id: "forage-se-sim",
    title: "Software Engineering Job Simulation",
    issuer: "Forage",
    category: "Forage",
    href: "/projects/Forage/Software Engineering Job Simulation.pdf",
    kind: "pdf",
  },

  // Prepinsta
  {
    id: "prepinsta-basic-coding",
    title: "Basic Coding Course",
    issuer: "Prepinsta",
    category: "Prepinsta",
    href: "/projects/Prepinsta/certificate_Basic Coding Course_625743.pdf",
    kind: "pdf",
  },
  {
    id: "prepinsta-css",
    title: "CSS",
    issuer: "Prepinsta",
    category: "Prepinsta",
    href: "/projects/Prepinsta/certificate_CSS_625743.pdf",
    kind: "pdf",
  },
  {
    id: "prepinsta-dsa-c",
    title: "DSA in C",
    issuer: "Prepinsta",
    category: "Prepinsta",
    href: "/projects/Prepinsta/certificate_DSA in C_625743.pdf",
    kind: "pdf",
  },
  {
    id: "prepinsta-git",
    title: "Git",
    issuer: "Prepinsta",
    category: "Prepinsta",
    href: "/projects/Prepinsta/certificate_Git_625743.pdf",
    kind: "pdf",
  },
  {
    id: "prepinsta-html",
    title: "HTML",
    issuer: "Prepinsta",
    category: "Prepinsta",
    href: "/projects/Prepinsta/certificate_HTML_625743.pdf",
    kind: "pdf",
  },
  {
    id: "prepinsta-python",
    title: "Python",
    issuer: "Prepinsta",
    category: "Prepinsta",
    href: "/projects/Prepinsta/certificate_Python Course_625743.pdf",
    kind: "pdf",
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
    href: "/projects/Prepinsta/certificate_Statistics_625743.pdf",
    kind: "pdf",
  },
];
