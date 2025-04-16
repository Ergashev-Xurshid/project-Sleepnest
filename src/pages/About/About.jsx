import React from 'react'
import { aboutImg } from '../../assets'

function About() {
  return (
    <section className='w-full max-w-[1450px] mx-auto px-4 lg:px-[20px]  pt-[100px]'>
      <div className='flex items-center justify-center gap-[50px]'>
        <div>
          <h1 className='text-[35px] font-bold my-[30px]'>
            Ecologically Clean Sleep Products
          </h1>
          <ul className='max-w-[500px]'>
            <li className='text-[16px] my-4 text-[#545454]'>Our company, which produces cotton fabrics and ecological bags, has been supplying cotton fabrics to the global market for many years.</li>
            <li className='text-[16px] my-4 text-[#545454]'>Our company started its activity 17 years ago and has been gaining the trust of our customers.</li>
            <li className='text-[16px] my-4 text-[#545454]'>The main goal of our company is to create high-quality, durable and environmentally friendly products.</li>
            <li className='text-[16px] my-4 text-[#545454]'>Manufacturing processes are fully environmentally friendly and environmentally friendly.</li>
            <li className='text-[16px] my-4 text-[#545454]'>Using modern technologies, we are able to produce various cotton products at a high level.</li>
            <li className='text-[16px] my-4 text-[#545454]'>Also, we act as the official representative of DongJu weaving equipment in Uzbekistan.</li>
            <li className='text-[16px] my-4 text-[#545454]'>Every year, more than 80 types of products are produced in our factory, as a result of which the company ensures high quality and stable production.</li>
            <li className='text-[16px] my-4 text-[#545454]'>More than 50 looms are operating in our enterprise based on modern technologies.</li>
            <li className='text-[16px] my-4 text-[#545454]'>In our production processes, we ensure the production of only high-quality and environmentally safe products.</li>
            <li className='text-[16px] my-4 text-[#545454]'>According to the requirements of our customers, the production of eco-friendly and modern design bags has been launched.</li>
            <li className='text-[16px] my-4 text-[#545454]'>Our company is always happy to provide quality products and high level of service to its customers.</li>
          </ul>
        </div>
        <div className='about__img '>
          <img src={aboutImg} alt="about banner" />
        </div>
      </div>
    </section>
  )
}

export default About