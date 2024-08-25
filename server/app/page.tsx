
import axios from "axios";

async function getDetails() {
  const response = await axios.post("http://localhost:3000/api/user");
  return response.data;
}

//aysnchronous components in serside components only 

export default async function Home() {
  const userDetails = await getDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userDetails?.name}
                </div>
                
                {userDetails?.email}
            </div>
        </div>
    </div>
  );
}
