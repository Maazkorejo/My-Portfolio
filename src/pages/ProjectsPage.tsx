import { Projects } from "@/components/portfolio/Projects";
import { Link } from "react-router-dom";
import { Award, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container-wide mb-12">
        <div className="max-w-3xl mb-8">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
            03 / Selected Work
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Projects & Open-Source Code.
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Shipped systems, PyPI packages, RAG architectures, and ML pipelines where the model is only one part of the story.
          </p>
        </div>
      </div>

      <Projects />

      <div className="container-wide mt-16 pt-12 border-t border-border">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-display text-2xl font-bold">Want to collaborate or discuss an architecture?</h3>
            <p className="text-sm text-muted-foreground">
              I'm open to discussing AI engineering roles, technical internships, and open-source contributions.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild>
              <Link to="/contact">
                <Mail className="mr-2 h-4 w-4" /> Get in Touch
              </Link>
            </Button>
            <Button asChild variant="outline">
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
