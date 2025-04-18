import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { products } from '../../utils/productsCards';
import { useTranslation } from 'react-i18next';
import { useFavoritesStore } from '../../store/useFavoritesStore';
function Toplam() {
  const { favorites, toggleFavorite } = useFavoritesStore();
  const [selectedCategory, setSelectedCategory] = useState("Barcha");
  const categories = ["Barcha", "Winter", "Autumn", "Summer"];
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useTranslation()

  return (
    <section className='w-full  max-w-[1450px] mx-auto px-4 lg:px-[20px]  pt-[100px]'>
      <div className='flex '>
        <div className="w-1/4 p-4">
          <form className='flex justify-between border p-2 pl-4 rounded-[20px] border-[#555353]'>
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              className='outline-none'
              type="text"
              placeholder={t("search_placeholder")} />
            <a className='bg-[red] p-[15px] text-white text-[14px] font-[400] hover:bg-[black] cursor-pointer transition-all duration-200 rounded-full'><FaSearch /></a>
          </form>
          <h2 className="text-xl font-bold my-[40px]">{t("collection")}</h2>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`block mb-2 text-left px-2 py-1 cursor-pointer ${selectedCategory === cat ? "font-bold text-yellow-600" : "text-black"
                }`}
            >
              {t(cat)}
            </button>
          ))}
        </div>
        <div className="w-3/4 p-4 grid grid-cols-2 md:grid-cols-4 gap-10">
          {products
            .filter(product => {
              const matchesCategory =
                selectedCategory === "Barcha" || product.category === selectedCategory;

              const matchesSearch =
                product.titleKey.toLowerCase().includes(searchTerm.toLowerCase());

              return matchesCategory && matchesSearch;
            })
            .map(product => {
              const isFavorite = favorites.some((fav) => fav.id === product.id);
              return (
                <div key={product.id} className="relative cursor-pointer hover:text-[#ff0000]">
                <div className='hover:scale-[1.1] z-10 rounded-[15px] transition-all duration-500 ease-out overflow-hidden'>
                  <img src={product.img} alt={product.title} className='w-full h-auto object-cover' />
                </div>
                <div onClick={() => toggleFavorite(product)} className="absolute z-20 top-0 right-0 bg-[#d4d4d4] py-2 px-[10px] rounded-full cursor-pointer">
                  <button className='cursor-pointer'>
                    {isFavorite ? "❤️" : "🤍"}
                  </button>
                </div>
                <p className="my-4 text-lg font-medium">{t(product.titleKey)}</p>
              </div>
              )})}
        </div>
      </div>
    </section>
  )
}

export default Toplam