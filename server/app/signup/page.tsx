import SignUp from "../../components/signup"
import Image from "next/image"


export default function main(){
    return (
        <>
            <SignUp/>
            <Image
                src={"/../../image.png"} 
                alt="image" 
                width={500} 
                height ={500}
            />
        </>
    )
}