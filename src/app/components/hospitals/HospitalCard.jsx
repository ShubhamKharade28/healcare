'use client';

import hospitalProfileImg from '@/assets/images/hospital-profile.jpeg';
import HospitalProfilePopup from './HospitalProfilePopup';
import Image from 'next/image';
import { useState } from 'react';


const HospitalCard = ({hospital}) => {
    
    const [togglePopup, setTogglePopup] = useState(false);

    function closePopup(){
        setTogglePopup(false);  
    }

    return (
        <div className="flex gap-2 p-2 bg-[#ffffff71] rounded-lg py-3 px-3 h-fits"
            style={{boxShadow: '0px 0px 5px rgba(0,0,0,0.2)'}}
        >
            {togglePopup && (<HospitalProfilePopup closePopup={closePopup} hospital={hospital}/>)}
            <Image 
                src={hospitalProfileImg}
                className="w-20 h-16 md:h-20 object-cover rounded-lg cursor-pointer"
                onClick={() => setTogglePopup(true)}
            />
            <div className="flex flex-col px-2 w-max cursor-pointer"
                onClick={() => setTogglePopup(true)}
            >
                <h2 className="text-gray-900 font-semibold text-lg w-max">{hospital.name}</h2>
                <span className="text-xs text-gray-500 max-w-[10px] w-max">{hospital.website}</span>
                <span className="text-xs text-gray-500 w-max">{hospital.email}</span>
            </div>
        </div>
    )
}

export default HospitalCard;