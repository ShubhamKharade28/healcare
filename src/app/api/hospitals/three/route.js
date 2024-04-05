
import Hospitals from "@/utils/hospitals";
import { NextResponse } from "next/server";

export async function GET(){
    let three = Hospitals.slice(0,3);
    return NextResponse.json(three);
}