import React from "react";
import { MapPin, Target, FileText } from "lucide-react";
import { ImageMosaic } from "../ui/molecules/image-mosaic";

const S1_IMGS = [
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=200&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=200&fit=crop&auto=format",
];

const S2_IMGS = [
    "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=300&h=200&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=300&h=200&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop&auto=format",
];

const S3_IMGS = [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=300&h=200&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=300&h=200&fit=crop&auto=format",
];

function Chip({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
    return (
        <span
            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${light
                ? "bg-white/20 text-white border border-white/30"
                : "bg-black/10 text-inherit border border-black/15"
                }`}
        >
            {children}
        </span>
    );
}

export default function Sessions() {
    return (
        <section id="sessions" className="py-5 flex flex-col gap-5">

            <div className="w-full container mx-auto px-5">
                <div className="bg-[#F59E0B] rounded-3xl overflow-hidden p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-10 items-start">
                        <ImageMosaic imgs={S1_IMGS} alt="Ateliers stratégie digitale" />
                        <div className="flex flex-col gap-5">
                            <span className="text-[#0A2540]/60 font-bold text-xs uppercase tracking-widest">Session 01</span>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#0A2540] leading-tight">
                                Diagnostic &amp; Stratégie Digitale
                            </h3>
                            <p className="text-[#78350f] font-semibold text-sm">
                                Kinshasa Hôtel Pullman &nbsp;|&nbsp; Septembre 2026 &nbsp;·&nbsp; 3 jours
                            </p>
                            <p className="text-[#0A2540]/80 text-sm leading-relaxed">
                                Ancrer une vision stratégique commune, appréhender la valeur publique de l'IA it structurer votre premier business case. Un premier sprint d'immersion intensive pour aligner toute votre organisation.
                            </p>
                            <div className="flex flex-wrap gap-2 text-[#0A2540]">
                                <Chip><MapPin size={11} /> Pullman</Chip>
                                <Chip><Target size={11} /> Stratégie</Chip>
                                <Chip><FileText size={11} /> Diagnostic de Maturité</Chip>
                            </div>
                            <div className="flex gap-3 flex-wrap mt-2">
                                <a href="#" className="border-2 border-[#0A2540] text-[#0A2540] font-semibold px-5 py-2 rounded-md text-sm md:text-[15px] hover:bg-[#0A2540] hover:text-white transition text-center shrink-0">
                                    Programme détaillé
                                </a>
                                <a href="#admission" className="bg-[#0A2540] text-white font-semibold px-5 py-2 rounded-md text-sm md:text-[15px] hover:bg-[#0d3060] transition text-center shrink-0">
                                    S'inscrire à la Session 1
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="bg-[#EC4899] rounded-3xl overflow-hidden p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-10 items-start">
                        <ImageMosaic imgs={S2_IMGS} alt="IA et données" />
                        <div className="flex flex-col gap-5">
                            <span className="text-white/60 font-bold text-xs uppercase tracking-widest">Session 02</span>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                                IA, Données &amp; Cas d'Usage
                            </h3>
                            <p className="text-white/70 font-semibold text-sm">
                                Kinshasa Hôtel Pullman &nbsp;|&nbsp; Octobre 2026 &nbsp;·&nbsp; 3 jours
                            </p>
                            <p className="text-white/90 text-sm leading-relaxed">
                                Maîtriser les technologies de pointe (Copilot, Power Platform, Azure AI), poser les fondations de la gouvernance des données et bâtir votre portefeuille de cas d'usage scorés et prêts à déployer.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Chip light><MapPin size={11} /> Pullman</Chip>
                                <Chip light><Target size={11} /> Outils &amp; Data</Chip>
                                <Chip light><FileText size={11} /> Portefeuille IA Scoré</Chip>
                            </div>
                            <div className="flex gap-3 flex-wrap mt-2">
                                <a href="#" className="border-2 border-white text-white font-semibold px-5 py-2 rounded-md text-sm md:text-[15px] hover:bg-white hover:text-[#EC4899] transition text-center shrink-0">
                                    Programme détaillé
                                </a>
                                <a href="#admission" className="bg-[#0A2540] text-white font-semibold px-5 py-2 rounded-md text-sm md:text-[15px] hover:bg-[#0d3060] transition text-center shrink-0">
                                    S'inscrire à la Session 2
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="bg-[#10B981] rounded-3xl overflow-hidden p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-10 items-start">
                        <ImageMosaic imgs={S3_IMGS} alt="Leadership Bruxelles" />
                        <div className="flex flex-col gap-5">
                            <span className="text-white/60 font-bold text-xs uppercase tracking-widest">Session 03</span>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                                Leadership &amp; Digital Roadmap
                            </h3>
                            <p className="text-white/70 font-semibold text-sm">
                                Bruxelles Campus ULB &nbsp;|&nbsp; Novembre 2026 &nbsp;·&nbsp; 3 jours
                            </p>
                            <p className="text-white/90 text-sm leading-relaxed">
                                Piloter la conduite du changement, s'immerger au cœur de l'écosystème tech européen (FARI, Odoo, Google) et soutenir votre feuille de route finale. Une immersion bruxelloise culminant en soutenance de votre Digital Roadmap.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Chip light><MapPin size={11} /> Bruxelles</Chip>
                                <Chip light><Target size={11} /> Leadership</Chip>
                                <Chip light><FileText size={11} /> Plan de Route 2-3 ans</Chip>
                            </div>
                            <div className="flex gap-3 flex-wrap mt-2">
                                <a href="#" className="border-2 border-white text-white font-semibold px-5 py-2 rounded-md text-sm md:text-[15px] hover:bg-white hover:text-[#10B981] transition text-center shrink-0">
                                    Programme détaillé
                                </a>
                                <a href="#admission" className="bg-[#0A2540] text-white font-semibold px-5 py-2 rounded-md text-sm md:text-[15px] hover:bg-[#0d3060] transition text-center shrink-0">
                                    S'inscrire à la Session 3
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}