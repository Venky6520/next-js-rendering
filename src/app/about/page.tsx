import { cookies } from "next/headers";

export default async function About(){
    const cookieStore =await cookies()
const theme=cookieStore.get("theme") 
console.log(theme);

    console.log("server component rendered");


    return (
        <div>
            
            <h1>About{new Date().toLocaleTimeString()}</h1>  
        </div>
    )
}