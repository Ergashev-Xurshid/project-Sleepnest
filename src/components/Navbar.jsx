import React, { useEffect, useState } from 'react'
import { headerLinks } from '../utils/constant'
import { logo } from '../assets'
import { FcLike } from "react-icons/fc";
import { useFavoritesStore } from '../store/useFavoritesStore';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';


function Navbar() {

  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;

    const foundIndex = headerLinks.findIndex(link => link.path === currentPath);
    if (foundIndex !== -1) {
      setActive(foundIndex);
    }
  }, [location.pathname]);


  const [isActive, setActive] = useState(0)

  const likedCount = useFavoritesStore((state) => state.likedCount());
  // i18next
  const LngValue = localStorage.getItem("i18nextLng")

  const { t, i18n } = useTranslation();
  const handleChange = (e) => {
    const selectLng = e.target.value;
    i18n.changeLanguage(selectLng)
    localStorage.setItem('i18nextLng', selectLng);
  }
  return (
    <section className="fixed shadow-lg left-0 top-0 right-0 bg-white py-[10px] z-99 transition-all ease-linear">
      <div className='container mx-auto'>
        <div className='flex items-center justify-between  px-5 mx-[15.4px]'>
          {/*header logo */}
          <Link to={"/"} className='cursor-pointer'>
            <img src={logo} alt="Company Logo" className='w-[180px] h-auto' />
          </Link>
          {/* laptop menu  */}
          <nav className='w-[70%] flex items-center justify-end gap-[5px] lg:gap-[15px]' >
            <ul className='hidden lg:flex items-center justify-between '>
              {headerLinks.map((item, idx) => (
                <li
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`${idx === headerLinks.length - 1 ? "mr-0" : "lg:mr-[5px] xl:mr-[30px]  mr-[5px]"} w-auto h-auto cursor-pointer`}>
                  <Link to={item.path} className={`
                    ${idx === isActive ? "active" : ""}
                    transition-all duration-300 
                    font-normal text-[16px] lg:text-[15px] text-[#00000098] py-[5px] px-2 
                    hover:text-[#a17f4a] `}>
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to={"/liks"} className='hidden lg:inline-block relative  text-[20px] cursor-pointer max-lg:mx-4 py-[5px] px-2'>
                <FcLike size={30} />
                <span className='inline-block absolute top-[1px] right-[-1px] text-white bg-black text-[8px] rounded-full py-[2px] px-[6px]'>
                  {likedCount}
                </span>
              </Link>
            <select value={LngValue} onChange={handleChange} className='text-[#ffffffa6]  text-[14px] md:text-[20px] font-bold cursor-pointer bg-[#a17f4a] rounded-xl py-[5px] px-[7px]'>
              <option value="eng">ENG</option>
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
            </select>
            <HamburgerMenu/>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default Navbar 