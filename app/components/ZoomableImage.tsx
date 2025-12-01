'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import ImageModal from './ImageModal';

interface ZoomableImageProps extends Omit<ImageProps, 'onClick'> {
  className?: string;
}

export default function ZoomableImage({ src, alt, className, ...props }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className={`cursor-zoom-in transition-transform hover:scale-[1.02] ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          {...props}
        />
      </div>

      <ImageModal
        isOpen={isOpen}
        src={src as string}
        alt={alt}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}