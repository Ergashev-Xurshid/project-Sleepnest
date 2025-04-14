import React from 'react'
import Hero from './hero'
import Features from './Features'



function Home() {
  return (
    <section className='w-full max-w-[1450px] mx-auto px-4 lg:px-[20px]  pt-[100px]'>
       <Hero/>
       <Features/>
    </section>
  )
}

export default Home