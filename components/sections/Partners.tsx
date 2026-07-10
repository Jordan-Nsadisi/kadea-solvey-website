"use client";

import { motion } from "motion/react";
import Image from "next/image";
import microsoftLogo from "@/public/assets/partners/microsoft.png";
import solvayLogo from "@/public/assets/partners/solvay-black.png";

const partners = [
    { name: "ULB-Solvay Lifelong Learning", logo: solvayLogo, w: 160, h: 40 },
    { name: "Microsoft", logo: microsoftLogo, w: 140, h: 36 },
];

export default function Partners() {
    return (
        <section className="bg-white border-b border-black/8 py-8">
            <div className="w-full container mx-auto px-5">
                <motion.p
                    className="text-center text-sm text-gray-400 font-semibold uppercase tracking-widest mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    Partenaires Officiels &amp; Supports Techniques
                </motion.p>

                <motion.div
                    className="flex flex-wrap justify-center items-center gap-10 md:gap-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.12 },
                        },
                    }}
                >
                    {partners.map((p) => (
                        <motion.div
                            key={p.name}
                            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                            whileHover={{ scale: 1.07 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="grayscale hover:grayscale-0 transition-all duration-300"
                        >
                            <Image
                                src={p.logo}
                                alt={p.name}
                                width={p.w}
                                height={p.h}
                                className="h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}