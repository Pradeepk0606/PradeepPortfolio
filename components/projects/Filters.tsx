"use client";
import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type Category = "All" | "AI/ML" | "Web" | "Blockchain" | "IoT";

const tabs: Category[] = ["All", "AI/ML", "Web", "Blockchain", "IoT"];

interface FiltersProps {
  value: Category;
  onChange: (c: Category) => void;
}

export default function Filters({ value, onChange }: FiltersProps) {
  return (
    <Tab.Group
      selectedIndex={tabs.indexOf(value)}
      onChange={(i) => onChange(tabs[i])}
      as={motion.div}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      <Tab.List className="mx-auto flex w-full flex-wrap items-center justify-center gap-2 rounded-2xl border border-border/60 bg-background/60 p-2 backdrop-blur-md">
        {tabs.map((t) => (
          <Tab key={t} className={({ selected }) => cn(
            "px-3 py-1.5 text-sm rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
            selected ? "bg-primary text-primary-foreground" : "hover:bg-muted"
          )} aria-label={`Filter ${t}`}>
            {t}
          </Tab>
        ))}
      </Tab.List>
    </Tab.Group>
  );
}
