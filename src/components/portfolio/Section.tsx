import { motion } from "framer-motion";
import { ReactNode } from "react";
import { staggerContainer, fadeUpItem, viewportOnce } from "@/lib/motion";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className = "" }: Props) {
  return (
    <section id={id} className={`py-16 md:py-24 scroll-mt-20 ${className}`}>
      <div className="container-wide">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-10 max-w-3xl"
        >
          {eyebrow && (
            <motion.div
              variants={fadeUpItem}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-3.5"
            >
              <span className="h-px w-6 bg-accent" />
              <span>{eyebrow}</span>
            </motion.div>
          )}
          <motion.h2
            variants={fadeUpItem}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.1]"
          >
            {title}
          </motion.h2>
          {description && (
            <motion.p
              variants={fadeUpItem}
              className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed text-pretty"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
