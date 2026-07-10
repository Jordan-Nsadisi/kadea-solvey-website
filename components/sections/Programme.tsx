"use client";

import { motion } from "motion/react";
import { BarChart2, Repeat, TrendingUp, GitMerge, FileDown } from "lucide-react";
import { ImageMosaic } from "../ui/molecules/image-mosaic";

const OVERVIEW_IMAGES = [
    "https://images.unsplash.com/photo-1560472354-b33ff0ad5a3b?w=300&h=200&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop&auto=format",
];

const FARI_DIMENSIONS = [
    { n: "01", label: "Données" },
    { n: "02", label: "Process" },
    { n: "03", label: "Culture & Compétences" },
    { n: "04", label: "Stack Technologique" },
    { n: "05", label: "Intelligence Artificielle" },
    { n: "06", label: "Gouvernance & Stratégie" },
];

const DOMAINS = [
    { icon: BarChart2, label: "Stratégie Digitale", desc: "Vision, ambition et feuille de route organisationnelle" },
    { icon: Repeat, label: "Transformation", desc: "Conduite du changement et adoption à grande échelle" },
    { icon: TrendingUp, label: "Processus & Performance", desc: "Automatisation, optimisation et mesure d'impact" },
    { icon: GitMerge, label: "Alignement Métier & IT", desc: "Architecture d'entreprise et gouvernance des données" },
];

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Programme() {
    return (
        <section id="programme" className="py-5">
            <div className="w-full container mx-auto px-5">
                <div className="bg-[#45A29E] rounded-3xl overflow-hidden p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-10 items-start">

                        {/* Gauche — image mosaic */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.55, ease: "easeOut" }}
                        >
                            <ImageMosaic imgs={OVERVIEW_IMAGES} alt="Stratégie digitale" />

                            {/* 4 domaines clés */}
                            <motion.div
                                className="grid grid-cols-2 gap-3 mt-6"
                                variants={stagger}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {DOMAINS.map(({ icon: Icon, label, desc }) => (
                                    <motion.div
                                        key={label}
                                        variants={fadeUp}
                                        className="bg-white/15 backdrop-blur-sm rounded-xl p-4 flex flex-col gap-1"
                                    >
                                        <Icon size={16} className="text-white mb-1" />
                                        <span className="text-white font-bold text-xs">{label}</span>
                                        <span className="text-white/70 text-xs leading-snug">{desc}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Droite — texte */}
                        <motion.div
                            className="flex flex-col gap-6"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.55, ease: "easeOut" }}
                        >
                            <span className="text-white/70 font-bold text-xs uppercase tracking-widest">
                                02 · Le Programme
                            </span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                                Piloter le digital &amp; l&apos;IA de votre organisation
                            </h2>
                            <p className="text-white/85 text-sm leading-relaxed">
                                Ce programme intensif est conçu pour le{" "}
                                <strong className="text-white">Top Management, les DSI et les DRH</strong> des
                                institutions publiques et entreprises privées de la RDC. Il couvre 4 domaines clés :
                                Stratégie, Transformation, Processus &amp; Performance, Alignement Métier &amp; IT.
                            </p>

                            {/* Cadre FARI */}
                            <div className="bg-[#0A2540] rounded-2xl p-6">
                                <div className="text-[#F59E0B] font-extrabold text-xs uppercase tracking-widest mb-4">
                                    Cadre de Maturité FARI — 6 Dimensions Clés
                                </div>
                                <motion.div
                                    className="grid grid-cols-2 gap-3"
                                    variants={stagger}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {FARI_DIMENSIONS.map(({ n, label }) => (
                                        <motion.div key={n} variants={fadeUp} className="flex items-center gap-2">
                                            <span className="text-[#45A29E] font-extrabold text-xs">{n}</span>
                                            <span className="text-white text-xs font-medium">{label}</span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>

                            <motion.div
                                className="flex gap-3 flex-wrap"
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                <a
                                    href="#admission"
                                    className="inline-flex items-center gap-2 bg-[#F59E0B] text-[#0A2540] font-semibold px-5 py-2 rounded-md text-sm md:text-[15px] hover:brightness-110 transition text-center shrink-0"
                                >
                                    En savoir plus
                                </a>
                                <a
                                    href="/docs/Programme_Executive_Transformation_Digitale_IA_Solvay-ULB_2026_compressed.pdf"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 bg-[#EC4899] text-white font-semibold px-5 py-2 rounded-md text-sm md:text-[15px] hover:brightness-110 transition text-center shrink-0"
                                >
                                    <FileDown size={15} />
                                    Brochure PDF
                                </a>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}