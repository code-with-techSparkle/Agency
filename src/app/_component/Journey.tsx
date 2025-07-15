'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function Journey() {

    const experience = [
        {
            date: "May 2021 - March 2023",
            title: "How It All Started",
            about: "Started from HTML, CSS and JAVASCRIPT",
            description: "My passion for web development began with a deep curiosity for how websites function. I started exploring HTML, CSS, and JavaScript, experimenting with small projects that sparked my love for coding."
        },

        {
            date: "April 2023 - November 2023",
            title: "Exploring Advanced Web Technologies",
            about: "Practise Advanced languages",
            description: "As I gained experience, I discovered the power of frameworks like React and Next.js. Learning TypeScript and Tailwind CSS allowed me to build scalable, efficient, and visually appealing applications with clean code."
        },

        {
            date: "December 2023 - July 2024",
            title: "Technical Growth - Animations",
            about: "Animations",
            description: "I've always been fascinated by motion and user experience. Mastering Framer Motion and GSAP helped me create engaging, smooth, and dynamic web experiences that elevate UI/UX to the next level."
        },

        {
            date: "July 2024 - December 2024",
            title: "Building Real-World Projects",
            about: "Build Projects",
            description: "From personal projects to client work, I've developed websites that blend aesthetics with functionality. My focus is always on performance, responsiveness, and delivering seamless interactions that captivate users."
        },

        {
            date: "january 2025 - Present",
            title: "What's Next?",
            about: "Future Plan",
            description: "I continue to push my skills forward, staying updated with the latest technologies and trends. My goal is to keep creating innovative, high-performance web experiences that leave a lasting impact."
        },

    ]

    return (
        <div className='w-full font-sans font-medium text-black px-24 max-lg:px-14 max-sm:px-6 py-10 max-md:py-0'>
            <div className='w-full flex border-b-2 border-black max-lg:flex-col'>
                <div className='w-[40%] max-lg:w-full pb-36 max-lg:pb-16 max-sm:pb-10'>
                    <div className='sticky top-10'>
                        <div className='flex justify-start items-center gap-3 pb-6 text-2xl max-md:text-lg'>
                            <span className='w-3 h-3 bg-black rounded-full'></span>
                            <h1>Journey</h1>
                        </div>
                        <h2 className='text-7xl tracking-[2px] max-2xl:text-6xl max-lg:text-5xl max-md:text-4xl'>MY CAREER JOURNEY</h2>
                    </div>
                </div>
                <div className='w-[60%] sticky pl-16 max-lg:w-full max-lg:pl-0'>
                    {experience.map((l, i) => {
                        return (
                            <div key={i} className='pt-7'>
                                <div className='relative overflow-auto w-full h-[3px] bg-[#929292] mb-5 rounded-full'>
                                    <motion.div initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ margin: "0px 0px -50% 0px", once: false }}
                                        transition={{ duration: 1, ease: "easeInOut" }} className='absolute h-full bg-black rounded-full'></motion.div>
                                </div>
                                <div className='flex justify-start items-center font-normal text-2xl max-sm:text-lg gap-3'>
                                    <span className='w-3 h-3 rounded-full bg-black'></span>
                                    <h1>{l.date}</h1>
                                </div>
                                <h1 className='text-6xl mt-16 max-lg:text-4xl max-sm:text-3xl'>{l.title}</h1>
                                <p className='text-2xl font-normal mt-4 mb-7 max-lg:text-xl max-sm:text-sm'>{l.about}</p>
                                <p className='text-2xl font-normal mt-4 pb-36 max-md:pb-16 max-lg:text-xl'>{l.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}