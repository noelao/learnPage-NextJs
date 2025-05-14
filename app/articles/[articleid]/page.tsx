"use client"
import Link from "next/link";
import { use } from "react";

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function Article({
    params,
    searchParams
}: {
    params: Promise<{ articleid: string }>;
    searchParams: Promise<{ bah?: "eng" | "ina" | "jwa" }>;
}){
    const random = getRandomInt(2);
    if(random === 1){
        throw new Error("Error ini loading article");
    }

    const { articleid } = use(params);
    const { bah = "eng" } = use(searchParams);
    return (
        <div className="container flex-col">
            <div className="flex h-screen flex-col">
                <h1>article {articleid}</h1>
                <p>{bah == "eng" ? "english" : bah == "ina" ? "indonesia" : bah =="jwa" ? "jawa" : "ingries"}</p>
            </div>

            <div className="flex w-full p-8 gap-3 bg-emerald-400 h-max rounded-[12px_12px_0px_0px]">
                <p>language : </p>
                <div className="multiHasa flex flex-col gap-0.1">
                    <Link href={`/articles/${articleid}?bah=eng`}>english</Link>
                    <Link href={`/articles/${articleid}?bah=ina`}>indonesia</Link>
                    <Link href={`/articles/${articleid}?bah=jwa`}>jawa</Link>
                </div>
            </div>
        </div>
    )
}
