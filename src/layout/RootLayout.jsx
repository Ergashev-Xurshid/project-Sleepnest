import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import TelegramButton from '../components/TelegramButton'

function RootLayout() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <Outlet/>
        <TelegramButton/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default RootLayout