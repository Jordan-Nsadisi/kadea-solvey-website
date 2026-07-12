"use client";

import { useState } from "react";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { Button } from "../ui/atoms/button";
import Link from "next/link";

export default function Header() {

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/8 shadow-sm">
            <div className="w-full container mx-auto px-4 py-3 md:p-5 flex items-center justify-between gap-2">
                {/* Logos */}
                <div>
                    {/* TODO- ajouter l'url sur les logos une fois deployer */}
                    <Link href={"/"} className="flex items-center gap-2 md:gap-4 shrink-0">
                        <ImageWithFallback
                            src="/logos/Black.png"
                            alt="ULB-Solvay Lifelong Learning"
                            width={220}
                            height={46}
                            className="w-30 sm:w-28 md:w-74 object-contain"
                        />
                        <div className="w-px h-4 md:h-6 bg-gray-200" />
                        <ImageWithFallback
                            src="/logos/Logo_Kadea_Exe.png"
                            alt="Kadea Executive"
                            width={160}
                            height={32}
                            className="w-20 sm:w-28 md:w-40 object-contain"
                        />
                    </Link>
                </div>
                <Button
                    className="ml-2 bg-[#f6a822] text-white px-5 py-2 font-semibold text-base md:text-xl rounded-md hover:bg-[#6D28D9] shrink-0 transition-colors"
                >
                    S'inscrire
                </Button>
            </div>
        </header>
    )
}