import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
// Auth removed per request
import DevSWCleanup from "@/components/DevSWCleanup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pradeepkumar R - Full Stack Developer Portfolio",
  description: "Aspiring Full Stack Developer passionate about building scalable, user-focused applications. MERN Stack | AI/ML | Blockchain",
  keywords: ["Pradeepkumar R", "Full Stack Developer", "MERN Stack", "Portfolio", "Web Developer", "React", "Node.js"],
  authors: [{ name: "Pradeepkumar R" }],
  creator: "Pradeepkumar R",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pradeepkumarr.com",
    title: "Pradeepkumar R - Full Stack Developer",
    description: "Innovating with Code, Designing with Purpose",
    siteName: "Pradeepkumar R Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pradeepkumar R - Full Stack Developer",
    description: "Innovating with Code, Designing with Purpose",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <DevSWCleanup />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Chatbot />
            <Toaster
              position="bottom-right"
              toastOptions={{
                duration: 3000,
                style: {
                  background: "hsl(var(--background))",
                  color: "hsl(var(--foreground))",
                  border: "1px solid hsl(var(--border))",
                },
              }}
            />
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
      </body>
    </html>
  );
}
