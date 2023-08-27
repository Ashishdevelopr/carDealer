

import './App.css'
import Hero from './Hero/Hero'
import Navbar from './Navbar/Navbar'
import Feature from './Features/Feature'

import CategoryNav from './Category/CategoryNav'
import Contact from './Contact/Contact'
import Faq from './FAQ/Faq'
import Footer from "./Footer/Footer"

function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <Feature/>
      <CategoryNav/>
      <Contact/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default App
