import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero, FadeUp } from "@/components/site/Section";
import { Seo } from "@/components/site/Seo";
import { faqs } from "@/lib/site-data";
import { Plus } from "lucide-react";

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <Seo
        title="FAQ — Pond, Excavation & Land Clearing Questions | H5"
        description="Common questions about pond construction cost, land clearing, culverts, dam repair, site prep, and service areas across East Texas."
        path="/faq"
        jsonLd={faqLd}
      />
      <PageHero eyebrow="FAQ" title="Frequently Asked Questions" subtitle="Quick answers about pricing, scheduling, and the work we do." image="https://cdn.builder.io/api/v1/image/assets%2Fee8f621c2e53420386d00344659f6cb0%2F2c5ae964f4df4c8ba3338b1b351fe78a?format=webp&width=800&height=1200" />
      <section className="py-20 dirt-texture">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <FadeUp key={i} delay={i * 0.03}>
                <div className="border rounded-xl bg-card overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between text-left p-6 hover:bg-secondary/40 transition"
                  >
                    <span className="font-bold text-lg">{f.q}</span>
                    <Plus className={`h-5 w-5 text-primary shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-muted-foreground">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </section>
    </>
  );
}
