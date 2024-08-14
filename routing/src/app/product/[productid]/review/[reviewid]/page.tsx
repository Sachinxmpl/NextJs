import React from 'react'
import  { notFound } from 'next/navigation'

function page({params} : {params : {productid : string, reviewid : string}}) {
  if(Number(params.reviewid)>1000){
    notFound()
  }
  return (
    <h1> this is the review of product {params.productid}  review no if {params.reviewid}</h1>
    
  )
}

export default page