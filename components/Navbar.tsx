"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/domain", label: "Domain" },
  { href: "/milestones", label: "Milestones" },
  { href: "/documents", label: "Documents" },
  { href: "/presentations", label: "Presentations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

type NavState = "top" | "scrolled" | "hidden";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navState, setNavState] = useState<NavState>("top");
  const { scrollY } = useScroll();

  let prevY = 0;
  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - prevY;
    prevY = latest;

    if (latest < 40) {
      setNavState("top");
    } else if (diff > 6 && !menuOpen) {
      setNavState("hidden");
    } else if (diff < -2) {
      setNavState("scrolled");
    }
  });

  const isScrolled = navState !== "top";

  return (
    <motion.nav
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-out
        ${isScrolled
          ? "top-2 mx-3 sm:mx-6 rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-700/50 shadow-glass"
          : "top-0 mx-0 bg-transparent"
        }`}
      initial={{ y: -64, opacity: 0 }}
      animate={{
        y: navState === "hidden" ? -80 : 0,
        opacity: navState === "hidden" ? 0 : 1,
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 flex items-center justify-between"
        style={{ height: isScrolled ? "56px" : "68px", transition: "height 0.3s ease" }}
      >
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.svg"
            alt="BrineX Logo"
            width={110}
            height={36}
            className="object-contain dark:brightness-0 dark:invert"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium rounded-lg
                           transition-colors group"
              >
                <span className={isActive
                  ? "text-teal-600 dark:text-teal-400"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                }>
                  {link.label}
                </span>
                {/* Animated underline */}
                <motion.span
                  className="absolute bottom-1 left-3 right-3 h-px bg-teal-500 dark:bg-teal-400 origin-left"
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            );
          })}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile burger */}
          <motion.button
            className="md:hidden p-2 rounded-xl text-slate-500 dark:text-slate-400
                       hover:text-slate-900 dark:hover:text-white
                       hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span key="x"
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span key="menu"
                  initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-slate-200/60 dark:border-slate-700/50"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors
                      ${isActive
                        ? "bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                      }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
