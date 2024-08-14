// 'use client'

// import { useParams } from "next/navigation"

// export default function Product() {
//     const {productid} = useParams()
//   return (
//     <main>
//             <h1>Product no : {productid}</h1>
//     </main>
//   )
// }

export default function Product({params} : {params : {productid : string}}) {
    console.log(params)
  return (
    <main>
            <h1>Product no : {params.productid}</h1>
    </main>
  )
}