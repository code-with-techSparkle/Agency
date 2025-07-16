import React from 'react'
import Hero from './_component/Hero'
import About from './_component/About'
import Marquee from './_component/Marquee'
import ChooseMe from './_component/ChooseMe'
import Project from './_component/Project'
import Sticky from './_component/Sticky'
import Journey from './_component/Journey'
import Team from './_component/Team'
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
      question: 'Do you build both code and no-code websites?',
      answer:
        "Yes! We offer custom-coded websites using frameworks like Next.js, as well as no-code builds using Framer for fast, flexible delivery.",
    },
    {
      id: 5,
      question: 'Which is better: code or no-code?',
      answer:
        "It depends on your needs. Code offers full control and scalability; no-code is faster and ideal for simpler projects or marketing sites.",
    },
    {
      id: 6,
      question: 'How long does a typical website project take?',
      answer:
        'Most projects take 1-3 weeks, depending on complexity, features, and feedback speed.',
    },
  ];


  return (
    <>
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
    </div>
    </>
  )
}

export default page
