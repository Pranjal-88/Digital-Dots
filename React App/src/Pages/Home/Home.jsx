import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Testimonials from '../../components/testimonials/Testimonials'
import ImageSlider from '../../components/Imageslider/Imageslider'
import Aboutus from '../../components/Aboutus/Aboutus'

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <Aboutus />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home
