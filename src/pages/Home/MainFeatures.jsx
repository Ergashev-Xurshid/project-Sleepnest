import React from 'react'
import MainFeaturesBanner from './MainFeaturesBanner'
import { banner1 } from '../../assets'

function MainFeatures() {
  return (
    <section className='pt-[100px]'>
      <MainFeaturesBanner bannerIMG={banner1}/>
    </section>
  )
}

export default MainFeatures