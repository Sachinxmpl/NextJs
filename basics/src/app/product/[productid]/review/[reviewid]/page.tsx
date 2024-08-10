import React from 'react'

function page({params} : {params : {productid : string, reviewid : string}}) {
  return (
    <h1> this is the review of product {params.productid}  review no if {params.reviewid}</h1>
    
  )
}

export default page