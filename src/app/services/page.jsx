"use client";

import Navbar from "../components/Navbar/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";
import HospitalCard from "../components/hospitals/HospitalCard";
import LabCard from "../components/labs/LabCard";
import { useState, useEffect } from "react";
import Link from "next/link";
import StoreCard from "@/app/components/stores/StoreCard"; 
import aisupportImg from "@/assets/images/ai-support.jpg";
import pharmacyImg from "@/assets/images/pharmacy.png";
import Image from 'next/image';

const Services = () => {
  const [hospitals, setHospitals] = useState([]);
  const [labs, setLabs] = useState([]);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    getHospitals();
    getLabs();
    getStores();
  }, []);

  const getStores = async () => {
    let res = await fetch('/api/stores/three');
    res = await res.json();
    setStores(res);
  }

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
        <div className="flex flex-col md:grid grid-cols-3 gap-3 md:gap-5">
        { hospitals.length ? hospitals.map((hospital) => <HospitalCard hospital={hospital}/>) : <></>}
        </div>
      </section>

      <section className="w-full py-8 px-3 md:px-10 flex flex-col gap-3 md:gap-5">
        <h2 className="text-2xl font-semibold px-3 flex w-full justify-between items-end">
            <span>Pathology Labs</span>
            <Link className="text-base px-3" href="/labs">See all</Link>
        </h2>
        <div className="flex flex-col md:grid grid-cols-3 gap-3 md:gap-5">
        { labs.length ? labs.map((lab) => <LabCard lab={lab}/>) : <></> }
        </div>
      </section>

      <section className="w-full py-8 px-3 md:px-10 flex flex-col gap-3 md:gap-5">
        <h2 className="text-2xl font-semibold px-3 flex w-full justify-between items-end">
            <span>Medical Stores</span>
            <Link className="text-base px-3" href="/stores">See all</Link>
        </h2>
        <div className="flex flex-col md:grid grid-cols-3 gap-3 md:gap-5">
        { stores.length ? stores.map((store) => <StoreCard store={store}/>) : <></>}
        </div>
      </section>

      <divider className="w-2/3 h-0.5 bg-gray-500 my-10 rounded-lg mx-auto"></divider>

      <section className="w-full flex flex-col items-center gap-10 mb-20 text-white text-sm md:text-base">
        <h1 className="text-xl md:text-2xl font-semibold text-black">Other Services</h1>
        <div className="flex flex-col md:flex-row items-center gap-10 justify-center w-full">
          <Link href="/aiadvice" className="relative flex flex-col items-center md:w-1/5 w-4/5 h-60 md:h-96 rounded-lg overflow-hidden p-5 gap-4 border theme-bg">
            {/* <div className="absolute top-0 left-0 w-full h-full z-0 bg-white opacity-40"></div> */}
            <h2 className="text-lg md:text-xl font-semibold z-[2]">AI Support</h2>
            <p className="z-[2]">
            HealCare is a cutting-edge healthcare website designed to provide seamless support to users through an intuitive AI bot interface. Whether you have a pressing medical concern or simply need advice on maintaining a healthy lifestyle, our AI bot is here to assist you 24/7.
            </p>
          </Link>
          <Link href="/stores" className="relative flex flex-col items-center w-4/5 md:w-1/5 h-60 md:h-96  rounded-lg overflow-hidden  p-5 gap-4 border theme-bg">
            {/* <div className="absolute top-0 left-0 w-full h-full z-0 bg-white opacity-40"></div> */}
            <h2 className="text-lg md:text-xl font-semibold z-[2]">Home Delivery</h2>
            <p className="z-[2]">
            In addition to our AI-powered support and appointment booking services, HealCare also features a comprehensive directory of medical stores. Need to refill your prescription or purchase over-the-counter medications? Simply browse our directory to find nearby pharmacies and medical stores, complete with contact information and directions.
            </p>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Services;
