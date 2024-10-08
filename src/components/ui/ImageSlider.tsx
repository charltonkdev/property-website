'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { images } from './data/image'; // Ensure this path is correct

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlideRef = useRef<() => void>();

  nextSlideRef.current = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (nextSlideRef.current) {
        nextSlideRef.current();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {images.map((image, index) => (
          <motion.div
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full flex items-center justify-center"
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              objectFit="cover"
              className="w-full h-full"
            />
          </motion.div>
        ))}
      </div>
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 text-white"
      >
        &#10094;
      </button>
      <button
        type="button"
        onClick={() => nextSlideRef.current?.()}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-white"
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
