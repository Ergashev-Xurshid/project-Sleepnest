import React, { useState } from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { products } from '../../utils/productsCards'

function MainProductCards({title}) {
  const [likedItems, setLikedItems] = useState([])

  const toggleLike = (id) => {
    if (likedItems.includes(id)) {
      setLikedItems(likedItems.filter(itemId => itemId !== id))
    } else {
      setLikedItems([...likedItems, id])
    }
  }

  return (
    <div className='pt-[100px]'>
      <h1 className='text-center text-[35px] text-black my-[30px]'>{title}</h1>
      <p className='text-center text-[16px] text-black mb-[80px]'>Ecologically Clean Sleep Products</p>
      <ul className='grid grid-cols-5 gap-[30px]'>
        {products.map((item, idx) => (
          <li key={idx} className='relative cursor-pointer hover:text-[#ff0000]'>
            <div
              onClick={() => toggleLike(item.id)}
              className='absolute z-20 top-0 right-0 bg-[#d4d4d4] py-2 px-[10px] rounded-full'
            >
              {likedItems.includes(item.id) ? <FcLike /> : <FcLikePlaceholder />}
            </div>
            <div className='hover:scale-[1.1] z-10 rounded-[15px] transition-all duration-500 ease-out overflow-hidden'>
              <img className='w-full h-auto object-cover' src={item.img} alt={item.title} />
            </div>
            <h4 className='my-4'>{item.title}</h4>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MainProductCards
