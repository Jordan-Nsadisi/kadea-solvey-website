"use client";

import { useState } from "react";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { Menu, X } from "lucide-react";
import solvayLogo from "../../public/logos/Black.png";
import kadeaLogo from "../../public/logos/kadea.png";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/8 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
                {/* Logos */}
                <div className="flex items-center gap-4">
                    <ImageWithFallback src="/logos/Black.png" alt="ULB-Solvay Lifelong Learning" className="h-8 object-contain" />
                    <div className="w-px h-6 bg-gray-200" />
                    <ImageWithFallback src="/logos/Logo_Kadea_Exe.png" alt="Kadea Executive" className="h-7 object-contain" />
                </div>
                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#0A2540]">
                    {["L'Institution", "Le Programme", "Les Sessions", "Admission"].map((l) => (
                        <a key={l} href="#" className="hover:text-[#45A29E] transition-colors">
                            {l}
                        </a>
                    ))}
                    <a
                        href="#"
                        className="ml-2 bg-[#EC4899] text-white px-5 py-2 rounded-full hover:bg-[#db2777] transition-colors"
                    >
                        S'inscrire
                    </a>
                </nav>
                {/* Mobile toggle */}
                <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-black/8 px-6 py-4 flex flex-col gap-3 text-sm font-semibold">
                    {["L'Institution", "Le Programme", "Les Sessions", "Admission"].map((l) => (
                        <a key={l} href="#" className="text-[#0A2540] hover:text-[#45A29E]">
                            {l}
                        </a>
                    ))}
                    <a href="#" className="bg-[#EC4899] text-white px-5 py-2 rounded-full text-center">
                        S'inscrire
                    </a>
                </div>
            )}
        </header>
    )
}