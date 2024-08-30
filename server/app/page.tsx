import axios from "axios";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function getDetails() {
    const user = await client.user.findFirst({
      where : { email : "sachin"}
    })
    return user
}

//aysnchronous components in serside components only 

export default async function Home() {
  const userDetails = await getDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userDetails?.password}
                </div>
                
                {userDetails?.email}
            </div>
        </div>
    </div>
  );
}
