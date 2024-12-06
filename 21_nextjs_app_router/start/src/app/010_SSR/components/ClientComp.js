"use client"

import { useState, useEffect } from "react"

export default function SSR() {
    const [state, setState] = useState("souske");
    useEffect(() => {
        setState("aaaaaa client")
    }, [])

    return (
        <>
            <div>{state}</div>
        </>

    )
}