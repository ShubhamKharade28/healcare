import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Link from "next/link";
import "./login.css"
import Footer from "../components/Footer";

const Login = () => {
    return (
        <main>
            <Background />
            <Navbar/>
            <cards>
                <card>
                    <h1>LOGIN</h1>
                        <input type="Email" placeholder="Phone Number or Email" required/>
                    {/* span section containg password input field and forgoit password text */}
                    <span>
                        <input type="password" placeholder="Password" />
                        <Link href="/forgotpass" id="forgot">Forgot password?</Link>
                    </span>
                    {/* LOGIN button */}
                    <button>LOGIN</button>
                    
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