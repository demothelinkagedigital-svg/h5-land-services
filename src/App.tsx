import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Preloader } from "@/components/site/Preloader";
import { PageTransition } from "@/components/site/PageTransition";

import Home from "@/routes/index";
import About from "@/routes/about";
import Services from "@/routes/services";
import Projects from "@/routes/projects";
import ServiceAreas from "@/routes/service-areas";
import Reviews from "@/routes/reviews";
import FAQ from "@/routes/faq";
import Contact from "@/routes/contact";
import Estimate from "@/routes/estimate";
import NotFound from "@/routes/not-found";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <Preloader />
      <Header />
      <ScrollToTop />
      <main className="min-h-[60vh]">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/estimate" element={<Estimate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </>
  );
}
