"use client";
import { serverSideFunction } from "@/src/utils/server-utils"

export default function ClientRoutePafe() {
    const result = serverSideFunction()
    return (
        <div className="container flex-col">
            <h1>Client Route</h1>
            {result}
        </div>
    )
};
