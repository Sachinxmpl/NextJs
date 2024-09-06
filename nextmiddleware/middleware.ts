import { NextRequest, NextResponse } from "next/server";

export function middleware(req : NextRequest){
    console.log("this is inside middleware")
    console.log(req.nextUrl.pathname)
    
    //middlewares logic

    if(req.nextUrl.pathname.startsWith("/api")){
        console.log("Inside the api middleware handler")
        return NextResponse.redirect(new URL("/dashboard" , req.url))
    }
    if(req.nextUrl.pathname === "/dashboard"){
        console.log("Insider the dashboard middleware ahndler ")
        return NextResponse.next()
    }
}

//problems 
// it runs in all routes , all both server and client routes 

//to restrict where midleware run on certain route

export const config = {
    matcher : ["/api/:path*" , "/dashboard" ]
}
