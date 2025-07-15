'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IoStarSharp } from 'react-icons/io5'
import { motion } from 'framer-motion'

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHoveringImage, setIsHoveringImage] = useState(false)

  const cursorVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 20,
      },
    },
  }

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', mouseMove)
    return () => window.removeEventListener('mousemove', mouseMove)
  }, [])

  return (
    <div className='relative w-full h-full text-9xl flex flex-col justify-start items-start py-20 max-lg:py-10 max-md:py-0 px-24 max-lg:px-14 max-sm:px-6'>
      <motion.div
        className='fixed top-0 left-0 z-[9999] pointer-events-none'
        variants={cursorVariants}
        initial='hidden'
        animate={isHoveringImage ? 'visible' : 'hidden'}
        style={{
          translateX: mousePosition.x - 50,
          translateY: mousePosition.y - 50,
        }}
      >
        <div className='w-[100px] h-[100px] rounded-full bg-black/60 text-white flex items-center justify-center text-lg font-medium text-center px-2'>
          View more
        </div>
      </motion.div>
      <div className='w-full flex gap-8 max-sm:flex-col max-lg:gap-4 max-sm:gap-3'>
        <div className='w-[50%] max-sm:w-full h-fit flex justify-between items-center'>
          <div className='text-xl max-sm:text-sm text-black font-semibold'>
            <h5>About Agency</h5>
            <h5 className='text-black/50'>Code & No code websites builder</h5>
          </div>
        </div>
        <div className='w-[50%] max-sm:w-full'>
          <h1 className='text-7xl text-right  max-xl:text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-semibold'>I&apos;m a creative</h1>
        </div>
      </div>

      <h1 className='text-7xl max-xl:text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-semibold'>
        developer specializing in website&apos;s development that tells stories and solves problems.
      </h1>

      <div className='w-full h-full py-20 max-lg:py-10 max-sm:py-5 px-24 flex max-xl:px-0 max-md:flex-col gap-8'>
        <div className='w-[65%] h-full flex flex-col gap-10 max-md:w-full'>
          <div className='w-full h-full text-2xl flex gap-7 max-xl:flex-col'>
            <p className='text-black/50 text-xl tracking-tight max-md:text-lg'>
              Whether it&apos;s building sleek, high-performing websites or fully responsive webiste that move with meaning — I turn ideas into immersive digital experiences.
            </p>
            <div className='flex gap-5 max-sm:flex-col max-sm:justify-center max-sm:items-center'>
              <Image
                src='https://ik.imagekit.io/qss3mmw4a/Cosmatics/women-5.avif?updatedAt=1751102340540'
                alt='Person'
                width={50}
                height={50}
                className='w-10 h-10 max-sm:w-12 max-sm:h-12 object-cover object-top rounded-full'
              />
              <div className='w-full h-full max-sm:text-center max-sm:items-center'>
                <div className='flex justify-start max-sm:justify-center items-center gap-1 text-sm'>
                  <p>5.0</p>/<p className='text-black/50'>5</p>
                  {[...Array(5)].map((_, i) => (
                    <IoStarSharp key={i} className='text-black size-4' />
                  ))}
                </div>
                <p className='text-black/50 text-[17px]'>
                 I blends technical precision with visual storytelling to help brands stand out and connect deeper with their audience.
                </p>
              </div>
            </div>
          </div>

          <div
            className='w-full h-[80vh] max-lg:h-full rounded-2xl overflow-hidden'
            onMouseEnter={() => setIsHoveringImage(true)}
            onMouseLeave={() => setIsHoveringImage(false)}
          >
            <Image
              src='https://ik.imagekit.io/qss3mmw4a/Cosmatics/men.avif?updatedAt=1751100376197'
              alt='My Picture'
              width={1000}
              height={1000}
              className='w-full object-cover max-md:h-[400px]'
            />
          </div>
        </div>
        <div className='w-[35%] max-md:w-full max-md:relative  sticky top-24 max-md:top-0 h-full flex justify-between flex-col gap-5'>
          <div
            className='w-full bg-white rounded-2xl p-5 shadow-lg flex flex-col gap-4'
            onMouseEnter={() => setIsHoveringImage(true)}
            onMouseLeave={() => setIsHoveringImage(false)}
          >
            <Image
              src='https://ik.imagekit.io/qss3mmw4a/Cosmatics/women-5.avif?updatedAt=1751102340540'
              alt='Model'
              width={400}
              height={500}
              className='rounded-xl object-cover w-full h-auto max-md:h-[350px]'
            />
            <div className='text-black'>
              <h2 className='text-xl max-sm:text-lg font-semibold'>Ready to Build Something Great?</h2>
              <p className='text-lg max-sm:text-sm text-black/60 mt-1'>
                Let&apos;s turn your vision into a standout website with stunning animation's
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
