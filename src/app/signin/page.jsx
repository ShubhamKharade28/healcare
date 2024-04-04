'use client';

import { useState } from "react";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import Link from "next/link";

const SignIn = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        if(!userId){
            alert('Please enter email or phone number');
            return;
        }
        if(!password) {
            alert('Please enter your password');
            return;
        }
        e.preventDefault();

        let res = await fetch('/api/signin', {
            method: 'POST',
            body: JSON.stringify({userId, password}),
        });

        res = await res.json();
        if(!res.ok){
            alert(res.message);
            return;
        };

        alert('Signed in successfully!');
        localStorage.setItem('id', res.id);
    }

    return (
        <main className="w-screen min-h-screen flex flex-col relative items-center">
            <Background/>
            <Navbar/>
            <form className="h-1/2 bg-[#ffffffb2] py-3 md:px-5 px-3 flex flex-col gap-3 w-4/5 md:w-1/2 lg:w-2/5 my-20 rounded-xl text-sm md:text-base"
                style={{boxShadow: '1px 1px 10px rgba(0,0,0,0.2)'}}
            >
                <h2 className="theme-color font-bold w-full text-center my-5 md:my-7 text-xl">Sign in to continue</h2>
                <input placeholder="Email or phone number" 
                    className="outline-none py-3 px-4 rounded-lg border"
                    value={userId} onChange={(e) => setUserId(e.target.value)}
                />
                <input placeholder="password" type="password"
                    className="outline-none py-3 px-4 rounded-lg border"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                    className="theme-bg text-white rounded-lg py-2 font-bold my-5"
                    onClick={handleLogin}
                >
                    Sign In
                </button>
                <span className="w-full flex justify-center gap-2 text-xs md:text-sm my-2">
                    Don't have an account? 
                    <Link href="/signup" className="theme-color font-bold">Sign Up</Link>
                </span>
            </form>
            <Footer/>
        </main>
    )
}

export default SignIn;