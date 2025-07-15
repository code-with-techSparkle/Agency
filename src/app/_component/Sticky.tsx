'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'

const Sticky = () => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const textOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])
  const imageScale = useTransform(scrollYProgress, [0.25, 0.5], [0.8, 1])
  const imageOpacity = useTransform(scrollYProgress, [0.5, 0.7], [1, 0])
  const newTextX = useTransform(scrollYProgress, [0.6, 0.85], ['-100%', '0%'])
  const newTextOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1])

  return (
    <div
      ref={containerRef}
      className='w-full h-[400vh] relative px-24 max-lg:px-14 max-sm:px-6'
    >
      <motion.div
        style={{ opacity: textOpacity }}
        className='w-full h-screen sticky top-0 flex flex-col justify-center items-center gap-3 z-30 max-sm:text-center'
      >
        <h4 className='text-4xl max-md:text-3xl max-sm:text-2xl'>More About Me</h4>
        <h1 className='text-9xl text-center font-bold leading-[1.1] max-w-6xl max-2xl:text-8xl max-xl:text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-[32px]'>
          I&apos;m M.Tuaha - creative developer and builder
        </h1>
        <p className='pt-6 text-2xl'>The best way to build a webiste&apos;s are:-</p>
        <p className='text-lg text-black/50 font-semibold max-sm:text-sm'  >
          Code Webiste&apos;s • No Code Webiste&apos;s
        </p>
      </motion.div>
      <motion.div
        style={{ scale: imageScale, opacity: imageOpacity }}
        className='w-full h-screen sticky top-0 z-20'
      >
        <Image
          src='https://ik.imagekit.io/qss3mmw4a/Cosmatics/fynn-DEnuB_zok9M-unsplash%20(1).jpg?updatedAt=1752154654272'
          alt='mountain'
          width={1000}
          height={1000}
          className='w-full h-full object-cover rounded-xl'
        />
      </motion.div>
      <motion.div
        style={{ x: newTextX, opacity: newTextOpacity }}
        className='w-full h-screen sticky top-0 flex items-center justify-center z-10'
      >
        <h1 className='text-7xl font-semibold text-black text-center leading-tight max-xl:text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-2xl'>
        I&apos;m passion for building modern, high-performing website&apos;s <br /> whether through clean code or powerful no-code tools.
        </h1>
      </motion.div>
    </div>
  )
}

export default Sticky
