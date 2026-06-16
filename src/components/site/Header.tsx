import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { logoImage } from "@/lib/site-data";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/service-areas", label: "Areas" },
  { to: "/reviews", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b transition-shadow ${
        scrolled ? "shadow-soft" : ""
      }`}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-20" : "h-28"}`}>
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <motion.img
            src={logoImage}
            alt="H5 Land Services"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`w-auto transition-all duration-300 group-hover:scale-[1.03] ${scrolled ? "h-16" : "h-24"}`}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-3 py-2 text-sm font-semibold tracking-wide uppercase transition-colors ${
                  active ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:9037211004" className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary">
            <Phone className="h-4 w-4" /> 903-721-1004
          </a>
          <Link
            to="/estimate"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-elegant hover:opacity-90 transition"
          >
            Free Estimate
          </Link>
        </div>

        <button aria-label="Menu" className="lg:hidden p-2 rounded-md hover:bg-muted" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t bg-background overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link key={l.to} to={l.to} className="px-3 py-2.5 text-sm font-semibold uppercase tracking-wide rounded-md hover:bg-muted">
                  {l.label}
                </Link>
              ))}
              <a href="tel:9037211004" className="mt-2 px-3 py-2.5 text-sm font-bold flex items-center gap-2">
                <Phone className="h-4 w-4" /> 903-721-1004
              </a>
              <Link to="/estimate" className="mt-1 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-bold uppercase text-primary-foreground">
                Free Estimate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
