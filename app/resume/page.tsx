"use client";
import dynamic from "next/dynamic";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "@/components/ui/Button";

const ResumePdf = dynamic(() => import("@/components/ResumePdf"), { ssr: false });

export default function ResumePage() {
  return (
    <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Resume</h1>
        <PDFDownloadLink document={<ResumePdf />} fileName="Pradeepkumar_R_Resume.pdf">
          {({ loading }) => (
            <Button variant="secondary">{loading ? "Preparing..." : "Download PDF"}</Button>
          )}
        </PDFDownloadLink>
      </div>
      <div className="rounded-2xl border border-border/60 bg-background p-4 shadow-sm">
        <div className="aspect-[1/1.414] w-full">{/* A4 preview ratio */}
          <ResumePdf />
        </div>
      </div>
    </main>
  );
}
