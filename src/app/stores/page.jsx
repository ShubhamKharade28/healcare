"use client";

import Navbar from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Background from "../components/Background";
import StoreCard from "../components/stores/StoreCard";

function StoresPage() {
  const [stores,setStores] = useState([]);

  useEffect(() => {
    getStores();
  }, []);

  const getStores = async () => {
    let res = await fetch("/api/stores");
    res = await res.json();
    setStores(res);
  };

  return (
    <main className="flex flex-col w-screen relative items-center">
      <Background />
      <Navbar />
      <section className="w-full flex flex-col md:grid grid-cols-3 gap-4 md:gap-7 px-4 md:px-10 my-5 md:my-10">
      {
        stores.map((store) => (
          <StoreCard store={store}  key={store.id}/>
        ))
      }
      </section>
      <div className="h-[20vh]"></div>
      <Footer />
    </main>
  );
}

export default StoresPage;