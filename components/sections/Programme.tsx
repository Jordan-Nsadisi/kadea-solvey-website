import { ImageMosaic } from "../ui/molecules/image-mosaic";

const OVERVIEW_IMAGES = [
    "https://images.unsplash.com/photo-1560472354-b33ff0ad5a3b?w=300&h=200&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop&auto=format",
];

const FARI_DIMENSIONS = [
    { n: "01", label: "Données" },
    { n: "02", label: "Process" },
    { n: "03", label: "Culture & Compétences" },
    { n: "04", label: "Stack Technologique" },
    { n: "05", label: "Intelligence Artificielle" },
    { n: "06", label: "Gouvernance & Stratégie" },
];

export default function Programme() {
    return (
        <section id="programme" className="py-5">
            <div className="w-full container mx-auto px-5">
                <div className="bg-[#45A29E] rounded-3xl overflow-hidden p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-10 items-start">

                        <ImageMosaic imgs={OVERVIEW_IMAGES} alt="Stratégie digitale" />

                        <div className="flex flex-col gap-6">
                            <span className="text-white/70 font-bold text-xs uppercase tracking-widest">
                                02 · Le Programme
                            </span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                                Piloter le digital &amp; l'IA de votre organisation
                            </h2>
                            <p className="text-white/85 text-sm leading-relaxed">
                                Ce programme intensif est conçu pour le <strong className="text-white">Top Management, les DSI et les DRH</strong> des institutions publiques et entreprises privées de la RDC. Il couvre 4 domaines clés : Stratégie, Transformation, Processus &amp; Performance, Alignement Métier &amp; IT.
                            </p>

                            {/* Carte FARI */}
                            <div className="bg-[#0A2540] rounded-2xl p-6">
                                <div className="text-[#F59E0B] font-extrabold text-xs uppercase tracking-widest mb-4">
                                    Cadre de Maturité FARI — 6 Dimensions Clés
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {FARI_DIMENSIONS.map(({ n, label }) => (
                                        <div key={n} className="flex items-center gap-2">
                                            <span className="text-[#45A29E] font-extrabold text-xs">{n}</span>
                                            <span className="text-white text-xs font-medium">{label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-3 flex-wrap">
                                <a href="#admission" className="bg-[#F59E0B] text-[#0A2540] font-semibold px-5 py-2 rounded-md text-sm md:text-[15px] hover:brightness-110 transition text-center shrink-0">
                                    En savoir plus
                                </a>
                                <a href="#" className="bg-[#EC4899] text-white font-semibold px-5 py-2 rounded-md text-sm md:text-[15px] hover:brightness-110 transition text-center shrink-0">
                                    Brochure PDF
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}