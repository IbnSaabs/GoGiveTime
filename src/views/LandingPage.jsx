import React from 'react'
import AboutUs from '../components/AboutUs'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Mission from '../components/Mission'
import SignUp from '../components/SignUp'
import Volunteering from '../components/Volunteering'

const LandingPage = () => {
  return (
    <div className=''>
      <Header/>
      <Hero/>
      <AboutUs/>
      <Volunteering/>
      <Mission/>
      <SignUp/>
    </div>
  )
}

export default LandingPage