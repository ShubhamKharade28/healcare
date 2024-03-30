'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import healCareLogo from '@/assets/images/logo-bgless.png';

const Navbar = () => {
    const [isLogined, setIsLogined] = useState(false);
    return (
        <nav className="mx-10 flex items-center justify-between my-5 gap-3 text-white">
            <section className="flex items-center justify-between w-full px-3 py-3 bg-[#1a759f] rounded-full"
                style={{
                    boxShadow: '1px 5px 10px rgb(0,0,0,0.3)',
                }}
            >
                <logo className="flex items-center gap-3">
                    <span className="bg-white rounded-full h-12">
                        <Image src={healCareLogo} className="h-full w-auto"/>
                    </span>
                    <span className="text-2xl font-bold">HealCare</span>
                </logo>
                <menu className="flex items-center gap-10">
                    <Link href="/" className="hover:opacity-90 hover:scale-90 transition-all duration-200">Home</Link>
                    <Link href="/services" className="hover:opacity-90 hover:scale-90 transition-all duration-200">Services</Link>
                    <Link href="/aboutus" className="hover:opactiy-90 hover:scale-90 transition-all duration-200">About us</Link>
                    <Link href="/home" className="hover:opacity-90 hover:scale-90 transition-all duration-200">Contact us</Link>
                </menu>
                <Link href="/gfa" className="bg-[#4493b7] py-3 px-5 font-semibold rounded-full">Get Free Advice</Link>
            </section>
            {
                isLogined && <profile>
                    <div className="bg-[#1a759f] h-16 w-16 rounded-full"></div>
                    </profile>
            }
        </nav>
    )
}

export default Navbar;