"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type PreviewImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  className: string;
  priority?: boolean;
};

export default function PreviewImage({
  src,
  alt,
  width,
  height,
  sizes,
  className,
  priority = false,
}: PreviewImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type='button'
        onClick={() => setIsOpen(true)}
        className='group block w-full cursor-zoom-in p-0 border-0 bg-transparent text-left'
        aria-label='Preview image'
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          className={className}
          priority={priority}
          unoptimized
        />
      </button>

      {isOpen ? (
        <div
          role='dialog'
          aria-modal='true'
          className='fixed inset-0 z-[120] flex items-center justify-center bg-black/80 p-4'
          onClick={() => setIsOpen(false)}
        >
          <button
            type='button'
            onClick={() => setIsOpen(false)}
            className='absolute right-4 top-4 border-0 bg-transparent p-2 text-white cursor-pointer'
            aria-label='Close preview'
          >
            ✕
          </button>

          <div className='max-h-[90vh] max-w-[94vw]' onClick={(event) => event.stopPropagation()}>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className='block h-auto max-h-[90vh] w-auto max-w-[94vw] object-contain'
              unoptimized
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
