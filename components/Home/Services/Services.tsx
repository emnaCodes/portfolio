import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='pt-16 pb-16'>
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white '>
        hellooooo <br /> my servicessss <br /> wooooooow
      </h1>
      <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center'>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
            <ServiceCard  
            icon='/images/emna.jpg' 
            name='UI and UX'
            description='Designing interfaces that are intuitive ect..'   />
        </div>

        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
            <ServiceCard  
            icon='/images/emna.jpg' 
            name='Web and Mobile '
            description='Designing interfaces that are intuitive ect..'   />
        </div>

        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
            <ServiceCard  
            icon='/images/emna.jpg' 
            name='Design & creative'
            description='Designing interfaces that are intuitive ect..'   />
        </div>

        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
            <ServiceCard  
            icon='/images/emna.jpg' 
            name='Development'
            description='Designing interfaces that are intuitive ect..'   />
        </div>

      </div>
    </div>
  )
}

export default Services
