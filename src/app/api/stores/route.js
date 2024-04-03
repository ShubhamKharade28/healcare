
import { NextResponse } from "next/server";
import Stores from "@/utils/stores";

export async function GET(){
    return NextResponse.json(Stores);
}