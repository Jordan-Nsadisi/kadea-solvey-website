"use client";

import { useState } from "react";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { Button } from "../ui/atoms/button";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/8 shadow-sm">
            <div className="w-full container mx-auto px-4 py-3 md:p-5 flex items-center justify-between gap-2">
                {/* Logos */}
                <div className="flex items-center gap-2 md:gap-4 shrink-0">
                    <ImageWithFallback
                        src="/logos/Black.png"
                        alt="ULB-Solvay Lifelong Learning"
                        width={180}
                        height={36}
                        className="w-24 sm:w-32 md:w-48 object-contain"
                    />
                    <div className="w-px h-4 md:h-6 bg-gray-200" />
                    <ImageWithFallback
                        src="/logos/Logo_Kadea_Exe.png"
                        alt="Kadea Executive"
                        width={160}
                        height={32}
                        className="w-20 sm:w-28 md:w-40 object-contain"
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