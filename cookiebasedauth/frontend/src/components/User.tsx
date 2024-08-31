import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config.js";

export const User = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/user` ,  {
            withCredentials: true,
          })
            .then(res => {
                console.log("user data fetched")
                setUserData(res.data);
            })
            console.log(userData)
    }, []);

    return(
        <div>
            The user has id : {userData?.userId}
        <br /><br />
        <button onClick={async () => {
            await axios.post(`${BACKEND_URL}/logout`, {}, {
                withCredentials: true,
            })
        }}>Logout</button>
    </div>
    )
}