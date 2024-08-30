"use server"
import client from "../db"

export default async function solve(username : string , password : string){
        try{
                const newUser = await client.fecher.create({
                    data : {
                        username : username , password : password
                    } , 
                    select : {
                        username : true , 
                        password : true 
                    }
                })
                console.log("New use is " , newUser)
                return newUser
        }catch(e){
            return {
                "message" : "error"
            }
        }
}