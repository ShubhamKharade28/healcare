
import Labs from "@/utils/labs";
import { NextResponse } from "next/server";

export async function GET(){
    let three = Labs.slice(0,3);
    return NextResponse.json(three);
}