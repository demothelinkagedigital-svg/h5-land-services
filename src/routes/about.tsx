import { PageHero, FadeUp } from "@/components/site/Section";
import { Seo } from "@/components/site/Seo";
import { Target, Heart, Shield, Phone, Award, Users } from "lucide-react";
import { heroImage, serviceImages } from "@/lib/site-data";

const values = [
  { icon: Shield, title: "Integrity", desc: "Honest communication and fair pricing on every job." },
  { icon: Award, title: "Quality", desc: "Workmanship that lasts long after we leave the site." },
  { icon: Phone, title: "Communication", desc: "We keep you informed from first call to final grade." },
  { icon: Heart, title: "Customer Satisfaction", desc: "Your project is not done until you're happy." },
  { icon: Users, title: "Reliability", desc: "We show up, deliver, and stand behind our work." },
  { icon: Target, title: "Safety", desc: "Safe practices protect your property and our crew." },
];

export default function About() {
  return (
    <>
      <Seo
        title="About H5 Land Services — East Texas Excavation Contractor"
        description="H5 Land Services delivers dependable excavation, pond construction, and land development across East Texas. Built on integrity, quality, and reliability."
        path="/about"
      />
      <PageHero eyebrow="About H5 Land Services" title="Built On Dirt. Driven By Integrity." subtitle="Dependable excavation and land development across East Texas." image={heroImage} />

      <section className="py-24 dirt-texture">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Our Story</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Local Roots. Real Results.</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              H5 Land Services was built on a commitment to providing dependable excavation and land development services throughout East Texas.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We believe successful projects start with proper planning, clear communication, and quality execution. From small residential jobs to large-scale ranch improvements, we approach every project with the same commitment to excellence.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <img src={serviceImages.clearing} alt="H5 dozer working East Texas land" className="rounded-xl shadow-elegant w-full aspect-[4/3] object-cover" loading="lazy" />
          </FadeUp>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <span className="text-xs font-bold uppercase tracking-[0.3em]">Our Mission</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">
              Deliver exceptional excavation and land improvement solutions while maintaining honesty, integrity, and superior workmanship.
            </h2>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 dirt-texture">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Core Values</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">The Standards We Live By</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.05}>
                <div className="p-8 rounded-xl border bg-card hover:border-primary hover:-translate-y-1 transition-all h-full">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{v.title}</h3>
                  <p className="mt-2 text-muted-foreground">{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
