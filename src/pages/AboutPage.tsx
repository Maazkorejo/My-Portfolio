import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, FolderGit2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container-wide mb-12">
        <div className="max-w-3xl mb-8">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
            01 / Background & Philosophy
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            About Muhammad Maaz.
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            AI Developer and Backend Engineer focused on building robust LLM-integrated platforms,
            Intelligent Document Processing (IDP) SaaS, and reproducible evaluation architectures.
          </p>
        </div>
      </div>

      <About />

      <div className="container-wide mt-16 pt-12 border-t border-border">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-display text-2xl font-bold">Interested in exploring my technical work?</h3>
            <p className="text-sm text-muted-foreground">
              Check out my shipped flagship projects, open-source developer tooling, and technical tech stack.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild>
              <Link to="/projects">
                <FolderGit2 className="mr-2 h-4 w-4" /> View Projects
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/skills">
                <Sparkles className="mr-2 h-4 w-4" /> Explore Stack
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/contact">
                <Mail className="mr-2 h-4 w-4" /> Contact
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
