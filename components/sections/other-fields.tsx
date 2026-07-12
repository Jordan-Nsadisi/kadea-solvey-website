"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

import academy from "@/public/logos/academy.png";
import software from "@/public/logos/software.png";
import executive from "@/public/logos/Logo_Kadea_Exe.png";

import academyCover from "@/public/assets/images/academy.jpg";
import softwareCover from "@/public/assets/images/software.png";
import executiveCover from "@/public/assets/images/executive.jpeg";

const items = [
    {
        color: "bg-[#E5203D] text-white",
        hoverBorder: "hover:border-[#E5203D]/40",
        title: "Kadea Academy",
        description:
            "Nos formations longues pour débuter une carrière dans les métiers du futur ! Boostez votre carrière, votre business ou trouvez un emploi grâce à nos parcours certifiants.",
        link: "https://kadea.academy",
        logo: academy,
        cover: academyCover,
    },
    {
        color: "bg-[#0084ff] text-white",
        hoverBorder: "hover:border-[#0084ff]/40",
        title: "Kadea Software",
        description:
            "Engagez un développeur expérimenté pour rejoindre votre équipe. Recrutez nos talents pour une mission de quelques semaines à plusieurs années. Candidats proposés en 48h.",
        link: "https://kadea.co",
        logo: software,
        cover: softwareCover,
    },
    {
        color: "bg-[#00B500] text-white",
        hoverBorder: "hover:border-[#0A2540]/40",
        title: "Kadea Executive",
        description:
            "Programmes Executive & Certifiants pour le Top Management. Façonnez les leaders de demain grâce à nos formations continues haut de gamme pour les entreprises et institutions publiques.",
        link: "https://executive.kadea.academy/",
        logo: executive,
        cover: executiveCover,
    },
];

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
} as const;
const cardVariant = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

export default function OtherFieldsSection() {
    return (
        <section className="w-full bg-[#F8FAFC] py-10  ">
            <div className="container mx-auto px-5 flex flex-col gap-12">

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="font-extrabold text-2xl md:text-4xl text-[#0A2540] mb-4">
                        Kadea, c&apos;est aussi :
                    </h2>
                    <p className="text-gray-400 text-base max-w-lg mx-auto">
                        Découvrez l&apos;ensemble de l&apos;écosystème Kadea au service de votre croissance.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {items.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={cardVariant}
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 280, damping: 20 }}
                            className={`relative w-full bg-white rounded-2xl shadow-sm border border-transparent ${item.hoverBorder} hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col`}
                        >
                            {/* Cover image */}
                            <div className="relative w-full h-44 shrink-0">
                                <Image
                                    src={item.cover}
                                    alt={`Cover ${item.title}`}
                                    fill
                                    className="object-cover object-center"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-4 p-6 flex-1 justify-between">
                                <div className="flex flex-col gap-3">
                                    <Link href={item.link} target="_blank" className="w-fit">
                                        <Image
                                            src={item.logo}
                                            alt={item.title}
                                            width={160}
                                            height={32}
                                            className="h-7 w-auto object-contain"
                                        />
                                    </Link>
                                    <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
                                </div>

                                <Link
                                    href={item.link}
                                    target="_blank"
                                    className={`inline-flex items-center gap-1.5 w-fit ${item.color}  px-5 py-2 rounded-md hover:brightness-110 transition shrink-0`}
                                >
                                    En savoir plus
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
