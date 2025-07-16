'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image'
import React, { useRef } from 'react'

const Header = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div ref={ref} className='w-full h-full flex flex-col justify-center items-center py-32 max-lg:py-24 max-md:py-24 px-24 max-lg:px-14 max-sm:px-6'>
      <div className='w-full h-full flex justify-center items-center max-lg:flex-col max-lg:gap-8 max-md:gap-5 max-sm:gap-3'>
        <div className='w-1/2 max-lg:w-full'>
          <h1 className='text-6xl max-lg:text-4xl font-bold max-2xl:text-5xl max-lg:text-center max-sm:text-2xl'>We design solutions that drive business.</h1>
        </div>
        <div className='w-1/2 flex justify-end items-end max-lg:w-full max-lg:justify-center max-lg:items-center'>
          <p className='text-xl text-black/50 max-w-md text-right font-bold max-lg:text-center max-lg:max-w-full max-lg:text-lg max-md:text-sm'>At Opus, we help companies build stronger brands, better products, and websites that actually perform.</p>
        </div>
      </div>
      <div className='w-full h-full rounded-2xl overflow-hidden mt-16'>
        <motion.div style={{ scale }} className='w-full h-screen max-lg:h-[50vh]'>
          <Image src='https://ik.imagekit.io/qss3mmw4a/Agency/h61nQzBXhG9RjrgFjCdPFcsGVE.avif?updatedAt=1752658958855' alt='project' width={2000} height={1000} className='w-full h-full object-cover'></Image>
        </motion.div>
      </div>
    </div>
  )
}

export default Header
