'use client';
import './navbar.css';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {	
	const LoginStatus = false;
	const handleClick = () => {};
	const display = "display";
	return (
		<nav className="flex items-center">
			{LoginStatus ? (
				<div id="header">
					<div className="navbar">
						<div className="navLeftSec">
							<a href="#home" className="companyName">
								<h1>
									{/* <img src={LOGO} alt="LOGO" id="LOGO" /> */}
									HealCare
								</h1>
							</a>
							<div className="sections">
								<p>Home</p>
								<p>Services</p>
								<p>About Us</p>
							</div>
						</div>
						<p className="freeAdvice">Get Free Advice</p>
					</div>
					<div className="profileImg">
						<img src={UserLogin} alt="User Login" />
					</div>
				</div>
			) : (
				<div className="heading2">
					<div className="navbar" id="unloginedNav">
						<div className="navLeftSec">
							<a href="#home" className="companyName">
								<h1>
									{/* <Image src={LOGO} alt="LOGO" id="LOGO" /> */}
									HealCare
								</h1>
							</a>
							<div className="sections">
								<p>Home</p>
								<p>Services</p>
								<p>About Us</p>
							</div>
						</div>
						<div className="navEnd">
							<p className="freeAdvice">Get Free Advice</p>
							<a href="#" 
								// onClick={handleClick}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									viewBox="0 -960 960 960"
									width="24"
								>
									<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			)}

			<div className="sideBar" id={display}>
				<a href="#home" className="companyName">
					<h1>
						{/* <Image src={LOGO} alt="LOGO" id="LOGO" /> */}
						HealCare
					</h1>
				</a>
				<a href="#home">
					<p>Home</p>
				</a>
				<a href="#services">
					<p>Services</p>
				</a>
				<a href="#About Us">
					<p>About Us</p>
				</a>
				<p className="freeAdvice">Get Free Advice</p>
				<a href="#" 
					// onClick={handleClick}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24"
						viewBox="0 -960 960 960"
						width="24"
					>
						<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
					</svg>
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
