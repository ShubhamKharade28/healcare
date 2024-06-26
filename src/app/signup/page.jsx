'use client';

import { useState } from "react";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [medHistory, setMedHistory] = useState('');
    const [gender, setGender] = useState('');
    const router = useRouter();

    const handleSignup = async (e) => {
        e.preventDefault();
        if(!name) {
            alert('Please enter your name');
            return;
        }
        if(!email) {
            alert('Please enter your email');
            return;
        }
        if(!phone) {
            alert('Please enter your phone number');
        }
        if(!dob){
            alert('Please enter your date of birth')
        }
        if(!gender){
            alert('Please select your gender')
        }
        let body = {
            name, email, phone, gender, dob, medHistory, password
        };
        let res = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify(body),
        });

        reset(); 

        res = await res.json();
        if(!res.ok){
            alert(req.message);
            return;
        }
        alert('Signed up successfully');
        localStorage.setItem('id', res.id);
        router.push('/');
    }

    function reset(){
        setName('');
        setEmail('');
        setGender('');
        setDob('');
        setMedHistory('');
        setPhone('');
        setPassword('');
    }

    return (
        <main className="w-screen min-h-screen flex flex-col relative items-center">
            <Background/>
            <Navbar/>
            <form className="h-1/2 bg-[#ffffffb2] py-2 px-3 flex flex-col gap-3 w-4/5 md:w-1/2 lg:w-2/5 mt-5 mb-10 rounded-xl text-sm md:text-base"
                style={{boxShadow: '1px 1px 10px rgba(0,0,0,0.2)'}}
            >
                <h2 className="theme-color font-bold w-full text-center my-3 text-xl">Create Account</h2>
                <input placeholder="Full Name" 
                    className="outline-none py-2 px-3 rounded-lg border"
                    value={name} onChange={(e) => setName(e.target.value)}
                />
                <input placeholder="Email" type="email"
                    className="outline-none py-2 px-3 rounded-lg border"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                />
                <input placeholder="Phone number"
                    className="outline-none py-2 px-3 rounded-lg border"
                    value={phone} onChange={(e) => setPhone(e.target.value)}
                />
                <span className="flex items-center w-full justify-between bg-white rounded-lg border">
                    <div className="text-gray-600 px-2 text-sm md:text-base">Date of Birth  </div>
                    <input type="date" 
                        placeholder="Date of Birth"
                        className="outline-none py-2 px-3 rounded-lg w-2/3"
                        value={dob} onChange={(e) => setDob(e.target.value)}
                    />
                </span>
                
                <select className="outline-none py-2 px-3 rounded-lg border"
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option selected disabled className="outline-none py-2 px-3 rounded-lg border">Gender</option>
                    <option value="Male" className="outline-none py-2 px-3 rounded-lg border">Male</option>
                    <option value="Female" className="outline-none py-2 px-3 rounded-lg border">Female</option>
                    <option value="Other" className="outline-none py-2 px-3 rounded-lg border">Other</option>
                </select>
                <input placeholder="Medical history in short (optional)"
                    className="outline-none py-2 px-3 rounded-lg border"
                    value={medHistory} onChange={(e) => setMedHistory(e.target.value)}
                />
                <input placeholder="Create password" type="password"
                    className="outline-none py-2 px-3 rounded-lg border"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                    className="theme-bg text-white rounded-lg py-2 font-bold text-sm my-1"
                    onClick={handleSignup}
                >
                    Sign Up
                </button>
                <span className="w-full flex justify-center gap-2 text-xs md:text-sm my-2">
                    Already an user? 
                    <Link href="/signin" className="theme-color font-bold">Sign In</Link>
                </span>
            </form>
            <Footer/>
        </main>
    )
}

export default Signup;