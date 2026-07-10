import { Button } from "../ui/atoms/button";
import { Input } from "../ui/atoms/input";
import { ImageWithFallback } from "../ui/ImageWithFallback";

const FOOTER_PHOTO = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=400&fit=crop&auto=format";

export default function Footer() {
    return (
        <>
            <section className="py-5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-[#45A29E]/15 rounded-3xl overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-0">

                            <div className="relative min-h-[260px]">
                                <ImageWithFallback
                                    src={FOOTER_PHOTO}
                                    alt="Promotion diplômée Kadea Executive"
                                    className="absolute inset-0 w-full h-full object-cover rounded-l-3xl"
                                />
                                <div className="absolute inset-0 bg-[#0A2540]/30 rounded-l-3xl" />
                            </div>

                            <div className="p-10 flex flex-col justify-center gap-5">
                                <h3 className="text-xl font-extrabold text-[#0A2540]">
                                    Abonnez-vous à la newsletter
                                </h3>
                                <p className="text-gray-500 text-sm">
                                    Recevez les actualités du programme, les dates d'ouverture des candidatures et les insights digitaux de Kadea Executive.
                                </p>
                                <div className="flex gap-2">
                                    <Input
                                        type="email"
                                        placeholder="votre@email.com"
                                        className="flex-1 bg-white border border-gray-200 rounded-full px-5 py-2.5 text-sm outline-none focus:border-[#45A29E] transition"
                                    />
                                    <Button className="bg-[#0A2540] text-white font-bold px-5 py-2.5 rounded-full text-sm hover:bg-[#0d3060] transition whitespace-nowrap">
                                        S'abonner
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-8 border-t border-black/8 bg-white">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

                    <div className="flex items-center gap-4">
                        <ImageWithFallback
                            src="/logos/Black.png"
                            alt="ULB-Solvay Lifelong Learning"
                            className="h-7 object-contain opacity-60"
                        />
                        <div className="w-px h-5 bg-gray-200" />
                        <ImageWithFallback
                            src="/logos/kadea.png"
                            alt="Kadea Executive"
                            className="h-6 object-contain opacity-60"
                        />
                    </div>

                    <p className="text-gray-400 text-xs text-center">
                        © 2026 Kadea Executive × ULB-Solvay Lifelong Learning. All rights reserved.
                    </p>

                    <div className="flex gap-4 text-xs text-gray-400">
                        <a href="#" className="hover:text-gray-600 transition">Mentions légales</a>
                        <a href="#" className="hover:text-gray-600 transition">Politique de confidentialité</a>
                    </div>

                </div>
            </footer>
        </>
    );
}