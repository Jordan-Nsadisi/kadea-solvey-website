"use client";

import Image from 'next/image';
import React, { useState } from 'react';

interface ImageWithFallbackProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'width' | 'height'> {
    src: string | { src: string } | any;
    width?: number | `${number}`;
    height?: number | `${number}`;
    fill?: boolean;
}

const ERROR_IMG_SRC =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

export function ImageWithFallback(props: ImageWithFallbackProps) {
    const [didError, setDidError] = useState(false)

    const handleError = () => {
        setDidError(true)
    }

    const { src, alt, style, className, width, height, fill, ...rest } = props

    const resolvedSrc = src && typeof src === 'object' && 'src' in src ? src.src : src;

    if (didError) {
        return (
            <div
                className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
                style={style}
            >
                <div className="flex items-center justify-center w-full h-full">
                    <img src={ERROR_IMG_SRC} alt="Error loading image" />
                </div>
            </div>
        )
    }

    const canUseNextImage = fill || (width && height);

    if (canUseNextImage) {
        return (
            <Image
                src={resolvedSrc || ERROR_IMG_SRC}
                alt={alt || ''}
                className={className}
                style={style}
                fill={fill}
                width={fill ? undefined : (width as any)}
                height={fill ? undefined : (height as any)}
                onError={handleError}
                {...rest}
            />
        );
    }

    return (
        <img
            src={resolvedSrc}
            alt={alt}
            className={className}
            style={style}
            width={width as any}
            height={height as any}
            onError={handleError}
            {...rest}
        />
    );
}