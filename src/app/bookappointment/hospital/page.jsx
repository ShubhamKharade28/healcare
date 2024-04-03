"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar/Navbar";
import Background from "@/app/components/Background";
import Footer from "@/app/components/Footer";

function HospitalAppointment() {
  const [allHospitals, setAllHospitals] = useState([]);
  const [hospital, setHospital] = useState('');
  const [hospitalId, setHospitalId] = useState(null);

  const [departments, setDepartments] = useState([]);
  const [department, setDepartment] = useState('');

  const [patient, setPatient] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const [btnContent, setBtnContent] = useState('Request an Appointment');

  useEffect(() => {
	
    getHospitals();
  }, []);

  const getHospitals = async () => {
    let res = await fetch("/api/hospitals");
    res = await res.json();
    setAllHospitals(res);
  };

  const requestAppointment = async (e) => {
	e.preventDefault();
	// api call to request appointment
	setBtnContent('Appointment request sent');
  }

  return (
    <main className="w-screen min-h-screen flex flex-col items-center">
      <Background />
      <Navbar />
      <form
        className="h-1/2 bg-[#ffffffb2] py-2 md:px-5 px-3 flex flex-col gap-2 w-4/5 md:w-1/2 lg:w-2/5 my-12 rounded-xl text-sm md:text-base"
        style={{ boxShadow: "1px 1px 10px rgba(0,0,0,0.2)" }}
      >
        <h2 className="theme-color font-bold w-full text-center my-2 md:my-3 text-xl">
          Book an Appointment
        </h2>
		<span className="flex py-3 px-4 rounded-lg border w-full bg-white justify-between gap-5">
			<span className="w-1/2">Patient Name</span>
			<input 
				className="outline-none w-full" placeholder="Jane Broy"
				value={patient} onChange={(e) => setPatient(e.target.value)}
			/>
		</span>
		<span className="flex py-3 px-4 rounded-lg border w-full bg-white justify-between gap-5">
			<span className="w-1/2">Patient Age</span>
			<input 
				className="outline-none w-full" placeholder="18" type="number"
				value={age} onChange={(e) => setAge(e.target.value)}
			/>
		</span>
		<span className="flex py-3 px-4 rounded-lg border w-full bg-white justify-between gap-5">
			<span className="w-3/5">Patient Gender</span>
			<select
				value={gender}
				className="outline-none w-full"
				onChange={(e) => setGender(e.target.value)}
			>
				<option value="Male">Male</option>
				<option value="Female">Female</option>
				<option value="Other">Other</option>
			</select>
		</span>
		<span className="flex py-3 px-4 rounded-lg border w-full bg-white justify-between gap-5">
			<span className="w-1/2">Hospital</span>
			<select
				className="outline-none w-full"
				onChange={(e) => {
					const selectedHospitalId = +e.target.value;
					const selectedHospital = allHospitals.find((hosp) => hosp.id === selectedHospitalId);
					if(!selectedHospital) return;

					setHospital(selectedHospital.name);
					setHospitalId(selectedHospitalId);

					let depts = selectedHospital.departments;
					if(depts && depts.length > 0){
						setDepartments(depts);
						setDepartment('');
					}else{
						setDepartments([]);
					}
				}}
				value={hospital}
			>
				{allHospitals.length > 0 && allHospitals.map((hosp) => <option value={hosp.id} key={hosp.id}>{hosp.name}</option>)}
			</select>
		</span>
		{(departments && departments.length > 0) && (
			<span className="flex py-3 px-4 rounded-lg border w-full bg-white justify-between gap-5">
				<span className="w-1/2">Gender</span>
				<select
					className="outline-none w-full"
					onChange={(e) => setDepartment(e.target.value)}
					value={department}
				>
					{departments.map((dept) => <option value={dept.name} key={dept.name}>{dept.name}</option>)}
				</select>
			</span>
		)}
		<span className="flex py-3 px-4 rounded-lg border w-full bg-white justify-between gap-5">
			<span className="w-1/2">Expected Date</span>
			<input type="date" value={date} onChange={(e) => setDate(e.target.value)} 
				className="outline-none w-full text-center"
			/>
		</span>
		<span className="flex py-3 px-4 rounded-lg border w-full bg-white justify-between gap-5">
			<span className="w-1/2">Expected Time</span>
			<input type="time" value={time} onChange={(e) => setTime(e.target.value)} 
				className="outline-none w-full text-center"
			/>
		</span>
        <button className="theme-bg text-white rounded-lg py-2 font-bold my-3 md:my-4"
			onClick={requestAppointment}
		>
			{btnContent}
        </button>
      </form>
      <Footer />
    </main>
  );
}

export default HospitalAppointment;
