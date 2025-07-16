"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const x = useTransform(smoothProgress, [0, 1], ["10%", "-100%"]);

  const data = [
     {
      title: "Startups & Entrepreneurs",
      description: "I build scalable, high-performance websites with modern design, smooth animations, and interactive experiences to establish a strong online presence.",
      num: "01"
     },
     
     {
      title: "Businesses & Agencies",
      description: " I create professional, responsive websites that enhance brand identity, improve customer engagement, and ensure seamless user experiences across all devices.",
      num: "02"
     },
     
     {
      title: "E-commerce Brands",
      description: "I develop fast, user-friendly online stores with optimized performance, smooth animations, and intuitive navigation to boost conversions and sales.",
      num: "03"
     },
     
     {
      title: "Designers & Creatives",
      description: " I transform static designs into fully functional, interactive websites with pixel-perfect precision, animations, and engaging user experiences. ",
      num: "04"
     },
     
     {
      title: "Personal Brands ",
      description: " I craft custom portfolio websites that effectively showcase work, achievements, and services with sleek design, immersive animations, and modern aesthetics.",
      num: "05"
     },

  ]

  return (
    <section
      ref={containerRef}
      className="h-[200vh] font-sans font-medium w-full relative max-xl:h-[400vh] max-md:h-[600vh] max-sm:h-[800vh] px-24 max-lg:px-14 max-sm:px-6"
    >
      <div className="sticky top-32 h-screen w-full flex items-center overflow-hidden">    
        <motion.div 
          style={{ x }}
          ref={scrollContainerRef}
          className="flex ml-52 gap-10 h-full items-center px-4 will-change-transform w-[max-content]"
        >
          {data.map((l , i) => (
            <motion.div
              key={i}
              className="w-[500px] max-sm:w-[300px] h-[450px] max-sm:h-[450px] border overflow-hidden border-black rounded-3xl flex flex-col p-10 text-black gap-10 font-bold backdrop-blur-lg"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true, margin: "0px 0px -30% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h2 className={`text-4xl font-normal max-sm:text-wrap max-sm:text-xl ${i === 2 ? "text-wrap" : "text-nowrap"}`}>{l.title}</h2>
              <p className={`text-xl font-normal h-48 max-sm:h-full overflow-hidden max-sm:my-0 ${i === 2 ? "my-2" : "my-4"}`}>{l.description}</p>
              <h1 className="font-medium text-9xl max-sm:text-4xl">{l.num}</h1>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;