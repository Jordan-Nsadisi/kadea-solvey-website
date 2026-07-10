import Image from "next/image";
import solvayImg from "@/public/assets/partners/solvay-black.png";
import microsoftImg from "@/public/assets/partners/microsoft.png";
import gizImg from "@/public/assets/partners/giz.png";
import wbiImg from "@/public/assets/partners/wbi.png";
import vodacomImg from "@/public/assets/partners/vodacom.png";
import adnImg from "@/public/assets/partners/adn.png";

export const SolvayLogo = ({ className }: { className?: string }) => (
    <Image src={solvayImg} alt="ULB-Solvay Lifelong Learning" className={className ?? "h-8 w-auto object-contain"} />
);

export const MicrosoftLogo = () => (
    <Image src={microsoftImg} alt="Microsoft Tech" className="h-9 w-auto object-contain" />
);

export const GizLogo = () => (
    <Image src={gizImg} alt="GIZ Coopération Allemande" className="h-10 w-auto object-contain" />
);

export const WbiLogo = () => (
    <Image src={wbiImg} alt="Wallonie-Bruxelles International" className="h-11 w-auto object-contain" />
);

export const VodacomLogo = () => (
    <Image src={vodacomImg} alt="Vodacom RDC" className="h-9 w-auto object-contain" />
);

export const AdnLogo = () => (
    <Image src={adnImg} alt="Agence pour le Développement du Numérique" className="h-9 w-auto object-contain" />
);