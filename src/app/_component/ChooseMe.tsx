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
              What I&apos;m Do: Creative. Technical. Impactful.
            </h2>
            <p className='text-xl max-lg:text-lg max-md:text-sm text-black/50 max-w-sm text-right max-md:text-center max-md:max-w-full'>
              I help brands stand out by blending design and development into seamless digital experiences.
            </p>
          </div>
          <div className='w-full h-full rounded-2xl overflow-hidden'>
            <Image
              src='https://ik.imagekit.io/qss3mmw4a/Agency/1.webp?updatedAt=1752586511519'
              alt='Project'
              width={1400}
              height={1000}
              className='w-full h-full object-cover object-center'
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
            <div className='flex gap-5 w-full h-full max-lg:gap-2'>
              <div className='flex flex-col items-start justify-start w-1/3 gap-5 max-lg:gap-2'>
                  <Image
                    src='https://ik.imagekit.io/qss3mmw4a/Agency/website-1.png?updatedAt=1752592398377'
                    alt='Project-1'
                    width={1500}
                    height={1000}
                    className='w-full h-60 object-cover object-top rounded-xl'
                  />
                  <Image
                    src='https://ik.imagekit.io/qss3mmw4a/Agency/website-2.png?updatedAt=1752592398311'
                    alt='Project-2'
                    width={1500}
                    height={1000}
                    className='w-full h-60 object-cover object-top rounded-xl'
                  />
                  <Image
                    src='https://ik.imagekit.io/qss3mmw4a/Agency/website-3.png?updatedAt=1752592397921'
                    alt='Project-3'
                    width={1500}
                    height={1000}
                    className='w-full h-60 object-cover object-top rounded-xl'
                  />
                  <Image
                    src='https://ik.imagekit.io/qss3mmw4a/Agency/website-4.png?updatedAt=1752592398359'
                    alt='Project-4'
                    width={1500}
                    height={1000}
                    className='w-full h-60 object-cover object-top rounded-xl'
                  />


              </div>
              <div className='flex flex-col items-center justify-center w-1/3 gap-5 max-lg:gap-2'>
                  <Image
                    src='https://ik.imagekit.io/qss3mmw4a/Agency/website-5.png?updatedAt=1752592396965'
                    alt='project-5'
                    width={1500}
                    height={1000}
                    className='w-full h-60 object-cover object-top rounded-xl'
                  />
                  <Image
                    src='https://ik.imagekit.io/qss3mmw4a/Agency/website-6.png?updatedAt=1752592398298'
                    alt='project-6'
                    width={1500}
                    height={1000}
                    className='w-full h-60 object-cover object-top rounded-xl'
                  />
                  <Image
                    src='https://ik.imagekit.io/qss3mmw4a/Agency/website-7.png?updatedAt=1752592397152'
                    alt='project-7'
                    width={1500}
                    height={1000}
                    className='w-full h-60 object-cover object-top rounded-xl'
                  />
                  <Image
                    src='https://ik.imagekit.io/qss3mmw4a/Agency/website-8.png?updatedAt=1752592396814'
                    alt='project-8'
                    width={1500}
                    height={1000}
                    className='w-full h-60 object-cover object-top rounded-xl'
                  />

              </div>
              <div className='flex flex-col items-end justify-end w-1/3 gap-5 max-lg:gap-2'>
                  <Image
                    src='https://ik.imagekit.io/qss3mmw4a/Agency/website-8.png?updatedAt=1752592396814'
                    alt='project-9'
                    width={1500}
                    height={1000}
                    className='w-full h-60 object-cover object-top rounded-xl'
                  />
                  <Image
                    src='https://ik.imagekit.io/qss3mmw4a/Agency/website-5.png?updatedAt=1752592396965'
                    alt='project-10'
                    width={1500}
                    height={1000}
                    className='w-full h-60 object-cover object-top rounded-xl'
                  />
                  <Image
                    src='https://ik.imagekit.io/qss3mmw4a/Agency/website-4.png?updatedAt=1752592398359'
                    alt='project-11'
                    width={1500}
                    height={1000}
                    className='w-full h-60 object-cover object-top rounded-xl'
                  />
                  <Image
                    src='https://ik.imagekit.io/qss3mmw4a/Agency/website-8.png?updatedAt=1752592396814'
                    alt='project-12'
                    width={1500}
                    height={1000}
                    className='w-full h-60 object-cover object-top rounded-xl'
                  />
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ChooseMe;
