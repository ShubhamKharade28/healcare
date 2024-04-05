'use client';

import storeProfileImg from '@/assets/images/hospital-profile.jpeg';
import StoreProfilePopup from './StoreProfilePopup';
import Image from 'next/image';
import { useState } from 'react';

const StoreCard = ({store}) => {
    const [togglePopup, setTogglePopup] = useState(false);

    function closePopup(){
        setTogglePopup(false);  
    }

    return (
        <div className="flex gap-2 p-2 bg-[#ffffff71] rounded-lg py-3 px-3 h-fits"
            style={{boxShadow: '0px 0px 5px rgba(0,0,0,0.2)'}}
        >
            {togglePopup && (<StoreProfilePopup closePopup={closePopup} store={store}/>)}
            <Image 
                src={storeProfileImg}
                className="w-20 h-16 md:h-20 object-cover rounded-lg cursor-pointer"
                onClick={() => setTogglePopup(true)}
            />
            <div className="flex flex-col px-2 md:gap-1 w-max cursor-pointer"
                onClick={() => setTogglePopup(true)}
            >
                <h2 className="text-gray-900 font-semibold text-lg w-max">{store.name}</h2>
                <span className="text-xs text-gray-500 max-w-[10px] w-max">{store.phone}</span>
                <span className="text-xs text-gray-500 w-max">{store.email}</span>
            </div>
        </div>
    )
}

export default StoreCard;