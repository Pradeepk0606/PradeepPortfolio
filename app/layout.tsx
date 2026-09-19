import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { PortfolioNavbar } from "@/components/portfolio/Navbar";
import { PortfolioFooter } from "@/components/portfolio/Footer";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import DevSWCleanup from "@/components/DevSWCleanup";
import "./globals.css";
import "@/styles/apple-developer.css";
import "@/styles/developer-portfolio.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PradeepKumar R | Software Developer | Full Stack Developer",
  description:
    "Portfolio of PradeepKumar R, a Computer Science Engineering student and aspiring Software Developer focused on full-stack development and practical software applications.",
  keywords: [
    "PradeepKumar R",
    "Software Developer",
    "Full Stack Developer",
    "React",
    "Node.js",
    "Python",
    "JavaScript",
    "TypeScript",
    "SQL",
    "MongoDB",
    "Coimbatore Developer",
    "Portfolio"
  ],
  authors: [{ name: "PradeepKumar R" }],
  creator: "PradeepKumar R",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pradeepkumarr.com",
    title: "PradeepKumar R | Software Developer | Full Stack Developer",
    description:
      "Portfolio of PradeepKumar R, a Computer Science Engineering student and aspiring Software Developer focused on full-stack development and practical software applications.",
    siteName: "PradeepKumar R Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "PradeepKumar R | Software Developer | Full Stack Developer",
    description:
      "Portfolio of PradeepKumar R, a Computer Science Engineering student and aspiring Software Developer focused on full-stack development and practical software applications.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://pradeepkumarr.com/#person",
      name: "PradeepKumar R",
      jobTitle: "Software Developer · Full Stack Developer",
      url: "https://pradeepkumarr.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Coimbatore",
        addressRegion: "Tamil Nadu",
        addressCountry: "India",
      },
      sameAs: [
        "https://github.com/Pradeepk0606",
        "https://www.linkedin.com/in/pradeepk143"
      ],
      knowsAbout: [
        "Python",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Node.js",
        "Express.js",
        "SQL",
        "MySQL",
        "MongoDB",
        "REST APIs",
        "Software Engineering"
      ]
    },
    {
      "@type": "ProfilePage",
      "@id": "https://pradeepkumarr.com/#webpage",
      url: "https://pradeepkumarr.com",
      name: "Pradeepkumar R | Software Developer | Full Stack Developer",
      about: { "@id": "https://pradeepkumarr.com/#person" },
      description:
        "Portfolio of Pradeepkumar R, an aspiring Software Developer and Full Stack Developer building practical web applications, APIs, and software solutions."
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <div className="developer-bg" aria-hidden="true" />
        <ScrollProgress />
        <CustomCursor />
        <DevSWCleanup />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <PortfolioNavbar />
          <main id="main-content">{children}</main>
          <PortfolioFooter />
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: "#111827",
                color: "#FFFFFF",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
