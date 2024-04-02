import './services.css';
import Image from 'next/image';
import healCareLogo from '@/assets/images/healcare_logo.jpg';
import LOGo from '@/assets/images/hospital-profile.jpeg';
import Navbar from '../components/Navbar/Navbar';
import Background from '../components/Background';



const Services = () => {
    return (
        < main className="flex flex-col w-screen relative">
            <Navbar/>
            <h5 id="heading"> Hospitals</h5>
            <div class="tp">

                <div class="hospital1">
                    <div class="pic">
                        <Image src={LOGo} />
                    </div>
                    <div class="info">
                        <p>hdgfhsgf</p>
                    </div>

                </div>
                <div class="hospital2">
                    <div class="pic">
                        <Image src={LOGo} />
                    </div>
                    <div class="info">
                        <p>hdgfhsgf</p>
                    </div>

                </div>
                <div class="hospital3">
                    <div class="pic">
                    <Image src={LOGo} />
                    </div>
                    <div class="info">
                        <p>hdgfhsgf</p>
                    </div>
                </div>
                <div class="btn">See All </div>
            </div>




            <h5 id="heading"> Drug Store</h5>
            <div class="tp2">

                <div class="hospital4">
                    <div class="pic">
                    <Image src={LOGo} />
                    </div>
                    <div class="info">

                    </div>

                </div>
                <div class="hospital5">
                    <div class="pic">
                    <Image src={LOGo} />
                    </div>
                    <div class="info">
                        <p>hdgfhsgf</p>
                    </div>

                </div>
                <div class="hospital6">
                    <div class="pic">
                    <Image src={LOGo} />
                    </div>
                    <div class="info">
                        <p>hdgfhsgf</p>
                    </div>
                </div>
                <div class="btn">See All </div>
            </div>



            <h5 id="heading"> Labs</h5>
            <div class="tp3">

                <div class="hospital7">
                    <div class="pic">
                    <Image src={LOGo} />
                    </div>
                    <div class="info">

                    </div>

                </div>
                <div class="hospital8">
                    <div class="pic">
                    <Image src={LOGo} />
                    </div>
                    <div class="info">
                        <p>hdgfhsgf</p>
                    </div>

                </div>
                <div class="hospital9">
                    <div class="pic">
                    <Image src={LOGo} />
                    </div>
                    <div class="info">
                        <p>hdgfhsgf</p>
                    </div>
                </div>
                <div class="btn">See All </div>
            </div>
            <hr /><br />


            <h1 id='Other_Services'>Other Services</h1>
            <div className='OtherServicesDivision'>

                <div class='tp4'>
                    <h2 className='AI'> AI Support</h2>
                </div>


                <div class='tp5'>
                    <h2 className='Delivery'>Delivery Services</h2>
                </div>
            </div>
        </main>
    )
}

export default Services;