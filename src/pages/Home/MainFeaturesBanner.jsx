import React from 'react'

function MainFeaturesBanner({bannerIMG}) {
  return (
    <div className='hover:features-banner-shadow  bg-[#464351] relative text-white flex items-center justify-between rounded-[30px] p-[70px] gap-[30px]'>
      <div className='flex-2'>
        <p className='font-[800] text-[90px] mb-5'>100%</p>
        <p className='text-[20px]'>Material quality</p>
      </div>
      <div className='w-[800px] h-auto absolute left-[20%] '>
        <img className=' h-auto w-[100%]' src={bannerIMG} alt="Banner" />
      </div>
      <div className='flex-1'>
        <p className='font-[600] text-[30px] mb-5 max-w-[500px]'>"Ecologically Clean Sleep Products"</p>
        <p className='text-[16px] mb-5 font-[400] '>has been a company producing cotton fabrics for use all over the world for many years</p>
        <a className='hover:bg-[#d0cccc]
          transition-all duration-200  
          text-black bg-[#f0f0f0] cursor-pointer py-3 px-[35px] rounded-[15px] inline-block'>          
            Collection
        </a>
      </div>
    </div>
  )
}

export default MainFeaturesBanner