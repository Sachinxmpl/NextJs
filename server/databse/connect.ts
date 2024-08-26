import mongoose , {Schema , model} from "mongoose";

export  const connectDB = async (url : string) =>{
    try{
        const response = await  mongoose.connect(url)
        console.log("connected")
    }
    catch(e){
        console.log("error")
    }
        
}
