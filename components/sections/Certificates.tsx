"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { certificateItems } from "@/lib/data/certificates";

const categories = [
  "All",
  ...Array.from(new Set(certificateItems.map((i) => i.category))),
];

export function Certificates() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<typeof certificateItems[0] | null>(null);
  const [loaded, setLoaded] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    return certificateItems.filter((item) => {
      const catOk = selectedCategory === "All" || item.category === (selectedCategory as any);
      const q = query.trim().toLowerCase();
      const qOk = !q || item.title.toLowerCase().includes(q) || (item.issuer?.toLowerCase().includes(q) ?? false);
      return catOk && qOk;
    });
  }, [selectedCategory, query]);

  return (
    <section id="certificates" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Certificates</span> & Publications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore certifications, simulations, and published work
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap items-center justify-between gap-3 mb-8"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className="rounded-full"
              >
                {cat}
              </Button>
            ))}
          </div>
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search title or issuer..."
              className="pl-9 pr-3 py-2 rounded-md border bg-background w-64 max-w-full"
            />
            <Search className="h-4 w-4 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
              >
                <Card className="h-full card-hover group cursor-pointer overflow-hidden" onClick={() => setActive(item)}>
                  <div className="relative h-56 bg-gradient-to-br from-primary/20 to-purple-500/20 overflow-hidden">
                    {item.kind === "image" ? (
                      <>
                        {!loaded.has(item.id) && (
                          <div className="absolute inset-0 animate-pulse bg-secondary/60" />
                        )}
                        <img
                          src={encodeURI(item.href)}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform"
                          onLoad={() => setLoaded((prev) => new Set(prev).add(item.id))}
                        />
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="px-3 py-1 text-xs rounded bg-black/50 text-white">PDF</div>
                      </div>
                    )}
                    <Badge className="absolute top-3 right-3">{item.category}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {item.issuer && (
                      <div className="text-sm text-muted-foreground">{item.issuer}</div>
                    )}
                  </CardContent>
                </Card>
              </motion.div)
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setActive(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-background rounded-lg max-w-5xl w-full max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between p-3 border-b">
                  <div className="px-2 py-1 text-sm font-medium">{active.title}</div>
                  <Button variant="ghost" size="icon" onClick={() => setActive(null)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="w-full h-[80vh] bg-secondary/30">
                  {active.kind === "pdf" ? (
                    <iframe src={encodeURI(active.href)} className="w-full h-full border-0" title={active.title} />
                  ) : (
                    <img src={encodeURI(active.href)} alt={active.title} className="w-full h-full object-contain" />
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
