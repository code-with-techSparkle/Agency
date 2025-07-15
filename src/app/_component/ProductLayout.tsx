import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface detail {
    name: string,
    project: string,
    link: string
}

const ProductLayout = ({name, project, link}: detail) => {
    return (
        <div className='w-full flex flex-col gap-1 group'>
            <div className='w-full p-4 flex justify-between bg-white rounded-lg'>
                <div className='flex items-center gap-2'>
                    <h4 className='text-lg font-semibold'>{name} /</h4>
                    <p className='text-md font-semibold text-black/50'>2025</p>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <span className='w-2 h-2 bg-black/50 group-hover:bg-red-400 max-md:bg-red-400 duration-300 rounded-full'></span>
                    <span className='w-2 h-2 bg-black/50 group-hover:bg-yellow-400 max-md:bg-yellow-400 duration-300 rounded-full'></span>
                    <span className='w-2 h-2 bg-black/50 group-hover:bg-green-400 max-md:bg-green-400  duration-300 rounded-full'></span>
                </div>
            </div>
            <Link href={link} target='_blank' className='w-full bg-white rounded-xl p-2'>
                <div className='w-full h-full relative overflow-hidden rounded-xl'>
                    <Image src={project} alt='Project-1' width={1500} height={1024} className='w-full h-[60vh] max-lg:h-[50vh] max-sm:h-[40vh] group-hover:scale-110 duration-500 rounded-xl object-cover object-top'></Image>
                    <div className='absolute top-[50%] left-[50%] -translate-[50%] z-10 group-hover:scale-75 duration-300'>
                        <h1 className='text-4xl font-semibold text-white'>{name}</h1>
                    </div>
                    <div className='absolute top-0 left-0 group-hover:backdrop-blur-md duration-300 w-full h-screen z-0'></div>
                </div>
            </Link>
        </div>
    )
}

export default ProductLayout
