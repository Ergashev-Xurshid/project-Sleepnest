import React from 'react'
import MainFeaturesBanner from './MainFeaturesBanner'
import { banner1, banner2 } from '../../assets'
import MainProductCards from './MainProductCards'

function MainFeatures() {
  return (
    <section className='pt-[100px]'>
      {/* Winter */}
      <MainFeaturesBanner style={"bg-[#464351]"} bannerIMG={banner1}/>
      <MainProductCards title={"Winter Collection"}/>
      {/* Autumn */}
      <MainFeaturesBanner style={"bg-[#7f54b3]"} bannerIMG={banner2}/>
      <MainProductCards title={"Autumn Collection"}/>
      {/* Summer  */}
      <MainFeaturesBanner style={"bg-[#7f54b3]"} bannerIMG={banner2}/>
      <MainProductCards title={"Summer Collection"}/>
    </section>
  )
}

export default MainFeatures