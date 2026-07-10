import { Button } from "../ui/atoms/button";
import { Input } from "../ui/atoms/input";
import { ImageWithFallback } from "../ui/ImageWithFallback";

export default function Footer() {
    return (
        <>
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