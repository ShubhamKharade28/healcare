import Background from "../components/Background";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./signup.css"
const Signup = () => {
    return (
        <main>
            <Background/>
            <Navbar/>
            {/* Thois the tag containing the card element */}
            <cards>
                {/* This is the Card */}
                <form>
                    {/* heading of the card */}
                    <h1>Sigup to HealCare</h1>
                    <section className="PersonalDetail">
                        <h2>Personal Details</h2>
                        <div className="inputs">
                            <div className="name">
                                <label htmlFor="Name">Name: </label>
                                <input type="text" id="Name" required />
                            </div>  
                        
                            <div className="oneLine">

                                <div>
                                    <label htmlFor="DOB">Date of Birth: </label>
                                    <input type="Date" id="DOB" required/>
                                </div>

                                <div>
                                    <label htmlFor="Gender">Gender:  </label>
                                    <select name="Gender" id="Gender" required>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="oneLine">                                
                                <div>
                                    <label htmlFor="pNo">Phone No: </label>
                                    <input type="Numbers" id="pNo" required/>
                                </div>
    
                                <div>
                                    <label htmlFor="Email">Email: </label>
                                    <input type="email" id="Email" />
                                </div>
                            </div>

                            <div className="address">
                                <label htmlFor="Address">Address</label>
                                <textarea name="Address" id="Address" cols="66" rows="3" required></textarea>
                            </div>
                        </div>

                        

                    </section>

                    <section2>
                        <h2>Medical Details</h2>
                        <div className="Med_details">


                            <div>
                                <label htmlFor="BloodGrp">Blood Group: </label>
                                <select name="BloodGrp" id="BloodGrp">
                                    <option value="O-">O-</option>
                                    <option value="O+">O+</option>
                                    <option value="A-">A-</option>
                                    <option value="A+">A+</option>
                                    <option value="B-">B-</option>
                                    <option value="B+">B+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="AB+">AB+</option>
                                </select>
                            </div>


                            <div>
                                <label htmlFor="Weight">Weight: </label>
                                <input type="Numbers" id="Weight"/>
                            </div>


                            <div>
                                <label htmlFor="Height">Height:</label>
                                <input type="Numbers" id="Height" required/>
                            </div>


                            <div>
                                <label htmlFor="Allergies">Allergies: </label>
                                <input type="text" id="Allergies" required/>
                            </div>
                        </div>
                    </section2>
                    <div className="signup"><button >Sign Up</button></div>
                </form>
            </cards>
            <Footer/>
        </main>
    )
}

export default Signup;