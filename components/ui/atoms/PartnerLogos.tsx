import Image from "next/image";

export const SolvayLogo = ({ className }: { className?: string }) => (
    <Image src='/assets/partners/solvay-black.png' alt="ULB-Solvay Lifelong Learning" className={className ?? "h-8 w-auto object-contain"} />
);

export const MicrosoftLogo = () => (
    <Image
        src='/assets/partners/microsoft.png'
        alt="Microsoft Tech"
        width={144}
        height={36}
        className="h-9 w-auto object-contain" />
);

// export const GizLogo = () => (
//     <Image src='/assets/partners/giz.png' alt="GIZ Coopération Allemande" className="h-10 w-auto object-contain" />
// );

// export const WbiLogo = () => (
//     <Image src='/assets/partners/wbi.png' alt="Wallonie-Bruxelles International" className="h-11 w-auto object-contain" />
// );

// export const VodacomLogo = () => (
//     <Image src='/assets/partners/vodacom.png' alt="Vodacom RDC" className="h-9 w-auto object-contain" />
// );

// export const AdnLogo = () => (
//     <Image src='/assets/partners/adn.png' alt="Agence pour le Développement du Numérique" className="h-9 w-auto object-contain" />
// );