import React, { useState } from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { products } from '../../utils/productsCards'
import { useFavoritesStore } from '../../store/useFavoritesStore';

function MainProductCards({title}) {

  const { favorites, toggleFavorite } = useFavoritesStore();
  const isFavorite = favorites.some((item) => item.id === products.id);


  return (
    <div className='pt-[100px]'>
      <h1 className='text-center text-[35px] text-black my-[30px]'>{title}</h1>
      <p className='text-center text-[16px] text-black mb-[80px]'>Ecologically Clean Sleep Products</p>
      <ul className='grid grid-cols-5 gap-[30px]'>
        {products.map((item, idx) => {
          const isFavorite = favorites.some((fav) => fav.id === item.id);
          return (
            <div key={idx} className="relative cursor-pointer hover:text-[#ff0000]">
            <div className='hover:scale-[1.1] z-10 rounded-[15px] transition-all duration-500 ease-out overflow-hidden'>
              <img src={item.img} alt={item.title} className='w-full h-auto object-cover' />
            </div>     
              <div onClick={() => toggleFavorite(item)} className="absolute z-20 top-0 right-0 bg-[#d4d4d4] py-2 px-[10px] rounded-full cursor-pointer">
                <button className='cursor-pointer'>
                  {isFavorite ? "❤️" : "🤍"}
                </button>
              </div>
              <p className="my-4 text-lg font-medium">{item.title}</p>
            </div>
          );
        })}
      </ul> 
    </div>
  )
}

export default MainProductCards
