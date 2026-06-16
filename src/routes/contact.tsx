import { useState } from "react";
import { PageHero, FadeUp } from "@/components/site/Section";
import { Seo } from "@/components/site/Seo";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent! We'll be in touch shortly.");
    }, 800);
  }

  return (
    <>
      <Seo
        title="Contact H5 Land Services — East Texas Excavation 903-721-1004"
        description="Contact H5 Land Services for excavation, pond construction, and land development across East Texas. Call 903-721-1004 or send a message."
        path="/contact"
      />
      <PageHero eyebrow="Contact" title="Let's Talk About Your Project" subtitle="Call, email, or send a message — most estimates start within 24 hours." />

      <section className="py-20 dirt-texture">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <FadeUp>
            <div className="space-y-6">
              <a href="tel:9037211004" className="flex items-start gap-4 p-6 border rounded-xl bg-card hover:border-primary transition">
                <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center"><Phone /></div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Phone</p>
                  <p className="text-xl font-bold">903-721-1004</p>
                </div>
              </a>
              <a href="mailto:duston.hudnall@yahoo.com" className="flex items-start gap-4 p-6 border rounded-xl bg-card hover:border-primary transition">
                <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center"><Mail /></div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</p>
                  <p className="text-xl font-bold break-all">duston.hudnall@yahoo.com</p>
                </div>
              </a>
              <div className="flex items-start gap-4 p-6 border rounded-xl bg-card">
                <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center"><MapPin /></div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Service Area</p>
                  <p className="text-xl font-bold">East Texas</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border h-64">
                <iframe title="East Texas" src="https://www.google.com/maps?q=East+Texas&output=embed" className="w-full h-full border-0" loading="lazy" />
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <form onSubmit={onSubmit} className="p-8 border rounded-xl bg-card shadow-soft space-y-4">
              <h2 className="text-2xl font-bold">Send a Message</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <Field label="Subject" name="subject" />
              <div>
                <label className="text-sm font-bold uppercase tracking-wider">Message</label>
                <textarea name="message" rows={5} required maxLength={1000} className="mt-2 w-full rounded-md border bg-background px-4 py-3 focus:border-primary focus:outline-none" />
              </div>
              <button disabled={sending} className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 font-bold uppercase text-sm text-primary-foreground hover:opacity-90 disabled:opacity-50 transition">
                {sending ? "Sending..." : (<>Send Message <Send className="h-4 w-4" /></>)}
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
