'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
                <h1 className='text-center text-6xl font-bold'>
                    Our Mission & Our Strategy
                </h1>

                <div className='w-full h-52 overflow-hidden flex justify-center items-center'>
                    <div className='w-40 h-full rounded-2xl bg-red-700'></div>
                </div>

                <p className='text-lg text-black/50 max-w-sm font-bold text-center'>
                    Sticky is packed with features, but your conversations always come first.
                </p>
            </motion.div>
            <motion.div
                ref={gridRef}
                style={{ scale: gridScale }}
                className='w-full h-screen relative bg-black rounded-2xl mt-20 p-6 origin-top'
            >

            </motion.div>
        </div>
    );
};

export default Header;
