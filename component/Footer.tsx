'use client'

import React from 'react'
import { motion, Variants, Transition } from 'framer-motion'
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1], 
    } as Transition,
  }),
}

export default function Footer() {
  return (
    <div
      className='relative h-[800px]'
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className='relative h-[calc(100vh+800px)] -top-[100vh]'>
        <div className='h-[800px] sticky top-[calc(100vh-800px)]'>
          <div className='bg-[#1F1F26] pt-32 max-sm:pt-40 pb-16 px-12 max-md:px-4 h-full w-full flex flex-col justify-between text-white'>
            <motion.div
              className='flex flex-wrap gap-20'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  heading: "Pages",
                  links: ["Home", "Projects", "Our Mission", "Contact Us"]
                },
                {
                  heading: "Technologies",
                  links: ["Next.js", "React,js", "Tailwind css", "Framer motion"]
                },
                {
                  heading: "No code",
                  links: ["Framer website's", "Modern Design", "Advance Animation's", "Responsive"]
                }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  className='flex flex-col gap-2 min-w-[150px] max-md:min-w-full'
                  variants={fadeUp}
                  custom={index}
                >
                  <h3 className='mb-2 uppercase text-[#ffffff80] text-sm tracking-wider'>
                    {section.heading}
                  </h3>

                  {section.links.map((link, i) => (
                    <motion.div
                      key={i}
                      className="relative w-fit cursor-pointer group overflow-hidden"
                      variants={fadeUp}
                      custom={index + i + 1}
                    >
                      <p className="transition-colors duration-300 group-hover:text-white/80">
                        {link}
                      </p>
                      <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </motion.div>

            {/* Footer Bottom */}
            <div className='flex justify-between items-end mt-20 flex-wrap gap-6'>
              <motion.h1
                className='text-[10vw] leading-[0.85] font-bold text-white/10 uppercase'
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                Tuaha Athar
              </motion.h1>
              <motion.p
                className='text-sm text-white/60'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                © {new Date().getFullYear()} M.Tuaha. All rights reserved.
              </motion.p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
