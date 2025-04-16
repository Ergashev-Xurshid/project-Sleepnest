
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About/About'
import Contact from './pages/Contact.jsx/Contact'
import Home from './pages/home/Home'
import Toplam from './pages/Toplam/Toplam'

function App() {


  return (
    <>
     <Navbar/>
     <main>
        <Home/> 
        {/* <About/> */}
        {/* <Contact/> */}
        {/* <Toplam/> */}
     </main>
     <Footer/>
    </>
  )
}

export default App
