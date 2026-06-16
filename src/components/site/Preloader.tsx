import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { logoImage } from "@/lib/site-data";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("h5-preloaded");
    if (seen) { setLoading(false); return; }
    const t = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("h5-preloaded", "1");
    }, 1700);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
        >
          <motion.div
            className="absolute inset-0 bg-primary origin-bottom"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1, transition: { duration: 0.7, ease: [0.83, 0, 0.17, 1] } }}
          />
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={logoImage} alt="H5 Land Services" className="h-28 md:h-36 w-auto" />
            </motion.div>
            <div className="relative h-[2px] w-56 overflow-hidden rounded-full bg-foreground/10">
              <motion.div
                className="absolute inset-y-0 left-0 bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-[11px] font-bold uppercase tracking-[0.4em] text-muted-foreground"
            >
              Turning Raw Land Into Lasting Value
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
