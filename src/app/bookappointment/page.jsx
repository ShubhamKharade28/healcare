import React from 'react'
import "./bookappointment.css"
import Navbar from '../components/Navbar'
import Background from '../components/Background'
import Footer from '../components/Footer'

function Page() {
  return (
    <main className="w-screen min-h-screen flex flex-col">
        <Background/>
        <Navbar/>
        
      <Footer/>
    </main>
  )
}

export default Page
