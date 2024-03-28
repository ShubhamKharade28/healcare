'use client';

import HospitalProfilePopup from "../components/profile/HospitalProfilePopup";
import { useState } from "react";

const HospitalsPage = () => {
    const [togglePopup, setTogglePopup] = useState(false);
    return (
        <div className="w-screen min-h-screen flex flex-col items-center justify-center relative">
            <div className="bg-gray-300 text-black font-bold px-10 py-10 text-2xl rounded-lg"
                onClick={() => {setTogglePopup(true)}}
            >
                <h1>Sion Hospital</h1>
            </div>
            {togglePopup && <HospitalProfilePopup setTogglePopup={setTogglePopup}/>}
        </div>
    );
}

export default HospitalsPage;