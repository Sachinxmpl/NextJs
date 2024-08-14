export default function Docs({params} : {params : {
    slug : string[]
}}){
    if(params.slug.length==2){
        return <h1>
            Viewing the page for {params.slug[0]} and for concept : {params.slug[1]}    
        </h1>
    }
    else if (params.slug.length==3){
        return <h1>
            Viewing the page for {params.slug[0]}and for concept : {params.slug[1]} and for example  : {params.slug[2]}
        </h1>
    }
    else if (params.slug.length==1 ){
        return <h1>
            Viewing the page for {params.slug[0]}
        </h1>
    }
    else{
        return <h1> 
          wrong no of dynamic routes on url 
        </h1>
    }
}