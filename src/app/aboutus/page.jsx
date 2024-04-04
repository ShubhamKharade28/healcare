
import Background from "../components/Background";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import cloudImg from "@/assets/images/cloud.png";
import cloudTwoImg from "@/assets/images/cloud2.png";
// import cloudThreeImg from "@/assets/images/cloud3.png";

const Aboutus = () => {
    return (
        <main className="w-screen min-h-screen relative flex flex-col items-center">
            <Background />
            <Navbar />
            <section className="flex flex-col h-60  md:h-72 items-center justify-center theme-color-dark gap-3 md:gap-10">
                <h1 className="font-bold text-3xl md:text-4xl">Nice to meet you</h1>
                <h3 className="font-semibold md:text-xl">We are here to serve you as you live on mission</h3>
            </section>
            <div className="flex justify-start w-full relative h-fit">
                <div className="w-4/5 md:w-1/2 h-auto relative">
                    <Image src={cloudImg} className="w-full h-auto"/>
                    <span className="absolute z-10 top-1/2 left-12 md:left-32 text-center text-sm md:text-xl font-semibold theme-color-dark">
                        HealCare is a service Based Company<br/> 
                        which provides health related <br/>
                        digital services to the user.
                    </span>
                </div>
            </div>
            <div className="flex justify-end w-full relative h-fit">
            <div className="w-4/5 md:w-1/2 h-auto relative">
                    <Image src={cloudTwoImg} className="w-full h-auto"/>
                    <span className="absolute z-10 top-[37%] md:top-[43%] right-12 md:right-32 text-sm md:text-xl font-semibold theme-color-dark
                        flex flex-col gap-3 items-end md:items-center
                    ">
                       <h3 className="font-semibold text-base md:text-3xl">Services provides by us,</h3>
                       <ul className="flex flex-col items-start gap-2 w-60 font-normal">
                        <li>1. Appointment booking with Hospitals & Labs</li>
                        <li>2. Home Delivery from Medical Stores</li>
                        <li>3. AI advice</li>
                       </ul>
                    </span>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Aboutus;