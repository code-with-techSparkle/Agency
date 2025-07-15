import ProductLayout from './ProductLayout'

const Project = () => {
    return (
        <div className='w-full h-full py-20 max-lg:py-10 max-sm:py-7 px-24 max-lg:px-14 max-sm:px-6'>
            <div className='w-full h-full flex flex-col gap-10 max-md:justify-start max-md:items-start max-md:gap-5 justify-center items-center overflow-hidden'>
                <h1 className='text-9xl font-semibold  text-wrap max-lg:text-7xl max-md:text-5xl'>Projects</h1>
                <p className='text-lg text-black/50 font-semibold'>We&apos;ve helped businesses across industries achieve their goals. Here are some of our recent projects.</p>
            </div>
            <div className='w-full h-full grid grid-cols-2 gap-1 max-lg:grid-cols-1 pt-10'>
                <ProductLayout name='Barc*' project='https://ik.imagekit.io/qss3mmw4a/Agency/website-10?updatedAt=1752587317043' />
                <ProductLayout name='Designer' project='https://ik.imagekit.io/qss3mmw4a/Agency/website-3?updatedAt=1752587141205' />
                <ProductLayout name='Xales' project='https://ik.imagekit.io/qss3mmw4a/Agency/website-5?updatedAt=1752587168603' />
                <ProductLayout name='Other Portfolio' project='https://ik.imagekit.io/qss3mmw4a/Agency/website-1?updatedAt=1752587110754' />
                <ProductLayout name='Gymlytic' project='https://ik.imagekit.io/qss3mmw4a/Agency/website-8?updatedAt=1752587268469' />
                <ProductLayout name='E-commerce' project='https://ik.imagekit.io/qss3mmw4a/Agency/website-7?updatedAt=1752587238394' />
            </div>
        </div>
    )
}

export default Project
