
import healCareLogo from '@/assets/images/logo-bgless.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="px-28 flex py-10 items-start justify-between bg-[#1a759f] text-white">
            <div className="flex flex-col gap-10 items-start">
                <div className="flex gap-3 items-center">
                    <span className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
                        <Image src={healCareLogo} className="h-10 w-auto"/>
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
            <div className="flex flex-col gap-10 items-start">
                <h2 className="text-2xl font-bold">Solutions</h2>
                <div className="flex flex-col gap-3">
                    <Link href="#">Hospitals</Link>
                    <Link href="#">Medicals</Link>
                    <Link href="#">Laboratories</Link>
                    <Link href="#">Home Delivery</Link>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <Link href="/contactus" className="w-40 border-b border-b-white text-center py-2">Contact us</Link>
                <Link href="/joinus" className="w-40 border-b border-b-white text-center py-2">Join us</Link>
            </div>
            <div className="flex gap-3 items-center text-4xl">
                <FaSquareFacebook />
                <FaSquareInstagram />
                <FaSquareWhatsapp />
            </div>
        </footer>
    )
}

export default Footer;