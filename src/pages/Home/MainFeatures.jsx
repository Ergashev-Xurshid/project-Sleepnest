import React from 'react'
import MainFeaturesBanner from './MainFeaturesBanner'
import { banner1, banner2, banner3 } from '../../assets'
import MainProductCards from './MainProductCards'
import { useTranslation } from 'react-i18next'

function MainFeatures() {
  const {t}=useTranslation()
  return (
    <section className='pt-[100px]'>
      {/* Winter */}
      <MainFeaturesBanner style={"bg-[#464351]"} bannerIMG={banner1}/>
      <MainProductCards title={t("winter-title")} selectCategory={"Winter"}/>
      {/* Autumn */}
      <MainFeaturesBanner style={"bg-[#7f54b3]"} bannerIMG={banner2}/>
      <MainProductCards title={t("Autumn-title")} selectCategory={"Autumn"}/>
      {/* Summer  */}
      <MainFeaturesBanner style={"bg-[#236f48]"} bannerIMG={banner3}/>
      <MainProductCards title={t("Summer-title")} selectCategory={"Summer"}/>
    </section>
  )
}

export default MainFeatures