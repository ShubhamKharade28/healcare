'use client';

import labProfileImg from '@/assets/images/hospital-profile.jpeg';
import LabProfilePopup from './LabProfilePopup';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const LabCard = ({lab}) => {
    
    const [togglePopup, setTogglePopup] = useState(false);

    function closePopup(){
        setTogglePopup(false);  
    }

    return (
        <div className="flex gap-2 p-2 bg-[#ffffff71] rounded-lg py-3 px-3 h-fits"
            style={{boxShadow: '0px 0px 5px rgba(0,0,0,0.2)'}}
        >
            {togglePopup && (<LabProfilePopup closePopup={closePopup} lab={lab}/>)}
            <Image 
                src={labProfileImg}
                className="w-20 h-16 md:h-20 object-cover rounded-lg cursor-pointer"
                onClick={() => setTogglePopup(true)}
            />
            <div className="flex flex-col px-2 w-max cursor-pointer md:gap-1"
                onClick={() => setTogglePopup(true)}
            >
                <h2 className="text-gray-900 font-semibold text-lg w-max">{lab.name}</h2>
                <span className="text-xs text-gray-500 max-w-[10px] w-max">{lab.email}</span>
                <span className="text-xs text-gray-500 w-max">{lab.phone}</span>
            </div>
        </div>
    )
}

export default LabCard;