
import { NextResponse } from "next/server";
import Users from "@/utils/users";

function findUser(userId){
    let User = null;
    Users.forEach(user => {
        if(user.email === userId || user.phone === userId){
            User = user;
            return false;
        }
    });
    return User;
}

export async function POST(req){
    try {
        req = await req.json();
        const { userId, password } = req;
        const user = findUser(userId);
        if(!user){
            return NextResponse.json({
                ok: false,
                message: 'User not found',
            });
        }

        if(user.password === password){
            return NextResponse.json({
                ok: true,
                id: user.id,
            })
        }
        else{
            return NextResponse.json({
                ok: false,
                message: 'Incorrect password',
            });
        }
    } catch (e) {
        console.log(e);
        return NextResponse.json({
            ok: false,
            message: 'Unknown server error',
        });
    }
}