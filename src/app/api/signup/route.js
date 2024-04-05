import Users from "@/utils/users";
import { NextResponse } from "next/server";

function checkEmailExists(email){
    let x = true;
    Users.forEach((user) => {
        if(user.email === email){
            x = false;
            return false;
        }
    });
    return x;
}

function saveUser(user){
    Users.push(user);
}

export async function POST(req){
    try{
        req = await req.json();
        const { name, email, phone, dob, gender, medHistory, password } = req;
        
        let emailValidity = checkEmailExists(email);
        if(!emailValidity){
            return NextResponse.json({ok: false, message: 'Email already exists'});
        }

        let id = Users[Users.length-1].id + 1;
        saveUser({
            id,
            name,
            email,
            phone,
            dob,
            gender,
            medHistory,
            password,
        });

        console.log(Users);
        return NextResponse.json({ok: true, id});
    }catch(e){
        console.log(e);
        return NextResponse.json({ok: false, message: e});
    }
}