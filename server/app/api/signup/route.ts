import { NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest){
    console.log("hi")
    const body = await req.json()
    console.log(body)

    return NextResponse.json({
        message : "you are logged in "
    })
}