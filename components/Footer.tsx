import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/domain", label: "Domain" },
  { href: "/milestones", label: "Milestones" },
  { href: "/documents", label: "Documents" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800/60
                       bg-slate-50/50 dark:bg-slate-950/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Image
              src="/logo.svg"
              alt="BrineX Logo"
              width={110}
              height={36}
              className="object-contain dark:brightness-0 dark:invert"
            />
            <p className="text-xs text-slate-400 dark:text-slate-500 max-w-xs leading-relaxed">
              Integrated Climate-Intelligent Salt Production Ecosystem
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-slate-500 dark:text-slate-500
                           hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60">
          <p className="text-xs text-slate-400 dark:text-slate-600 text-center">
            BrineX &copy; 2026 &nbsp;·&nbsp; SLIIT Faculty of Computing &nbsp;·&nbsp;
            Project ID: 25-26J-431 &nbsp;·&nbsp; ICHORA 2026 - Paper ID: 230
          </p>
        </div>
      </div>
    </footer>
  );
}
