'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import healCareLogo from '@/assets/images/logo-bgless.png';
import { CgMenu } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isLogined, setIsLogined] = useState(false);
    const [navToggle, setNavToggle] = useState(false);

    return (
        <main className="w-full h-20 lg:h-full">
            <nav className="mx-10 hidden md:flex items-center justify-between my-5 gap-3 text-white">
                <section className="flex items-center justify-between w-full px-3 py-3 bg-[#1a759f] rounded-full"
                    // style={{
                    //     boxShadow: '1px 5px 10px rgb(0,0,0,0.3)',
                    // }}
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
            {navToggle ? (
                <motion.nav
                    className="flex md:hidden flex-col py-5 fixed top-0 left-0 theme-bg gap-20 pt-16
                         text-white w-full h-screen items-center"
                    initial={{x: -100}}
                    animate={{x: 0}}
                    transition={{
                        duration: 0.4,
                    }}
                >
                    <div className="flex items-center w-full justify-evenly">
                        <logo className="flex items-center gap-2">
                            <span className="bg-white rounded-full h-10">
                                <Image src={healCareLogo} className="h-full w-auto"/>
                            </span>
                            <span className="text-xl font-bold">HealCare</span>
                        </logo>
                        <button className="text-3xl hover:scale-90 px-5"
                            onClick={() => setNavToggle(false)}
                        >
                            <RxCross2 />
                        </button>
                    </div>
                    <menu className="flex flex-col items-center">
                        <LinkTo label="Home" path="/" />
                        <LinkTo label="Services" path="/services" />
                        <LinkTo label="About us" path="/aboutus" />
                        <LinkTo label="Contact us" path="/contactus" />
                    </menu>
                    <Link href="/gfa" className="bg-[#4493b7] py-3 px-5 font-semibold rounded-full">Get Free Advice</Link>

                    {isLogined && <profile>
                        <div className="bg-[#1f4152] h-16 w-16 rounded-full"></div>
                    </profile>}
                </motion.nav>
                ) 
                : (
                <nav className="md:hidden theme-bg flex text-white w-screen py-2 px-5 justify-between">
                    <button className="md:hidden theme-bg rounded-lg p-2 text-3xl hover:scale-90"
                        onClick={() => setNavToggle(true)}
                    >
                        <CgMenu />  
                    </button>
                    <logo className="flex items-center gap-10 mx-10">
                        <span className="text-xl font-bold">HealCare</span>
                        <span className="bg-white rounded-full h-9">
                            <Image src={healCareLogo} className="h-full w-auto"/>
                        </span>
                    </logo>
                </nav>
               )
            }
        </main>
    )
}

const LinkTo = ({label,path}) => {
    return (
    <Link 
        href={path}
        className="hover:opacity-90 hover:scale-90 transition-all duration-200 text-lg hover:border-y border-y-gray-200 w-full
            py-3 px-20 font-semibold text-center
        "
    >
        {label}
    </Link>
    );
}

export default Navbar;