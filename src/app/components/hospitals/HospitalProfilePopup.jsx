'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import hospitalProfileImage from '@/assets/images/hospital-profile.jpeg';
import { MdOutlineEmail, MdLink, MdOutlineLocationOn } from 'react-icons/md';
import { IoMdTime } from 'react-icons/io';
import Link from "next/link";
import { useState } from "react";

function HospitalProfilePopup({closePopup, hospital}){
    const name = hospital.name;
    const address =  hospital.address;
    const email = hospital.email
    const website = hospital.website;
    const time = hospital.time;

    return(
        <div 
            className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center "
        >
            <div className="absolute z-[20] top-0 left-0 w-screen h-screen bg-gray-700 opacity-40 cursor-pointer"
                onClick={closePopup}>
            </div>
            <motion.div 
                className=" w-4/5 md:w-1/2 overflow-y-scroll scroll-hidden rounded-xl p-3 md:p-5 bg-white z-[21] flex flex-col gap-5 hidden-scroll"
                initial={{scale: 0.7}}
                animate={{scale: 1}}
                transition={{duration: 0.5, type: 'spring'}}
            >
                <div className="flex flex-col md:flex-row gap-4 md:gap-5">
                    <div className="w-28 h-28 md:h-60 md:w-1/3 rounded-lg overflow-hidden">
                        <Image src={hospitalProfileImage} className="h-full w-full object-cover" />
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
                            <MdLink className="text-sm md:text-lg text-gray-700"/>
                            <Link href={'https://' + website}>{website}</Link>
                        </span>
                        <span className="flex gap-2 items-center text-xs md:text-sm">
                            <IoMdTime className="text-sm md:text-lg text-gray-700"/>
                            {time}
                        </span>
                        <button className="bg-blue-500 hover:bg-blue-700 justify-self-end text-white text-sm md:text-base
                             px-3 md:px-4 py-1.5 md:py-2 rounded w-fit mt-2">
                            Book an Appointment</button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <Departments departments={hospital.departments}/>
                    {/* <Reviews /> */}
                </div>
            </motion.div>
        </div>
    );
}

const Reviews = () => {
    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        setRating(rate);
      }
    return (
        <div className="flex flex-col gap-2">
            <h2>Reviews</h2>
            
        </div>
    )
}

const Departments = ({departments}) => {
    return (
        <div className="flex flex-col w-full gap-2">
            <h2 className="font-semibold underline underline-offset-8 text-sm">Departments & Doctors</h2>
            <div className="flex flex-col gap-2 px-2 py-2">
            {
                departments.map((dept) => {
                    return (
                        <div className="flex items-end gap-5">
                            <span className="w-full">{dept.name}</span>
                            <span className="w-full text-[0.7rem] font-light">- {dept.doctor}</span>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default HospitalProfilePopup;