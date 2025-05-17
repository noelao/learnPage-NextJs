"use client"
import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    const iniApa = pathname.split("/")[4];
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <h1>Not Found {iniApa}</h1>
            <p>This page could not be found</p>
        </div>
    );
}