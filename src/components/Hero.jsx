import React from 'react'
import { Link } from 'react-scroll'
import {motion} from 'framer-motion'
import { TypeAnimation } from "react-type-animation";
import Baground from '../assets/Baground.png'
import {FaAngleDown} from 'react-icons/fa6'

import {FaInstagram, FaGithub, FaLinkedin, FaUser } from 'react-icons/fa6'

const Hero = () => {
  return (

    <div className="relative " id='hero'>
      <img
        src={Baground}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10">
      <div className='w-full h-screen py-24 sm:py-48  px-4 backdrop-blur-md bg-black/50'>
      <div className='max-w-[1240px]  mx-auto grid md:grid-cols-1'>
        <div className='flex flex-col '>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center py-8 justify-self-start leading-normal mx-auto"
        >
          <h1 className=" text-[#d7e9ff] mb-6  text-5xl md:text-6xl lg:text-6xl lg:leading-normal leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-purple-400     text-5xl md:text-6xl  lg:text-6xl lg:leading-normal font-extrabold">HELLO, I&apos;M{" "}
          </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "VISHAL",
                1000,
                "WEB DEVELOPER",
                1000,
                "MOBILE DEVELOPER",
                1000,
                "UI/UX DESIGNER",
                1000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#909dac] text-center max-w-[800px] mx-auto text-lg sm:text-lg mb-10 lg:text-xl font-semibold">
          A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit  rounded-full mr-4 bg-gradient-to-br from-yellow-500 to-purple-400 hover:bg-slate-200 text-black font-medium"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-yellow-500 to-purple-400 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#262525] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>

          <div className=' py-36'>
          <FaAngleDown size={30} className='text-white  w-full mx-auto animate-bounce  '/>
          </div>
        </motion.div>
        <div className='absolute text-[#909dac] top-[35%] translate-y[-50%] p-[0.5rem]  bg-[#393838]/30 backdrop-blur-md bg-opacity-90 rounded-sm shadow-xl left-0 hidden lg:block'>
              <a href="#"><FaLinkedin size={50} className='p-2'/></a>
              <a href="#"><FaInstagram size={50}className='p-2'/></a>
              <a href="#"><FaGithub size={50}className='p-2'/></a>
              <a href="#"><FaInstagram size={50}className='p-2'/></a>
              <a href="#"><FaUser size={50}className='p-2'/></a>
          </div>
        </div>

      </div>
    </div>
      </div>
    </div>

    // <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url('/Prac/src/assets/Baground.png')` }}>
      
    // </div>
  )
}

export default Hero