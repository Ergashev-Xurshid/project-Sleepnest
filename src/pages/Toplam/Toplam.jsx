import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { useFavoritesStore } from '../../store/useFavoritesStore';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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
    <>
      <Helmet>
        <title>Barcha mahsulotlar - Dreamnest | Yotoq mebellari va korpa-to‘shaklar</title>

        <meta
          name="description"
          content="Dreamnest'ning barcha mahsulotlari: yotoq mebellari, korpa-to‘shaklar, matraslar va boshqa uy jihozlari bir joyda. Arzon narxlar, bepul yetkazib berish va oson to‘lov!"
        />
        <meta
          name="keywords"
          content="barcha mahsulotlar, mebellar, to‘shaklar, matras, yotoq jihozlari, korpa to‘shak to‘plami, mebel kolleksiyasi, Dreamnest mahsulotlari"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Dreamnest - Barcha mahsulotlar" />
        <meta
          property="og:description"
          content="Dreamnest'ning to‘liq mahsulot kolleksiyasi bilan tanishing: yotoq mebellari, korpa-to‘shaklar, matraslar va boshqalar."
        />
        <meta property="og:image" content="https://www.dreamnest.uz/Article1Img.png" />
        <meta property="og:url" content="https://www.dreamnest.uz/collection" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Barcha mahsulotlar - Dreamnest" />
        <meta
          name="twitter:description"
          content="Yotoq mebellari va korpa-to‘shaklar kolleksiyasi bilan tanishing. Dreamnest'da qulay narxlar va bepul yetkazib berish."
        />
        <meta name="twitter:image" content="https://www.dreamnest.uz/images/collection-preview.jpg" />

        {/* Canonical link */}
        <link rel="canonical" href="https://www.dreamnest.uz/collection" />
      </Helmet>
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
    </>
  )
}

export default Toplam;
