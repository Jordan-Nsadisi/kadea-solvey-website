"use client";

import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../ui/ImageWithFallback";

const u = (id: string, w: number, h: number) =>
    `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format`;

export default function Hero() {

    const HERO_PORTRAIT = u("1507003211169-0a1dd7228f2d", 600, 720);

    return (
        <section className="bg-[#0A2540] relative overflow-hidden">
            <div className="w-full container mx-auto px-5">
                <div className="grid md:grid-cols-2 gap-0 min-h-[680px]">
                    {/* Left: portrait */}
                    <div className="relative flex items-end">
                        <ImageWithFallback
                            src="/assets/images/hero.png"
                            alt="Dirigeant exécutif africain"
                            className="w-full max-w-[420px] h-[680px] object-cover object-top rounded-t-3xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A2540]/40 rounded-t-3xl" />
                    </div>
                    {/* Right: content */}
                    <div className="flex flex-col justify-center py-14 pl-2 pr-0 md:pl-8">
                        <span className="inline-block bg-[#45A29E]/20 text-[#45A29E] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5 w-fit">
                            Programme Executive 2026
                        </span>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-[1.15] mb-6">
                            Transformation Digitale &amp; IA en République Démocratique du Congo
                        </h1>
                        <p className="text-blue-100/80 text-base mb-8 max-w-md">
                            Un parcours conçu par ULB-Solvay Lifelong Learning pour outiller les dirigeants des Institutions Publiques et les entreprises privées à piloter la transformation digitale et l'adoption de l'IA.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 bg-[#EC4899] text-white font-semibold px-5 py-2 text-sm md:text-[15px] rounded-md w-fit hover:bg-[#db2777] transition-all hover:gap-3 shadow-lg shadow-pink-900/30"
                        >
                            Rejoindre la Promo 2026 <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </div>
            {/* Bottom banner */}
            <div className="bg-[#061828] py-5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-white/10">
                        {[
                            { val: "9 Jours", label: "de Formation Intensive" },
                            { val: "3 Sessions", label: "de 3 Jours chacune" },
                            { val: "Kinshasa & Bruxelles", label: "Double immersion" },
                            { val: "Micro-accréditation", label: "Universitaire ULB" },
                        ].map(({ val, label }) => (
                            <div key={val} className="text-center px-4">
                                <div className="text-[#F59E0B] font-extrabold text-lg">{val}</div>
                                <div className="text-white/60 text-xs mt-0.5">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}