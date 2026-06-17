import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  CheckCircle2, Phone, ArrowRight, Shield, Award, Users, Wrench, Star, MapPin,
} from "lucide-react";
import { FadeUp } from "@/components/site/Section";
import { Seo } from "@/components/site/Seo";
import { heroImage, services, reviews } from "@/lib/site-data";

const trustBadges = [
  "Licensed & Insured", "Free Estimates", "Residential Projects",
  "Commercial Projects", "East Texas Local", "Reliable Service",
];

const whyUs = [
  { icon: Wrench, title: "Professional Equipment" },
  { icon: Users, title: "Experienced Operators" },
  { icon: Shield, title: "Honest Pricing" },
  { icon: CheckCircle2, title: "Reliable Scheduling" },
  { icon: Phone, title: "Excellent Communication" },
  { icon: Award, title: "Quality Workmanship" },
  { icon: Users, title: "Residential & Commercial" },
  { icon: MapPin, title: "East Texas Knowledge" },
];

const steps = [
  { n: "01", title: "Consultation", desc: "On-site evaluation to understand your goals, soil, and access." },
  { n: "02", title: "Project Planning", desc: "Clear scope, timeline, and pricing — no surprises." },
  { n: "03", title: "Construction", desc: "Skilled operators move dirt right the first time." },
  { n: "04", title: "Final Grading", desc: "Clean finish, proper drainage, and a walkthrough." },
];

export default function Home() {
  const top = services.slice(0, 6);
  return (
    <>
      <Seo
        title="H5 Land Services — Excavation, Ponds & Land Clearing East Texas"
        description="Building better land across East Texas. Excavation, grading, pond construction, drainage, site prep, and land clearing. Free estimates — call 903-721-1004."
        path="/"
        image={heroImage}
      />
      <section className="relative overflow-hidden min-h-[92vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Excavator working East Texas land" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-white">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-white bg-primary px-3 py-1 rounded-full mb-6">
              East Texas Excavation Contractor
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
              Building Better <span className="text-gradient-white-black">Land</span><br />Across East Texas
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]">
              Excavation, grading, pond construction, drainage solutions, site preparation, and land clearing trusted by property owners throughout East Texas.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/estimate" className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-bold uppercase tracking-wide text-primary-foreground shadow-elegant hover:opacity-90 transition">
                Get Free Estimate <ArrowRight className="h-5 w-5" />
              </Link>
              <a href="tel:9037211004" className="inline-flex items-center gap-2 rounded-md border-2 border-white/50 bg-white/10 backdrop-blur px-8 py-4 text-base font-bold uppercase tracking-wide text-white hover:bg-white/20 transition">
                <Phone className="h-5 w-5" /> 903-721-1004
              </a>
            </div>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {[
              { v: 500, s: "+", l: "Projects" },
              { v: 30, s: "+", l: "Cities Served" },
              { v: 100, s: "%", l: "Satisfaction" },
              { v: 10, s: "+", l: "Years Experience" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-white/15 bg-white/10 backdrop-blur-md p-4">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  <CountUp end={s.v} duration={2} enableScrollSpy />{s.s}
                </div>
                <div className="text-xs uppercase tracking-widest text-white/80 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustBadges.map((b) => (
            <div key={b} className="flex items-center gap-2 text-sm font-semibold">
              <CheckCircle2 className="h-4 w-4" /> {b}
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 dirt-texture">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Who We Are</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Your Property.<br />Our Expertise.</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              H5 Land Services provides professional excavation and land improvement solutions throughout East Texas. Whether you're building a new pond, repairing a dam, installing a driveway, clearing acreage, or preparing a commercial site, our team delivers precision work that lasts.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We take pride in honest communication, fair pricing, and quality workmanship from start to finish.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all">
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <img src={services[5].image} alt="Land clearing" className="rounded-lg shadow-elegant aspect-[4/5] object-cover" loading="lazy" />
              <img src={services[2].image} alt="Pond construction" className="rounded-lg shadow-elegant aspect-[4/5] object-cover mt-8" loading="lazy" />
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">What We Do</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Full-Service Land Development</h2>
            <p className="mt-4 text-muted-foreground text-lg">From ponds to pads, drainage to driveways — one trusted crew for every dirt job.</p>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {top.map((s, i) => (
              <FadeUp key={s.slug} delay={i * 0.05}>
                <Link to="/services" className="group block rounded-xl overflow-hidden bg-card shadow-soft hover:shadow-elegant transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold group-hover:text-primary transition">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                      Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-md border-2 border-primary text-primary px-8 py-3 font-bold uppercase text-sm hover:bg-primary hover:text-primary-foreground transition">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Why H5</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Why East Texas Property Owners Choose Us</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w, i) => (
              <FadeUp key={w.title} delay={i * 0.04}>
                <div className="p-6 rounded-xl border bg-card hover:border-primary hover:-translate-y-1 transition-all">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <w.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-bold">{w.title}</h3>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-charcoal text-charcoal-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_20%_30%,white,transparent_50%),radial-gradient(circle_at_80%_70%,white,transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">Our Process</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">From First Call To Final Grade</h2>
          </FadeUp>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <FadeUp key={s.n} delay={i * 0.08}>
                <div className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 hover:border-white/30 hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-500">
                  <div className="absolute -top-5 left-6 h-14 w-14 rounded-xl bg-gradient-to-br from-white to-white/80 text-charcoal font-bold text-2xl flex items-center justify-center shadow-elegant">
                    {s.n}
                  </div>
                  <div className="pt-8">
                    <h3 className="text-xl font-bold text-white">{s.title}</h3>
                    <p className="mt-3 text-sm text-white/75 leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-white/40 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">What Customers Say</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Trusted Across East Texas</h2>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((r, i) => (
              <FadeUp key={r.name} delay={i * 0.08}>
                <div className="p-8 rounded-xl bg-card border h-full shadow-soft">
                  <div className="flex gap-0.5 text-primary mb-4">
                    {Array.from({ length: r.rating }).map((_, x) => <Star key={x} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-foreground">"{r.text}"</p>
                  <div className="mt-6 pt-6 border-t">
                    <p className="font-bold">{r.name}</p>
                    <p className="text-sm text-muted-foreground">{r.project}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/reviews" className="inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all">
              Read More Reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={services[7].image} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-hero-gradient" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center text-white">
          <FadeUp>
            <h2 className="text-4xl md:text-6xl font-bold">Ready To Improve Your Property?</h2>
            <p className="mt-6 text-xl text-white/90">Honest pricing. Quality workmanship. Free estimates across East Texas.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="tel:9037211004" className="inline-flex items-center gap-2 rounded-md bg-white text-primary px-8 py-4 font-bold uppercase text-sm hover:scale-105 transition">
                <Phone className="h-5 w-5" /> Call 903-721-1004
              </a>
              <Link to="/estimate" className="inline-flex items-center gap-2 rounded-md bg-charcoal text-white px-8 py-4 font-bold uppercase text-sm hover:scale-105 transition">
                Request Free Estimate
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
