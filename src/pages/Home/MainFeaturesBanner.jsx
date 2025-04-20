import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function MainFeaturesBanner({bannerIMG , style}) {
  const {t} = useTranslation()
  return (
    <div className={`${style} pt-[200px] md:mt-[300px] lg:mt-[480px] mt-[200px] features-banner-shadow xl:mt-[100px] relative text-white flex flex-wrap justify-center max-md:text-center items-center md:justify-between rounded-[30px] p-[20px] md:pr-[70px] md:pl-[70px] md:pb-[70px] lg:p-[100px] gap-[20px]`}>
      <div className='xl:flex-2'>
        <p className='font-[800] text-[50px]  lg:text-[90px] mb-5'>100%</p>
        <p className='text-[20px]'>{t("hero-baner-text")}</p>
      </div>
      <div className='w-full xl:w-[800px]  h-auto absolute   
          top-[-100px]  left-0 
          md:top-[-300px] md:left-[20]
          lg:top-[-545px] lg:left-[20]  
          xl:top-[-80px]  xl:left-[20%] '>
        <img className=' h-auto w-[100%]' src={bannerIMG} alt="Banner" />
      </div>
      <div className='flex-1 z-20 '>
        <p className='font-[600] text-[14px] max-md:text-[22px] md:text-[30px]  mb-5 max-w-[500px]'>{t("hero-baner-title")}</p>
        <p className='text-[16px] mb-5 font-[400] '>{t("hero-baner-title-text")}</p>
        <Link to={"/collection"} className='hover:bg-[#d0cccc] cursor-pointer transition-all duration-20 text-black bg-[#f0f0f0]  py-3 px-[35px] rounded-[15px] inline-block'>{t("hero-btn")}</Link>
      </div>
    </div>
  )
}

export default MainFeaturesBanner