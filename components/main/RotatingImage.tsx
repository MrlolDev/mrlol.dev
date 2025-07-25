"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface RotatingImageProps {
  images: string[];
  wordIndex: number;
  alt: string;
}

export default function RotatingImage({
  images,
  wordIndex,
  alt,
}: RotatingImageProps) {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    setCurrentImage(images[wordIndex % images.length]);

    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300); // Match this with CSS transition duration

    return () => clearTimeout(timer);
  }, [wordIndex, images]);

  return (
    <Image
      src={currentImage}
      alt={alt}
      width={96}
      height={96}
      className={`
        w-32 h-32 sm:w-16 sm:h-16 rounded-full border border-black ${
          isTransitioning ? "opacity-0 scale-90" : "opacity-100 scale-100"
        } transition-all duration-300 ease-in-out`}
    />
  );
}
