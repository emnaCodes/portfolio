import React from 'react'
import Image from 'next/image'


const Projects = () => {
  return (
    <div id="works"className='pt-16 pb-16'>
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
        A small selection of recent <br /> <span className='text-cyan-300'> projects</span>
      </h1>
      <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
        {/* 1st one    */}
        <div 
        data-aos="fade-up" 
        data-aos-anchor-placement="top-center" 
        >
            <Image 
            src='/images/p1.png' 
            alt='img' 
            width={800} 
            height={650} 
            className='rounded-lg'
            />
            <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                Goal Management Application
            </h1>
            <h1 className='pt-2 font-medium text-white/80 '>
            APython</h1>

        </div>

        {/* 2nd one    */}
        <div
        data-aos="fade-up" 
        data-aos-anchor-placement="top-center" 
        data-aos-delay="100">
            <Image 
            src='/images/p2.png' 
            alt='img' 
            width={800} 
            height={650} 
            className='rounded-lg'
            />
            <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                Billing Management System 
            </h1>
            <h1 className='pt-2 font-medium text-white/80 '>
            Spring & Angular</h1>

        </div>

        {/* 3rd one    */}
        <div 
        data-aos="fade-up" 
        data-aos-anchor-placement="top-center" 
        data-aos-delay="200">
            <Image 
            src='/images/p3.jpg' 
            alt='img' 
            width={800} 
            height={650} 
            className='rounded-lg'
            />
            <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                Medical Records Management – Web & Desktop App
            </h1>
            <h1 className='pt-2 font-medium text-white/80 '>
            Symfony & JavaFx
            </h1>
        </div>
      </div>

    </div>
  )
}

export default Projects
