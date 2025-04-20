import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { useFavoritesStore } from '../../store/useFavoritesStore';
import { Link } from 'react-router-dom';

function Toplam() {
  const { products, toggleLike } = useFavoritesStore();
  const [selectedCategory, setSelectedCategory] = useState("Barcha");
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useTranslation();

  const categories = ["Barcha", "Winter", "Autumn", "Summer"];

  const filteredProducts = products.filter(product => {
    const matchesCategory =
      selectedCategory === "Barcha" || product.category === selectedCategory;

    const matchesSearch =
      product.titleKey.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className='w-full max-w-[1450px] mx-auto px-4 lg:px-[20px] pt-[100px]'>
      <div className='flex flex-col md:flex-row'>
        {/* Sidebar */}
        <div className="w-full md:w-1/3 lg:w-1/4 p-4">
          <form className='flex justify-between border p-2 pl-4 rounded-[20px] border-[#555353]'>
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              className='outline-none w-full'
              type="text"
              placeholder={t("search_placeholder")} />
            <span className='xl:inline-block hidden bg-[red] p-[15px] text-white text-[14px] font-[400] hover:bg-[black] cursor-pointer transition-all duration-200 rounded-full'>
              <FaSearch />
            </span>
          </form>
          <h2 className="text-xl font-bold my-[40px]">{t("collection")}</h2>
          <div className='flex flex-col'>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`mb-2 text-left px-2 py-1 font-bold cursor-pointer ${selectedCategory === cat ? "text-yellow-600" : "text-black"}`}
              >
                {t(cat)}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="md:w-3/4 p-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {filteredProducts.map(product => (
            <div key={product.id} className="relative cursor-pointer hover:text-[#ff0000]">
              <Link to={`/product/${product.id}`}>
                <div className='hover:scale-[1.1] z-10 rounded-[15px] transition-all duration-500 ease-out overflow-hidden'>
                  <img src={product.img} alt={product.titleKey} className='w-full h-auto object-cover' />
                </div>
              </Link>
              <div onClick={() => toggleLike(product.id)} className="absolute z-20 top-0 right-0 bg-[#d4d4d4] py-2 px-[10px] rounded-full cursor-pointer">
                <button className='cursor-pointer'>
                  {product.like ? "❤️" : "🤍"}
                </button>
              </div>
              <p className="my-4 text-lg font-medium">{t(product.titleKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Toplam;
