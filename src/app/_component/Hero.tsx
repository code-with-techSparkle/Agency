'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { GoPlus } from "react-icons/go";

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden bg-gray-100 z-0">
        <Image
          src="https://ik.imagekit.io/qss3mmw4a/Agency/pawel-czerwinski-tt2oZzLB1h8-unsplash.jpg?updatedAt=1752590240079"
          alt="Portrait"
          width={2560}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover object-top"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "/hero-bg.png";
          }}
        />
        <div className="absolute inset-0 bg-black/5"></div>
        <main className="relative z-10 flex flex-col items-center justify-end max-sm:justify-center h-full text-center py-7 px-6 md:px-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-4"
          >
            <motion.div initial={{ rotate: -360 }} whileHover={{ rotate: 180 }} transition={{ duration: 2, ease: "easeInOut" }} className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center cursor-pointer">
              <GoPlus className="size-7 text-white" />
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="text-white text-4xl max-lg:text-3xl max-sm:text-xl font-semibold tracking-wide mb-2"
          >
            Crafting Digital Worlds
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="text-white text-[180px] font-extrabold leading-[1] uppercase flex items-center justify-center select-none max-w-full flex-wrap"
            style={{ gap: '0.5rem' }}
          >
            <h1 className="flex items-center text-center uppercase font-bold text-white leading-tight space-x-7 max-sm:space-x-4">
              <span className="flex justify-center items-center gap-9">
                <span className="text-[clamp(3rem,12vw,12rem)]">Beyond Design</span>
              </span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
            className="mt-2 text-5xl max-lg:text-4xl max-sm:text-2xl italic font-serif text-[#FFE4AE] select-none"
          >
            & Code
          </motion.p>
        </main>
      </div>
    </>
  );
}