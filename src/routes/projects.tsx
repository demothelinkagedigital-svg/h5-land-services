import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero, FadeUp } from "@/components/site/Section";
import { Seo } from "@/components/site/Seo";
import { projectImages, serviceImages } from "@/lib/site-data";

const items = [
  { src: projectImages.grading, cat: "Grading", title: "Pad Site Grading" },
  { src: projectImages.dozer, cat: "Site Prep", title: "Dozer Land Leveling" },
  { src: serviceImages.pond, cat: "Lake", title: "Pond Construction" },
  { src: projectImages.pond, cat: "Pond", title: "Recreational Lake" },
  { src: serviceImages.clearing, cat: "Clearing", title: "Acreage Clearing" },
  { src: projectImages.gallery1, cat: "Grading", title: "Land Grading Project" },
  { src: projectImages.gallery2, cat: "Site Prep", title: "Site Preparation" },
  { src: projectImages.gallery3, cat: "Pond", title: "Land Clearing" },
  { src: projectImages.gallery4, cat: "Grading", title: "Pad Grading" },
  { src: projectImages.gallery5, cat: "Site Prep", title: "Equipment Site Work" },
  { src: projectImages.gallery8, cat: "Clearing", title: "Acreage Site Work" },
  { src: projectImages.gallery9, cat: "Grading", title: "Heavy Equipment Grading" },
  { src: projectImages.gallery10, cat: "Site Prep", title: "Foundation Prep" },
  { src: projectImages.gallery12, cat: "Pond", title: "Lake Basin Work" },
  { src: projectImages.gallery13, cat: "Pond", title: "Tree Removal Site" },
  { src: projectImages.gallery14, cat: "Pond", title: "Commercial Grading" },
  { src: projectImages.gallery15, cat: "Pond", title: "Drainage Preparation" },
  { src: projectImages.gallery18, cat: "Pond", title: "Lake Construction" },
];

const cats = ["All", "Pond", "Lake", "Grading", "Clearing", "Site Prep"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = filter === "All" ? items : items.filter((i) => i.cat === filter);

  return (
    <>
      <Seo
        title="Projects — Pond, Land Clearing & Site Prep Gallery | H5"
        description="Browse completed H5 Land Services projects across East Texas: ponds, lakes, land clearing, driveways, site prep, grading, and commercial work."
        path="/projects"
        image={projectImages.pond}
      />
      <PageHero eyebrow="Portfolio" title="Real East Texas Projects" subtitle="Browse a sample of recent work — every project built with the same commitment to quality." image="https://cdn.builder.io/api/v1/image/assets%2Fee8f621c2e53420386d00344659f6cb0%2F3935103f72d74ccc9d9889ec94564e33?format=webp&width=800&height=1200" />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition ${
                  filter === c ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-primary/20"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((it, i) => (
              <FadeUp key={it.src + i} delay={i * 0.04}>
                <button onClick={() => setLightbox(it.src)} className="group block rounded-xl overflow-hidden shadow-soft hover:shadow-elegant transition w-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={it.src} alt={it.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  </div>
                </button>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              src={lightbox} alt="Project" className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-elegant"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
