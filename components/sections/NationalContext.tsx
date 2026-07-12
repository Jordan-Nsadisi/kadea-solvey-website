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
        <section
            className="py-10   bg-[#F8FAFC]"
        >
            <div className="w-full container mx-auto px-5 flex flex-col gap-12">

                {/* Top Section */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-14 items-center">
                    {/* Gauche — Texte */}
                    <motion.div
                        className="flex flex-col justify-center gap-5"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                    >
                        <div>
                            <span className="text-[#f6a822] font-bold text-sm uppercase tracking-widest block mb-4">
                                01 · Contexte National
                            </span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A2540] leading-tight">
                                Le numérique & l&apos;IA, <br className="hidden md:block" />
                                priorité de la <span className="text-[#f6a822]">Présidence</span> et <br className="hidden md:block" />
                                <span className="text-[#f6a822]">Gouvernement de la RDC</span>
                            </h2>
                        </div>
                        <p className="text-gray-600 text-base leading-relaxed">
                            Sous l&apos;impulsion de la Présidence, la République Démocratique du Congo engage un tournant
                            décisif vers le numérique et l&apos;intelligence artificielle, porté par une nouvelle génération
                            de stratégies nationales. {" "}
                            <span className="text-[#0A2540] font-bold text-base leading-relaxed">ULB-Solvay Lifelong Learning
                            </span>{" "}
                            accompagne la Présidence dans cette réflexion et outille ses
                            décideurs pour piloter la transformation digitale & l&apos;IA des institutions publiques.

                        </p>
                    </motion.div>

                    {/* Droite — Image*/}
                    <div className="rounded-xl overflow-hidden">
                        <motion.div
                            className="relative min-h-[380px] w-full rounded-3xl overflow-hidden shadow-sm border border-gray-100 aspect-[4/3] md:aspect-auto"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.55, ease: "easeOut" }}
                        >
                            <Image
                                src={digitalNationImg}
                                alt="Présidence de la RDC - DRC Digital Nation"
                                fill
                                className=" object-cover object-center rounded-xl"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/20 to-transparent" />
                        </motion.div>
                    </div>
                </div>

                {/* Middle Section : Les 3 cadres nationaux */}
                <div>
                    <motion.div
                        className="grid md:grid-cols-3 gap-6"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {FRAMEWORKS.map(({ title, desc }) => (
                            <motion.div
                                key={title}
                                variants={fadeUp}
                                className="bg-white rounded-2xl p-6 flex flex-col gap-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="mt-1">
                                    <h4 className="text-[#0A2540] font-bold text-xl mb-2">{title}</h4>
                                    <p className="text-gray-500 text-base leading-relaxed">{desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
