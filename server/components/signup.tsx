"use client"


import axios from "axios"
import {useState} from "react"


export default function Singup(){
    const [username , setUsername] = useState<string>("")
    const [password , setPassword] = useState<string>("")
    return(
        <div style={{margin : "20px auto"}}>
                <form>
                        <input type="text" placeholder="Enter text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                        <input type="text" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                        <button type="submit" onSubmit={handleSubmit}> Submit </button>
                </form>
        </div>
    )
}

const handleSubmit = async () => {
    await axios.post("http://localhost:3000/api/signup", {
        username: username,
        password: password
    })
}