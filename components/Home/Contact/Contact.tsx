import Link from 'next/link';
import React from 'react';
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi';
import { FaFacebook, FaInstagram, FaLinkedin  } from 'react-icons/fa';
import 'aos/dist/aos.css'; 

const Contact = () => {
  return (
    <div id="contact" className='pt-16 pb-16'>
      <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        {/* text content */}
        <div>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200'>
            Schedule a call with me to see if I can help
          </h1>
          <p className='text-gray-400 mt-6 text-base sm:text-lg'>
            Reach out to me today and let&aposs discuss how I can help you achieve your goals.
            <br /> EVERY TIMEE!
          </p>
          {/* INFO */}
          <div className='mt-7'>
            <div className='flex items-center space-x-3 mb-4'>
              <BiPhone className='w-9 h-9 text-cyan-300' />
              <p className='text-xl font-bold text-gray-400'>+(216)90-181-394</p>
            </div>
            <div className='flex items-center space-x-3 mb-4'>
              <BiEnvelope className='w-9 h-9 text-cyan-300' />
              <p className='text-xl font-bold text-gray-400'>emna68215@gmail.com</p>
            </div>
            <div className='flex items-center space-x-3 mb-4'>
              <BiMap className='w-9 h-9 text-cyan-300' />
              <p className='text-xl font-bold text-gray-400'>Tunis, Tunisia</p>
            </div>
          </div>
          {/* SOCIAL ICONS */}
          {/* SOCIAL ICONS */}
<div className='flex items-center mt-8 space-x-3'>
  {/* Facebook */}
  <a
    href="https://www.facebook.com//trabelsi.emna12" // Remplace par ton lien
    target="_blank"
    rel="noopener noreferrer"
    className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-all duration-300'
  >
    <FaFacebook className='text-white w-6 h-6' />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/emna-trabelsi-b46194223" // Remplace par ton lien
    target="_blank"
    rel="noopener noreferrer"
    className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-all duration-300'
  >
    <FaLinkedin className='text-white w-6 h-6' /> {/* Remplacer l’icône par LinkedIn */}
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/trabelsi.emna12/#" // Remplace par ton lien
    target="_blank"
    rel="noopener noreferrer"
    className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-500 transition-all duration-300'
  >
    <FaInstagram className='text-white w-6 h-6' />
  </a>
</div>

        </div>
        {/* FORM
        <form action={sendContactEmail}>
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            className='md:p-10 p-5 bg-[#131332] rounded-lg'
          >
            <input
              type="text"
              name="name"
              placeholder='Name'
              className='px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white'
            />
            <input
              type="email"
              name="email"
              placeholder='Email address'
              className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
            />
            <input
              type="number"
              name="mobile"
              placeholder='Mobile Number'
              className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
            />
            <textarea
              name="message"
              placeholder='Your Message'
              className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]'
            ></textarea>
            <button
              type="submit"
              className='mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full'
            >
              Send Message
            </button>
          </div>
        </form> */}

        {/* Replaced Form with Link */}
        <div
  data-aos="zoom-in"
  className='p-5 rounded-lg flex items-center justify-center min-h-[200px] w-full'
>
  <Link
    href="https://linktr.ee/trabelsi.emna"
    target="_blank"
    rel="noopener noreferrer"
    className='px-8 py-3 bg-cyan-700 hover:bg-cyan-900 text-white font-medium text-base rounded-full transition-all duration-300 cursor-pointer text-center'
  >
    Contact Me
  </Link>
</div>
      </div>
    </div>
  );
};

export default Contact;