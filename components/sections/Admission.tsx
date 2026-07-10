"use client";

import { motion } from "motion/react";
import { CheckCircle, ArrowRight, Phone, Mail, Award, CreditCard, FileText, UserCheck } from "lucide-react";

const TIMELINE = [
    { icon: Mail, label: "Manifestation d'intérêt", desc: "Envoi de votre candidature par email" },
    { icon: FileText, label: "Étude du dossier", desc: "Examen par ordre de réception" },
    { icon: UserCheck, label: "Confirmation", desc: "Notification d'acceptation officielle" },
    { icon: CreditCard, label: "Paiement", desc: "Règlement des 7 500 USD par participant" },
];

const PROMOTIONS = [
    { label: "Institutions Publiques", places: "20 places", icon: "🏛️" },
    { label: "Entreprises Privées", places: "20 places", icon: "🏢" },
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
        <section id="admission" className="py-16 bg-[#061828]">
            <div className="w-full container mx-auto px-5">

                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-[#45A29E] font-bold text-xs uppercase tracking-widest block mb-3">
                        06 · Certification &amp; Admission
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                        Rejoignez la Promotion 2026
                    </h2>
                    <p className="text-white/60 text-sm mt-3 max-w-xl mx-auto">
                        40 places · Premier engagé, premier servi. Manifestez dès maintenant l&apos;intérêt de votre organisation.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">

                    {/* Col 1 — Certification + Prix */}
                    <motion.div
                        className="flex flex-col gap-5"
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Certification ULB */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Award size={20} className="text-[#F59E0B]" />
                                <span className="text-white font-extrabold text-sm">Micro-Accréditation ULB</span>
                            </div>
                            <p className="text-white/60 text-xs leading-relaxed mb-3">
                                <strong className="text-white/80">University Micro-Credential</strong> — ULB Solvay Lifelong Learning.
                                Délivré sous condition de présence aux trois sessions et de la présentation du projet
                                devant le consortium (pitch de restitution).
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["EQUIS", "AMBA", "ULB"].map((b) => (
                                    <span key={b} className="bg-[#F59E0B]/15 text-[#F59E0B] text-xs font-bold px-3 py-1 rounded-full">
                                        {b}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Prix */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <div className="text-white/50 text-xs font-semibold mb-1">Valeur du programme</div>
                            <div className="text-[#84cc16] font-extrabold text-4xl">7 500 $</div>
                            <div className="text-white/40 text-xs mt-1">USD · par participant</div>
                            <div className="mt-4 pt-4 border-t border-white/10 text-white/50 text-xs leading-relaxed">
                                💡 <strong className="text-white/70">Financement possible :</strong> prise en charge
                                entreprise, subvention institutionnelle ou paiement échelonné. Contactez-nous.
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <span className="text-white/50 text-xs font-semibold uppercase tracking-widest block mb-3">Contact</span>
                            <p className="text-white font-semibold text-sm">Thomas Strouvens</p>
                            <p className="text-white/50 text-xs mb-3">CEO Kadea Executive</p>
                            <div className="flex flex-col gap-2">
                                <a href="mailto:thomas@kadea.co" className="inline-flex items-center gap-2 text-[#84cc16] text-xs hover:underline">
                                    <Mail size={12} /> thomas@kadea.co
                                </a>
                                <a href="tel:+32470881395" className="inline-flex items-center gap-2 text-[#84cc16] text-xs hover:underline">
                                    <Phone size={12} /> +32 470 88 13 95
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Col 2 — Places limitées + promotions */}
                    <motion.div
                        className="flex flex-col gap-5"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-[#EC4899] text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                                    ⚠ Places Limitées
                                </span>
                            </div>
                            <p className="text-white font-semibold text-sm mb-5 leading-relaxed">
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
                                {PROMOTIONS.map(({ label, places, icon }) => (
                                    <motion.div
                                        key={label}
                                        variants={fadeUp}
                                        className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3 border border-white/10"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-lg">{icon}</span>
                                            <div>
                                                <div className="text-white text-sm font-semibold">{label}</div>
                                                <div className="text-white/40 text-xs">{places}</div>
                                            </div>
                                        </div>
                                        <CheckCircle size={16} className="text-[#84cc16] shrink-0" />
                                    </motion.div>
                                ))}
                            </motion.div>
                            <p className="text-white/50 text-xs mt-5 leading-relaxed">
                                Règle du <strong className="text-white/70">premier engagé, premier servi</strong>.
                                Les dossiers sont étudiés par ordre de réception.
                            </p>
                            <a href="#" className="mt-4 inline-flex items-center gap-1 text-[#fde047] text-xs font-bold hover:underline group">
                                Voir les critères de sélection{" "}
                                <ArrowRight size={12} className="transform group-hover:translate-x-0.5 transition-transform" />
                            </a>
                        </div>

                        {/* CTA principal */}
                        <a
                            href="mailto:thomas@kadea.co?subject=Candidature%20Programme%20Executive%202026"
                            className="block bg-[#84cc16] text-[#0A2540] font-extrabold text-center px-7 py-4 rounded-2xl hover:brightness-110 transition shadow-lg shadow-black/20 text-base"
                        >
                            Candidater à la Promotion 2026 →
                        </a>
                    </motion.div>

                    {/* Col 3 — Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full">
                            <span className="text-white/50 text-xs font-semibold uppercase tracking-widest block mb-6">
                                Processus de candidature
                            </span>
                            <motion.div
                                className="flex flex-col gap-5"
                                variants={stagger}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {TIMELINE.map(({ icon: Icon, label, desc }, i) => (
                                    <motion.div key={label} variants={fadeUp} className="flex items-start gap-4">
                                        <div className="flex flex-col items-center shrink-0">
                                            <div className="w-9 h-9 rounded-full bg-[#84cc16]/15 border border-[#84cc16]/30 flex items-center justify-center">
                                                <Icon size={15} className="text-[#84cc16]" />
                                            </div>
                                            {i < TIMELINE.length - 1 && <div className="w-px h-6 bg-white/10 mt-1.5" />}
                                        </div>
                                        <div className="pt-1.5">
                                            <div className="text-white text-sm font-semibold">{i + 1}. {label}</div>
                                            <div className="text-white/50 text-xs mt-0.5">{desc}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Tagline */}
                            <div className="mt-8 pt-6 border-t border-white/10 text-center">
                                <p className="text-white/30 text-xs italic font-semibold tracking-widest uppercase">
                                    Dream. Learn. Lead.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}