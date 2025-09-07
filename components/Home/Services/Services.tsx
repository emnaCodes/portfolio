import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div id="services" className='pt-16 pb-16'>
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white '>
        Passionate about collaborating 
        <br />with brands and agencies to 
        <br />craft meaningful and result-driven solutions
      </h1>
      <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center'>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
            <ServiceCard  
              icon='/images/s1.png' 
              name='UI and UX'
              description='Crafting user-friendly and visually appealing interfaces that enhance usability, efficiency, and user satisfaction.'
            />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
            <ServiceCard  
              icon='/images/s2.png' 
              name='Web and Mobile App'
              description='Building responsive and scalable web and mobile applications tailored to deliver seamless digital experiences.'
            />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
            <ServiceCard  
              icon='/images/s4.png' 
              name='Design & creative'
              description='Transforming ideas into creative visuals and designs that effectively communicate your brand’s identity.'
            />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
            <ServiceCard  
              icon='/images/s3.png' 
              name='Development'
              description='Developing robust, high-performance solutions with clean code and modern technologies to meet business needs.'
            />
        </div>
      </div>
    </div>
  )
}

export default Services
