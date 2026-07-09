
const PARTNERS = [
    { name: "GIZ", text: "GIZ" },
    { name: "Microsoft", text: "Microsoft" },
    { name: "WBI", text: "Wallonie-Bruxelles\nInternational" },
    { name: "Min. Formation", text: "Ministère Formation\nProfessionnelle" },
    { name: "Vodacom", text: "Vodacom" },
    { name: "ADN", text: "ADN" },
];

export default function Partners() {
    return (
        <section className="bg-white border-b border-black/8 py-6">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-xs text-gray-400 font-semibold uppercase tracking-widest mb-4">
                    Partenaires Officiels
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    {PARTNERS.map((p) => (
                        <div
                            key={p.name}
                            className="text-gray-400 font-bold text-sm whitespace-pre-line text-center leading-tight hover:text-gray-600 transition-colors"
                        >
                            {p.text}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}