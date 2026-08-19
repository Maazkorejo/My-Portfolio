import { Certifications } from "@/components/portfolio/Certifications";
import { Link } from "react-router-dom";
import { FolderGit2, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CertificationsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container-wide mb-8">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-3">
            <span className="h-px w-6 bg-accent" />
            <span>05 / Verified Credentials</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-balance">
            Certifications &amp; Achievements.
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed text-pretty">
            12 Anthropic-verified credentials, Google AI Essentials 5-course specialization,
            Linux Foundation, and accredited credentials from IBM, McKinsey, Forage, and UniAthena.
          </p>
        </div>
      </div>

      <Certifications />

      <div className="container-wide mt-16 pt-12 border-t border-border">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-display text-2xl font-bold text-foreground">Explore how these skills power real platforms</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Review my shipped projects, IDP pipelines at Nebulark, and open-source evaluation engineering.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild className="font-mono text-xs uppercase tracking-wider font-semibold">
              <Link to="/projects">
                <FolderGit2 className="mr-2 h-4 w-4" /> View Projects
              </Link>
            </Button>
            <Button asChild variant="outline" className="font-mono text-xs uppercase tracking-wider font-semibold">
              <Link to="/experience">
                <Briefcase className="mr-2 h-4 w-4" /> Experience
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
