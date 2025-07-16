import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'


interface title{
   text: string,
   link: string
}

const Button = ({text,link}: title) => {
    return (
        <Link  href={link} className="w-fit h-fit px-10 py-6 flex items-center justify-center rounded-full border border-black relative overflow-hidden group cursor-pointer transition-all duration-300">
            <div className="absolute left-1/2 top-1/2 w-1 h-1 rounded-full bg-transparent group-hover:bg-black -translate-x-1/2 -translate-y-1/2 group-hover:scale-[60] transition-transform duration-500 ease-in-out z-0"></div>
            <div className="flex justify-center items-center gap-2 group-hover:gap-4 relative z-10 transition-all duration-300">
                <p className="text-black font-semibold text-lg group-hover:text-white transition-colors duration-300">
                    {text}
                </p>
                <FaArrowLeft className="rotate-180 text-black group-hover:text-white transition-colors duration-300" />
            </div>
        </Link>
    )
}

export default Button
