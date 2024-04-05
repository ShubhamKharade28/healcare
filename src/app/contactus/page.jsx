'use client';

import { useState } from "react";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";

const ContactUs = () => {
    const [btnContent, setBtnContent] = useState('Submit');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const submitForm = async (e) => {
        e.preventDefault();
        setBtnContent('Submitted');
        reset();
    }

    function reset(){
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <main className="w-screen min-h-screen relative flex flex-col items-center">
            <Background />
            <Navbar />
            <form className="h-1/2 bg-[#ffffffb2] py-3 md:px-5 px-3 flex flex-col gap-3 w-4/5 md:w-1/2 lg:w-2/5 my-20 rounded-xl text-sm md:text-base"
                style={{boxShadow: '1px 1px 10px rgba(0,0,0,0.2)'}}
            >
                <h2 className="theme-color font-bold w-full text-center my-2 md:my-3 text-xl">
                    Contact Us
                </h2>
                <span className="flex py-3 px-4 rounded-lg border w-full bg-white justify-between gap-5">
                    <span className="w-1/2">Name</span>
                    <input 
                        className="outline-none w-full" placeholder="Jane Broy"
                        value={name} onChange={(e) => setName(e.target.value)}
                    />
                </span>
                <span className="flex py-3 px-4 rounded-lg border w-full bg-white justify-between gap-5">
                    <span className="w-1/2">Email</span>
                    <input 
                        className="outline-none w-full" placeholder="abc@xyz.com"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </span>
                <span className="flex py-3 px-4 rounded-lg border w-full bg-white justify-between gap-5">
                    <span className="w-1/2">Message</span>
                    <textarea
                        className="outline-none w-full" placeholder="Convey your message here"
                        rows={5}
                        value={message} onChange={(e) => setMessage(e.target.value)}
                    />
                </span>
                <button className="theme-bg text-white rounded-lg py-2 font-bold my-3 md:my-4"
                    onClick={submitForm}
                >
                    {btnContent}
                </button>
            </form>
            {/* <section className="grid grid-cols-3 gap-10 w-full px-24 my-3">
                <div className="flex flex-col gap-2 p-2 bg-[#ffffff71] rounded-lg px-3"
                    style={{boxShadow: '0px 0px 5px rgba(0,0,0,0.2)'}}
                >
                    <h2>Call us</h2>
                    <span>9625037322</span>
                    <span>75885890558</span>
                </div>
                <div className="flex flex-col gap-2 p-2 bg-[#ffffff71] rounded-lg py-3 px-3"
                    style={{boxShadow: '0px 0px 5px rgba(0,0,0,0.2)'}}
                >
                    <h2>Mail us</h2>
                    <span>rohit@gmail.com</span>
                    <span>vaishnavi@yahoo.com</span>
                </div>
                <div className="flex flex-col gap-2 p-2 bg-[#ffffff71] rounded-lg py-3 px-3"
                    style={{boxShadow: '0px 0px 5px rgba(0,0,0,0.2)'}}
                >
                    <h2>Join us</h2>
                    <span>Instagram</span>
                    <span>Facebook</span>
                    <span>Tweeter</span>
                </div>
            </section> */}
            <Footer />
        </main>
    )
}

export default ContactUs;