import { ImageWithFallback } from "../ImageWithFallback";

interface ImageMosaicProps {
    imgs: string[];
    alt: string;
}

export function ImageMosaic({ imgs, alt }: ImageMosaicProps) {
    return (
        <div className="grid grid-cols-2 gap-2 h-full min-h-[280px]" >
            <div className="rounded-2xl overflow-hidden row-span-2" >
                <ImageWithFallback src={imgs[0]} alt={alt} className="w-full h-full object-cover" />
            </div>
            < div className="rounded-2xl overflow-hidden" >
                <ImageWithFallback src={imgs[1]} alt={alt} className="w-full h-full object-cover" />
            </div>
            < div className="rounded-2xl overflow-hidden" >
                <ImageWithFallback src={imgs[2]} alt={alt} className="w-full h-full object-cover" />
            </div>
        </div>
    );
}