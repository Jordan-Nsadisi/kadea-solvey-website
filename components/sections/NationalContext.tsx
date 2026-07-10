"use client";

import { motion } from "motion/react";
import Image from "next/image";
import digitalNationImg from "@/public/assets/images/digitalnation.jpeg";

const FRAMEWORKS = [
    {
        n: "01",
        title: "DRC Digital Nation 2030",
        desc: "Vision présidentielle dévoilée en 2025.",
    },
    {
        n: "02",
        title: "PNN 2 · 2026-2030",
        desc: "Nouveau Plan National du Numérique.",
    },
    {
        n: "03",
        title: "Stratégie Nationale de l'IA",
        desc: "1re stratégie IA du pays, en cours.",
    },
];

const STATS = [
    { value: "2030", label: "Horizon « DRC Digital Nation »" },
    { value: "1,5 Md $", label: "Programme numérique & IA (USD)" },
    { value: "100 Md $", label: "Flux numériques / an en RDC" },
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
        <section id="contexte" className="py-16 bg-white">
            <div className="w-full container mx-auto px-5 flex flex-col gap-12 md:gap-16">

                {/* Top Section : Texte (gauche) + Image (droite) */}
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <motion.div
                        className="flex flex-col gap-5"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] leading-tight">
                            Le numérique & l&apos;IA, <br />
                            priorité de la <span className="text-[#F59E0B]">Présidence</span> et <br />
                            <span className="text-[#F59E0B]">Gouvernement de la RDC</span>
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-2">
                            Sous l&apos;impulsion de la Présidence, la République Démocratique du Congo engage un tournant
                            décisif vers le numérique et l&apos;intelligence artificielle, porté par une nouvelle génération
                            de stratégies nationales.
                        </p>
                        <p className="text-[#0A2540] font-bold text-sm md:text-base leading-relaxed">
                            ULB-Solvay Lifelong Learning accompagne la Présidence dans cette réflexion et outille ses
                            décideurs pour piloter la transformation digitale & l&apos;IA des institutions publiques et le
                            développement des usages de l&apos;IA au sein de l&apos;État.
                        </p>
                    </motion.div>

                    <motion.div
                        className="relative w-full h-[250px] md:h-[350px] rounded-xl overflow-hidden shadow-md"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                    >
                        <Image
                            src={digitalNationImg}
                            alt="Présidence de la RDC - DRC Digital Nation"
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>
                </div>

                {/* Middle Section : Les 3 cadres nationaux */}
                <div>
                    <motion.span
                        className="text-[#F59E0B] font-extrabold text-xs uppercase tracking-widest block mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        EN COHÉRENCE AVEC LES CADRES NATIONAUX DU NUMÉRIQUE & DE L&apos;IA
                    </motion.span>
                    <motion.div
                        className="grid md:grid-cols-3 gap-5"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {FRAMEWORKS.map(({ n, title, desc }) => (
                            <motion.div
                                key={title}
                                variants={fadeUp}
                                className="bg-[#F8FAFC] rounded-2xl p-6 md:p-8 flex flex-col gap-4"
                            >
                                <div className="w-10 h-10 bg-[#F59E0B] rounded-lg flex items-center justify-center text-white font-extrabold text-sm">
                                    {n}
                                </div>
                                <div>
                                    <h4 className="text-[#0A2540] font-bold text-base mb-1">{title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom Section : Les 4 statistiques */}
                <div>
                    <motion.span
                        className="text-[#F59E0B] font-extrabold text-xs uppercase tracking-widest block mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        LA TRANSFORMATION NUMÉRIQUE EN RÉPUBLIQUE DÉMOCRATIQUE DU CONGO
                    </motion.span>
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {STATS.map(({ value, label }) => (
                            <motion.div key={label} variants={fadeUp} className="flex flex-col gap-2 border-t-2 border-[#0A2540] pt-4">
                                <div className="text-[#0A2540] font-extrabold text-3xl md:text-4xl">{value}</div>
                                <div className="text-gray-500 text-xs md:text-sm font-medium">{label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
