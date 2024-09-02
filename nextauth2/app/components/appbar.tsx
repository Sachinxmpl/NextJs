"use client"
import {signIn , signOut , useSession} from "next-auth/react"

const styles = {
    border : "2px solid black", 
    padding : "8px",
    color : "black" ,
    backgroundColor : "white" ,
    margin : "4px"
} 

export default function Appbar(){
    const session = useSession()
    return <div>
        <button onClick={()=>signIn()} style={styles}>Sign In</button>
        <button onClick={()=>signOut()} style={styles}>Signout</button>

        <div>
                {JSON.stringify(session)}
        </div>
    </div>
}