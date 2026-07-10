import React from "react";
import { ImageWithFallback } from "../ui/ImageWithFallback";

const INSTITUTION_PHOTO = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&h=500&fit=crop&auto=format";

const SCHOOL_STATS = [
    { val: "25 000+", label: "Alumni" },
    { val: "4 200", label: "Étudiants/an" },
    { val: "1er", label: "Choix des recruteurs" },
];

export default function Institution() {
    return (
        <section id="institution" className="py-8">
            <div className="w-full container mx-auto px-5">
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm grid md:grid-cols-2 gap-0">

                    {/* Gauche : Contenu textuel */}
                    <div className="p-10 md:p-14 flex flex-col justify-center">
                        <span className="text-[#45A29E] font-bold text-xs uppercase tracking-widest mb-4 block">
                            01 · L'Institution
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A2540] leading-tight mb-5">
                            ULB-Solvay Lifelong Learning :{" "}
                            <span className="text-[#45A29E]">l'excellence qui arrive en RDC</span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                            Fondée en 1903 par Ernest Solvay, la <strong>Solvay Brussels School of Economics &amp; Management</strong> figure parmi les écoles de management les plus reconnues d'Europe, et fut la première école de commerce francophone belge accréditée à l'international.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                            <strong>Solvay Lifelong Learning</strong> est l'Executive Education de la Solvay Brussels School Economics &amp; Management. Une référence internationale qui se déploie aujourd'hui au service des institutions publiques congolaises.
                        </p>

                        {/* Grille des chiffres clés */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                            {SCHOOL_STATS.map(({ val, label }) => (
                                <div key={label}>
                                    <div className="text-[#0A2540] font-extrabold text-2xl">{val}</div>
                                    <div className="text-gray-400 text-xs mt-1">{label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Labels d'accréditations */}
                        <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100">
                            <span className="bg-[#F59E0B]/15 text-[#F59E0B] text-xs font-bold px-3 py-1 rounded-full">EQUIS</span>
                            <span className="bg-[#F59E0B]/15 text-[#F59E0B] text-xs font-bold px-3 py-1 rounded-full">AMBA</span>
                            <span className="text-gray-400 text-xs">Double Accréditation Internationale</span>
                        </div>
                    </div>

                    {/* Droite : Illustration photo */}
                    <div className="relative min-h-[320px]">
                        <ImageWithFallback
                            src={INSTITUTION_PHOTO}
                            alt="Délégation officielle Solvay-Kadea en RDC"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/40 to-transparent" />
                    </div>

                </div>
            </div>
        </section>
    );
}