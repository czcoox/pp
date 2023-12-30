import React from 'react'
import Baground from '../assets/Baground.png'

const About = () => {
  return (
    <div className='w-full h-screen pt-28 bg-black/95' id='about'>
      
      <h1 className='text-4xl text-center text-[#d7e9ff] font-bold'>ABOUT ME</h1>

      <div className='h-1 w-8 justify-center rounded-full mx-auto mt-8  bg-gradient-to-r from-yellow-500 to-purple-400'></div>

      <p className="text-[#909dac] text-center max-w-[880px] py-6 mx-auto text-lg sm:text-lg mb-10 lg:text-xl font-normal">
      Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
      </p>
    
    </div>
  )
}

export default About