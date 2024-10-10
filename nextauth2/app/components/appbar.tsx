"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const styles = {
	border: "2px solid black",
	padding: "8px",
	color: "black",
	backgroundColor: "white",
	margin: "4px"
}

export default function Appbar() {
	const router = useRouter();
	const session = useSession()
	if (session) {
		return <div>
			<button onClick={() => {
				router.push("/api/auth/signin")
			}}>Logout </button>
			<button onClick={() => signOut()}>Logout</button>
			{
				JSON.stringify(session)
			}
		</div>
	}
	return <div>
		<button onClick={() => signIn()}>SignIn</button>
	</div>
}