export default function About(){
    console.log("server component rendered");


    return (
        <div>
            
            <h1>About{new Date().toLocaleTimeString()}</h1>  
        </div>
    )
}