import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { logoImage } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-secondary border-t mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logoImage} alt="H5 Land Services" className="h-28 w-auto inline-block" />
          <p className="mt-4 text-muted-foreground max-w-md">
            Excavation • Pond Construction • Land Clearing • Site Development across East Texas.
          </p>
          <p className="mt-6 italic text-earth font-semibold">"Turning Raw Land Into Lasting Value."</p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/services", "Services"],
              ["/projects", "Projects"],
              ["/service-areas", "Service Areas"],
              ["/reviews", "Reviews"],
              ["/contact", "Contact"],
              ["/estimate", "Free Estimate"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-muted-foreground hover:text-primary">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /><a href="tel:9037211004" className="hover:text-primary">903-721-1004</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /><a href="mailto:duston.hudnall@yahoo.com" className="hover:text-primary break-all">duston.hudnall@yahoo.com</a></li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />East Texas</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} H5 Land Services. All rights reserved.</p>
          <p>Licensed & Insured · Free Estimates</p>
        </div>
      </div>
    </footer>
  );
}
