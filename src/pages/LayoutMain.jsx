import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Outlet } from 'react-router-dom'


const LayoutMain = () => {
     return (
          <div className='flex flex-col min-h-screen'>
               <Header />
                    <main className=" flex flex-col bg-blue-200 grow">
                         <Outlet />
                    </main>
               <Footer />
          </div>
     )
}

export default LayoutMain;
