"use client";

import React from "react";
import { motion } from "motion/react";
import { MapPin, Calendar, Clock, ChevronRight } from "lucide-react";

const SESSIONS = [
    {
        id: "01",
        accentBg: "bg-[#F59E0B]",
        accentText: "text-[#F59E0B]",
        accentBorder: "border-t-4 border-[#F59E0B]",
        title: "Diagnostic & Stratégie Digitale",
        location: "Kinshasa · Hôtel Pullman",
        date: "Septembre 2026",
        duration: "3 jours",
        intro: "Ancrer une vision stratégique commune de la transformation digitale et de l'IA. Chaque participant repart avec une première ébauche de roadmap institutionnelle.",
        days: [
            {
                label: "Jour 1",
                title: "Repenser l'État à l'ère du digital et de l'IA",
                items: ["Le pourquoi de la transformation", "Valeur publique et panorama des cas d'usage"],
            },
            {
                label: "Jour 2",
                title: "Comprendre le digital et l'IA — capacités et leviers",
                items: ["L'essence du digital", "Cartographie des capacités et premiers leviers IA"],
            },
            {
                label: "Jour 3",
                title: "Diagnostic de maturité et business case",
                items: ["Le cadre de maturité FARI — 6 dimensions", "Construction du business case et ébauche de roadmap"],
            },
        ],
        deliverable: "L1 — Diagnostic FARI + Business Case institutionnel",
        chipBg: "bg-[#F59E0B]/15 text-[#78350f]",
    },
    {
        id: "02",
        accentBg: "bg-[#EC4899]",
        accentText: "text-[#EC4899]",
        accentBorder: "border-t-4 border-[#EC4899]",
        title: "IA, Données & Cas d'Usage",
        location: "Kinshasa · Hôtel Pullman",
        date: "Octobre 2026",
        duration: "3 jours",
        intro: "Maîtriser les outils IA applicables au secteur public, poser les fondations de gouvernance des données, et définir un portefeuille concret de cas d'usage prêts à expérimenter.",
        days: [
            {
                label: "Jour 4",
                title: "Modèles opérationnels et architecture digitale",
                items: ["L'organisation à l'heure du digital et de l'IA", "Architecture et infrastructure digitale"],
            },
            {
                label: "Jour 5",
                title: "Outils IA secteur public et gouvernance des données",
                items: ["Copilot, Power Platform, Azure AI", "Gouvernance des données : le prérequis de l'IA"],
            },
            {
                label: "Jour 6",
                title: "Cas d'usage & conception de solution",
                items: ["Identifier et prioriser ses cas d'usage IA", "Conception de solution et analyse des exigences du SI"],
            },
        ],
        deliverable: "L2 + L3 — Portefeuille IA Scoré + Feuille de route 2–3 ans",
        chipBg: "bg-[#EC4899]/15 text-[#9d174d]",
    },
    {
        id: "03",
        accentBg: "bg-[#10B981]",
        accentText: "text-[#10B981]",
        accentBorder: "border-t-4 border-[#10B981]",
        title: "Leadership & Digital Roadmap",
        location: "Bruxelles · Campus ULB",
        date: "Novembre 2026",
        duration: "3 jours",
        intro: "Développer les compétences de leadership, finaliser la feuille de route institutionnelle sur 2 à 3 ans, et obtenir la micro-accréditation universitaire ULB après pitch devant le consortium.",
        days: [
            {
                label: "Jour 7",
                title: "Leadership de la transformation & conduite du changement",
                items: ["L'organisation derrière la transformation", "Immersion dans l'écosystème IA européen (FARI Lab, Odoo)"],
            },
            {
                label: "Jour 8",
                title: "Vision à long terme, compétences et immersion terrain",
                items: ["Prospective stratégique et plan de compétences", "Google Atelier Digital · Benchmark e-gouvernement"],
            },
            {
                label: "Jour 9",
                title: "Finalisation de la roadmap et pitch de restitution",
                items: ["Finalisation de la feuille de route 2–3 ans", "Pitch de restitution · Certification ULB · Dîner Gala Atomium"],
            },
        ],
        deliverable: "L4 — Plan de mobilisation + Digital Roadmap · Pitch devant jury",
        chipBg: "bg-[#10B981]/15 text-[#065f46]",
    },
];

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
};
const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.38 } },
};

export default function Sessions() {
    return (
        <section id="sessions" className="py-16 md:py-24 bg-[#F8FAFC]">
            <div className="w-full container mx-auto px-5">

                {/* Header */}
                <motion.div
                    className="mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-[#45A29E] font-bold text-xs uppercase tracking-widest block mb-3">
                        04 · Les Sessions
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A2540] leading-tight mb-4">
                        3 Sessions · 9 Jours · 3 Villes
                    </h2>
                    <p className="text-gray-500 text-sm">
                        Présence requise aux trois sessions pour l&apos;obtention de la micro-accréditation ULB.
                    </p>
                </motion.div>

                {/* Session cards */}
                <div className="flex flex-col gap-8 lg:gap-10">
                    {SESSIONS.map((session, si) => (
                        <motion.div
                            key={session.id}
                            className={`bg-white rounded-2xl shadow-sm overflow-hidden ${session.accentBorder}`}
                            initial={{ opacity: 0, y: 36 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.5, delay: si * 0.05, ease: "easeOut" }}
                        >
                            <div className="p-8 lg:p-10">
                                <div className="grid md:grid-cols-[1fr_2fr] gap-8 lg:gap-12 items-start">

                                    {/* Meta colonne */}
                                    <div className="flex flex-col gap-4">
                                        <div>
                                            <span className={`font-extrabold text-xs uppercase tracking-widest ${session.accentText}`}>
                                                Session {session.id}
                                            </span>
                                            <h3 className="text-xl md:text-2xl font-extrabold text-[#0A2540] leading-tight mt-1">
                                                {session.title}
                                            </h3>
                                        </div>

                                        <div className="flex flex-col gap-2 text-sm text-gray-500">
                                            <span className="flex items-center gap-2">
                                                <MapPin size={13} className="text-[#0A2540]" />
                                                {session.location}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <Calendar size={13} className="text-[#0A2540]" />
                                                {session.date}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <Clock size={13} className="text-[#0A2540]" />
                                                {session.duration}
                                            </span>
                                        </div>

                                        <p className="text-gray-500 text-sm leading-relaxed">{session.intro}</p>

                                        {/* Livrable badge */}
                                        <div className="text-xs font-semibold px-3 py-2 rounded-lg bg-gray-50 text-[#0A2540] border-l-2 border-[#45A29E] leading-relaxed">
                                            📋 {session.deliverable}
                                        </div>

                                        <div className="flex gap-3 flex-wrap pt-1">
                                            <a
                                                href="#admission"
                                                className="inline-flex items-center gap-1.5 bg-[#EC4899] text-white font-semibold px-5 py-2.5 rounded-md text-sm hover:bg-[#db2777] transition shrink-0"
                                            >
                                                S&apos;inscrire
                                                <ChevronRight size={14} />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Contenu jour par jour */}
                                    <motion.div
                                        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                                        variants={stagger}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        {session.days.map((day) => (
                                            <motion.div
                                                key={day.label}
                                                variants={fadeUp}
                                                className="bg-gray-50 rounded-xl p-4 flex flex-col gap-2 border border-gray-100"
                                            >
                                                <span className="text-xs font-bold uppercase tracking-widest text-[#0A2540]">
                                                    {day.label}
                                                </span>
                                                <span className="text-[#0A2540] font-semibold text-sm leading-snug">
                                                    {day.title}
                                                </span>
                                                <ul className="space-y-1 mt-1">
                                                    {day.items.map((it) => (
                                                        <li key={it} className="text-gray-500 text-xs flex items-start gap-1.5">
                                                            <span className="text-[#45A29E] shrink-0 mt-0.5">›</span>
                                                            {it}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}