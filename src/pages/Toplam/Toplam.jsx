import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { products } from '../../utils/productsCards';
function Toplam() {

  const [selectedCategory, setSelectedCategory] = useState("Barcha");
  const categories = ["Barcha", "Winter", "Autumn", "Summer"];
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <section className='w-full  max-w-[1450px] mx-auto px-4 lg:px-[20px]  pt-[100px]'>
      <div className='flex '>
        <div className="w-1/4 p-4">
          <form className='flex justify-between border p-2 pl-4 rounded-[20px] border-[#555353]'>
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              className='outline-none'
              type="text"
              placeholder='Searching for ....' />
            <button className='bg-[red] p-[15px] text-white text-[14px] font-[400] hover:bg-[black] cursor-pointer transition-all duration-200 rounded-full'><FaSearch /></button>
          </form>
          <h2 className="text-xl font-bold my-[40px]">Collection</h2>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`block mb-2 text-left px-2 py-1 cursor-pointer ${selectedCategory === cat ? "font-bold text-yellow-600" : "text-black"
                }`}
            >
              {cat} Collection
            </button>
          ))}
        </div>
        <div className="w-3/4 p-4 grid grid-cols-2 md:grid-cols-4 gap-10">
          {products
            .filter(product => {
              const matchesCategory =
                selectedCategory === "Barcha" || product.category === selectedCategory;

              const matchesSearch =
                product.title.toLowerCase().includes(searchTerm.toLowerCase());

              return matchesCategory && matchesSearch;
            })
            .map(product => (
              <div key={product.id}>
                <img src={product.img} alt={product.title} className="rounded-xl" />
                <p className="mt-2 text-lg font-medium">{product.title}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Toplam