

import Link from "next/link";
import Navbar from "./components/navbar/Navbar";

const RelastoHome = () => {
	return (
		<main className="flex min-h-screen w-screen flex-col relative">
			<Navbar />
			<Link href="/hospitals" className="text-xl font-bold">/hospital</Link>
		</main>
	);
}

export default RelastoHome;