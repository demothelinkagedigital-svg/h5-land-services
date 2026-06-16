import { PageHero, FadeUp } from "@/components/site/Section";
import { Seo } from "@/components/site/Seo";
import { serviceAreas } from "@/lib/site-data";
import { MapPin } from "lucide-react";

export default function Areas() {
  return (
    <>
      <Seo
        title="Service Areas — East Texas Excavation & Pond Builders | H5"
        description="H5 Land Services proudly serves Tyler, Longview, Nacogdoches, Palestine, Jacksonville, Lufkin, Henderson and surrounding East Texas communities."
        path="/service-areas"
      />
      <PageHero eyebrow="Service Areas" title="Proudly Serving East Texas" subtitle="From Tyler to Lufkin, Longview to Palestine — H5 Land Services works across the region." />

      <section className="py-20 dirt-texture">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <FadeUp>
            <div className="rounded-xl overflow-hidden shadow-elegant border h-full min-h-[400px]">
              <iframe
                title="East Texas service area"
                src="https://www.google.com/maps?q=East+Texas&output=embed"
                className="w-full h-full min-h-[400px] border-0"
                loading="lazy"
              />
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold">Communities We Serve</h2>
            <p className="mt-3 text-muted-foreground">Don't see your town? Give us a call — we travel throughout East Texas.</p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-2">
              {serviceAreas.map((a) => (
                <div key={a} className="flex items-center gap-2 p-3 rounded-md bg-secondary hover:bg-primary hover:text-primary-foreground transition">
                  <MapPin className="h-4 w-4 text-primary group-hover:text-current shrink-0" />
                  <span className="text-sm font-semibold">{a}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
