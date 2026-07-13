import Link from "next/link";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa"

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="w-full bg-white">
                <div className="container mx-auto px-5 py-10 md:py-14 flex flex-col items-center justify-center gap-5 md:gap-8">

                    <div>
                        {/* TODO- ajouter l'url sur les logos une fois deployer */}
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

                    <div className="w-fit flex items-center gap-5 text-xl">
                        <Link target="_blank" href={'https://web.facebook.com/kadea.academy'}>
                            <FaFacebookF />
                        </Link>
                        <Link target="_blank" href={'https://www.instagram.com/kadea_academy'}>
                            <FaInstagram />
                        </Link>
                        <Link target="_blank" href={'https://www.linkedin.com/company/kadeaacademy/'}>
                            <FaLinkedin />
                        </Link>
                    </div>

                    <div className="w-full h-px bg-gray-100 my-2 max-w-lg" />

                    <p className="text-gray-400 text-sm text-center">
                        © {currentYear} Kadea Executive × ULB-Solvay Lifelong Learning. Tous droits réservés.
                    </p>

                </div>
            </footer>
        </>
    );
}