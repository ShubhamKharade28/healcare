import Users from "@/utils/users";
import { NextResponse } from "next/server";

export function GET({params}){
    let id = +params.id;
    let user = Users.find((user) => user.id === id);
    if(user){
        return NextResponse.json({ok: true, user});
    }
    return NextResponse.json({ok: false, message: 'User not found'});
}