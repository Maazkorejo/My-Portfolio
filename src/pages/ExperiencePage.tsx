import { Experience } from "@/components/portfolio/Experience";
import { Link } from "react-router-dom";
import { Award, FolderGit2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExperiencePage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container-wide mb-12">
        <div className="max-w-3xl mb-8">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
            04 / Career & Fellowships
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Where I've Been & What I've Built.
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Professional track record spanning Intelligent Document Processing (IDP) SaaS,
            open-source LLM evaluation engineering fellowships, and cloud backend engineering.
          </p>
        </div>
      </div>

      <Experience />

      <div className="container-wide mt-16 pt-12 border-t border-border">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-display text-2xl font-bold">Review my verified credentials</h3>
            <p className="text-sm text-muted-foreground">
              Explore 32 accredited certifications from Anthropic, Google, Linux Foundation, IBM, and more.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild>
              <Link to="/certifications">
                <Award className="mr-2 h-4 w-4" /> View Certifications
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/projects">
                <FolderGit2 className="mr-2 h-4 w-4" /> View Projects
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
