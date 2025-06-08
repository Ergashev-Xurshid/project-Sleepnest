
import './App.css'
import About from './pages/About/About'
import Contact from './pages/Contact.jsx/Contact'
import Home from './pages/Home/Home'
import Toplam from './pages/Toplam/Toplam'
// React Router
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom"

//layouts

import RootLayout from './layout/RootLayout';
import ProductDetails from './pages/Product/ProductDetails';
import Linke from './components/Linke';


function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/collection' element={<Toplam/>}/>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path='/liks' element={<Linke/>}/>
      </Route>
    )
  )

  return (
    <>
     <RouterProvider router={routes}/>
    </>
  )
}

export default App