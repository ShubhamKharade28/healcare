

import Link from "next/link";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Footer from "./components/Footer";

const HealcareHome = () => {
	return (
		<main className="flex min-h-screen w-screen flex-col relative">
			<Background />
			<Navbar />
			<div className="h-screen"></div>
			<Footer />
		</main>
	);
}

export default HealcareHome;