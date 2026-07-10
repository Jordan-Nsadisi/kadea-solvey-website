import React from "react";
import { MicrosoftLogo } from "@/components/ui/atoms/PartnerLogos";

export default function Partners() {
    return (
        <section className="bg-white border-b border-black/8 py-6">
            <div className="w-full container mx-auto px-5">
                <p className="text-center text-xs text-gray-400 font-semibold uppercase tracking-widest mb-6">
                    Partenaires Officiels &amp; Supports Techniques
                </p>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 grayscale opacity-70 hover:grayscale-0 transition-all duration-300">
                    <MicrosoftLogo />
                </div>
            </div>
        </section>
    );
}