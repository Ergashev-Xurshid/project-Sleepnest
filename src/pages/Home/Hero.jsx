import React from 'react'
import { heroImg } from '../../assets'
import { heroIcons } from '../../utils/constant'

function Hero() {
  return (
    <div>
      <div className=' relative hero-keyframe text-[#7a5c33] rounded-[40px] flex justify-end pr-5 pt-[70px] 
      pb-[60px]  md:pb-[100px] lg:pb-[120px] xl:pb-[300px] '>
        <div
          className="block md:hidden w-full h-[300px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImg})` }}></div>
        <img
          src={heroImg}
          alt="hero img"
          className='
          hidden md:inline-block
          absolute max-w-full h-auto z-1
          md:left-[-140px]  md:top-[-10px] 
          lg:left-[-140px]  lg:top-[-80px] 
          xl:left-[-200px]  xl:top-[-30px] '
        />
        <div className='absolute  max-md:left-[40%] max-md:top-30  md:relative max-md:z-2'>
          <h1 className='sm:text-[20px] md:text-[20px] xl:text-[25px] font-bold leading-5 text-end'>Environmental</h1>
          <p className='text-[25px] sm:text-[30px] md:text-[35px] xl:text-[55px] font-[600] text-[#a17f4a] text-end sm:my-[30px] leading-[30px] '>Clean Sleep</p>
          <p className='text-[35px] sm:text-[40px] md:text-[55px] xl:text-[95px] font-[600] text-[#a17f4a] text-end sm:mb-[30px]  '>Products</p>
        </div>
      </div>
      <div className='pt-[100px]'>
        <ul className='grid grid-cols-2 md:grid-cols-4 items-center gap-[30px]'>
          {heroIcons.map((item,idn)=> (
            <li key={idn} className='cursor-pointer flex flex-col xl:flex-row max-xl:justify-center items-center gap-5'>
              <img className='max-w-full h-[50px]' src={item.img} alt={item.title} />
              <div>
                <h3 className='max-xl:text-center   text-[16px] font-bold'>{item.title}</h3>
                <p className='max-xl:text-center   text-[14px] font-medium text-[#aaa] my-[14px] max-w-[250px] '>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Hero