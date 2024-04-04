import { NextResponse } from "next/server";
import getAiResponse from "@/gemini/ai-config";

export async function POST(req){
    try {
        req = await req.json();
        const { prompt } = req;
        if(!prompt){
            return NextResponse.json({
                ok: false,
                message: 'Missing prompt in text',
            });
        }
        // if(prompt === prevPrompt) {
        //     return NextResponse.json({
        //         aiResponse: "Please provide different prompt",
        //     });
        // }

        let aiResponse = await getAiResponse(prompt);

        return NextResponse.json({
            ok: true,
            aiResponse,
        });
    } 
    catch (e) {
        console.log(e);
        return NextResponse.json({
            ok: false,
            message: 'Uknown server error!',
        })
    }
}