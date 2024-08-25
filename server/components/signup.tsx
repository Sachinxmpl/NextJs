"use client"


import axios from "axios"
import {useState} from "react"


export default function SignUp(){

    const [username , setUsername] = useState<string>("")
    const [password , setPassword] = useState<string>("")

    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const response = await axios.post("http://localhost:3000/api/signup", {
            username , 
            password 
        })
        console.log(response)
    }

    return(
        <div style={{margin : "20px auto"}}>
                <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                        <input type="text" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <button type="submit"> Submit </button>
                </form>
        </div>
    )
}

