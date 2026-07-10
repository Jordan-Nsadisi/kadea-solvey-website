"use client";

import { motion } from "motion/react";
import Image from "next/image";
import institutionImg from "@/public/assets/images/hero.png";

const SCHOOL_STATS = [
    { val: "25 000+", label: "Alumni" },
    { val: "4 200", label: "Étudiants/an" },
    { val: "1er", label: "Choix des recruteurs" },
];

const LOCAL_PARTNERS = ["Kadea Executive", "Microsoft", "GIZ", "WBI"];

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Institution() {
    return (
        <section id="institution" className="py-8">
            <div className="w-full container mx-auto px-5">
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm grid md:grid-cols-2 gap-0">

                    {/* Gauche — contenu textuel */}
                    <motion.div
                        className="p-10 md:p-14 flex flex-col justify-center"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                    >
                        <span className="text-[#45A29E] font-bold text-xs uppercase tracking-widest mb-4 block">
                            01 · L&apos;Institution
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A2540] leading-tight mb-5">
                            ULB-Solvay Lifelong Learning :{" "}
                            <span className="text-[#45A29E]">l&apos;excellence qui arrive en RDC</span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                            Fondée en 1903 par Ernest Solvay, la{" "}
                            <strong>Solvay Brussels School of Economics &amp; Management</strong> figure parmi les
                            écoles de management les plus reconnues d&apos;Europe, et fut la première école de
                            commerce francophone belge accréditée à l&apos;international.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                            <strong>Solvay Lifelong Learning</strong> est l&apos;Executive Education de la Solvay
                            Brussels School Economics &amp; Management. Une référence internationale qui se déploie
                            aujourd&apos;hui au service des institutions publiques congolaises.
                        </p>

                        {/* Stats animées */}
                        <motion.div
                            className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100"
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {SCHOOL_STATS.map(({ val, label }) => (
                                <motion.div key={label} variants={fadeUp}>
                                    <div className="text-[#0A2540] font-extrabold text-2xl">{val}</div>
                                    <div className="text-gray-400 text-xs mt-1">{label}</div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Accréditations */}
                        <motion.div
                            className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100 flex-wrap"
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {["EQUIS", "AMBA"].map((label) => (
                                <motion.span
                                    key={label}
                                    variants={fadeUp}
                                    className="bg-[#F59E0B]/15 text-[#F59E0B] text-xs font-bold px-3 py-1 rounded-full"
                                >
                                    {label}
                                </motion.span>
                            ))}
                            <motion.span variants={fadeUp} className="text-gray-400 text-xs">
                                Double Accréditation Internationale
                            </motion.span>
                        </motion.div>

                        {/* Partenaires locaux */}
                        <div className="mt-6 pt-4 border-t border-gray-100">
                            <span className="text-gray-400 text-xs font-semibold uppercase tracking-widest block mb-3">
                                Partenaires locaux
                            </span>
                            <motion.div
                                className="flex flex-wrap gap-2"
                                variants={stagger}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {LOCAL_PARTNERS.map((p) => (
                                    <motion.span
                                        key={p}
                                        variants={fadeUp}
                                        className="bg-[#0A2540]/8 text-[#0A2540] text-xs font-semibold px-3 py-1 rounded-full border border-[#0A2540]/10"
                                    >
                                        {p}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Droite — image */}
                    <motion.div
                        className="relative min-h-[340px]"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                    >
                        <Image
                            src={institutionImg}
                            alt="Délégation officielle Solvay-Kadea en RDC"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/40 to-transparent" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}