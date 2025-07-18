'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const Header = () => {
    const containerRef = useRef(null);
    const gridRef = useRef(null);
    const { scrollYProgress: stickyProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const stickyOpacity = useTransform(stickyProgress, [0, 1], [1, 0]);
    const stickyScale = useTransform(stickyProgress, [0, 1], [1, 0.5]);
    const { scrollYProgress: gridProgress } = useScroll({
        target: gridRef,
        offset: ['start end', 'center center'],
    });

    const gridScale = useTransform(gridProgress, [0, 1], [0.8, 1]);

    return (
        <div
            ref={containerRef}
            className='w-full h-full px-24 max-lg:px-14 max-sm:px-6 py-24 bg-white'
        >
            <motion.div
                style={{ opacity: stickyOpacity, scale: stickyScale }}
                className='sticky top-0 h-screen flex flex-col justify-center items-center gap-6'
            >
                <h1 className='text-center text-6xl max-lg:text-4xl max-md:text-3xl font-bold'>
                    Our Mission & Our Strategy
                </h1>

                <div className='w-full h-52 overflow-hidden flex justify-center items-center'>
                    <div className='w-40 h-full rounded-2xl overflow-hidden'>
                        <Image src='https://ik.imagekit.io/qss3mmw4a/Agency/women-3.avif?updatedAt=1752836476178' alt='Misiion' width={1000} height={1000}></Image>
                    </div>
                </div>

                <p className='text-lg text-black/50 max-w-sm font-bold text-center'>
                    This is Wesite for My Portfolio.I&apos;m web developer.
                </p>
            </motion.div>
            <motion.div
                ref={gridRef}
                style={{ scale: gridScale }}
                className='w-full h-screen relative bg-black text-white flex flex-col justify-start items-start rounded-2xl mt-20 p-6'
            >
                <div className='w-full h-full flex max-xl:flex-col justify-start items-start max-xl:gap-5'>
                    <div className='flex justify-start items-center gap-2 w-[30%] max-xl:w-full'>
                        <span className='w-2 h-2 rounded-full bg-white'></span>
                        <p>Our Mssion</p>
                    </div>
                    <p className='text-5xl font-semibold w-[70%] max-lg:text-4xl max-md:text-3xl max-sm:text-2xl max-xl:w-full'>We believe design should be bold, purposeful, and impactful. Our mission is to help brands break through the noise with visuals that tell a story, engage audiences, and leave a lasting impression.</p>
                </div>
                <div className='w-full h-full bg-white/10 rounded-2xl overflow-hidden'>
                  <Image src='https://ik.imagekit.io/qss3mmw4a/Agency/h61nQzBXhG9RjrgFjCdPFcsGVE.avif?updatedAt=1752658958855' alt='Image' width={1000} height={1000} className='w-full h-full object-center object-cover'></Image>
                </div>
            </motion.div>
        </div>
    );
};

export default Header;
