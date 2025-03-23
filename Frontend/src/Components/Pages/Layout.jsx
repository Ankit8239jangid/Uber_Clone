import React from 'react'
import Header from './Home/Heder'
import Footer from './Home/Footer'

import { Outlet } from 'react-router-dom'
// import { Toaster } from 'react-hot-toast';

function Layout() {
  return (
    <>
      <div className="bg-red-300 h-screen w-full">
        <Header />
        <Outlet />
        <Footer />
      
      </div>
    </>
  )
}

export default Layout