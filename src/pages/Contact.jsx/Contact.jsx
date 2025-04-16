import React , { useEffect } from 'react'
import { RiMessage2Line } from "react-icons/ri";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  return (
    <section className='w-full  max-w-[1450px] mx-auto px-4 lg:px-[20px]  pt-[100px]'>
      <div className='flex items-center justify-between gap-[60px]'>
        <div data-aos="fade-right" className='flex-1'>
          <h1 className='text-[32px] text-[#242825] font-bold my-[32px]'>Connection</h1>
          <form>
            <input
              className='w-full bg-[#e4e4e4] p-5 outline-none rounded-[20px] mb-5'
              type="email"
              placeholder='Your email' />
            <input
              className='w-full bg-[#e4e4e4] p-5 outline-none rounded-[20px] mb-5'
              type="email"
              placeholder='Your phone number' />
            <textarea
              placeholder='Please write if you have a message'
              className='resize-none outline-none w-full mb-[30px] bg-[#e4e4e4] p-5  rounded-[25px]'
            ></textarea>
            <button className='hover:bg-black transition-all duration-300 py-[15px] cursor-pointer px-[60px] bg-[red] text-white rounded-[25px]' type='submit'>Send</button>
          </form>
        </div>
        <div className='flex-1 h-[700px]'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3067.6526359032846!2d64.459964!3d39.747453!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ0JzUwLjgiTiA2NMKwMjcnMzUuOSJF!5e0!3m2!1sru!2sus!4v1744807798037!5m2!1sru!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
      <div>
        <ul className='flex items-center justify-between mt-[100px]'>
          <li className='flex items-center gap-5 cursor-pointer'>
            <RiMessage2Line color='red' size={40}/>
            <p>Email: sleepnest@gmail.com</p>
          </li>
          <li className='flex items-center gap-5 cursor-pointer'>
            <FaPhoneVolume color='red' size={30}/>
            <p>Тел: +998 94 033 72 12</p>
          </li>
          <li className='flex items-center gap-5 cursor-pointer'>
            <IoLocationOutline color='red' size={40}/>
            <p>Bukhara, st. Alpomish 80</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact