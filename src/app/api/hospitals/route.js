
import Hospitals from "@/utils/hospitals";
import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json(Hospitals);
}