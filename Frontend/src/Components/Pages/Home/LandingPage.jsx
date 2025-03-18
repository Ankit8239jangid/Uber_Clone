import React from 'react'
import Header from './Heder'
import Hero from './Hero'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function LandingPage() {
  return (
   <>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default LandingPage