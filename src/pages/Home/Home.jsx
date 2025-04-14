import React from 'react'
import Hero from './hero'
import MainFeatures from './MainFeatures'



function Home() {
  return (
    <section className='w-full max-w-[1450px] mx-auto px-4 lg:px-[20px]  pt-[100px]'>
       <Hero/>
       <MainFeatures/>
    </section>
  )
}

export default Home

