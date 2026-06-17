import { PageHero, FadeUp } from "@/components/site/Section";
import { Seo } from "@/components/site/Seo";
import { reviews } from "@/lib/site-data";
import { Star, Quote } from "lucide-react";
import CountUp from "react-countup";

export default function Reviews() {
  return (
    <>
      <Seo
        title="Customer Reviews — H5 Land Services East Texas"
        description="Read what East Texas property owners say about H5 Land Services. 5-star reviews for pond construction, clearing, grading, and site prep."
        path="/reviews"
      />
      <PageHero eyebrow="Reviews" title="What East Texas Says About H5" subtitle="Honest words from the property owners we've worked for." image="https://cdn.builder.io/api/v1/image/assets%2Fee8f621c2e53420386d00344659f6cb0%2F9faa1187a7d34043b103185fe50da9ba?format=webp&width=800&height=1200" />

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[{v:5,s:".0",l:"Average Rating"},{v:500,s:"+",l:"Happy Customers"},{v:30,s:"+",l:"Cities Served"},{v:100,s:"%",l:"Satisfaction"}].map(s=>(
            <div key={s.l}>
              <div className="text-4xl md:text-5xl font-bold"><CountUp end={s.v} duration={2} enableScrollSpy/>{s.s}</div>
              <div className="text-xs uppercase tracking-widest mt-2 opacity-90">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 dirt-texture">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <FadeUp key={r.name} delay={i * 0.05}>
              <div className="relative p-8 rounded-xl bg-card border h-full shadow-soft">
                <Quote className="absolute top-4 right-4 h-10 w-10 text-primary/15" />
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
      </section>
    </>
  );
}
