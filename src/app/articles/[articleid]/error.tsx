"use client"

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({error, reset}: 
    {
        error: Error,
        reset: () => void
    }) {
    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset();
        });
    };

    return (
        <div className="container flex-col">
            <h1 className="text-2xl font-bold">Err for: {error.message}</h1>
            <p>Something went wrong.</p>
            <br />
            <button className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => reload()}>
                <h2>Try Again</h2>
            </button>
        </div>
    );
}