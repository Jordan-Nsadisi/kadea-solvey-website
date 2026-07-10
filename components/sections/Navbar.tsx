"use client";

import { useState } from "react";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { Button } from "../ui/atoms/button";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/8 shadow-sm">
            <div className="w-full container mx-auto p-5 flex items-center justify-between">
                {/* Logos */}
                <div className="flex items-center gap-4">
                    <ImageWithFallback
                        src="/logos/Black.png"
                        alt="ULB-Solvay Lifelong Learning"
                        width={180}
                        height={36}
                        className="md:w-48 w-32 object-contain"
                    />
                    <div className="w-px h-6 bg-gray-200" />
                    <ImageWithFallback
                        src="/logos/Logo_Kadea_Exe.png"
                        alt="Kadea Executive"
                        width={160}
                        height={32}
                        className="w-28 md:w-40 h-auto object-contain"
                    />
                </div>
                {/* Desktop cta */}
                <Button
                    className="ml-2 bg-[#EC4899] text-white px-5 py-2 font-semibold text-sm md:text-[15px] rounded-md hover:bg-[#db2777] shrink-0 transition-colors"
                >
                    S'inscrire
                </Button>
            </div>
        </header>
    )
}