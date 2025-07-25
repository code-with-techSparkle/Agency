'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

export default function StickyImageSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const [offsets, setOffsets] = useState({ x: 500, y: 300 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 1024) {
        setOffsets({ x: 150, y: 200 }); // small
      } else if (width <= 1536) {
        setOffsets({ x: 250, y: 250 }); // medium
      } else {
        setOffsets({ x: 500, y: 300 }); // large
      }
    };

    handleResize(); // Initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { x: xOffset, y: yOffset } = offsets;

  const img1Y = useTransform(scrollY, [1000, 1300], [0, 1]);
  const img2Y = useTransform(scrollY, [1300, 1600], [0, 1]);
  const img3Y = useTransform(scrollY, [1600, 1900], [0, 1]);
  const img4Y = useTransform(scrollY, [1900, 2100], [0, 1]);

  const imageFadeOut = useTransform(scrollY, [2100, 2400], [1, 0]);
  const textOpacity = useTransform(scrollY, [2100, 2400], [0, 1]);
  const textScale = useTransform(scrollY, [2100, 2400], [0.8, 1]);



  return (
    <div className="relative h-[3000px]">
      <div
        ref={containerRef}
        className="sticky top-0 h-screen w-full overflow-hidden bg-white flex items-center justify-center"
      >
        <div className="relative w-full h-full flex items-center justify-center">

          {/* Image 1 */}
          <motion.div
            className="absolute w-96 h-96 max-2xl:w-72 max-2xl:h-72 max-lg:w-52 max-lg:h-52 max-sm:w-44 max-sm:h-44 overflow-hidden rounded-lg shadow-xl"
            style={{
              x: useTransform(img1Y, (p) => p * -xOffset),
              y: useTransform(img1Y, (p) => p * yOffset),
              opacity: imageFadeOut,
              zIndex: 4,
            }}
          >
            <Image src='https://ik.imagekit.io/qss3mmw4a/Agency/women-1.avif?updatedAt=1752836477363' alt='person-1' width={1000} height={1000}></Image>
          </motion.div>

          {/* Image 2 */}
          <motion.div
            className="absolute w-96 h-96 max-2xl:w-72 max-2xl:h-72 max-lg:w-52 max-lg:h-52 max-sm:w-44 max-sm:h-44 overflow-hidden rounded-lg shadow-xl"
            style={{
              x: useTransform(img2Y, (p) => p * xOffset),
              y: useTransform(img2Y, (p) => p * yOffset),
              opacity: imageFadeOut,
              zIndex: 3,
            }}
          >
            <Image src='https://ik.imagekit.io/qss3mmw4a/Agency/women-3.avif?updatedAt=1752836476178' alt='person-2' width={1000} height={1000}></Image>
          </motion.div>

          {/* Image 3 */}
          <motion.div
            className="absolute w-96 h-96 max-2xl:w-72 max-2xl:h-72 max-lg:w-52 max-lg:h-52 max-sm:w-44 max-sm:h-44 overflow-hidden rounded-lg shadow-xl"
            style={{
              x: useTransform(img3Y, (p) => p * -xOffset),
              y: useTransform(img3Y, (p) => p * -yOffset),
              opacity: imageFadeOut,
              zIndex: 2,
            }}
          >
            <Image src='https://ik.imagekit.io/qss3mmw4a/Agency/women-6.avif?updatedAt=1752836472282' alt='person-3' width={1000} height={1000}></Image>
          </motion.div>

          {/* Image 4 */}
          <motion.div
            className="absolute w-96 h-96 max-2xl:w-72 max-2xl:h-72 max-lg:w-52 max-lg:h-52 max-sm:w-44 max-sm:h-44 overflow-hidden rounded-lg shadow-xl"
            style={{
              x: useTransform(img4Y, (p) => p * xOffset),
              y: useTransform(img4Y, (p) => p * -yOffset),
              opacity: imageFadeOut,
              zIndex: 1,
            }}
          >
            <Image src='https://ik.imagekit.io/qss3mmw4a/Agency/women-5-1.avif?updatedAt=1752836471085' alt='person-3' width={1000} height={1000}></Image>
          </motion.div>

          {/* Reveal Text */}
          <motion.h1
            className="absolute text-6xl font-bold text-black text-center max-lg:text-5xl max-md:text-3xl max-sm:text-2xl px-4"
            style={{
              opacity: textOpacity,
              scale: textScale,
              zIndex: 0,
            }}
          >
            Let&apos;s Create Something Amazing
          </motion.h1>
        </div>
      </div>
    </div>
  );
}
