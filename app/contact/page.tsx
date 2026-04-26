"use client";

import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Mail, MapPin, Loader2, Send } from "lucide-react";

function AnimatedInput({ label, type = "text", name, required = false, textarea = false }: {
  label: string; type?: string; name: string; required?: boolean; textarea?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const Tag = textarea ? "textarea" : "input";
  return (
    <div className="relative">
      <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">{label}</label>
      <div className="relative">
        <Tag
          name={name}
          type={!textarea ? type : undefined}
          required={required}
          rows={textarea ? 5 : undefined}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none resize-none focus:border-teal-500/60 transition-colors"
          placeholder={`Enter ${label.toLowerCase()}`}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-400 rounded-full origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: focused ? 1 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const subject = data.get("subject") as string;
    const message = data.get("message") as string;

    setLoading(true);
    const mailto = `mailto:it22893734@my.sliit.lk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.location.href = mailto;
    setTimeout(() => setLoading(false), 1500);
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-20">
      <AnimatedSection delay={0} className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">Contact Us</h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Reach out with questions about BrineX, collaboration opportunities, or academic inquiries.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
        {/* Info */}
        <AnimatedSection delay={0.1} className="lg:col-span-2 space-y-5">
          <div className="glass rounded-2xl p-6 border border-slate-200/60 dark:border-slate-700/50 space-y-5">
            <div className="flex gap-3">
              <Mail size={18} className="text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Primary Email</p>
                <a href="mailto:it22893734@my.sliit.lk" className="text-sm text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 transition-colors">
                  it22893734@my.sliit.lk
                </a>
              </div>
            </div>
            <div className="h-px bg-slate-200 dark:bg-slate-700" />
            <div className="flex gap-3">
              <MapPin size={18} className="text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Institution</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">SLIIT, New Kandy Rd, Malabe, Sri Lanka</p>
              </div>
            </div>
            <div className="h-px bg-slate-200 dark:bg-slate-700" />
            <div className="flex gap-3">
              <MapPin size={18} className="text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Project Partner</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">Puttalam Salt Society, Puttalam, Sri Lanka</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Form */}
        <AnimatedSection delay={0.2} className="lg:col-span-3">
          <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-2xl p-6 border border-slate-200/60 dark:border-slate-700/50 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <AnimatedInput label="Name" name="name" required />
              <AnimatedInput label="Email" type="email" name="email" required />
            </div>
            <AnimatedInput label="Subject" name="subject" required />
            <AnimatedInput label="Message" name="message" textarea required />
            <motion.button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {loading ? (
                <motion.span animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}>
                  <Loader2 size={16} />
                </motion.span>
              ) : (
                <Send size={16} />
              )}
              {loading ? "Opening mail client…" : "Send Message"}
            </motion.button>
          </form>
        </AnimatedSection>
      </div>

      {/* Map */}
      <AnimatedSection delay={0.3}>
        <div className="rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-700/50">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3!2d79.9725!3d6.9146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256849e8e4b65%3A0x24b9e4d7c1c19f8e!2sSLIIT!5e0!3m2!1sen!2slk!4v1"
            width="100%"
            height="300"
            style={{ border: 0 }}
            className="dark:[filter:invert(90%)_hue-rotate(180deg)]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SLIIT Malabe Campus"
          />
        </div>
      </AnimatedSection>
    </div>
  );
}
