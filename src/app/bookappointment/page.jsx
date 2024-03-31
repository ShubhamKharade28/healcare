import React from 'react'
import "./bookappointment.css"
import Navbar from '../components/Navbar'
import Background from '../components/Background'
import Footer from '../components/Footer'

function Page() {
  return (
    <main>
        <Background/>
        <Navbar/>
        <form action="">
            <h1>Book an Appointment</h1>

            <div className='full'> 
                <label htmlFor="patName">Patient Name: </label>
                <input type="text" required id='patName'/>
            </div>


            <div className='full'>
                <label htmlFor="Hospital;">Hospital: </label>
                <select name="Hospital" id="Hospital">
                    <option value="">Hospital 1</option>
                    <option value="">Hospital 2</option>
                    <option value="">Hospital 3 </option>
                    <option value="">Hospital 4</option>
                    <option value="">Hospital 5</option>
                </select>
            </div>


            <div className='full'>
                <label htmlFor="Department">Department: </label>
                <select name="department" id="Department">
                    <option value="">Department 1</option>
                    <option value="">Department 2</option>
                    <option value="">Department 3</option>
                    <option value="">Department 4</option>
                    <option value="">Department 5</option>
                    <option value="">Department 6</option>
                </select>
            </div>

            <div className="oneline">
                <div>
                    <label htmlFor="DateFrm">Date From: </label>
                    <input type="date" name="DateFrm" id="DateFrm" />
                </div>

                <div>
                    <label htmlFor="DateTo">Date To: </label>
                    <input type="Date" id='DateTo' />
                </div>
            </div>

            <div className="oneline">
                <div>
                    <label htmlFor="Gender">Gender</label>
                    <select name="Gender" id="Gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="Age">Age: </label>
                    <input type="numbers" id='Age' />
                </div>
            </div>

        </form>


      <Footer/>
    </main>
  )
}

export default Page
