import React from 'react'
import AboutUs from './landingPage/AboutUs'
import Donate from './landingPage/Donate'
import Employees from './landingPage/Employees'
import Footer from './landingPage/Footer'
import Header from './landingPage/Header'
import Hero from './landingPage/Hero'
import Mission from './landingPage/Mission'
import MissionSmallScreen from './landingPage/MissionSmallScreen'
import SignUp from './landingPage/SignUp'
import Volunteering from './landingPage/Volunteering'

const LandingPage = () => {
  return (
    <div className='h-screen'>
      <Header/>
      <Hero/>
      <AboutUs/>
      <MissionSmallScreen/>
      <Volunteering/>
      <Mission/>
      <SignUp/>
      <Employees/>
      <Donate/>
      <Footer/>
    </div>
  )
}

export default LandingPage