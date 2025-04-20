import React, { useState } from 'react'
import { logo } from '../assets'
import { headerLinks } from '../utils/constant'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
function Footer() {
  const {t}=useTranslation();

  //send message
  const [formEmail , setFormEmail]=useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const message = `Email: ${formEmail}`;
      const telegramToken = "7357645059:AAGoMQ9vwK5SxjD-IxPnEbh5TWf6R-LcMF4";
      const chatId = "6539046942";
  
      const response = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Telegramga yuborishda xatolik: ${response.status}`);
      }
  
      const result = await response.json();
      setFormEmail("")
      toast.success("Xabar muvaffaqiyatli yuborildi!");
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      toast.error("Xatolik yuz berdi!");
    }
  };
  return (
    <section>
      <div className='flex flex-wrap xl:flex-nowrap justify-between  md:gap-[20px] pb-[60px] w-full max-w-[1450px] mx-auto px-4 lg:px-[20px]  pt-[100px]'>
        <div className='w-full md:w-[30%] '>
          <a href="#" className='cursor-pointer w-[70%] inline-block'>
            <img src={logo} alt="Company Logo" className='w-full h-auto' />
          </a>
          <p className='font-[400] mt-[30px] text-[#908d8ddd]'>{t("footer-text")}</p>
        </div>
        <ul className='max-sm:w-[45%] w-full sm:w-[20%] md:ml-[100px]'>
          <h3 className='text-[1em] md:text-[1.5em] font-bold my-5'>{t("menyu")}</h3>
          {headerLinks.map((item, idx) => (
            <li
              key={idx}
              className={`mt-[10px] cursor-pointer`}>
              <Link to={item.path} className={`
              transition-all duration-300 
              font-normal text-[10px] md:text-[16px] text-[#00000098] py-[5px] px-2 
              hover:text-[red] `}>
                {t(item.key)}
              </Link>
            </li>
          ))}
        </ul>
        <ul className='cursor-pointer w-full sm:w-[55%] md:w-[30%]'>
          <h3 className='text-[1em] md:text-[1.5em] font-bold my-5'>{t("Contacts")}</h3>
          <li className='mb-[10px] text-[10px] md:text-[14px] text-[#4e4e4e]'>{t("location")}</li>
          <li className='mb-[10px] text-[10px] md:text-[14px] text-[#4e4e4e]'>{t("con-email")}</li>
          <li className='mb-[10px] text-[10px] md:text-[14px] text-[#4e4e4e]'>{t("con-tg")}</li>
          <li className='mb-[10px] text-[10px] md:text-[14px] text-[#4e4e4e]'>+998 94 033 72 12
          </li>
        </ul>
        <div className='w-[100%] md:w-[50%]  xl:w-[35%]'>
          <h3 className='text-[1.5em] font-bold my-5'>{t("f-email-title")}</h3>
          <form onSubmit={handleSubmit} className='flex justify-between border p-2 pl-4 rounded-[20px] border-[#555353]'>
            <input
              autoCapitalize='off'
              required
              onChange={(e)=>setFormEmail(e.target.value)}
              value={formEmail}
              className='outline-none w-[65%] text-[12px]'
              type="email"
              placeholder={t("f-email-title")} />
            <button className='bg-[red] p-1 md:p-[15px] text-white text-[10px] md:text-[14px] font-[400] hover:bg-[black] cursor-pointer transition-all duration-200 rounded-[20px]'>{t("f-submit")}</button>
          </form>
          <p className='mt-[40px] text-[14px] text-[#4e4e4e] '>{t("f-email-b")}</p>
        </div>
      </div>
      <div className='bg-black py-5 mx-auto px-4 lg:px-[40px]'>
        <p className='text-[14px] text-[#545454]'>{t("f-bottom")}</p>
      </div>
    </section>
  )
}

export default Footer