import { useState } from 'react';
import { Link } from 'react-router-dom';
import { headerLinks } from '../utils/constant';
import { useTranslation } from 'react-i18next';
import { useFavoritesStore } from '../store/useFavoritesStore';
import { FcLike } from "react-icons/fc";
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setActive] = useState(0)
  const { t } = useTranslation();
  const likedCount = useFavoritesStore((state) => state.likedCount());
  return (
    <div className='lg:hidden inline-block mx-2'>
      <div
        className="w-8 h-6 flex flex-col justify-between cursor-pointer z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`block h-1 bg-black transition-all duration-300 ease-in-out 
            ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
        ></span>
        <span
          className={`block h-1 bg-black transition-all duration-300 ease-in-out 
            ${isOpen ? 'opacity-0' : ''}`}
        ></span>
        <span
          className={`block h-1 bg-black transition-all duration-300 ease-in-out 
            ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
        ></span>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4">
          <ul className='text-center'>
            {headerLinks.map((item, idx) => (
              <li
                key={idx}
                onClick={() => setActive(idx)}
                className={`${idx === headerLinks.length - 1 ? "mr-0" : "lg:mr-[5px] xl:mr-[30px]  mr-[5px]"} w-auto my-4 h-auto cursor-pointer`}>
                <Link
                  onClick={() => setIsOpen(false)}
                  to={item.path}
                  className={`
                 ${idx === isActive ? "active" : ""}
                 transition-all duration-300 
                 font-normal text-[16px] lg:text-[15px] text-[#00000098] py-[5px] px-2 
                 hover:text-[#a17f4a]
                 `}>
                  {t(item.key)}
                </Link>

              </li>
            ))}
          </ul>
          <div className='w-full flex  justify-center'>
            <Link 
            onClick={() => setIsOpen(false)}
            to={"/liks"} 
            className=' lg:hidden inline-block relative  text-[20px] cursor-pointer max-lg:mx-4 py-[5px] px-2'>
              <FcLike size={30} />
              <span className='inline-block absolute top-[1px] right-[-1px] text-white bg-black text-[8px] rounded-full py-[2px] px-[6px]'>
                {likedCount}
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
