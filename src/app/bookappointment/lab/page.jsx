"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar/Navbar";
import Background from "@/app/components/Background";
import Footer from "@/app/components/Footer";

function BookAppointment() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    getHospitals();
  }, []);

  const getHospitals = async () => {
    let res = await fetch('/api/hospitals');
    res = await res.json();
    setHospitals(res);
  }

  return (
    <main className="w-screen min-h-screen flex flex-col items-center">
      <Background />
      <Navbar />
      <form className="h-1/2 bg-[#ffffffb2] py-3 md:px-5 px-3 flex flex-col gap-3 w-4/5 md:w-1/2 lg:w-2/5 my-20 rounded-xl text-sm md:text-base"
                style={{boxShadow: '1px 1px 10px rgba(0,0,0,0.2)'}}
            >
                <h2 className="theme-color font-bold w-full text-center my-5 md:my-7 text-xl">Book an Appointment</h2>
                <input placeholder="Email or phone number" 
                    className="outline-none py-3 px-4 rounded-lg border"
                    // value={userId} onChange={(e) => setUserId(e.target.value)}
                />
                <input placeholder="password" type="password"
                    className="outline-none py-3 px-4 rounded-lg border"
                    // value={password} onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                    className="theme-bg text-white rounded-lg py-2 font-bold my-5"
                    // onClick={handleLogin}s
                >
                    Request an Appointment
                </button>
            </form>
      <Footer />
    </main>
  );
}

export default BookAppointment;
