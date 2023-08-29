

import './App.css'
import Hero from './Hero/Hero'
import Navbar from './Navbar/Navbar'
import Feature from './Features/Feature'

import CategoryNav from './Category/CategoryNav'
import Contact from './Contact/Contact'
import Faq from './FAQ/Faq'
import Footer from "./Footer/Footer"
import { Route, Routes } from 'react-router-dom'
import Desc from './subCategory/Desc'

function App() {


  return (
    <>
      <Routes>
        
        <Route path='/'element={
        <>
         
          <Navbar />
          <Hero />
          <Feature />
          <CategoryNav />
          <Contact />
          <Faq />
          <Footer />
         
        </>
      }>
        </Route>

        <Route path='/*' element={<Feature/>}></Route>
        <Route path='/car-desc' element={<Desc/>}></Route>
      </Routes>

    </>
  )
}

export default App
