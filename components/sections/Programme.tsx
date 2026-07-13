"use client";

import { motion } from "motion/react";
import { BarChart2, Repeat, TrendingUp, GitMerge, FileDown } from "lucide-react";
import Image from "next/image";
import executiveImg from "@/public/assets/images/executive.jpeg";

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
        <section id="programme" className="py-10   bg-white">
            <div className="w-full container mx-auto px-5">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-14 items-start">

                    {/* Droite — FARI + 4 Domaines + CTA */}
                    <div>
                        <motion.div
                            className="mb-12 md:mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-[#f6a822] font-bold text-sm uppercase tracking-widest block mb-3">
                                03 · <span className="text-[#15294e]">Le Programme</span>
                            </span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A2540] leading-tight max-w-2xl mb-4">
                                Piloter le digital &amp; l&apos;IA de votre organisation
                            </h2>
                            <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
                                Programme intensif conçu pour le{" "}
                                <strong className="text-[#0A2540]">Top Management, les DSI et les DRH </strong> des
                                institutions publiques et entreprises privées de la RDC. Il couvre 4 domaines clés :
                                Stratégie, Transformation, Processus &amp; Performance, Alignement Métier &amp; IT.
                            </p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col gap-8"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.55, ease: "easeOut" }}
                        >

                            {/* 4 Domaines en liste propre */}
                            <div>
                                <span className="text-[#0A2540] font-bold text-base block mb-4">
                                    4 Domaines d&apos;expertise couverts :
                                </span>
                                <motion.div
                                    className="flex flex-col gap-3"
                                    variants={stagger}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {DOMAINS.map(({ icon: Icon, label, desc }) => (
                                        <motion.div
                                            key={label}
                                            variants={fadeUp}
                                            className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex gap-4 items-center"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0">
                                                <Icon size={18} className="text-[#f6a822]" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[#0A2540] font-bold text-base">{label}</span>
                                                <span className="text-gray-500 text-sm leading-snug">{desc}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>

                        <div className="">
                            {/* Liens d'action */}
                            <motion.div
                                className="flex gap-3 flex-wrap mt-3"
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                {/* TODO: Ajouter le lien d'inscription */}
                                <a
                                    href=""
                                    className="inline-flex items-center gap-2 bg-[#f6a822] text-white font-semibold px-5 py-2.5 rounded-md text-base md:text-xl hover:bg-[#6D28D9] transition shrink-0"
                                >
                                    S&apos;inscrire
                                </a>
                                <a
                                    href="/docs/Programme_Executive_Transformation_Digitale_IA_Solvay-ULB_2026_compressed.pdf"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 border border-[#f6a822] text-[#f6a822] font-semibold px-5 py-2.5 rounded-md text-base md:text-xl hover:bg-[#f6a822] hover:text-white transition shrink-0"
                                >
                                    <FileDown size={15} />
                                    Brochure PDF
                                </a>
                            </motion.div>
                        </div>
                    </div>

                    {/* Gauche — grande image + Public cible */}
                    <motion.div
                        className="flex flex-col gap-8 md:mt-10"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                    >
                        <div className="rounded-xl overflow-hidden">
                            <motion.div
                                className="relative w-full min-h-[380px] rounded-3xl overflow-hidden shadow-sm border border-gray-100 aspect-[4/3] md:aspect-auto cursor-pointer"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <Image
                                    src={executiveImg}
                                    alt="Programme Executive Kadea"
                                    fill
                                    className="object-cover object-center rounded-xl"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/20 to-transparent" />
                            </motion.div>
                        </div>
                        {/* Public cible */}
                        <div className="border-l-4 border-[#f6a822] pl-4 py-1">
                            <span className="text-[#f6a822] font-bold text-sm uppercase tracking-widest block mb-2">
                                Public cible
                            </span>
                            <ul className="text-[#0A2540] text-base space-y-1">
                                {[
                                    "Ministres, Secrétaires Généraux, Directeurs Généraux",
                                    "DSI / DNUM des institutions publiques",
                                    "DRH et Directeurs de la Transformation",
                                    "C-Level des entreprises privées de la RDC",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="text-[#f6a822] mt-0.5 shrink-0">·</span>
                                        <span className="text-gray-600 text-base leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}