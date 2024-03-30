// import './services.css';
import Image from 'next/image';
import healCareLogo from '@/assets/images/healcare_logo.jpg';
import Navbar from '../components/Navbar';
import Background from '../components/Background';

const Services = () => {
    return (
        <main className="w-screen min-h-screen flex flex-col relative">
            <Background />
            <Navbar />
            <section className="flex flex-col w-full mx-10">
                <h2 className="text-3xl">Hospitals</h2>
                <div>

                </div>
            </section>
        </main>
    )
}

export default Services;