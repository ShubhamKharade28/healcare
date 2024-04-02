'use client';

import React, { useState } from 'react'
import "./bookappointment.css"
import Navbar from '../components/Navbar/Navbar'
import Background from '../components/Background'
import Footer from '../components/Footer'

function BookAppointment() {
  const [hospitals, setHospitals] = useState([]);

  return (
    <main className="w-screen min-h-screen flex flex-col items-center">
        <Background/>
        <Navbar/>
        <div className="theme-bg w-1/2 my-10">
          
        </div>
      <Footer/>
    </main>
  )
}

export default BookAppointment;
