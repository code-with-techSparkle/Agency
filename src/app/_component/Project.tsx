import ProductLayout from './ProductLayout'

const Project = () => {
    return (
        <div className='w-full h-full py-20 max-lg:py-10 max-sm:py-7 px-24 max-lg:px-14 max-sm:px-6'>
            <div className='w-full h-full flex flex-wrap max-md:flex-col max-md:justify-start max-md:items-start max-md:gap-5 justify-between items-center overflow-hidden'>
                <p className='text-black/50 font-semibold text-lg w-1/4'>(27)</p>
                <div className='flex flex-col'>
                    <h1 className='text-9xl font-semibold leading-[1] tracking-tight text-wrap max-lg:text-7xl max-md:text-5xl'>Projects.</h1>
                    <span className='text-7xl leading-[1] font-semibold max-lg:text-5xl max-md:text-3xl'>2025</span>
                </div>
                <p className='text-lg text-black/50 font-semibold w-1/4 max-xl:w-full'>We&apos;ve helped businesses across industries achieve their goals. Here are some of our recent projects.</p>
            </div>
            <div className='w-full h-full grid grid-cols-2 gap-1 max-lg:grid-cols-1 pt-10'>
                <ProductLayout />
                <ProductLayout />
                <ProductLayout />
                <ProductLayout />
                <ProductLayout />
                <ProductLayout />
            </div>
        </div>
    )
}

export default Project
