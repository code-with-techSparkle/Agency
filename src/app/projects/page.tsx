import React from 'react'
import Header from './_component/Header'
import HorizontalScroll from './_component/HorizontalScroll'
import Project from '../_component/Project'

const page = () => {
  return (
    <div className='w-full h-full bg-[#F1F1F1]'>
      <Header />
      <HorizontalScroll />
      <Project />
    </div>
  )
}

export default page
