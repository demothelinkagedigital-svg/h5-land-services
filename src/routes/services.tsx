import { Link } from "react-router-dom";
import { PageHero, FadeUp } from "@/components/site/Section";
import { Seo } from "@/components/site/Seo";
import { services } from "@/lib/site-data";
import { CheckCircle2, ArrowRight } from "lucide-react";

const bullets: Record<string, string[]> = {
  "excavation-grading": ["New construction excavation", "Site development", "Property improvements", "Drainage projects"],
  "drainage": ["Culvert installation", "Water diversion", "Erosion control", "Surface drainage"],
  "pond-construction": ["New pond construction", "Pond expansions", "Recreational ponds", "Fishing ponds"],
  "lake-construction": ["Recreational lakes", "Livestock lakes", "Water features", "Large earthmoving"],
  "dam-repair": ["Pond dam repairs", "Erosion restoration", "Structural improvements", "Leak repairs"],
  "land-clearing": ["Tree removal", "Brush clearing", "Property development", "Site prep"],
  "dozer-services": ["Land leveling", "Site preparation", "Clearing", "Pond excavation"],
  "house-pads": ["Pad construction", "Final grade work", "Drainage design", "Compaction"],
  "driveways": ["Gravel driveways", "Driveway repairs", "Culvert installation", "Driveway extensions"],
  "commercial": ["Excavation", "Grading", "Utility prep", "Drainage systems"],
};

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services — Excavation, Ponds, Grading & Clearing | H5 Land Services"
        description="Full-service excavation, pond construction, dam repair, land clearing, driveways, drainage, house pads, and commercial site prep across East Texas."
        path="/services"
      />
      <PageHero eyebrow="What We Do" title="Complete Excavation & Land Development" subtitle="One trusted East Texas crew for every dirt job — from a single driveway to multi-acre site prep." image={services[2].image} />

      <section className="py-20 dirt-texture">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((s, i) => (
            <FadeUp key={s.slug}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="overflow-hidden rounded-xl shadow-elegant">
                  <img src={s.image} alt={s.title} className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">0{i + 1 > 9 ? i + 1 : i + 1}</span>
                  <h2 className="mt-2 text-3xl md:text-4xl font-bold">{s.title}</h2>
                  <p className="mt-4 text-lg text-muted-foreground">{s.desc}</p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                    {(bullets[s.slug] || []).map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/estimate" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-bold uppercase text-sm text-primary-foreground hover:opacity-90 transition">
                    Get Estimate <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </>
  );
}
