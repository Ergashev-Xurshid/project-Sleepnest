import React from 'react'
import { heroImg } from '../../assets'

function Hero() {
  return (
    <div className='relative hero-keyframe text-[#7a5c33] rounded-[40px] flex justify-end  pr-5 pt-[70px] lg:pb-[120px] xl:pb-[300px]'>
      <img 
        src={heroImg} 
        alt="hero img" 
        className='absolute lg:left-[-140px] xl:left-[-200px] lg:top-[-80px] xl:top-[-30px] max-w-full h-auto '
        />
      <div>
        <h1 className='font-bold lg:text-[20px] xl:text-[25px] leading-5 text-end'>Environmental</h1>
        <p className='lg:text-[35px] xl:text-[55px] font-[600] text-[#a17f4a] text-end my-[30px] leading-[30px] '>Clean Sleep</p>
        <p className='lg:text-[55px] xl:text-[95px] font-[600] text-[#a17f4a] text-end mb-[30px]  '>Products</p>
      </div>
    </div>
  )
}

export default Hero