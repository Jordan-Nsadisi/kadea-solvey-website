"use client";

import { ImageWithFallback } from "../ui/ImageWithFallback";
import { Button } from "../ui/atoms/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { subscribeLink } from "@/data/subscribe-link";

export default function Header() {
    const router = useRouter();
    return (
        <header className="w-full bg-white sticky top-0 left-0 z-50 bg-white/95 backdrop-blur">
            <div className="w-full container mx-auto p-5 md:py-1 flex items-center justify-between">
                {/* Logos */}
                <div>
                    <Link href={"/"} className="flex items-center gap-2 md:gap-4 shrink-0">
                        <ImageWithFallback
                            src="/logos/Black.png"
                            alt="ULB-Solvay Lifelong Learning"
                            width={220}
                            height={46}
                            className="w-26 md:w-74 h-auto"
                        />
                        <div className="w-px h-4 md:h-6 bg-gray-200" />
                        <ImageWithFallback
                            src="/logos/Logo_Kadea_Exe.png"
                            alt="Kadea Executive"
                            width={160}
                            height={32}
                            className="w-22 md:w-40 h-auto"
                        />
                    </Link>
                </div>
                <a
                    href={subscribeLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 bg-[#f6a822] text-white px-5 py-2 font-semibold text-sm md:text-[15px] rounded-md hover:bg-[#f6a822]/90/90/90 shrink-0 transition-colors"
                >
                    S'inscrire
                </a>
            </div>
        </header>
    )
}