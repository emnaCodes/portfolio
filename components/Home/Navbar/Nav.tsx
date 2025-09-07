"use client";
import React, { useEffect, useState } from 'react';
import { BiDownload } from 'react-icons/bi';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { NavLinks } from '../../../constant/constant';

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Fonction pour scroller vers la section
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`transition-all ${navBg ? 'bg-[#0f142ed9] shadow-md' : 'fixed'} duration-200 h-[12vh] z-[10000] fixed w-full`}>
      <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
        {/* LOGO */}
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 bg-auto rounded-full flex items-center justify-center'>
            <img src="/images/logo.png" alt="Logo" className='w-8 h-8 object-contain' />
          </div>
        </div>

        {/* navLinks */}
        <div className='hidden lg:flex items-center space-x-10'>
          {NavLinks.map((link) => (
            <p
              key={link.id}
              onClick={() => handleScroll(link.url.replace("#", ""))}
              className="cursor-pointer text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
            >
              {link.label}
            </p>
          ))}
        </div>

        {/* Buttons */}
        <div className='flex items-center space-x-4'>
          {/* CV button */}
          <button
    className='px-4 py-2 text-sm font-medium cursor-pointer rounded-md transition-all duration-200 hover:text-cyan-300 text-white flex items-center space-x-1.5 shadow-sm hover:shadow-md'
>
  <BiDownload className='w-4 h-4' />
  <a
    href="/cv.pdf"
    download
    className="flex items-center"
  >
    <span>CV</span>
  </a>
</button>

          {/* Burger Menu */}
          <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
        </div>
      </div>
    </div>
  );
};

export default Nav;
