"use client";

import { motion } from "motion/react";
import { ChevronRight, CheckCircle, ArrowRight, FileText, CreditCard, UserCheck, Mail } from "lucide-react";

const SELECTION_CRITERIA = [
    "20 places · Institutions Publiques",
    "20 places · Entreprises Privées",
];

const TIMELINE = [
    { icon: Mail, label: "Dépôt dossier", desc: "Envoi CV + lettre de motivation" },
    { icon: FileText, label: "Étude du dossier", desc: "Examen par ordre de réception" },
    { icon: UserCheck, label: "Confirmation", desc: "Notification d'acceptation" },
    { icon: CreditCard, label: "Paiement", desc: "Règlement des frais d'inscription" },
];

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Admission() {
    return (
        <section id="admission" className="py-5">
            <div className="w-full container mx-auto px-5">
                <div className="bg-[#86198F] rounded-3xl overflow-hidden p-8 md:p-14">
                    <div className="grid md:grid-cols-2 gap-12 items-start">

                        {/* Gauche — tarif + CTA */}
                        <motion.div
                            className="flex flex-col gap-6"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.55, ease: "easeOut" }}
                        >
                            <span className="text-white/60 font-bold text-xs uppercase tracking-widest">
                                Admission &amp; Frais
                            </span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                                Inscription et frais de scolarité pour le Programme Executive
                            </h2>

                            <div className="bg-[#a21caf] rounded-2xl px-6 py-4 flex items-center gap-3 w-fit">
                                <div>
                                    <div className="text-white/70 text-xs font-semibold mb-1">Valeur du programme</div>
                                    <div className="text-[#84cc16] font-extrabold text-3xl">7 500 USD</div>
                                    <div className="text-white/60 text-xs">par participant</div>
                                </div>
                            </div>

                            <a
                                href="mailto:thomas@kadea.co?subject=Candidature%20Programme%20Executive%202026"
                                className="inline-flex items-center gap-2 bg-[#84cc16] text-[#0A2540] font-semibold px-5 py-2 rounded-md w-fit hover:brightness-110 transition shadow-lg shadow-black/20 text-sm md:text-[15px] shrink-0"
                            >
                                Candidater à la Promotion 2026 <ChevronRight size={16} />
                            </a>

                            <div className="text-white/70 text-sm leading-relaxed">
                                Contact :{" "}
                                <a href="mailto:thomas@kadea.co" className="text-white underline font-semibold hover:text-white/90 transition">
                                    Thomas Strouvens
                                </a>{" "}
                                — CEO Kadea Executive
                                <br />
                                <a href="mailto:thomas@kadea.co" className="text-[#84cc16] text-xs font-mono font-medium hover:underline">
                                    thomas@kadea.co
                                </a>
                            </div>

                            {/* Encart financement */}
                            <div className="bg-white/10 rounded-xl p-4 border border-white/20 text-sm text-white/80 leading-relaxed">
                                <span className="text-[#84cc16] font-bold block mb-1 text-xs uppercase tracking-widest">💡 Financement possible</span>
                                Prise en charge par votre entreprise, subvention institutionnelle ou paiement en plusieurs tranches.
                                Contactez-nous pour étudier votre situation.
                            </div>
                        </motion.div>

                        {/* Droite — places limitées + timeline */}
                        <motion.div
                            className="flex flex-col gap-5"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.55, ease: "easeOut" }}
                        >
                            <div className="bg-white/10 rounded-2xl p-6 border border-white/20 backdrop-blur-xs">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="bg-[#EC4899] text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                                        ⚠ Places Limitées
                                    </span>
                                </div>
                                <p className="text-white font-semibold text-sm mb-4 leading-relaxed">
                                    <strong className="text-[#fde047]">40 places disponibles maximum.</strong>{" "}
                                    Recrutement sélectif réparti en 2 promotions strictes :
                                </p>

                                <motion.div
                                    className="flex flex-col gap-3"
                                    variants={stagger}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {SELECTION_CRITERIA.map((item) => (
                                        <motion.div key={item} variants={fadeUp} className="flex items-center gap-3">
                                            <CheckCircle size={16} className="text-[#84cc16] shrink-0" />
                                            <span className="text-white text-sm font-medium">{item}</span>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                <p className="text-white/60 text-xs mt-5 leading-relaxed">
                                    Règle du <strong className="text-white/80">premier engagé, premier servi</strong>.
                                    Les dossiers sont étudiés par ordre de réception. Ne tardez pas.
                                </p>
                                <a href="#" className="mt-4 inline-flex items-center gap-1 text-[#fde047] text-xs font-bold hover:underline group">
                                    Voir les critères de sélection{" "}
                                    <ArrowRight size={12} className="transform group-hover:translate-x-0.5 transition-transform" />
                                </a>
                            </div>

                            {/* Timeline candidature */}
                            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                                <span className="text-white/60 font-bold text-xs uppercase tracking-widest block mb-5">
                                    Processus de candidature
                                </span>
                                <motion.div
                                    className="flex flex-col gap-4"
                                    variants={stagger}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {TIMELINE.map(({ icon: Icon, label, desc }, i) => (
                                        <motion.div key={label} variants={fadeUp} className="flex items-start gap-4">
                                            <div className="flex flex-col items-center shrink-0">
                                                <div className="w-8 h-8 rounded-full bg-[#84cc16]/20 border border-[#84cc16]/40 flex items-center justify-center">
                                                    <Icon size={14} className="text-[#84cc16]" />
                                                </div>
                                                {i < TIMELINE.length - 1 && (
                                                    <div className="w-px h-5 bg-white/20 mt-1" />
                                                )}
                                            </div>
                                            <div className="pt-1">
                                                <div className="text-white text-sm font-semibold">{i + 1}. {label}</div>
                                                <div className="text-white/60 text-xs mt-0.5">{desc}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}