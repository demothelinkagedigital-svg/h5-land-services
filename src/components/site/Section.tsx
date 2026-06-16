import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { heroImage } from "@/lib/site-data";

export function FadeUp({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
}) {
  const bg = image ?? heroImage;
  return (
    <section className="relative overflow-hidden border-b">
      <div className="absolute inset-0">
        <img src={bg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/80 via-charcoal/60 to-charcoal/30" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-primary-foreground bg-primary px-3 py-1 rounded-full mb-5">
              {eyebrow}
            </span>
          )}
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">{title}</h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
