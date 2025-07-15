'use client'
import Image from 'next/image'
import React, { useRef, useState, useEffect } from 'react'
import { useInView, motion, AnimatePresence } from 'framer-motion'

const textBlocks = [
  {
    text: 'I started my triathlon journey struggling with balance and technique. Now, I guide others to achieve their full potential.',
    image: 'https://ik.imagekit.io/qss3mmw4a/Cosmatics/men-1.avif?updatedAt=1751100375578',
    direction: 'none',
  },
  {
    text: 'Through perseverance and training, I discovered my strengths and embraced the challenge of competition.',
    image: 'https://ik.imagekit.io/qss3mmw4a/Cosmatics/men-2.avif?updatedAt=1751100375678',
    direction: 'bottom',
  },
  {
    text: 'Today, I help aspiring triathletes find their own path to success with personalized coaching and support.',
    image: 'https://ik.imagekit.io/qss3mmw4a/Cosmatics/men-3.avif?updatedAt=1751100375778',
    direction: 'right',
  },
]

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const ref0 = useRef(null)
  const ref1 = useRef(null)
  const ref2 = useRef(null)

  const inView0 = useInView(ref0, { margin: '-50% 0px -50% 0px' })
  const inView1 = useInView(ref1, { margin: '-50% 0px -50% 0px' })
  const inView2 = useInView(ref2, { margin: '-50% 0px -50% 0px' })

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const current = [inView0, inView1, inView2].findIndex(v => v === true)
    if (!isMobile && current !== -1 && current !== activeIndex) {
      setActiveIndex(current)
    }
  }, [inView0, inView1, inView2, activeIndex, isMobile])

  const getAnimation = (direction: string) => {
    switch (direction) {
      case 'bottom':
        return {
          initial: { y: 100, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: -100, opacity: 0 },
        }
      case 'right':
        return {
          initial: { x: 100, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: -100, opacity: 0 },
        }
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        }
    }
  }

  const currentBlock = textBlocks[activeIndex]
  const anim = getAnimation(currentBlock.direction)

  return (
    <div className='w-full bg-black text-white py-20 px-24 max-xl:px-14 max-lg:px-10 max-sm:px-6'>
      {!isMobile ? (
        <div className='flex flex-row gap-10'>
          <div className='w-1/2 flex flex-col gap-40'>
            {textBlocks.map((block, index) => (
              <div
                key={index}
                ref={index === 0 ? ref0 : index === 1 ? ref1 : ref2}
                className='min-h-screen flex items-center'
              >
                <h1 className='text-5xl leading-snug'>{block.text}</h1>
              </div>
            ))}
          </div>
          <div className='w-1/2 h-full sticky top-20'>
            <div className='relative w-full h-[85vh] overflow-hidden rounded-2xl'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentBlock.image}
                  initial={anim.initial}
                  animate={anim.animate}
                  exit={anim.exit}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className='absolute top-0 left-0 w-full h-full'
                >
                  <Image
                    src={currentBlock.image}
                    alt='person'
                    width={1200}
                    height={1000}
                    className='w-full h-full object-cover object-top rounded-2xl'
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-col gap-20'>
          {textBlocks.map((block, index) => (
            <div key={index} className='flex flex-col gap-6'>
              <h1 className='text-4xl max-md:text-3xl max-sm:text-2xl leading-snug'>
                {block.text}
              </h1>
              <div className='w-full h-[60vh] max-md:h-[50vh] max-sm:h-[40vh] rounded-2xl overflow-hidden'>
                <Image
                  src={block.image}
                  alt='person'
                  width={1200}
                  height={1000}
                  className='w-full h-full object-cover object-top'
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Team
