"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function PageTransition() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const t = setTimeout(() => setShow(false), 550);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key={pathname + "-curtain"}
          className="fixed inset-0 z-[999] pointer-events-none origin-top"
          style={{ background: "linear-gradient(135deg, #0F766E, #0a1f1a)" }}
          initial={{ scaleY: 0, opacity: 1 }}
          animate={{
            scaleY: [0, 1, 1, 0],
            opacity: 1,
            transition: {
              times: [0, 0.35, 0.55, 1],
              duration: 0.55,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          exit={{ opacity: 0, transition: { duration: 0 } }}
        />
      )}
    </AnimatePresence>
  );
}
