
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import './hospitals.css'
import Image from 'next/image';
import LOGo from '@/assets/images/hospital-profile.jpeg';
import searcg from '@/assets/images/searcg.svg';
import moreoptions from '@/assets/images/moreoptions.svg';

function page() {
  return (
    <main className="flex flex-col w-screen relative" >
      <Navbar />
      <div className='Explorehospitals'>
        <h2 id='hoshead'>Explore Hospitals</h2>
        <div className='Searchbar'>
          <div class="search">
            <Image id="searchicon" src={searcg} />
          </div>
          <div class="moreoptions">
            <Image id="more" src={moreoptions} />
          </div>
        </div>  

      </div>
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


    </main>
  )
}

export default page
