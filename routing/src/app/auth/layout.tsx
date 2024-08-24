import React from "react"

export default function main({children} : {
    children : React.ReactNode
}){
    return (
       <>
                 <h1> For authentication</h1>
                 {children}
       </>
    )
}