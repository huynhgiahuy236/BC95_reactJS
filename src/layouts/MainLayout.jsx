import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div>
        <Header />
        <div className='min-h-screen pt-15'>
          <Outlet />
        </div>
        {/* // Outlet: dung de render cac component tu cac router con, khi truy cap vao 1 router con, component tu router con do se duoc render vao vi tri cua Outlet 
        // VD: /about, /product, /profile -> cac component tuong ung */}
        <Footer />
    </div>
  )
}

export default MainLayout
