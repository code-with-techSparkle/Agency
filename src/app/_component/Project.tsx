
import ProductLayout from './ProductLayout'
import Button from '../../../component/Button'

const Project = () => {
    return (
        <div className='w-full h-full py-20 max-lg:py-10 max-sm:py-7 px-24 max-lg:px-14 max-sm:px-6'>
            <div className='w-full h-full flex flex-col gap-10 max-md:justify-start max-md:items-start max-md:gap-5 justify-center items-center overflow-hidden'>
                <h1 className='text-9xl font-semibold  text-wrap max-lg:text-7xl max-md:text-5xl'>Projects</h1>
                <p className='text-lg text-black/50 font-semibold'>We&apos;ve helped businesses across industries achieve their goals. Here are some of our recent projects.</p>
            </div>
            <div className='w-full h-full grid grid-cols-2 gap-1 max-lg:grid-cols-1 pt-10'>
                <ProductLayout name='Barc*' project='https://ik.imagekit.io/qss3mmw4a/Agency/website-6.png?updatedAt=1752592398298' link='https://advanceclasses.framer.website/' />
                <ProductLayout name='Designer' project='https://ik.imagekit.io/qss3mmw4a/Agency/website-4.png?updatedAt=1752592398359' link='https://designer.prodigi-studios.com/' />
                <ProductLayout name='Xales' project='https://ik.imagekit.io/qss3mmw4a/Agency/website-7.png?updatedAt=1752592397152' link='https://xales.prodigi-studios.com/' />
                <ProductLayout name='Other Portfolio' project='https://ik.imagekit.io/qss3mmw4a/Agency/website-8.png?updatedAt=1752592396814' link='https://tuaha.vercel.app/' />
                <ProductLayout name='Gymlytic' project='https://ik.imagekit.io/qss3mmw4a/Agency/website-2.png?updatedAt=1752592398311' link='https://gymlytic.prodigi-studios.com/' />
                <ProductLayout name='E-commerce' project='https://ik.imagekit.io/qss3mmw4a/Agency/website-3.png?updatedAt=1752592397921' link='https://saadshopifyweb.vercel.app/' />
            </div>
            <div className='w-full h-full flex justify-center items-center pt-10'>
                <Button text='View Projects' link='/projects' />
            </div>
        </div>
    )
}

export default Project
