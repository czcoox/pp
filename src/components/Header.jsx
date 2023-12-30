import React from 'react'
import { useState } from 'react'
import {FaBars ,FaXmark, FaInstagram, FaGithub, FaLinkedin, FaUser, FaUserGraduate, FaHandshakeAngle } from 'react-icons/fa6'
import { FaHome, FaQuoteLeft } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { Link } from 'react-scroll'
import { useEffect, } from 'react';

const Header = () => {

  const [scrollY, setScrollY] = useState(0);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // When the scroll position is greater than 100 pixels, set header as scrolled
    if (scrollY > 100) {
      setIsHeaderScrolled(true);
    } else {
      setIsHeaderScrolled(false);
    }
  }, [scrollY]);

  const [nav, setNav] = useState(false)
  const handleNav = ()=> setNav(!nav)
  const handleClose = ()=> setNav(!nav)
  return (

    <div className="relative">
      <header className={`fixed w-full z-50 ${isHeaderScrolled ? 'bg-black/30 bg-opacity-90 backdrop-blur-md' : 'bg-transparent'}`}>
        <nav className="flex items-center justify-between px-6 py-4 max-w-[1240px] mx-auto">
          <div className='text-4xl sm:text-4xl'>
          <h1 className='font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-purple-400'><a href="/">Portfolio.</a></h1>
        </div>
        <div className='hidden lg:flex'>
        <ul className='flex justify-between gap-16 items-center text-white font-normal text-lg cursor-pointer  w-full h-10 bg-[#1f1f1f]/30 bg-opacity-90 rounded-full shadow-lg backdrop-blur-md p-6 lg:ml-32'>
        <li className='bg-clip-text hover:text-transparent bg-gradient-to-r
          from-yellow-500 to-purple-400 text-white'><a href="/">Home</a></li>
          <li><Link to='about' className='bg-clip-text hover:text-transparent bg-gradient-to-r 
          from-yellow-500 to-purple-400 text-white'smooth={true} duration={500}>About</Link></li>
          <li><Link to='portfolio' className='bg-clip-text hover:text-transparent bg-gradient-to-r from-yellow-500 to-purple-400 text-white'smooth={true} duration={500}>Portfolio</Link></li>
          <li><Link to='services' className='bg-clip-text hover:text-transparent bg-gradient-to-r from-yellow-500 to-purple-400 text-white'smooth={true} duration={500}>Services</Link></li>
        </ul>
        </div>

        <div>
          <ul className={!nav ? 'hidden' : 'absolute w-full sm:mt-9 mt-[26px] font-semibold p-10 left-0 bg-[#151515] flex flex-col text-[20px]  h-screen  gap-y-6 pt-6 mx-auto'}>
          <li className='gap-2 flex'><FaHome size={25} className='text-white' /><a onClick={handleClose} to='hero' className='bg-clip-text hover:text-transparent bg-gradient-to-r from-yellow-500 to-purple-400 text-white cursor-pointer flex gap-2' href='/'>Home</a></li>
          <hr className=' border-black'/>
          <li className='flex gap-2'><FaUser size={25} className='text-white' /><Link onClick={handleClose} to='about' className='bg-clip-text hover:text-transparent bg-gradient-to-r from-yellow-500 to-purple-400 text-white cursor-pointer'smooth={true} duration={500}>About</Link></li>
          <hr className=' border-black'/>
          <li className='flex gap-2'><FaUserGraduate size={25} className='text-white' /><Link onClick={handleClose} to='portfolio' className='bg-clip-text hover:text-transparent bg-gradient-to-r from-yellow-500 to-purple-400 text-white cursor-pointer'smooth={true} duration={500}>Portfolio</Link></li>
          <hr className=' border-black'/>
          <li className='flex gap-2'><FaHandshakeAngle size={30} className='text-white' /><Link onClick={handleClose} to='services' className='bg-clip-text hover:text-transparent bg-gradient-to-r from-yellow-500 to-purple-400 text-white cursor-pointer'smooth={true} duration={500}>Services</Link></li>
          <hr className=' border-black'/>
          <li><Link to='contact' className=' rounded-full p-[6px] px-6 bg-gradient-to-r from-yellow-500 to-purple-400 text-black font-semibold cursor-pointer'smooth={true} duration={500}>Get in touch</Link></li>
          <hr className=' border-black'/>
          </ul>
        </div>

        <div className='lg:hidden mr-2' onClick={handleNav}>
          {!nav ? <FaBars className='w-5 text-yellow-500' size={30}/> : <FaXmark className='w-5 text-yellow-500'size={30}/>}
        </div>

        <div className='justify-end hidden lg:flex'>
          <ul><li><Link to='contact' className=' rounded-full p-[6px] px-6 bg-gradient-to-r from-yellow-500 to-purple-400 text-black font-semibold cursor-pointer' smooth={true} duration={500}>Get in touch</Link></li>
          </ul>
        </div>

        </nav>
      </header>
      {/* The rest of your content */}


    </div>


    
    
  )
}

export default Header