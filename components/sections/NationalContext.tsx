"use client";

import { motion } from "motion/react";
import { Flag, FileCheck2, Lightbulb } from "lucide-react";

const FRAMEWORKS = [
    {
        icon: Flag,
        title: "DRC Digital Nation 2030",
        desc: "Vision présidentielle dévoilée en 2025.",
    },
    {
        icon: FileCheck2,
        title: "PNN 2 · 2026-2030",
        desc: "Le nouveau Plan National du Numérique.",
    },
    {
        icon: Lightbulb,
        title: "Stratégie Nationale de l'IA",
        desc: "1re stratégie IA du pays, en cours de déploiement.",
    },
];

const STATS = [
    { value: "2030", label: "Horizon DRC Digital Nation" },
    { value: "1,5 Md $", label: "Programme numérique & IA" },
    { value: "100 Md $", label: "Flux numériques annuels en RDC" },
    { value: "30 M", label: "Utilisateurs Mobile Money" },
];

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function NationalContext() {
    return (
        <section id="contexte" className="py-16 bg-[#F8FAFC]">
            <div className="w-full container mx-auto px-5">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Gauche — Textes et Cadres */}
                    <motion.div
                        className="flex flex-col gap-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                    >
                        <div>
                            <span className="text-[#45A29E] font-bold text-xs uppercase tracking-widest block mb-3">
                                Contexte Stratégique
                            </span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A2540] leading-tight">
                                Le numérique & l&apos;IA, priorité de la Présidence et du Gouvernement
                            </h2>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Sous l&apos;impulsion de la Présidence, la République Démocratique du Congo engage un tournant
                            décisif vers le numérique et l&apos;intelligence artificielle, porté par une nouvelle génération
                            de stratégies nationales.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-2">
                            <strong className="text-[#0A2540]">ULB-Solvay Lifelong Learning</strong> accompagne cette
                            vision et outille les décideurs pour piloter la transformation digitale et le développement
                            des usages de l&apos;IA au sein de l&apos;État et des entreprises.
                        </p>

                        <div className="border-l-2 border-[#F59E0B] pl-5 mt-2">
                            <span className="text-[#0A2540] font-extrabold text-xs uppercase tracking-widest block mb-4">
                                En cohérence avec les cadres nationaux :
                            </span>
                            <motion.div
                                className="flex flex-col gap-4"
                                variants={stagger}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {FRAMEWORKS.map(({ icon: Icon, title, desc }) => (
                                    <motion.div key={title} variants={fadeUp} className="flex items-start gap-3">
                                        <div className="mt-0.5 bg-[#0A2540]/5 p-1.5 rounded-md text-[#0A2540]">
                                            <Icon size={16} />
                                        </div>
                                        <div>
                                            <h4 className="text-[#0A2540] font-bold text-sm">{title}</h4>
                                            <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Droite — Stats Grid */}
                    <motion.div
                        className="grid grid-cols-2 gap-4"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {STATS.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                variants={fadeUp}
                                className={`bg-white rounded-2xl p-6 md:p-8 flex flex-col justify-center border border-gray-100 shadow-sm ${
                                    i === 1 || i === 2 ? "lg:translate-y-6" : ""
                                }`}
                            >
                                <div className="text-[#45A29E] font-extrabold text-3xl md:text-4xl mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-500 text-xs md:text-sm font-medium leading-snug">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
