import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Assets/Styles/main.css'

import NavbarComponent from './Components/Navbar'
import HeroComponent from './Components/Hero'
import Container from 'react-bootstrap/Container'

import FirstFeatures from './Components/FirstFeatures'
import SecondFeatures from './Components/SecondFeatures'
import ThirdFeatures from './Components/ThirdFeatures'

import Testimonial from './Components/Testimonial'
import Services from './Components/Services'
import Subscribe from './Components/Subscribe'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Container
        fluid
        className='p-0 hero-container'
      >

        {/* NAVBAR COMPONENT */}
        <NavbarComponent />
        {/* HERO COMPONENT */}

        <div className='hero'>
          <HeroComponent />
        </div>
      </Container>

      <Container
        fluid
        className='features-container'
      >
        {/* Features 1 Component */}

        <FirstFeatures />

        {/* Features 2 Component */}
      </Container>

      <Container
        fluid
        className='features-2-container'
      >
        <SecondFeatures />
      </Container>

      <Container
        fluid
        className='features-3-container'
      >
        <ThirdFeatures />
      </Container>
      
      <Container
        fluid
        className='testimonial-container'
      >
        <Testimonial />
      </Container>

      <Container
        fluid
        className='services-container'
      >
        <Services />
      </Container>

      <Container
        fluid
        className='subscribe-container mt-5 bg-primary text-white'
      >
        <Subscribe />
      </Container>

      <Container
        fluid
        className='footer-container'>
          <Footer />
      </Container>

    </>
  )
}

export default App