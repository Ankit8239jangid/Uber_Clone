import React from 'react'
import Header from './Home/Heder'
import Footer from './Home/Footer'

import { Outlet } from 'react-router-dom'
// import { Toaster } from 'react-hot-toast';

function Layout() {
  return (
    <>
  
        <Header />
        <Outlet />
        <Footer />

      
    </>
  )
}

export default Layout