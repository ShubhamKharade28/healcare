"use client";

import Navbar from "../components/Navbar/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";
import HospitalCard from "../components/hospitals/HospitalCard";
import LabCard from "../components/labs/LabCard";
import { useState, useEffect } from "react";
import Link from "next/link";

const Services = () => {
  const [hospitals, setHospitals] = useState([]);
  const [labs, setLabs] = useState([]);

  useEffect(() => {
    getHospitals();
    getLabs();
  }, []);

  const getLabs = async () => {
    let res = await fetch("/api/labs/three");
    res = await res.json();
    setLabs(res);
  };

  const getHospitals = async () => {
    let res = await fetch("/api/hospitals/three");
    res = await res.json();
    console.log(res);
    setHospitals(res);
  };

  return (
    <main className="flex flex-col w-screen relative">
      <Navbar />
      <Background />
      <section className="w-full py-8 px-3 md:px-10 flex flex-col gap-3 md:gap-5">
        <h2 className="text-2xl font-semibold px-3 flex w-full justify-between items-end">
            <span>Hospitals</span>
            <Link className="text-base px-3" href="/hospitals">See all</Link>
        </h2>
        <div className="flex flex-col md:grid grid-cols-3 gap-3">
        { hospitals.length && hospitals.map((hospital) => <HospitalCard hospital={hospital}/>) }
        </div>
      </section>
      <section className="w-full py-8 px-3 md:px-10 flex flex-col gap-3 md:gap-5">
        <h2 className="text-2xl font-semibold px-3 flex w-full justify-between items-end">
            <span>Pathology Labs</span>
            <Link className="text-base px-3" href="/labs">See all</Link>
        </h2>
        <div className="flex flex-col md:grid grid-cols-3 gap-3 ">
        { labs.length && labs.map((lab) => <LabCard lab={lab}/>) }
        </div>
      </section>
      <section>
        
      </section>
      <Footer />
    </main>
  );
};

export default Services;
