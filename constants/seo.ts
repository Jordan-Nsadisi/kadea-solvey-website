import { Metadata } from "next";

export const homeMetadata: Metadata = {
    title: "Transformation Digitale & IA en RDC | Programme Executive 2026",
    description: "Parcours d'excellence Conçu par ULB-Solvay Lifelong Learning en partenariat avec Kadea Executive et avec lʼapport technique de Microsoft pour outiller les dirigeants, DSI et DRH de la RDC à piloter l'adoption de l'IA et du digital.",
    keywords: [
        "Transformation digitale RDC",
        "Intelligence Artificielle République Démocratique du Congo",
        "ULB Solvay Lifelong Learning Kinshasa",
        "Kadea Executive",
        "DRC Digital Nation 2030",
        "Plan National du Numérique PNN RDC",
        "Formation Executive dirigeants Kinshasa",
        "Maturité FARI IA",
        "Micro-accréditation universitaire Solvay"
    ],
    authors: [{ name: "ULB-Solvay Lifelong Learning" }, { name: "Kadea Executive" }],

    openGraph: {
        title: "Transformation Digitale & IA en RDC · Programme Executive 2026",
        description: "Un parcours intensif de 3 mois entre Kinshasa et Bruxelles pour les décideurs publics et privés, certifié par une micro-accréditation universitaire ULB-Solvay.",
        url: "https://solvay.kadea.co",
        siteName: "ULB-Solvay x Kadea Executive",
        locale: "fr_FR",
        type: "website",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Délégation officielle et dirigeants du Programme Executive RDC 2026",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Transformation Digitale & IA en RDC | Promo 2026",
        description: "3 mois de formation intensive pour aligner la stratégie de l'État et des entreprises privées sur les défis de l'IA.", // [cite: 10, 44]
        images: ["/images/og-image.jpg"],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};