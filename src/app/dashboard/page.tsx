"use client"

import { useState } from "react";

export default function Dashboard(){
    const [name, setName] = useState("");
    console.log("dashboard component rendered");
    
    return (
        <div> 
            <h1>Dashboard</h1>      
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <h1>Hello, {name}!</h1>
        </div>
    )
}