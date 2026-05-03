"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";
import type { TeamMember } from "@/lib/team";
import { useRef } from "react";

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [3, -3]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-3, 3]), { stiffness: 200, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      className="glass backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 dark:border-slate-700/50 flex flex-col items-center text-center gap-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, perspective: 800, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ boxShadow: "0 20px 60px rgba(20,184,166,0.10)" }}
    >
      <motion.div
        className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-teal-400/40 bg-gradient-to-br from-teal-500 to-teal-700"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="80px"
            className="object-cover"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">
            {member.initials}
          </span>
        )}
      </motion.div>
      <div>
        <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">{member.name}</h3>
        <p className="font-mono text-xs text-teal-600 dark:text-teal-400 mt-0.5">{member.studentId}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{member.role}</p>
      </div>
      <a
        href={`mailto:${member.email}`}
        className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
      >
        <Mail size={12} />
        {member.email}
      </a>
    </motion.div>
  );
}
