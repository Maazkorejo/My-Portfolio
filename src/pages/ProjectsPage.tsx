import { Projects } from "@/components/portfolio/Projects";
import { Link } from "react-router-dom";
import { Award, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container-wide mb-8">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-3">
            <span className="h-px w-6 bg-accent" />
            <span>03 / Production Systems &amp; Tooling</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-balance">
            Projects &amp; Open-Source Code.
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed text-pretty">
            Shipped systems, PyPI packages, RAG architectures, and ML pipelines where the model is only one part of the story.
          </p>
        </div>
      </div>

      <Projects />

      <div className="container-wide mt-16 pt-12 border-t border-border">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-display text-2xl font-bold text-foreground">Want to collaborate or discuss an architecture?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I'm open to discussing AI engineering roles, technical internships, and open-source contributions.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild className="font-mono text-xs uppercase tracking-wider font-semibold">
              <Link to="/contact">
                <Mail className="mr-2 h-4 w-4" /> Get in Touch
              </Link>
            </Button>
            <Button asChild variant="outline" className="font-mono text-xs uppercase tracking-wider font-semibold">
              <Link to="/certifications">
                <Award className="mr-2 h-4 w-4" /> Certifications
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
