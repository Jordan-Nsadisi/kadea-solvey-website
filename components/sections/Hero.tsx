"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import heroImg from "@/public/assets/images/hero.png";
import microsoftLogo from "@/public/assets/partners/microsoft.png";
import gizLogo from "@/public/assets/partners/giz.png";
import wbiLogo from "@/public/assets/partners/wallonie.png";
import { subscribeLink } from "@/data/subscribe-link";

const stats = [
    { val: "3 mois", label: "de Formation Intensive" },
    { val: "3 Sessions", label: "de 3 jours en présentiele" },
    { val: "Kinshasa & Bruxelles", label: "sur le Campus de l'ULB" },
    { val: "Micro-accréditation", label: "Universitaire ULB" },
];

const partners = [
    { name: "Microsoft", logo: microsoftLogo, w: 200, h: 60 },
    { name: "GIZ", logo: gizLogo, w: 200, h: 60 },
    { name: "wbi", logo: wbiLogo, w: 200, h: 60 },
    { name: "ADN", logo: "/logos/adn.png", w: 200, h: 60 },
    { name: "PPP", logo: "/logos/ppp.png", w: 200, h: 60 },
    { name: "Vodacom", logo: "/logos/vodacom.png", w: 200, h: 60 },
    { name: "MinFP", logo: "/logos/minpf.png", w: 200, h: 60 },
    { name: "Enabel", logo: "/logos/enabel.png", w: 200, h: 60 },
];

export default function Hero() {
    return (
        <section className="bg-[#15294e] relative overflow-hidden">

            {/* ── Main grid ── */}
            <div className="w-full container mx-auto px-5 text-white pt-10 md:pt-16 grid grid-cols-1 md:grid-cols-2 gap-5 items-end">

                {/* Left — content */}
                <motion.div
                    className="flex flex-col justify-center gap-6 pb-10 md:pb-16 pr-0 md:pr-8"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                >
                    <motion.span
                        className="inline-block bg-[#f6a822]/20 text-[#f6a822] text-sm font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit"
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                    >
                        Programme Executive
                    </motion.span>

                    <motion.h1
                        className="font-bold text-4xl md:text-5xl leading-[1.15]"
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                    >
                        Transformation Digitale &amp; IA en République Démocratique du Congo
                    </motion.h1>

                    <motion.p
                        className="text-blue-100/80 text-lg max-w-md leading-relaxed"
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                    >
                        Parcours Conçu par ULB-Solvay Lifelong Learning en partenariat avec Kadea Executive et avec lʼapport technique de Microsoft pour outiller les dirigeants des
                        Institutions Publiques et les entreprises privées à piloter la transformation digitale
                        et l&apos;adoption de l&apos;IA.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.4 }}
                        className="w-fit"
                    >
                        <a
                            href={subscribeLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#f6a822] text-white font-semibold px-5 py-2 rounded-md hover:bg-[#f6a822]/90 transition-all hover:gap-3 shadow-lg shadow-purple-900/30 shrink-0"
                        >
                            Rejoindre la Promo 2026 <ArrowRight size={16} />
                        </a>
                    </motion.div>

                    {/* Partner logos — staggered */}
                    <div className="relative w-full overflow-hidden mt-6 marquee-mask">

                        <motion.div
                            className="flex w-max"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.12, delayChildren: 0.5 },
                                },
                            }}
                        >
                            <div className="animate-marquee flex gap-5 py-2">

                                <div className="flex gap-5 shrink-0">
                                    {partners.map((p) => (
                                        <motion.div
                                            key={`${p.name}-primary`}
                                            className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center justify-center shrink-0 cursor-default"
                                            variants={{
                                                hidden: { scale: 0, opacity: 0 },
                                                visible: { scale: 1, opacity: 1 }
                                            }}
                                            whileHover={{ scale: 1.06 }}
                                            transition={{ type: "spring", stiffness: 260, damping: 18 }}
                                        >
                                            <Image
                                                src={p.logo}
                                                alt={p.name}
                                                width={p.w}
                                                height={p.h}
                                                className="h-8 w-auto object-contain brightness-0 invert"
                                            />
                                        </motion.div>
                                    ))}
                                </div>

                                {/*copie conforme pour la boucle */}
                                <div className="flex gap-5 shrink-0" aria-hidden="true">
                                    {partners.map((p) => (
                                        <motion.div
                                            key={`${p.name}-duplicate`}
                                            className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center justify-center shrink-0 cursor-default"
                                            variants={{
                                                hidden: { scale: 0, opacity: 0 },
                                                visible: { scale: 1, opacity: 1 }
                                            }}
                                            whileHover={{ scale: 1.06 }}
                                            transition={{ type: "spring", stiffness: 260, damping: 18 }}
                                        >
                                            <Image
                                                src={p.logo}
                                                alt={p.name}
                                                width={p.w}
                                                height={p.h}
                                                className="h-8 w-auto object-contain brightness-0 invert"
                                            />
                                        </motion.div>
                                    ))}
                                </div>

                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right — portrait */}
                <motion.div
                    className="relative w-full h-[400px] md:h-[620px] flex items-end justify-center md:justify-end"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                >
                    <Image
                        src={heroImg}
                        alt="Dirigeant exécutif africain"
                        fill
                        priority
                        className="object-contain object-bottom md:object-right-bottom"
                    />
                </motion.div>
            </div>

            {/* ── Stats banner ── */}
            <div className="bg-[#1d9cc2] py-5 mt-0">
                <div className="w-full container mx-auto px-5">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-white/10">
                        {stats.map(({ val, label }, i) => (
                            <motion.div
                                key={val}
                                className="text-center px-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.55 + i * 0.1, duration: 0.4 }}
                            >
                                <div className="text-[#f6a822] font-extrabold text-xl">{val}</div>
                                <div className="text-white text-sm mt-0.5">{label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}