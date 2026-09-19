"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";

const ResumePdf = dynamic(() => import("@/components/ResumePdf"), { ssr: false });

export default function ResumePage() {
  const [mounted, setMounted] = useState(false);
  const [PDFDownloadLinkComponent, setPDFDownloadLinkComponent] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
    import("@react-pdf/renderer").then((mod) => {
      setPDFDownloadLinkComponent(() => mod.PDFDownloadLink);
    }).catch((err) => {
      console.warn("Could not load PDF renderer:", err);
    });
  }, []);

  return (
    <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Resume</h1>
        {mounted && PDFDownloadLinkComponent ? (
          <PDFDownloadLinkComponent document={<ResumePdf />} fileName="Pradeepkumar_R_Resume.pdf">
            {({ loading }: { loading: boolean }) => (
              <Button variant="secondary">{loading ? "Preparing..." : "Download PDF"}</Button>
            )}
          </PDFDownloadLinkComponent>
        ) : (
          <a href="/documents/resume.pdf" download="Pradeepkumar_R_Resume.pdf">
            <Button variant="secondary">Download PDF</Button>
          </a>
        )}
      </div>
      <div className="rounded-2xl border border-border/60 bg-background p-4 shadow-sm">
        <div className="aspect-[1/1.414] w-full">{/* A4 preview ratio */}
          {mounted ? (
            <ResumePdf />
          ) : (
            <div className="flex h-64 items-center justify-center text-muted-foreground">
              Loading resume...
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

