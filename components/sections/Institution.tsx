"use client";

import { motion } from "motion/react";
import Image from "next/image";

const INSTITUTION_PHOTO = "/assets/images/ulb.jpeg";

const SCHOOL_STATS = [
    { val: "25 000+", label: "Alumni" },
    { val: "4 200", label: "Étudiants/an" },
    { val: "1er", label: "Choix des recruteurs en Belgique" },
];

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
        <section className="py-10 bg-white">
            <div className="w-full container mx-auto px-5">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-14 items-center">

                    {/* Gauche — contenu textuel */}
                    <motion.div
                        className="flex flex-col justify-center gap-5 w-full max-w-full overflow-hidden"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                    >
                        <div>
                            <span className="text-[#f6a822] font-bold text-sm uppercase tracking-widest mb-4 block">
                                01 · <span className="text-[#15294e]">L&apos; Institution</span>
                            </span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A2540] leading-tight">
                                ULB-Solvay Lifelong Learning,{" "} <br />
                                <span className="text-[#f6a822]">l&apos;excellence qui arrive en RDC</span>
                            </h2>
                        </div>

                        {/* image mobile corrigée */}
                        <div className="rounded-3xl overflow-hidden md:hidden w-full block">
                            <motion.div
                                className="relative h-[260px] w-full rounded-3xl overflow-hidden shadow-sm border border-gray-100"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.55, ease: "easeOut" }}
                            >
                                <Image
                                    src={INSTITUTION_PHOTO}
                                    alt="Délégation officielle Solvay-Kadea en RDC"
                                    fill
                                    className="object-cover object-center rounded-3xl"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/40 to-transparent" />
                            </motion.div>
                        </div>

                        <p className="text-gray-600 leading-relaxed text-base">
                            Fondée en <strong>1903</strong> par Ernest Solvay, la{" "}
                            <strong>Solvay Brussels School of Economics &amp; Management</strong>{" "} figure parmi les
                            écoles de management les plus reconnues d&apos;Europe, et fut la première école de
                            commerce francophone belge accréditée à l&apos;international.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-base">
                            <strong>Solvay Lifelong Learning</strong>{" "} est l&apos;Executive Education de la Solvay
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
                                    <div className="text-[#0A2540] font-extrabold text-xl sm:text-2xl">{val}</div>
                                    <div className="text-gray-400 text-xs sm:text-sm mt-1">{label}</div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Accréditations */}
                        <motion.div
                            className="flex items-center gap-5 pt-5 border-t border-gray-100 flex-wrap"
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {/* Capsule contenant les logos */}
                            <div className="flex items-center gap-6 bg-gray-50/80 px-5 py-3 rounded-2xl border border-gray-100/60 shadow-inner">
                                {[
                                    { id: "equis-brand", src: "/logos/equis.webp", alt: "Accréditation internationale EQUIS", width: 85, height: 36 },
                                    { id: "amba-brand", src: "/logos/amba.jpeg", alt: "Accréditation internationale AMBA", width: 100, height: 32 }
                                ].map((logo) => (
                                    <motion.div
                                        key={logo.id}
                                        variants={fadeUp}
                                        className="flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
                                    >
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            width={logo.width}
                                            height={logo.height}
                                            className="object-contain h-8 w-auto"
                                            unoptimized={process.env.NODE_ENV === "development"}
                                        />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Label explicatif */}
                            <motion.span variants={fadeUp} className="text-gray-400 text-sm font-medium tracking-wide">
                                Double Accréditation Internationale (Gage d&apos;excellence)
                            </motion.span>
                        </motion.div>
                    </motion.div>

                    {/* Droite — image (Avec border-radius indépendant) */}
                    <div className="rounded-xl overflow-hidden hidden md:block">
                        <motion.div
                            className="relative min-h-[380px] w-full rounded-3xl overflow-hidden shadow-sm border border-gray-100 aspect-[4/3] md:aspect-auto"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.55, ease: "easeOut" }}
                        >
                            <Image
                                src={INSTITUTION_PHOTO}
                                alt="Délégation officielle Solvay-Kadea en RDC"
                                fill
                                className="object-cover object-center rounded-xl"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/40 to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}