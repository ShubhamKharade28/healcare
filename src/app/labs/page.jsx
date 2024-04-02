"use client";

import Navbar from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import LabCard from "../components/labs/LabCard";
import Footer from "../components/Footer";
import Background from "../components/Background";

function LabsPage() {
  const [labs, setLabs] = useState([]);

  useEffect(() => {
    getLabs();
  }, []);

  const getLabs = async () => {
    let res = await fetch("/api/labs");
    res = await res.json();
    setLabs(res);
  };

  return (
    <main className="flex flex-col w-screen relative items-center">
      <Background />
      <Navbar />
      <section className="w-full flex flex-col md:grid grid-cols-3 gap-4 md:gap-7 px-4 md:px-10 my-5 md:my-10">
      {
        labs.map((lab) => (
          <LabCard lab={lab}  key={lab.id}/>
        ))
      }
      </section>
      <div className="h-[20vh]"></div>
      <Footer />
    </main>
  );
}

export default LabsPage;