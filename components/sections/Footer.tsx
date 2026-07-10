import Link from "next/link";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa"

export default function Footer() {
    return (
        <>
            <footer className="w-full">
                <div className="container mx-auto px-5 py-10 md:py-14 flex flex-col items-center justify-center gap-5 md:gap-8">

                    <div className="flex items-center gap-4">
                        <ImageWithFallback
                            src="/logos/Black.png"
                            alt="ULB-Solvay Lifelong Learning"
                            width={180}
                            height={36}
                            className="md:w-48 w-32 h-auto"
                        />
                        <div className="w-px h-5 bg-gray-200" />
                        <ImageWithFallback
                            src="/logos/Logo_Kadea_Exe.png"
                            alt="Kadea Executive"
                            width={160}
                            height={32}
                            className="md:w-40 w-28 h-auto"
                        />
                    </div>

                    <div className="w-fit flex text-secondary items-center gap-5 text-xl">
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

                    <p className="text-gray-600 text-sm text-center">
                        © 2026 Kadea Executive × ULB-Solvay Lifelong Learning. Tous droits réservés.
                    </p>

                </div>
            </footer>
        </>
    );
}