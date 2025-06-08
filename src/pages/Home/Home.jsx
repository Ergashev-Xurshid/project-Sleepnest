import React from 'react'
import Hero from './Hero'
import MainFeatures from './MainFeatures'
import HomeNews from './HomeNews'



function Home() {
  return (
    <>
      <Helmet>
        <title>
          Dreamnest - Yotoq mebellari, korpa-to‘shaklar va uy jihozlari | Arzon narxlar, bepul yetkazib berish
        </title>

        <meta
          name="description"
          content="Dreamnest - Yotoqxona uchun mebellar, korpa-to‘shaklar va sifatli uy jihozlarini arzon narxlarda taklif etadi. Bepul yetkazib berish, turli to‘lov usullari va aloqa orqali buyurtma berish imkoniyati mavjud."
        />

        <meta
          name="keywords"
          content="yotoq mebellari, korpa to‘shak, matras, karavot, mebel do‘koni, uy uchun jihozlar, yotoqxona to‘plamlari, to‘shak materiallari, arzon mebellar, bepul yetkazib berish, Dreamnest, uzbekcha mebel"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, Telegram, LinkedIn va boshqalar uchun) */}
        <meta property="og:title" content="Dreamnest - Yotoq mebellari va korpa-to‘shaklar" />
        <meta
          property="og:description"
          content="Dreamnest yotoqxona uchun kerakli barcha mebellar va korpa-to‘shaklarni qulay narxlarda taklif qiladi. Buyurtma berish uchun biz bilan bog‘laning!"
        />
        <meta property="og:image" content="https://www.dreamnest.uz/Article1Img.png" />
        <meta property="og:url" content="https://www.dreamnest.uz/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card (xohlasangiz) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dreamnest - Yotoq mebellari va korpa-to‘shaklar" />
        <meta
          name="twitter:description"
          content="Dreamnest - qulay va sifatli uy jihozlari, yotoqxona mebellari va korpa-to‘shaklar. Hozir buyurtma bering!"
        />
        <meta name="twitter:image" content="https://www.dreamnest.uz/images/home-preview.jpg" />

        {/* Canonical link */}
        <link rel="canonical" href="https://www.dreamnest.uz/" />
      </Helmet>
      <section className='w-full max-w-[1480px] mx-auto px-4 lg:px-[20px]  pt-[100px]'>
        <Hero />
        <MainFeatures />
        <HomeNews />
      </section>
    </>
  )
}

export default Home

