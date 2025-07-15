'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

interface FAQ {
  id?: number
  question: string
  answer: string
}

interface FaqProps {
  faqInformation: FAQ[]
}

const Faq: React.FC<FaqProps> = ({ faqInformation }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='w-full h-full flex max-lg:flex-col py-20 max-lg:py-10 max-md:py-0 px-24 max-lg:px-14 max-sm:px-6'>
      
      <div className='w-1/2 h-full sticky top-24 max-lg:static max-lg:mb-10 max-lg:w-full'>
        <h1 className='text-7xl font-semibold'>FAQ&apos;s</h1>
      </div>

      <div className='w-1/2 h-full max-lg:w-full'>
        <div className='w-full space-y-6'>
          {faqInformation.map((faq, index) => (
            <div key={faq.id ?? index} className=''>
              
              {/* Question */}
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                className={`cursor-pointer flex items-center justify-between py-3 px-6 rounded-full transition-colors duration-300 ${
                  openIndex === index
                    ? 'border-white border-b-2'
                    : 'border-b-2 border-[#1e1e21]'
                }`}
                onClick={() => toggleAnswer(index)}
              >
                <h3 className='text-xl font-semibold max-sm:text-base'>
                  {faq.question}
                </h3>
                <span className='text-xl bg-zinc-300 text-black flex justify-center items-center p-3 rounded-full max-sm:bg-transparent max-sm:text-white'>
                  {openIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              </motion.div>

              {/* Answer */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: openIndex === index ? 1 : 0,
                  height: openIndex === index ? 'auto' : 0,
                }}
                transition={{ duration: 0.3 }}
                className='overflow-hidden px-6 text-[#929292] py-4'
              >
                <p className='max-md:px-0'>{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq
