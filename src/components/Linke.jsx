import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFavoritesStore } from '../store/useFavoritesStore';

function Linke() {
  const { t } = useTranslation();
  const { products, toggleLike } = useFavoritesStore();

  const likedProducts = products.filter((item) => item.like);

  return (
    <section className='w-full max-w-[1480px] mx-auto px-4 lg:px-[20px] pt-[100px]'>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {likedProducts.map((product) => (
          <div key={product.id} className="relative cursor-pointer hover:text-[#ff0000]">
            <Link to={`/product/${product.id}`}>
              <div className="hover:scale-[1.1] z-10 rounded-[15px] transition-all duration-500 ease-out overflow-hidden">
                <img src={product.img} alt={product.title} className="w-full h-auto object-cover" />
              </div>
            </Link>
            <div
              onClick={() => toggleLike(product.id)}
              className="absolute z-20 top-0 right-0 bg-[#d4d4d4] py-2 px-[10px] rounded-full cursor-pointer"
            >
              <button className="cursor-pointer text-xl">
                {product.like ? "❤️" : "🤍"}
              </button>
            </div>
            <p className="my-4 text-lg font-medium">{t(product.titleKey)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Linke;
