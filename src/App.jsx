
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About/About'
import Home from './pages/home/Home'

function App() {


  return (
    <>
     <Navbar/>
     <main>
        {/* <Home/>  */}
        <About/>
     </main>
     <Footer/>
    </>
  )
}

export default App
