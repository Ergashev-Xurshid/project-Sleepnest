import React from 'react'
import { aboutImg } from '../../assets'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

function About() {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>Biz haqimizda - Dreamnest | Yotoq mebellari va korpa-to‘shaklar</title>

        <meta
          name="description"
          content="Dreamnest — yotoq mebellari, korpa-to‘shak va uy jihozlarini sotuvchi ishonchli brend. Biz qulay narxlar, bepul yetkazib berish va mijozlarga xizmat ko‘rsatishda yuqori sifatni taklif qilamiz."
        />
        <meta
          name="keywords"
          content="biz haqimizda, Dreamnest, yotoq mebellari, korpa to‘shak, mebel do‘koni, ishonchli brend, bepul yetkazib berish, arzon mebel, sifatli xizmat"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph - ijtimoiy tarmoqlar uchun */}
        <meta property="og:title" content="Biz haqimizda - Dreamnest" />
        <meta
          property="og:description"
          content="Dreamnest — yotoq mebellari va korpa-to‘shaklar bo‘yicha yetakchi brend. Sifat, qulay narx va bepul yetkazib berish bizning ustunligimiz."
        />
        <meta property="og:image" content="https://www.dreamnest.uz/Article1Img.png" />
        <meta property="og:url" content="https://www.dreamnest.uz/about" />
        <meta property="og:type" content="website" />

        {/* Twitter uchun (ixtiyoriy, lekin foydali) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Biz haqimizda - Dreamnest" />
        <meta
          name="twitter:description"
          content="Dreamnest — yotoq mebellari, korpa-to‘shak va uy uchun qulay mahsulotlar bilan taniling. Sifatli xizmat va bepul yetkazib berish mavjud."
        />
        <meta name="twitter:image" content="https://www.dreamnest.uz/images/about-preview.jpg" />

        {/* Canonical link */}
        <link rel="canonical" href="https://www.dreamnest.uz/about" />
      </Helmet>
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
    </>
  )
}

export default About