"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TechBadge } from "@/components/TechBadge";

const techGroups = [
  {
    category: "Backend",
    items: ["NestJS", "TypeScript", "Python", "FastAPI", "Node.js 20 LTS"],
  },
  {
    category: "ML / AI",
    items: ["BiLSTM", "SARIMAX", "YOLOv8m", "ONNX Runtime", "FedAvg"],
  },
  {
    category: "Data",
    items: ["MongoDB Atlas", "Apache Kafka", "gRPC", "Protocol Buffers"],
  },
  {
    category: "Infrastructure",
    items: ["Docker Compose", "Nx Monorepo", "GitHub Actions", "AWS EC2", "AWS SQS"],
  },
  {
    category: "Frontend",
    items: ["Next.js 14", "Tailwind CSS", "Framer Motion", "WebSocket"],
  },
  {
    category: "External APIs",
    items: ["OpenWeatherMap", "PayHere", "Google Gemini 2.5 Flash"],
  },
];

const sections = [
  {
    number: "01",
    title: "Literature Survey",
    content: [
      "Solar salt production and climate variability in Sri Lanka — the Puttalam Salt Society (PSS) experienced a 40% production drop in 2023–24 due to climate disruption.",
      "LSTM and BiLSTM networks applied to agricultural time-series forecasting, demonstrating strong sequence modelling for weather-driven production cycles.",
      "Statistical forecasting limitations of ARIMA and SARIMAX in causal data settings — motivating hybrid deep learning + regression approaches.",
      "Demand estimation in agri-commodity settings using yield ratio methods versus SARIMAX, highlighting advantages for transparent, explainable outputs.",
      "Computer vision in food and industrial quality grading: YOLO family models (YOLOv5→YOLOv8) applied to grain and mineral classification tasks.",
      "Federated learning for privacy-preserving industrial AI — FedAvg and its variants applied to distributed sensor and operational data across geographically separated sites.",
    ],
  },
  {
    number: "02",
    title: "Research Gap",
    content: [
      "No data-driven decision support system exists for Sri Lankan solar salt production.",
      "Operators use manual logbooks, informal price negotiation, and experience-based harvest timing — with no systematic data collection.",
      "No existing system integrates production forecasting with market intelligence, real-time quality control, and privacy-preserving collaborative learning for this domain.",
      "The unique microclimate dependency of crystallization parameters (salinity, pH, temperature, evaporation rate) has not been modelled at the pond level for PSS conditions.",
    ],
  },
  {
    number: "03",
    title: "Research Problem",
    content: [
      "How can an integrated AI platform provide production forecasting, market intelligence, real-time quality control, and privacy-preserving collaborative learning for solar salt landowners in Puttalam, Sri Lanka — within a scalable, cloud-native microservices architecture?",
    ],
  },
  {
    number: "04",
    title: "Research Objectives",
    content: [
      "Crystal — Develop a dual-input BiLSTM + Linear Regression system to forecast daily crystallization parameters and monthly production volumes for PSS landowners.",
      "Compass — Build a market intelligence engine delivering SARIMAX price forecasts, yield-ratio demand estimates, and transparent rule-based seller recommendations.",
      "Vision — Design and deploy a YOLOv8m computer vision pipeline for real-time salt purity detection and quality grading at saltern sites.",
      "Valor — Implement FedSalt, a federated learning framework for privacy-preserving salt waste valorization across distributed saltern operators.",
    ],
  },
  {
    number: "05",
    title: "Methodology",
    content: [
      "Two-stage AI forecasting architecture deployed on a cloud-native microservices platform.",
      "Stage 1 — Crystal: BiLSTM processes 60-day sequences of 8 pond crystallization parameters + 14 weather features; Linear Regression with causal inputs calibrates daily outputs to monthly production volumes (R²=0.9732).",
      "Stage 2 — Compass: Landowner-scaled production forecasts flow via gRPC→HTTP to the planning module; SARIMAX(1,1,1)(0,1,1,12) forecasts salt prices using 168 months of PSS historical data; yield ratio algorithm estimates per-landowner demand; rule-based ranking orders sellers by price_per_bag DESC.",
      "Vision runs in parallel: YOLOv8m ONNX inference on saltern images via NestJS microservice, achieving 99.41% precision at ~45ms per frame.",
      "Valor — FedSalt uses FedAvg with Amazon SQS for asynchronous model weight aggregation across client salterns, preserving data privacy while achieving R²=0.904 on held-out test data.",
    ],
  },
];

function SectionBlock({ number, title, content }: { number: string; title: string; content: string[]; index: number }) {
  return (
    <motion.div
      className="relative mb-16"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute -top-4 left-0 text-8xl font-black select-none pointer-events-none leading-none
                      text-teal-500/10 dark:text-teal-400/10">
        {number}
      </div>
      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs px-2 py-0.5 rounded
                           text-teal-600 dark:text-teal-400
                           border border-teal-300/50 dark:border-teal-500/30">
            {number}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">{title}</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-teal-500/30 to-transparent" />
        </div>
        <ul className="space-y-3">
          {content.map((item, i) => (
            <motion.li
              key={i}
              className="flex gap-3 leading-relaxed text-sm sm:text-base
                         text-slate-600 dark:text-slate-300"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-teal-500 dark:text-teal-400 mt-1 shrink-0">▸</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function DomainPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-20">
      <AnimatedSection delay={0} className="mb-16 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-slate-900 dark:text-slate-100">
          Research Domain
        </h1>
        <p className="leading-relaxed max-w-xl mx-auto text-slate-500 dark:text-slate-400">
          Contextualizing BrineX within the existing body of knowledge — from climate-driven salt production to privacy-preserving federated AI.
        </p>
      </AnimatedSection>

      {sections.map((s, i) => (
        <SectionBlock key={s.number} number={s.number} title={s.title} content={s.content} index={i} />
      ))}

      {/* Technologies */}
      <motion.div
        className="relative mb-16"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute -top-4 left-0 text-8xl font-black select-none pointer-events-none leading-none
                        text-teal-500/10 dark:text-teal-400/10">
          06
        </div>
        <div className="relative">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-xs px-2 py-0.5 rounded
                             text-teal-600 dark:text-teal-400
                             border border-teal-300/50 dark:border-teal-500/30">06</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">Technologies Used</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-teal-500/30 to-transparent" />
          </div>
          <div className="space-y-6">
            {techGroups.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: gi * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider mb-3
                               text-slate-400 dark:text-slate-500">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <TechBadge key={item} label={item} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
