
import { NextResponse } from "next/server";
import Stores from "@/utils/stores";

export async function GET(){
    let three = Stores.slice(0,3);
    return NextResponse.json(three);
}