
import healCareLogo from '@/assets/images/logo-bgless.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="flex px-5 lg:px-28 py-7 md:py-10 items-center md:items-start justify-between bg-[#1a759f] text-white text-xs md:text-base">
            <div className="flex flex-col gap-5 items-start">
                <div className="flex gap-2 md:gap-3 items-center">
                    <span className="h-9 w-9 md:h-12 md:w-12 bg-white rounded-full flex items-center justify-center">
                        <Image src={healCareLogo} className="h-7 md:h-10 w-auto"/>
                    </span>
                    <span className="text-xl font-semibold">HealCare</span>
                </div>
                <div className="flex flex-col gap-3">
                    <span>Shubham Kharade</span>
                    <span>Vaishnavi Mankar</span>
                    <span>Rohit Khawale</span>
                    <span>Atharv Joshi</span>
                </div>
            </div>
            <div className="flex flex-col gap-5 items-start">
                <h2 className="text-lg md:text-2xl font-bold">Solutions</h2>
                <div className="flex flex-col gap-3">
                    <Link href="#" className="hover:opacity-80">Hospitals</Link>
                    <Link href="#" className="hover:opacity-80">Medicals</Link>
                    <Link href="#" className="hover:opacity-80">Laboratories</Link>
                    <Link href="#" className="hover:opacity-80">Home Delivery</Link>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 md:gap-60 items-center md:items-start">
                <div className="flex flex-col gap-3">
                    <Link href="/contactus" className="w-40 border-b border-b-white text-center py-2 hover:opacity-80">Contact us</Link>
                    <Link href="/joinus" className="w-40 border-b border-b-white text-center py-2 hover:opacity-80">Join us</Link>
                </div>
                <div className="flex gap-3 items-center text-3xl md:text-4xl">
                    <FaSquareFacebook className="hover:opacity-80"/>
                    <FaSquareInstagram className="hover:opacity-80"/>
                    <FaSquareWhatsapp className="hover:opacity-80" />
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;