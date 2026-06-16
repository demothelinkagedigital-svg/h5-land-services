import { useState } from "react";
import { PageHero, FadeUp } from "@/components/site/Section";
import { Seo } from "@/components/site/Seo";
import { services } from "@/lib/site-data";
import { CheckCircle2, Send } from "lucide-react";
import { toast } from "sonner";

const budgets = ["Under $5k", "$5k – $15k", "$15k – $40k", "$40k – $100k", "$100k+", "Not sure"];

export default function Estimate() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Estimate request received! We'll reach out within 24 hours.");
    }, 900);
  }

  return (
    <>
      <Seo
        title="Free Estimate — H5 Land Services East Texas"
        description="Request a free, no-obligation estimate for excavation, pond construction, land clearing, grading, or site prep across East Texas."
        path="/estimate"
      />
      <PageHero eyebrow="Free Estimate" title="Tell Us About Your Project" subtitle="Share a few details — we'll follow up with pricing and next steps." />

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
          <FadeUp className="lg:col-span-1">
            <div className="p-8 rounded-xl bg-primary text-primary-foreground shadow-elegant">
              <h3 className="text-2xl font-bold">Why H5?</h3>
              <ul className="mt-6 space-y-3 text-sm">
                {["Free on-site estimates","Licensed & insured","Honest, fair pricing","Quality workmanship","Reliable scheduling","30+ East Texas cities"].map(b=>(
                  <li key={b} className="flex gap-2"><CheckCircle2 className="h-5 w-5 shrink-0" />{b}</li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-xs uppercase tracking-widest opacity-90">Prefer to call?</p>
                <a href="tel:9037211004" className="text-2xl font-bold">903-721-1004</a>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="lg:col-span-2">
            <form onSubmit={onSubmit} className="p-8 border rounded-xl bg-card shadow-soft space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Email" name="email" type="email" required />
                <Field label="Property Address" name="address" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-bold uppercase tracking-wider">Service Needed</label>
                  <select name="service" required className="mt-2 w-full rounded-md border bg-background px-4 py-3 focus:border-primary focus:outline-none">
                    <option value="">Select a service</option>
                    {services.map(s => <option key={s.slug}>{s.title}</option>)}
                  </select>
                </div>
                <Field label="Property Size (acres)" name="size" />
              </div>
              <div>
                <label className="text-sm font-bold uppercase tracking-wider">Budget Range</label>
                <select name="budget" className="mt-2 w-full rounded-md border bg-background px-4 py-3 focus:border-primary focus:outline-none">
                  <option value="">Select a budget</option>
                  {budgets.map(b => <option key={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-bold uppercase tracking-wider">Project Description</label>
                <textarea name="description" rows={5} required maxLength={1500} className="mt-2 w-full rounded-md border bg-background px-4 py-3 focus:border-primary focus:outline-none" placeholder="Tell us about your project..." />
              </div>
              <div>
                <label className="text-sm font-bold uppercase tracking-wider">Photos (optional)</label>
                <input name="photos" type="file" multiple accept="image/*" className="mt-2 w-full rounded-md border bg-background px-4 py-3 text-sm" />
              </div>
              <button disabled={sending} className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 font-bold uppercase text-sm text-primary-foreground hover:opacity-90 disabled:opacity-50 transition">
                {sending ? "Submitting..." : (<>Submit Request <Send className="h-4 w-4" /></>)}
              </button>
            </form>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-bold uppercase tracking-wider">{label}</label>
      <input name={name} type={type} required={required} maxLength={255} className="mt-2 w-full rounded-md border bg-background px-4 py-3 focus:border-primary focus:outline-none" />
    </div>
  );
}
