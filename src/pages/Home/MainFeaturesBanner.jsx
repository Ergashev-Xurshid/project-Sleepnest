import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function MainFeaturesBanner({bannerIMG , style}) {
  const {t} = useTranslation()
  return (
    <div className={`${style} features-banner-shadow mt-[100px] relative text-white flex items-center justify-between rounded-[30px] p-[70px] gap-[30px]`}>
      <div className='flex-2'>
        <p className='font-[800] text-[90px] mb-5'>100%</p>
        <p className='text-[20px]'>{t("hero-baner-text")}</p>
      </div>
      <div className='w-[800px]  h-auto absolute left-[23%] '>
        <img className=' h-auto w-[100%]' src={bannerIMG} alt="Banner" />
      </div>
      <div className='flex-1 z-20'>
        <p className='font-[600] text-[30px] mb-5 max-w-[500px]'>{t("hero-baner-title")}</p>
        <p className='text-[16px] mb-5 font-[400] '>{t("hero-baner-title-text")}</p>
        <Link to={"/collection"} className='hover:bg-[#d0cccc] cursor-pointer transition-all duration-20 text-black bg-[#f0f0f0]  py-3 px-[35px] rounded-[15px] inline-block'>{t("hero-btn")}</Link>
      </div>
    </div>
  )
}

export default MainFeaturesBanner