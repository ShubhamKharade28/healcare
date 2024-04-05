'use client';

import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import InfoCard from "./components/home/InfoCard";
import AppointmentImg from "../assets/images/appointment.png";
import aisupportImg from "../assets/images/ai-support.jpg";
import pharmacyImg from "@/assets/images/pharmacy.png";

const HealcareHome = () => {
	const [isLogined, setIsLogined] = useState(false);

	useEffect(() => {
		let id = localStorage.getItem('id');
		if(id){
			setIsLogined(true);
		}else{
			setIsLogined(false);
		}
	}, [])
	return (
		<main className="flex min-h-screen w-screen flex-col relative">
			<Background />
			<Navbar />
			<div className="w-full flex flex-col justify-center px-10 py-10 md:px-20 md:py-28 gap-3 md:gap-7 
				text-2xl md:text-6xl theme-color-dark font-bold">
				<h1>
					Navigating Paths to Better
				</h1>
				<div className="flex gap-4 items-end">
					<h1>Health</h1>
					<button 
						className="text-base md:text-xl font-semibold theme-bg w-fit hover:scale-95
						mx-2 md:mx-10 py-1 md:py-2 h-fit px-3 md:px-5 rounded md:rounded-lg text-white">
						{isLogined ?
							<Link href="/bookappointment/hospital">Book an Appointment</Link>
							: 
							<Link href="/signin">Sign In to Continue</Link>
						}
					</button>
				</div>
			</div>
			<section className="w-full px-7 md:px-20 py-10 flex flex-col gap-10">
				<InfoCard 
					path={aisupportImg} 
					text={"HealCare is a cutting-edge healthcare website designed to provide seamless support to users through an intuitive AI bot interface. Whether you have a pressing medical concern or simply need advice on maintaining a healthy lifestyle, our AI bot is here to assist you 24/7."}
				/>
				<InfoCard 
					flip path={AppointmentImg} 
					text={"HealCare also simplifies the process of booking medical appointments with leading hospitals and healthcare providers. With just a few clicks, you can schedule appointments with specialists, arrange diagnostic tests, and manage your healthcare appointments effortlessly."}
				/>
				<InfoCard 
					path={pharmacyImg} 
					text={"In addition to our AI-powered support and appointment booking services, HealCare also features a comprehensive directory of medical stores. Need to refill your prescription or purchase over-the-counter medications? Simply browse our directory to find nearby pharmacies and medical stores, complete with contact information and directions."}
				/>
			</section>
			<Footer />
		</main>
	);
}

export default HealcareHome;