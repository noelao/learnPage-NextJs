"use client"
// pada default next js menggunakan server component

import { useState } from "react"

export default function AboutPage() {
    const [name, setName] = useState("");
    // ini akan dikirim ke browser dan dieksekusi di browser
    // tapi di server juga akan muncul karena server akan mengecek dengan debuging
    console.log("About server component ini")

    return(
        <>

        <div className="flex flex-col">
        <h1>About Page</h1>
        <input placeholder="tulis nama..." value={name} onChange={(e) => setName(e.target.value)} />
        <p>Hello, {name}</p>

        </div>


        </>
    )
};