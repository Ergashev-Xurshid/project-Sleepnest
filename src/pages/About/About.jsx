import React from 'react'
import { aboutImg } from '../../assets'
import { useTranslation } from 'react-i18next'

function About() {
  const {t}=useTranslation()
  return (
    <section className='w-full max-w-[1450px] mx-auto px-4 lg:px-[20px]  pt-[100px]'>
      <div className='flex max-xl:flex-col-reverse xl:flex-row items-center justify-center gap-[50px]'>
        <div className='w-full'>
          <h1 className=' text-[16px] md:text-[35px] font-bold my-[30px]'>
            {t("about-title")}
          </h1>
          <ul className='w-full xl:w-[500px]'>
            <li className='text-[16px] my-4 text-[#545454]'>{t("about-intro")}</li>
            <li className='text-[16px] my-4 text-[#545454]'>{t("about-history")}</li>
            <li className='text-[16px] my-4 text-[#545454]'>{t("about-goal")}</li>
            <li className='text-[16px] my-4 text-[#545454]'>{t("about-standards")}</li>
            <li className='text-[16px] my-4 text-[#545454]'>{t("about-technology")}</li>
            <li className='text-[16px] my-4 text-[#545454]'>{t("about-representative")}</li>
            <li className='text-[16px] my-4 text-[#545454]'>{t("about-production")}</li>
            <li className='text-[16px] my-4 text-[#545454]'>{t("about-equipment")}</li>
            <li className='text-[16px] my-4 text-[#545454]'>{t("about-quality")}</li>
            <li className='text-[16px] my-4 text-[#545454]'>{t("about-bags")}</li>
            <li className='text-[16px] my-4 text-[#545454]'>{t("about-service")}</li>
          </ul>
        </div>
        <div className='w-full  about__img '>
          <img src={aboutImg} className='w-full h-auto' alt="about banner" />
        </div>
      </div>
    </section>
  )
}

export default About