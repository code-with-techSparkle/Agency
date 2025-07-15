'use client'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false)
      onComplete()
    }, 4000) // 4s loader
    return () => clearTimeout(timeout)
  }, [onComplete])

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="fixed inset-0 bg-[#0e0e0e] z-[999] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Floating Images */}
          <motion.div
            initial={{ y: 300, rotate: -45, scale: 0.5 }}
            animate={{ y: 0, rotate: 15, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute bottom-10 left-[20%]"
          >
            <Image src="/img1.png" alt="img1" width={80} height={80} className="rounded-xl" />
          </motion.div>

          <motion.div
            initial={{ y: 400, rotate: 60, scale: 0.8 }}
            animate={{ y: 0, rotate: -10, scale: 1.1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute bottom-16 left-[50%]"
          >
            <Image src="/img2.png" alt="img2" width={100} height={100} className="rounded-xl" />
          </motion.div>

          <motion.div
            initial={{ y: 350, rotate: -30, scale: 0.7 }}
            animate={{ y: 0, rotate: 30, scale: 1 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="absolute bottom-8 right-[20%]"
          >
            <Image src="/img3.png" alt="img3" width={70} height={70} className="rounded-xl" />
          </motion.div>

          {/* Main Image Scaling Up */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.8, duration: 1.5, ease: 'easeInOut' }}
            className="z-10"
          >
            <Image src="/main.png" alt="Main Logo" width={160} height={160} className="rounded-2xl shadow-2xl" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
