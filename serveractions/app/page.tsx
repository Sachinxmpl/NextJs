"use client"
import { useState } from "react"
import solve from "../serveractions/user"

export default function Home() {
  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")
    return (
        <>
            <form>
                  <input type="text" name="username" 
                    value={username} 
                    placeholder="Enter username "
                    onChange={(e)=> setUsername(e.target.value)}
                    />

                  <input type="password" name="password" 
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                  placeholder="Password"/>


                  <button type="submit" onClick={async(e)=> {
                    e.preventDefault()
                    const serverResponse = await solve(username , password)
                    setUsername("")
                    setPassword("")
                    console.log(serverResponse)
                  }}> 
                        submit 
                  </button>
            </form>
        </>
    )
}
