'use client';

import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

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
			<div className="w-full flex flex-col justify-center p-10 md:p-20 gap-3 md:gap-7 
				text-2xl md:text-6xl theme-color-dark font-bold">
				<h1>
					Navigating Paths to Better
				</h1>
				<div className="flex gap-4 items-end">
					<h1>Health</h1>
					<button 
						className="text-base md:text-xl font-semibold theme-bg w-fit hover:scale-95
						mx-2 md:mx-10 py-1 md:py-2 h-fit px-3 md:px-5 rounded md:rounded-lg text-white">
						
					</button>
				</div>
				
			</div>
			<Footer />
		</main>
	);
}

export default HealcareHome;