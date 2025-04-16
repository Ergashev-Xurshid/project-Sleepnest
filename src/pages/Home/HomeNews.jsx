import React from 'react'
import { newsItems } from '../../utils/constant'

function HomeNews() {
  return (
    <div className='pb-[100px]'>
      <h1 className='text-[35px] font-bold text-center my-[40px]'>News</h1>
      <p className='text-[16px] text-center text-[#a5a1a1] mb-[70px]'>Ecologically Clean Sleep Products</p>
      <ul className='grid grid-cols-3 gap-[20px]'>
        {newsItems.map((item , idx )=> (
          <li key={idx}>
            <div className='rounded-[20px] w-[85%] h-auto overflow-hidden'>
              <img className='w-full h-full' src={item.img} alt="news" />
            </div>
            <div className='flex items-center gap-5 py-5 cursor-pointer'>
              <p>{item.date}</p>
              <p className='text-[16px] text-[#616060]'>by admin</p>
            </div>
            <h3 className='max-w-[450px] text-[1.17em] font-bold my-[18px]'>How to choose the perfect gadgets</h3>
            <p className='max-w-[450px] text-[1em] font-[400]'>When the beautiful valley fills with steam and the meridian sun hits the hill...</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomeNews