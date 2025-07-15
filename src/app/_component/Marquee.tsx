'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Marquee() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-100%"]);

  return (
    <div ref={ref} className="relative w-full h-full">
      <div className="sticky top-0 overflow-hidden h-[120px] max-lg:h-[100px]">
        <motion.div
          style={{ x }}
          className="whitespace-nowrap"
        >
          <h1 className="text-9xl font-bold tracking-tighter leading-[1] max-lg:text-8xl max-sm:text-7xl">
            I&apos;M WEB DEVELOPER — UI/UX DESIGNER — GRAPHIC DESIGNER —
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
