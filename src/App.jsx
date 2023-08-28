

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
          {/* <Hero />
          <Feature />
          <CategoryNav />
          <Contact />
          <Faq />
          <Footer /> */}
          <Desc/>
        </>
      }>
        </Route>

        <Route path='/feature' element={<Feature/>}></Route>
      </Routes>

    </>
  )
}

export default App
