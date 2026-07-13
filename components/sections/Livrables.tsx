"use client";

import { motion } from "motion/react";
import { FileSearch, Map, BrainCircuit, Users } from "lucide-react";

const LIVRABLES = [
    {
        id: "L1",
        icon: FileSearch,
        title: "Diagnostic stratégique",
        subtitle: "12 pages",
        description:
            "Radar FARI sur les 6 dimensions de votre institution. Identification des 2–3 dimensions les plus critiques, des lacunes qui entravent vos ambitions et des axes prioritaires d'action.",
        color: "bg-[#f6a822]/20 text-[#f6a822]",
        border: "border-[#f6a822]/30",
    },
    {
        id: "L2",
        icon: Map,
        title: "Feuille de route 2–3 ans",
        subtitle: "2 pages",
        description:
            "Synthèse lisible de votre roadmap : 3–4 chantiers prioritaires avec jalons trimestriels, indicateurs de résultat, structure de gouvernance et options de mitigation des 2–3 risques majeurs.",
        color: "bg-[#f6a822]/20 text-[#f6a822]",
        border: "border-[#f6a822]/30",
    },
    {
        id: "L3",
        icon: BrainCircuit,
        title: "Arbitrage IA",
        subtitle: "2 pages",
        description:
            "À partir du portefeuille construit en Session 2 : justification de vos 2 cas d'usage prioritaires, valeur publique, séquencement stratégique et prérequis de gouvernance des données.",
        color: "bg-[#f6a822]/20 text-[#f6a822]",
        border: "border-[#f6a822]/30",
    },
    {
        id: "L4",
        icon: Users,
        title: "Plan de mobilisation",
        subtitle: "12 pages",
        description:
            "Conduite du changement (cartographie parties prenantes, plan de communication 6 mois) et plan de compétences : rôles clés à créer, profils attendus, horizon de montée en compétences.",
        color: "bg-[#f6a822]/20 text-[#f6a822]",
        border: "border-[#f6a822]/30",
    },
];

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Livrables() {
    return (
        <section id="livrables" className="py-10   bg-[#15294e]">
            <div className="w-full container mx-auto px-5">

                {/* Header */}
                <motion.div
                    className="mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-[#f6a822] font-bold text-sm uppercase tracking-widest block mb-3">
                        04 · <span className="text-white">Ce que chaque institution emporte</span>
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                        4 Livrables Opérationnels
                    </h2>
                    <p className="text-white/60 text-base mt-3 max-w-xl leading-relaxed">
                        Des documents de direction que vous
                        défendrez devant un jury jouant le rôle de votre comité ministériel ou de direction.
                    </p>
                </motion.div>

                {/* Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {LIVRABLES.map(({ id, icon: Icon, title, subtitle, description, color, border }) => (
                        <motion.div
                            key={id}
                            variants={fadeUp}
                            className={`bg-white/5 border ${border} rounded-2xl p-6 flex gap-5 items-start hover:bg-white/8 transition-colors`}
                        >
                            <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shrink-0`}>
                                <Icon size={18} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-white/40 font-extrabold text-sm uppercase tracking-widest">{id}</span>
                                    <span className="text-white/20 text-sm">·</span>
                                    <span className="text-white/40 text-sm">{subtitle}</span>
                                </div>
                                <h3 className="text-white font-extrabold text-lg leading-tight">{title}</h3>
                                <p className="text-white/60 text-base leading-relaxed">{description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Format note
                <motion.div
                    className="mt-10 border border-white/10 rounded-xl px-6 py-4 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <p className="text-white/50 text-sm leading-relaxed">
                        <strong className="text-white/70">Format du dossier :</strong> Word ou PDF · 7 à 12 pages hors annexes · Français ·
                        Rédigé à la première personne · Défendu devant le jury lors du pitch de restitution à Bruxelles.
                    </p>
                </motion.div> */}

            </div>
        </section>
    );
}
