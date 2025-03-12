import React from 'react'
import { assets } from '../assets/assets' // Ensure arrow image is correctly imported

const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-black text-white h-screen'>
      <div className='text-center flex flex-col gap-4 '>
        <img src={assets.MUZZ} alt="" className='ml-60 w-52 h-52 rounded-full' />
        <p className='text-4xl font-bold'>
          Hello, I'm <br />
          <span className='text-blue-500 text-6xl'>Mukesh Sardiwal</span>
        </p>
        <p className='text-gray-400 mt-4'>
          Software developer crafting exceptional digital experiences and accessible, human-centered products.
        </p>
        <div className='flex justify-center'>

        <button className='flex flex-row justify-center bg-white text-black rounded-full items-center gap-2 px-4 py-2 font-semibold mt-6'>
          <a href="https://github.com/mukeshsardiwal" target='_blank' rel='noopener noreferrer'>View My Work </a>
          <img src={assets.arrow} className='w-4 h-4' alt="arrow" />
        </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
