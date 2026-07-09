import { ChevronRight, CheckCircle, ArrowRight } from "lucide-react";

const SELECTION_CRITERIA = [
    "20 places · Institutions Publiques",
    "20 places · Entreprises Privées",
];

export default function Admission() {
    return (
        <section id="admission" className="py-5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-[#86198F] rounded-3xl overflow-hidden p-8 md:p-14">
                    <div className="grid md:grid-cols-2 gap-12 items-start">

                        <div className="flex flex-col gap-6">
                            <span className="text-white/60 font-bold text-xs uppercase tracking-widest">
                                Admission &amp; Frais
                            </span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                                Inscription et frais de scolarité pour le Programme Executive
                            </h2>

                            <div className="bg-[#a21caf] rounded-2xl px-6 py-4 flex items-center gap-3 w-fit min-w-[200px]">
                                <div>
                                    <div className="text-white/70 text-xs font-semibold mb-1">Valeur du programme</div>
                                    <div className="text-[#84cc16] font-extrabold text-2xl">7 500 USD</div>
                                    <div className="text-white/60 text-xs">par participant</div>
                                </div>
                            </div>

                            <a
                                href="mailto:thomas@kadea.co?subject=Candidature%20Programme%20Executive%202026"
                                className="inline-flex items-center gap-2 bg-[#84cc16] text-[#0A2540] font-extrabold px-7 py-3.5 rounded-full w-fit hover:brightness-110 transition shadow-lg shadow-black/20 text-sm"
                            >
                                Candidater à la Promotion 2026 <ChevronRight size={16} />
                            </a>

                            <div className="text-white/70 text-sm mt-2 leading-relaxed">
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
                        </div>

                        <div className="flex flex-col gap-5">
                            <div className="bg-white/10 rounded-2xl p-6 border border-white/20 backdrop-blur-xs">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="bg-[#EC4899] text-white Richmond text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                                        ⚠ Places Limitées
                                    </span>
                                </div>
                                <p className="text-white font-semibold text-sm mb-4 leading-relaxed">
                                    <strong className="text-[#fde047]">40 places disponibles maximum.</strong> Recrutement sélectif réparti en 2 promotions strictes :
                                </p>

                                <div className="flex flex-col gap-3">
                                    {SELECTION_CRITERIA.map((item) => (
                                        <div key={item} className="flex items-center gap-3">
                                            <CheckCircle size={16} className="text-[#84cc16] shrink-0" />
                                            <span className="text-white text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-white/60 text-xs mt-5 leading-relaxed">
                                    Règle du <strong className="text-white/80">premier engagé, premier servi</strong>. Les dossiers sont étudiés par ordre de réception. Ne tardez pas.
                                </p>
                                <a href="#" className="mt-4 inline-flex items-center gap-1 text-[#fde047] text-xs font-bold hover:underline group">
                                    Voir les critères de sélection{" "}
                                    <ArrowRight size={12} className="transform group-hover:translate-x-0.5 transition-transform" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}