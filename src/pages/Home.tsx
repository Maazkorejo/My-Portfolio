import { Hero } from "@/components/portfolio/Hero";
import { BlogPreview } from "@/components/portfolio/BlogPreview";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  User,
  Sparkles,
  FolderGit2,
  Briefcase,
  Award,
  BookOpen,
  Mail,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeUpItem, viewportOnce } from "@/lib/motion";

const sectionGateways = [
  {
    title: "About Muhammad",
    subtitle: "01 / Background & Education",
    desc: "3rd-year IT student at University of Sindh focusing on shipping robust AI systems, IDP platforms, and agentic workflows.",
    href: "/about",
    icon: User,
    badge: "BS IT '27",
    color: "from-blue-500/10 to-transparent",
  },
  {
    title: "Master Tech Stack",
    subtitle: "02 / System Capabilities",
    desc: "5 categorized layers spanning AI/LLM engineering, IDP & OCR pipelines, machine learning, cloud backends, and testing.",
    href: "/skills",
    icon: Sparkles,
    badge: "5 Layers",
    color: "from-amber-500/10 to-transparent",
  },
  {
    title: "Projects & Repositories",
    subtitle: "03 / Shipped Software",
    desc: "Explore CTX-Bridge on PyPI, llm-eval-kit, Self-Reflective RAG, Alfred agent, and FIFA World Cup predictor.",
    href: "/projects",
    icon: FolderGit2,
    badge: "6 Flagship",
    color: "from-emerald-500/10 to-transparent",
  },
  {
    title: "Work Experience",
    subtitle: "04 / Roles & Fellowships",
    desc: "AI Developer Intern at Nebulark (IDP SaaS), Research Fellow at INFERENCE Lab (Cohort 01), and PITP–MUET internships.",
    href: "/experience",
    icon: Briefcase,
    badge: "Active Intern",
    color: "from-purple-500/10 to-transparent",
  },
  {
    title: "Verified Certifications",
    subtitle: "05 / Accredited Credentials",
    desc: "12 Anthropic credentials, Google AI Essentials 5-course specialization, Linux Foundation, IBM, and UniAthena Python (×7).",
    href: "/certifications",
    icon: Award,
    badge: "32 Verified",
    color: "from-cyan-500/10 to-transparent",
  },
  {
    title: "Get in Touch",
    subtitle: "06 / Contact & Collab",
    desc: "Open for AI developer positions, backend engineering internships, technical collaborations, and inquiries.",
    href: "/contact",
    icon: Mail,
    badge: "Available",
    color: "from-rose-500/10 to-transparent",
  },
];

export default function Home() {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Header */}
      <Hero />

      {/* Explore Section Gateways */}
      <section className="container-wide">
        <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
              Navigation Hub
            </p>
            <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight">
              Explore Portfolio Sections.
            </h2>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            Click any section to dive into details &rarr;
          </p>
        </div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {sectionGateways.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.href} variants={fadeUpItem}>
                <Link
                  to={item.href}
                  className="group relative flex flex-col justify-between h-full rounded-xl border border-border bg-card p-6 md:p-7 hover:border-accent/70 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="rounded-lg bg-accent/10 p-2.5 text-accent group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full border border-border bg-secondary text-muted-foreground">
                        {item.badge}
                      </span>
                    </div>

                    <p className="font-mono text-[11px] uppercase tracking-wider text-accent mb-1">
                      {item.subtitle}
                    </p>
                    <h3 className="font-display text-xl font-bold group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="relative pt-6 mt-4 border-t border-border/70 flex items-center justify-between text-xs font-mono text-accent">
                    <span>Enter section</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Featured Snapshot */}
      <section className="container-wide">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-accent/10 text-accent border border-accent/20">
                <ShieldCheck className="h-3.5 w-3.5" /> High-Impact Engineering Focus
              </span>
              <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight">
                From offline LLM evaluation to cost-optimized IDP pipelines.
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Operating across the entire stack: evaluating 14 document parsers at Nebulark, building
                deterministic offline evaluation modules at INFERENCE Lab, and shipping developer tooling to PyPI.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button asChild>
                  <Link to="/projects">
                    <FolderGit2 className="mr-2 h-4 w-4" /> View All Projects
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/experience">
                    <Briefcase className="mr-2 h-4 w-4" /> View Experience Timeline
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-mono text-xs">
              <div className="rounded-lg border border-border bg-background p-4 space-y-1">
                <p className="text-accent font-semibold flex items-center gap-1.5">
                  <Cpu className="h-3.5 w-3.5" /> Nebulark IDP
                </p>
                <p className="text-muted-foreground text-[11px]">
                  3-Tier hybrid routing cutting cloud OCR costs by 80–90%.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-4 space-y-1">
                <p className="text-accent font-semibold flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5" /> INFERENCE Lab
                </p>
                <p className="text-muted-foreground text-[11px]">
                  `llm-eval-kit` pip library for offline deterministic LLM evaluations.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-4 space-y-1">
                <p className="text-accent font-semibold flex items-center gap-1.5">
                  <FolderGit2 className="h-3.5 w-3.5" /> CTX-Bridge
                </p>
                <p className="text-muted-foreground text-[11px]">
                  Open-source context handoff CLI tool published on PyPI.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-4 space-y-1">
                <p className="text-accent font-semibold flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5" /> Verified Certs
                </p>
                <p className="text-muted-foreground text-[11px]">
                  32 original scanned credentials (12 Anthropic + Google + Linux).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <BlogPreview />
    </div>
  );
}
