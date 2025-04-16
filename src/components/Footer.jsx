import React from 'react'
import { logo } from '../assets'
import { headerLinks } from '../utils/constant'

function Footer() {
  return (
    <section>
      <div className='flex  justify-between gap-[20px] pb-[100px] w-full max-w-[1450px] mx-auto px-4 lg:px-[20px]  pt-[100px]'>
        <div className='w-[30%]'>
          <a href="#" className='cursor-pointer w-[70%] inline-block'>
            <img src={logo} alt="Company Logo" className='w-full h-auto' />
          </a>
          <p className='font-[400] mt-[30px] text-[#908d8ddd]'>Ecological Clean Sleep Products is a company that produces cotton fabrics for use all over the world for many years.</p>
        </div>
        <ul>
          <h3 className='text-[1.5em] font-bold my-5'>menu</h3>
          {headerLinks.map((item, idx) => (
            <li
              key={idx}
              className={`mt-[10px] cursor-pointer`}>
              <a className={`
              transition-all duration-300 
              font-normal text-[16px] text-[#00000098] py-[5px] px-2 
              hover:text-[red] `}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <ul className='cursor-pointer'>
          <h3 className='text-[1.5em] font-bold my-5'>Contacts</h3>
          <li className='mb-[10px] text-[14px] text-[#4e4e4e]'>Bukhara, st. Alpomish 80</li>
          <li className='mb-[10px] text-[14px] text-[#4e4e4e]'>Email: sleepnest@gamil.com</li>
          <li className='mb-[10px] text-[14px] text-[#4e4e4e]'>Telegram: sleepnest</li>
          <li className='mb-[10px] text-[14px] text-[#4e4e4e]'>+998 94 033 72 12
          </li>
        </ul>
        <div className='w-[35%]'>
          <h3 className='text-[1.5em] font-bold my-5'>Subscribe to our email</h3>
          <form className='flex justify-between border p-2 pl-4 rounded-[20px] border-[#555353]'>
            <input
              className='outline-none'
              type="email"
              placeholder='Subscribe to our email' />
            <button className='bg-[red] p-[15px] text-white text-[14px] font-[400] hover:bg-[black] cursor-pointer transition-all duration-200 rounded-[20px]'>Subscribe</button>
          </form>
          <p className='mt-[40px] text-[14px] text-[#4e4e4e] '>Select at least one list.</p>
        </div>
      </div>
      <div className='bg-black py-5 mx-auto px-4 lg:px-[40px]'>
        <p className='text-[14px] text-[#545454]'> © 2024 Ecological Clean Sleep Products LLC All rights reserved.</p>
      </div>
    </section>
  )
}

export default Footer