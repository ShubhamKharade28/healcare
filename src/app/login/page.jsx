'use client';

import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Link from "next/link";
import "./login.css"
import Footer from "../components/Footer";
import { useState } from "react";

const Login = () => {
    const [userid, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) =>{
        e.preventDefault();

        // Logic to handle login click
    }

    return (
        <main className="flex flex-col w-screen relative">
            <Background />
            <Navbar/>
            <cards className="h-4/5">
                <card>
                    <h1 className="text-white">Login</h1>
                    <input type="Email" placeholder="Phone Number or Email" required
                        value={userid} onChange={(e) => setUserId(e.target.value)}
                    />
                    {/* span section containg password input field and forgoit password text */}
                    <span>
                        <input type="password" placeholder="Password" 
                            value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                        <Link href="/forgotpass" id="forgot">Forgot password?</Link>
                    </span>
                    {/* LOGIN button */}
                    <button onClick={handleLogin}>LOGIN</button>  
                    
                    {/* NEW User Signup */}
                    <p>New User? 
                        <Link href="/signup" id="signUp" value="Submit">Sign Up</Link>
                    </p>
                </card>
            </cards>
            <Footer/>
        </main>
    )
}

export default Login;