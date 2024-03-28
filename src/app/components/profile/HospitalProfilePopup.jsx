'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import hospitalProfileImage from '@/assets/images/hospital-profile.jpeg';
import { MdOutlineEmail, MdLink, MdOutlineLocationOn } from 'react-icons/md';
import { IoMdTime } from 'react-icons/io';
import Link from "next/link";
import { useState } from "react";

function HospitalProfilePopup({setTogglePopup}){
    const name = "Sion Hospital";
    const address =  "College Building -Tele Department, Lokmanya Tilak Muncipal H, Sion, Mumbai, Maharashtra 400022";
    const email = "lokmanyahospital@gmail.com";
    const website = "itmgh.com";
    const time = "24 hours";

    return(
        <div 
            className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center"
        >
            <div className="absolute z-[1] top-0 left-0 w-screen h-screen bg-gray-700 opacity-40"
                onClick={() => setTogglePopup(false)} >
            </div>
            <motion.div 
                className="w-1/2 h-4/5 rounded-xl p-5 bg-white z-[2] flex flex-col gap-5"
                initial={{scale: 0.7}}
                animate={{scale: 1}}
                transition={{duration: 0.5, type: 'spring'}}
            >
                <div className="flex gap-5">
                    <div className="w-1/3 h-full rounded-lg overflow-hidden">
                        <Image src={hospitalProfileImage} className="h-full w-full" />
                    </div>
                    <div className="w-2/3 flex flex-col gap-1.5 text-sm">
                        <h1 className="font-bold text-4xl mb-2">{name}</h1>
                        <span className="flex gap-2 items-start text-sm">
                            <MdOutlineLocationOn className="text-3xl text-gray-700"/>
                            {address}
                        </span>
                        <span className="flex gap-2 items-center text-sm">
                            <MdOutlineEmail className="text-lg text-gray-700"/>
                            {email}
                        </span>
                        <span className="flex gap-2 items-center text-sm">
                            <MdLink className="text-lg text-gray-700"/>
                            <Link href={'https://' + website}>{website}</Link>
                        </span>
                        <span className="flex gap-2 items-center text-sm">
                            <IoMdTime className="text-lg text-gray-700"/>
                            {time}
                        </span>
                        <button className="bg-blue-500 hover:bg-blue-700 justify-self-end text-white px-4 py-2 rounded w-fit mt-2">
                            Book an Appointment</button>
                    </div>
                </div>
                <div className="gap-5 flex">
                    <HospitalProfileMenu />
                    <div className="w-1/3 rounded-lg flex flex-col">
                        <h3 className="text-xl font-bold">Reviews</h3>
                        <div>

                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

const HospitalProfileMenu = () => {
    const doctors = ['Dr. A. Deshmukh', 'Dr. R. Prasad', 'Dr. R. Patil'];
    const departments = ['Pediatrics', 'Gynecology', 'Radiology', 'Cardiology', 'Oncology'];

    const [menu, setMenu] = useState('departments');

    return (
        <div className="w-2/3 rounded-lg h-full overflow-hidden pr-5">
            <div className="flex gap-1 font-semibold cursor-pointer">
                <span 
                    className={`px-2 py-1 rounded-t-sm ${menu=='departments'?'underline underline-offset-8 font-bold text-blue-600':''}`}
                    onClick={() => setMenu('departments')}>Departments</span>
                <span
                    className={`px-2 py-1 rounded-t-sm g ${menu=='doctors'?'underline underline-offset-8 font-bold text-blue-600':''}`}
                    onClick={() => setMenu('doctors')}>Doctors</span>
            </div>
            {menu === 'departments' && 
                <motion.div className="flex flex-col gap-2 py-3 px-4 overflow-y-scroll scrollbar-hidden"
                    initial={{x: -50}}
                    animate={{x: 0}}
                    transition={{duration: 0.3}}
                >
                {departments.map((dept) => 
                    <div className="flex justify-between px-2 py-1 rounded">
                        <span>{dept}</span>
                        <button className="text-blue-600 hover:bg-blue-100 rounded px-2 py-1 text-xs font-semibold">Add Appointment</button>
                    </div>
                )}
                </motion.div>
            }
            {menu === 'doctors' && 
                <motion.div className="flex flex-col gap-2 py-3 px-4 overflow-y-scroll scrollbar-hidden"
                    initial={{x: 50}}
                    animate={{x: 0}}
                    transition={{duration: 0.3}}
                >
                {doctors.map((doct) => 
                    <div className="flex justify-between px-2 rounded">
                        <span>{doct}</span>
                        <button className="text-blue-600 hover:bg-blue-100 rounded px-2 py-1 text-xs font-semibold">Add Appointment</button>
                    </div>
                )}
                </motion.div>
            }
        </div>
    );
}

export default HospitalProfilePopup;