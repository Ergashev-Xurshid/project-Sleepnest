import React, { useEffect, useState } from 'react'
import { RiMessage2Line } from "react-icons/ri";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
function Contact() {
  const { t } = useTranslation()

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);


  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    text: ""
  })

  const formValue = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const message = `
        New Message : \n
        Email: ${formData.email}\n
        Phone : ${formData.phone}\n
        Message : ${formData.text}
      `;
      const telegramToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;  // env dan o'qish
      const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

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
      console.log("Yuborildi:", result);

      setFormData({
        email: '',
        phone: '',
        text: ''
      });

      toast.success("Xabar muvaffaqiyatli yuborildi!");
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      toast.error("Xatolik yuz berdi!");
    }
  };





  return (
    <>
      <Helmet>
        <title>Biz bilan bog‘laning - Dreamnest | Yotoq mebellari va korpa-to‘shaklar</title>

        <meta
          name="description"
          content="Dreamnest bilan bog‘laning! Mahsulotlar, buyurtmalar, yetkazib berish va boshqa savollar bo‘yicha to‘g‘ridan-to‘g‘ri bizga murojaat qiling."
        />
        <meta
          name="keywords"
          content="bog‘lanish, kontakt, Dreamnest, telefon raqami, manzil, yotoq mebellari haqida so‘rash, korpa to‘shak buyurtma, aloqa, qo‘llab-quvvatlash"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Biz bilan bog‘laning - Dreamnest" />
        <meta
          property="og:description"
          content="Yotoq mebellari va korpa-to‘shaklar bo‘yicha savollaringiz bo‘lsa, Dreamnest bilan bog‘laning. Biz mijozlarimizni qadrlaymiz."
        />
        <meta property="og:image" content="https://www.dreamnest.uz/Article1Img.png" />
        <meta property="og:url" content="https://www.dreamnest.uz/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bog‘lanish - Dreamnest" />
        <meta
          name="twitter:description"
          content="Dreamnest bilan bevosita bog‘laning. Yordam, buyurtma va mahsulotlar bo‘yicha tezkor aloqa."
        />
        <meta name="twitter:image" content="https://www.dreamnest.uz/images/contact-preview.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.dreamnest.uz/contact" />
      </Helmet>
      <section className='w-full  max-w-[1450px] mx-auto px-4 lg:px-[20px]  pt-[100px]'>
        <div className='flex items-center flex-col lg:flex-row justify-between gap-[60px]'>
          <div data-aos="fade-right" className='flex-1 h-[600px]'>
            <h1 className='text-[32px] text-[#242825] font-bold my-[32px]'>{t("formTitle")}</h1>
            <form onSubmit={handleSubmit}>
              <input
                required
                autoComplete='off'
                name='email'
                value={formData.email}
                onChange={formValue}
                className='text-[12px] w-full bg-[#e4e4e4] p-5 outline-none rounded-[25px] mb-5'
                type="email"
                placeholder={t("emailPlaceholder")} />
              <input
                required
                autoComplete='off'
                name='phone'
                value={formData.phone}
                onChange={formValue}
                className='text-[12px] w-full bg-[#e4e4e4] p-5 outline-none rounded-[25px] mb-5'
                type="number"
                placeholder={t("phonePlaceholder")} />
              <textarea
                required
                autoComplete='off'
                name='text'
                value={formData.text}
                onChange={formValue}
                placeholder={t("messagePlaceholder")}
                className='text-[12px] resize-none outline-none w-full h-[131px] mb-[30px] bg-[#e4e4e4] p-5  rounded-[25px]'
              ></textarea>
              <button className='hover:bg-black transition-all duration-300 py-[15px] cursor-pointer px-[60px] bg-[red] text-white rounded-[25px]' type='submit'>{t("sendButton")}</button>
            </form>
          </div>
          <div className=' w-full lg:flex-1 h-[700px]'>
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
          <ul className='flex items-center md:flex-row max-md:gap-[20px] flex-col justify-between mt-[100px]'>
            <li className='flex items-center gap-5 cursor-pointer'>
              <RiMessage2Line color='red' size={40} />
              <p className='max-md:text-[12px]'>Email: sleepnest@gmail.com</p>
            </li>
            <li className='flex items-center gap-5 cursor-pointer'>
              <FaPhoneVolume color='red' size={30} />
              <p className='max-md:text-[12px]'>Тел: +998 94 033 72 12</p>
            </li>
            <li className='flex items-center gap-5 cursor-pointer'>
              <IoLocationOutline color='red' size={40} />
              <p className='max-md:text-[12px]'>Bukhara, st. Alpomish 80</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Contact