import { getServerSession } from "next-auth";
import {authOptions} from "../api/auth/[...nextauth]/options";

async function getUser(){
    const session = await getServerSession(authOptions);
    return session 
}

export default async function User(){
    const session = await getUser()
    console.log("the server site session is " , session)

    return (
        <div>
            HI 
            {JSON.stringify(session)}
        </div>
    )
}