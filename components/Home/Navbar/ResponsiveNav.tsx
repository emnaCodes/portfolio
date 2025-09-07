"use client";

import Nav from './Nav'
import MobileNav from './MobileNav'
import React, {useState } from 'react'

const ResponsiveNav = () => {
    const [showNav, setshowNav] = useState(false);
    
    const openNavHandler = () => setshowNav(true);
    const closeNavHandler = () => setshowNav(false);


  return (
    <div>
        <Nav openNav={openNavHandler} />
        <MobileNav showNav={showNav} closeNav={closeNavHandler}/>
    </div>
  )
}

export default ResponsiveNav