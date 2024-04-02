
import Labs from "@/utils/labs";
import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json(Labs);
}