'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ChooseMe = () => {
  const scaleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scaleRef,
    offset: ['start end', 'end start'], 
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <div className='w-full py-20 max-lg:py-10 max-md:py-0 px-24 max-lg:px-14 max-sm:px-6'>
      <div className='sticky top-32 w-full h-screen'>
        <div className='w-full h-full flex flex-col gap-6 overflow-hidden'>
          <div className='flex justify-between items-start max-md:flex-col max-md:text-center max-md:justify-center max-md:items-center'>
            <h2 className='text-5xl font-semibold max-w-2xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl max-md:max-w-full'>
              The Danish Aesthetic: Minimalism meets meaning
            </h2>
            <p className='text-xl max-lg:text-lg max-md:text-sm text-black/50 max-w-sm text-right max-md:text-center max-md:max-w-full'>
              In a world drowning in noise, design creates the silence necessary.
            </p>
          </div>
          <div className='w-full h-full'>
            <Image
              src='https://ik.imagekit.io/qss3mmw4a/Cosmatics/utility4.jpg?updatedAt=1752579426018'
              alt='Project'
              width={2000}
              height={1000}
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
      <div ref={scaleRef} className='w-full h-screen bg-[#F1F1F1] py-10 relative overflow-hidden max-md:h-[70vh]'>
        <div className='w-full h-0.5 absolute top-0 bg-black'></div>
        <div className='w-full h-full overflow-hidden'>
          <motion.div
            style={{ scale }}
            className='w-full h-full'
          >
            <div className='flex gap-5 w-full h-full'>
              <div className='flex flex-col items-start justify-start w-1/3 gap-5'>
                {Array(4).fill(0).map((_, i) => (
                  <Image
                    key={`col1-${i}`}
                    src='https://ik.imagekit.io/qss3mmw4a/Cosmatics/women-5-1.avif?updatedAt=1751102340720'
                    alt={`person-1-${i}`}
                    width={1000}
                    height={1000}
                    className='w-full h-60 object-cover rounded-xl'
                  />
                ))}
              </div>
              <div className='flex flex-col items-center justify-center w-1/3 gap-5'>
                {Array(4).fill(0).map((_, i) => (
                  <Image
                    key={`col2-${i}`}
                    src='https://ik.imagekit.io/qss3mmw4a/Cosmatics/women-5-1.avif?updatedAt=1751102340720'
                    alt={`person-2-${i}`}
                    width={1000}
                    height={1000}
                    className='w-full h-60 object-cover rounded-xl'
                  />
                ))}
              </div>
              <div className='flex flex-col items-end justify-end w-1/3 gap-5'>
                {Array(4).fill(0).map((_, i) => (
                  <Image
                    key={`col3-${i}`}
                    src='https://ik.imagekit.io/qss3mmw4a/Cosmatics/women-5-1.avif?updatedAt=1751102340720'
                    alt={`person-3-${i}`}
                    width={1000}
                    height={1000}
                    className='w-full h-60 object-cover rounded-xl'
                  />
                ))}
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ChooseMe;
