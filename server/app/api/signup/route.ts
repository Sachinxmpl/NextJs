import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const client = new PrismaClient()


export async function GET(req : NextRequest, res : NextResponse){
    try{    
            const username = "sachin"
            const user = await client.user.findFirst({
                where : { email : username }
            })
            return NextResponse.json({
                user
            })
    }
    catch(e){
        console.log(e)
        return NextResponse.json({
            message : "user is created successfully"
        })
    }
}


export async function POST(req : NextRequest){
    try{

        const body  = await req.json()
        
        await client.user.create({
            data : {
                email : body.username,
                password : body.password
            }
        })
        return NextResponse.json({
            message : "you are logged in "
        })
    }catch(e){
        console.log(e)
        return NextResponse.json({
            message : "error in request"
        })
    }
}