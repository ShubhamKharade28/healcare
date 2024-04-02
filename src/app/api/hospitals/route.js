
import Hospitals from "@/utils/hospitals";
import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json(Hospitals);
}