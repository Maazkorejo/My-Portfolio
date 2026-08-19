import { Contact } from "@/components/portfolio/Contact";
import { Link } from "react-router-dom";
import { FolderGit2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container-wide mb-8">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-3">
            <span className="h-px w-6 bg-accent" />
            <span>06 / Connect &amp; Collaborate</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-balance">
            Let's Build Something Together.
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed text-pretty">
            Have an open engineering position, project idea, or technical question? Feel free to reach out directly.
          </p>
        </div>
      </div>

      <Contact />

      <div className="container-wide mt-16 pt-12 border-t border-border">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-display text-2xl font-bold text-foreground">Quick Navigation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Explore other areas of my portfolio to learn more about my background, stack, and shipped work.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="outline" className="font-mono text-xs uppercase tracking-wider font-semibold">
              <Link to="/projects">
                <FolderGit2 className="mr-2 h-4 w-4" /> View Projects
              </Link>
            </Button>
            <Button asChild variant="outline" className="font-mono text-xs uppercase tracking-wider font-semibold">
              <Link to="/skills">
                <Sparkles className="mr-2 h-4 w-4" /> Tech Stack
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
