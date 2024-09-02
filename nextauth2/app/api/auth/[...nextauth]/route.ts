import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import client from "../../../../db"; 

interface User {
  id: number;
  username: string;
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: { label: 'email', type: 'text', placeholder: 'Enter username' },
          password: { label: 'password', type: 'password', placeholder: 'Enter password' },
        },
        async authorize(credentials: any) {
            console.log(credentials)
            return {
                id: "1" , 
                name : "sachinthis" , 
                email : "thisissachin"
            };
        },
      })
  ],
  secret: process.env.NEXTAUTH_SECRET , 
  callbacks : {
    signIn : ({user})=>{
      if(user.email === "random@gmail.com")
    }
  }
})

export const GET = handler;
export const POST = handler;
