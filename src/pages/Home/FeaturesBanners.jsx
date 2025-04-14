import React from 'react'

function FeaturesBanners() {
  return (
    <div className='hover:features-banner-shadow bg-[#464351] relative text-white flex items-center justify-between rounded-[30px] p-[70px] gap-[30px]'>
      <div>
        <p className='font-[800] text-[90px] mb-5'>100%</p>
        <p className='text-[20px]'>Material quality</p>
      </div>
      {/* img */}
      <div>
        <p className='font-[600] text-[30px] mb-5 max-w-[500px]'>"Ecologically Clean Sleep Products"</p>
        <p className='text-[20px]'>has been a company producing cotton fabrics for use all over the world for many years</p>
        <a className='text-black cursor-pointer'>
          <button className='py-3 px-[35px] rounded-[15px] border-none'>
            Collection
          </button>
        </a>
      </div>
    </div>
  )
}

export default FeaturesBanners