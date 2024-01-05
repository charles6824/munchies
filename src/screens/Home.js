import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Main from '../components/Main'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Main />
        {/* <Footer /> */}
    </div>
  )
}

export default Home