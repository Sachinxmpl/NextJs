import  CredentialsProvider  from "next-auth/providers/credentials"
import { NextRequest } from "next/server"
import client from "../../../../db"

import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";


export const authOptions = {
    providers : [
            CredentialsProvider({
                name : "authwithcreditials" , 
                credentials :{
                    username : {
                        label : 'Username' , 
                        type : "text" , 
                        placeholder : 'Enter Username' ,
                    } , 
                    password : {
                        label 	: 'Password' ,
                        type : "password" , 
                        placeholder : 'Enter Password' ,
                    }
                } , 
                async authorize (credentials : any) : Promise<any>{
                    const {username , password} = credentials
                    try{
                            const user = await client.user.findUnique({
                                where : {username }
                            })
                            if(!user){
                                return null
                            }
                            return {
                                id : user.id , 
                                name : user.username ,
                                email : "sachinxmpl6@gmail.com"
                            }
                    }catch(e : any){
                       return null
                    }
                }
            }) , 
            GoogleProvider({
                    clientId : process.env.GOOGLE_ID || "" , 
                    clientSecret : process.env.GOOGLE_SECRET || ""
            }) , 
            GitHubProvider({
                clientId: process.env.GITHUB_ID || "" ,
                clientSecret: process.env.GITHUB_SECRET || ""
              })
    ] , 
    secret : process.env.NEXTAUTH_SECRET , 
    callbacks : {
         signIn({user } : {user : any}){
            if(user.username === "csrf"){
                return false 
            }
            return true 
        } , 
        async jwt({token , user } : {token :any , user : any}) {
                console.log("The token is " , token )
                token.id = token.sub
                return token 
        } , 
        async session({session , token , user} : any){
            if(session && session.user){
                session.user.id = token.id
            }
            return session
        }
    }
}