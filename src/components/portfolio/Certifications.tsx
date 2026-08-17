import { useState } from "react";
import { Section } from "./Section";
import { certifications, certificateImages } from "@/data/portfolio";
import { Award, Download, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeUpItem, viewportOnce, viewportOnceTight } from "@/lib/motion";

// Top 3 most important & prestigious certifications to display by default
const featuredTitles = [
  "Introduction to Model Context Protocol (MCP)",
  "Google AI Essentials (5-Course Specialization)",
  "Inclusive Open Source Community Orientation (LFC102)",
];

export function Certifications() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Top 3 featured certificates
  const featuredCerts = certificateImages.filter((c) =>
    featuredTitles.includes(c.title)
  );
  // Fallback in case titles slightly mismatch
  const top3 = featuredCerts.length === 3 ? featuredCerts : certificateImages.slice(0, 3);

  return (
    <Section
      id="certifications"
      eyebrow="05 / Credentials"
      title="Certifications & achievements."
      description="Verified credentials across AI protocols, agentic workflows, machine learning, and cloud systems."
    >
      {/* Featured Top 3 Section (Always Visible) */}
      <div className="mb-8">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-accent/15 text-accent border border-accent/30">
              <Sparkles className="h-3 w-3" /> Top Credentials
            </span>
            <span className="text-xs font-mono text-muted-foreground">
              {isExpanded ? `Showing all ${certificateImages.length}` : `Showing 3 of ${certificateImages.length}`}
            </span>
          </div>

          <motion.a
            href="/downloads/maaz-korejo-certificates.zip"
            download="maaz-korejo-certificates.zip"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 font-mono text-xs px-3.5 py-1.5 rounded-md bg-secondary text-foreground hover:bg-secondary/80 border border-border"
          >
            <Download className="h-3.5 w-3.5" /> Download all (.zip)
          </motion.a>
        </div>

        {/* 3 Main Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {top3.map((cert, idx) => (
            <Dialog key={cert.title}>
              <DialogTrigger asChild>
                <motion.button
                  type="button"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="group text-left rounded-xl border-2 border-accent/40 bg-card overflow-hidden hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all focus:outline-none focus:ring-2 focus:ring-accent flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary w-full">
                    <img
                      src={cert.src}
                      alt={`${cert.title} — ${cert.issuer}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 right-2.5">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-background/90 backdrop-blur-sm text-accent border border-accent/30 shadow-sm">
                        <CheckCircle2 className="h-3 w-3" /> Featured #{idx + 1}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-semibold text-sm leading-snug group-hover:text-accent transition-colors line-clamp-2">
                        {cert.title}
                      </h4>
                      <p className="font-mono text-xs text-muted-foreground mt-1.5">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="font-mono text-[11px] text-accent mt-3 inline-flex items-center gap-1">
                      Click to view certificate &rarr;
                    </span>
                  </div>
                </motion.button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>{cert.title}</DialogTitle>
                  <DialogDescription>{cert.issuer}</DialogDescription>
                </DialogHeader>
                <img
                  src={cert.src}
                  alt={`${cert.title} — ${cert.issuer}`}
                  className="w-full h-auto rounded-md border border-border"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>

      {/* Dropdown Toggle Action Bar */}
      <div className="flex flex-col items-center justify-center my-8">
        <div className="w-full border-t border-border relative mb-6" />
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="group relative font-mono text-xs px-6 py-5 rounded-full border-border hover:border-accent bg-card hover:bg-secondary transition-all shadow-sm flex items-center gap-3"
        >
          <Award className="h-4 w-4 text-accent group-hover:rotate-12 transition-transform" />
          <span>
            {isExpanded
              ? "Collapse to Top 3 Credentials"
              : `View All ${certificateImages.length} Certifications & Credential Groups`}
          </span>
          {isExpanded ? (
            <ChevronUp className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
          ) : (
            <ChevronDown className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors animate-bounce" />
          )}
        </Button>
      </div>

      {/* Expanded Dropdown Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {/* Categorized Credential Groups */}
            <motion.div
              variants={staggerContainer(0.08)}
              initial="hidden"
              animate="show"
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
            >
              {certifications.map((c) => (
                <motion.div
                  key={c.group}
                  variants={fadeUpItem}
                  whileHover={{ y: -3 }}
                  className="rounded-lg border border-border bg-card p-5 hover:border-accent/60 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="h-4 w-4 text-accent" />
                    <h3 className="font-semibold text-xs leading-snug">{c.group}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {c.items.map((i) => (
                      <li key={i} className="text-xs text-muted-foreground flex gap-2 leading-relaxed">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            {/* Complete 32 Scanned Certificates Grid */}
            <div className="pt-4 border-t border-border">
              <div className="flex items-end justify-between gap-4 flex-wrap mb-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-accent mb-1">
                    Complete Roster
                  </p>
                  <h3 className="font-display text-xl md:text-2xl font-bold">
                    All {certificateImages.length} Verified Credentials.
                  </h3>
                </div>
              </div>

              <motion.div
                variants={staggerContainer(0.02)}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {certificateImages.map((cert) => (
                  <Dialog key={cert.title}>
                    <DialogTrigger asChild>
                      <motion.button
                        type="button"
                        variants={fadeUpItem}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="group text-left rounded-lg border border-border bg-card overflow-hidden hover:border-accent/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent flex flex-col"
                      >
                        <div className="aspect-[4/3] overflow-hidden bg-secondary w-full">
                          <img
                            src={cert.src}
                            alt={`${cert.title} — ${cert.issuer}`}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                          />
                        </div>
                        <div className="p-3 flex-1 flex flex-col justify-between">
                          <p className="text-xs font-semibold leading-snug line-clamp-2">
                            {cert.title}
                          </p>
                          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1.5 truncate">
                            {cert.issuer}
                          </p>
                        </div>
                      </motion.button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>{cert.title}</DialogTitle>
                        <DialogDescription>{cert.issuer}</DialogDescription>
                      </DialogHeader>
                      <img
                        src={cert.src}
                        alt={`${cert.title} — ${cert.issuer}`}
                        className="w-full h-auto rounded-md border border-border"
                      />
                    </DialogContent>
                  </Dialog>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
