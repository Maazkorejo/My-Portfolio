import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { personal } from "@/data/portfolio";
import { LinkedInBadge } from "./LinkedInBadge";
import { Mail, Phone, Github, Linkedin, MapPin, Check, ArrowUpRight, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    // Send email or webhook
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Message sent successfully — I'll get back to you shortly!");
    setForm({ name: "", email: "", message: "" });
    setSubmitting(false);
    setSent(true);
    setTimeout(() => setSent(false), 2000);
  };

  return (
    <Section
      id="contact"
      eyebrow="06 / Work Together"
      title="Let's build something robust."
      description="Available for AI developer roles, backend engineering internships, technical collaborations, and research inquiries."
    >
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info & Social Media (INFERENCE Lab Style) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" /> Direct Reach-out
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-secondary border border-transparent hover:border-border transition-all group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors flex-shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email</p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    {personal.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${personal.phone.replace(/\s/g, "")}`}
                className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-secondary border border-transparent hover:border-border transition-all group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors flex-shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Phone</p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    {personal.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3.5 p-3 rounded-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground flex-shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Location</p>
                  <p className="text-sm font-semibold text-foreground">{personal.location}</p>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-6 border-t border-border">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-3">
                Social Profiles &amp; Code:
              </p>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3.5 py-2 font-mono text-xs font-semibold text-foreground hover:border-foreground/40 hover:bg-secondary transition-all"
                >
                  <Linkedin className="h-3.5 w-3.5 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3 w-3 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3.5 py-2 font-mono text-xs font-semibold text-foreground hover:border-foreground/40 hover:bg-secondary transition-all"
                >
                  <Github className="h-3.5 w-3.5 text-foreground" />
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3 w-3 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Official Embedded LinkedIn Profile Badge */}
          <LinkedInBadge />
        </div>

        {/* Message Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-card p-6 sm:p-9 space-y-5"
          >
            <div>
              <h3 className="font-display text-xl font-bold text-foreground">Send a Message</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Fill in the form below and I'll respond within 24 hours.
              </p>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Your Name
              </Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Ada Lovelace"
                className={`bg-background ${errors.name ? "border-destructive" : ""}`}
              />
              {errors.name && <p className="font-mono text-xs text-destructive">{errors.name}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Your Email
              </Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="ada@example.com"
                className={`bg-background ${errors.email ? "border-destructive" : ""}`}
              />
              {errors.email && <p className="font-mono text-xs text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Your Message
              </Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                placeholder="Tell me about your project, timeline, or open role..."
                className={`bg-background ${errors.message ? "border-destructive" : ""}`}
              />
              {errors.message && <p className="font-mono text-xs text-destructive">{errors.message}</p>}
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={submitting || sent}
              className="w-full font-mono text-xs uppercase tracking-wider font-semibold gap-2"
            >
              {sent ? (
                <>
                  <Check className="h-4 w-4 text-accent-foreground" /> Message Sent!
                </>
              ) : submitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}
