import React from 'react'
import Hero from './_component/Hero'
import About from './_component/About'
import Marquee from './_component/Marquee'
import ChooseMe from './_component/ChooseMe'
import Project from './_component/Project'
import Sticky from './_component/Sticky'
import Journey from './_component/Journey'
import Team from './_component/Team'
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'
import Faq from './_component/Faq'

const page = () => {

  const regularFaqData = [
    {
      id: 1,
      question: 'What technologies do you specialize in?',
      answer:
        "I specialize in Next.js, TypeScript, Tailwind CSS, Framer Motion, and GSAP. I focus on building modern, high-performance websites with smooth animations and intuitive user experiences.",
    },
    {
      id: 2,
      question: 'Do you offer custom website development?',
      answer:
        "Yes, I create fully custom websites tailored to your needs, ensuring a unique design, fast performance, and engaging animations that enhance user experience and brand identity.",
    },
    {
      id: 3,
      question: 'Can you optimize an existing website?',
      answer:
        'Absolutely! I improve website performance, enhance animations, refine UI/UX, and ensure responsiveness. My goal is to make your website faster, smoother, and more visually appealing.',
    },
    {
      id: 4,
      question: 'What technologies do you specialize in?',
      answer:
        "I specialize in Next.js, TypeScript, Tailwind CSS, Framer Motion, and GSAP. I focus on building modern, high-performance websites with smooth animations and intuitive user experiences.",
    },
    {
      id: 5,
      question: 'Do you offer custom website development?',
      answer:
        "Yes, I create fully custom websites tailored to your needs, ensuring a unique design, fast performance, and engaging animations that enhance user experience and brand identity.",
    },
    {
      id: 6,
      question: 'Can you optimize an existing website?',
      answer:
        'Absolutely! I improve website performance, enhance animations, refine UI/UX, and ensure responsiveness. My goal is to make your website faster, smoother, and more visually appealing.',
    },
  ];


  return (
    <>
    <Navbar />
    <div className='w-full h-full sticky top-0'>
        <Hero />
    </div>
    <div className='relative bg-[#F1F1F1]'>
      <Marquee />
      <About />
      <ChooseMe />
      <Sticky />
      <Journey />
      <Project />
      <Team />
      <Faq faqInformation={regularFaqData} />
      <Footer />
    </div>
    </>
  )
}

export default page
