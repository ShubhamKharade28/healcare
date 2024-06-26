"use client";

import Navbar from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import HospitalCard from "../components/hospitals/HospitalCard";
import Footer from "../components/Footer";
import Background from "../components/Background";

function HospitalsPage() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    getHospitals();
  }, []);

  const getHospitals = async () => {
    let res = await fetch("/api/hospitals");
    res = await res.json();
    console.log(res);
    setHospitals(res);
  };

  return (
    <main className="flex flex-col w-screen relative items-center">
      <Background />
      <Navbar />
      <section className="w-full flex flex-col md:grid grid-cols-3 gap-4 md:gap-7 px-4 md:px-10 my-5 md:my-10">
      {
        hospitals.map((hospital) => (
          <HospitalCard hospital={hospital}  key={hospital.id}
          />))
      }
      </section>
      <div className="h-[40vh]"></div>
      <Footer />
    </main>
  );
}

export default HospitalsPage;
