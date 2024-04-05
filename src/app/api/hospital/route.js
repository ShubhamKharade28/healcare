
import { NextResponse } from "next/server";
import Hospitals from "@/utils/hospitals";

function findHospital(id){
    let hospital = Hospitals.find(hosp => hosp.id === id);
    return hospital;
}

export async function GET({params}){
    let id = +params.id;
    let hospital = findHospital(id);
    if(hospital){
        return NextResponse.json({ok: true, hospital });
    }else{
        return NextResponse.json({ok: false, message: "Hospital not found"});
    }
}