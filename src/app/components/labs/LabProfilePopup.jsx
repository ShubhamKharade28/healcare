'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import labProfileImage from '@/assets/images/hospital-profile.jpeg';
import { MdOutlineEmail, MdPhone, MdOutlineLocationOn } from 'react-icons/md';
import { GiHypodermicTest } from "react-icons/gi";
import Link from 'next/link';


function LabProfilePopup({closePopup, lab}){
    const name = lab.name;
    const address =  lab.address;
    const email = lab.email
    const phone = lab.phone;
    const tests = lab.tests;

    return(
        <div 
            className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center "
        >
            <div className="absolute z-[20] top-0 left-0 w-screen h-screen bg-gray-700 opacity-40 cursor-pointer"
                onClick={closePopup}>
            </div>
            <motion.div 
                className=" w-4/5 md:w-1/2 overflow-y-scroll scroll-hidden rounded-xl p-4 md:p-5 bg-white z-[21] flex flex-col gap-5 hidden-scroll"
                initial={{scale: 0.7}}
                animate={{scale: 1}}
                transition={{duration: 0.5, type: 'spring'}}
            >
                <div className="flex flex-col md:flex-row gap-4 md:gap-5">
                    <div className="w-28 h-28 md:h-64 md:w-1/3 rounded-lg overflow-hidden">
                        <Image src={labProfileImage} className="h-full w-full object-cover" />
                    </div>
                    <div className="w-4/5 md:w-2/3 flex flex-col gap-1 md:gap-1.5 text-sm">
                        <h1 className="font-bold text-lg md:text-4xl mb-0.5 md:mb-2">{name}</h1>
                        <span className="flex gap-2 items-start text-xs md:text-sm">
                            <MdOutlineLocationOn className="text-3xl md:text-xl text-gray-700"/>
                            {address}
                        </span>
                        <span className="flex gap-2 items-center text-xs md:text-sm">
                            <MdOutlineEmail className="text-sm md:text-lg text-gray-700"/>
                            {email}
                        </span>
                        <span className="flex gap-2 items-center text-xs md:text-sm">
                            <MdPhone className="text-sm md:text-lg text-gray-700"/>
                            {phone}
                        </span>
                        <span className="flex gap-2 items-center text-xs md:text-sm">
                            <GiHypodermicTest className="text-sm md:text-lg text-gray-700"/>
                            {tests}
                        </span>
                        <Link href="/bookappointment/lab" className="bg-blue-500 hover:bg-blue-700 justify-self-end text-white text-sm md:text-base
                             px-3 md:px-4 py-1.5 md:py-2 rounded w-fit mt-2">
                            Book an Appointment</Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default LabProfilePopup;