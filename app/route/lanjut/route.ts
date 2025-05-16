import { NextRequest } from "next/server";
import { data } from "./data";

export async function GET(req : NextRequest){
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filterComment = query ? data.filter((dataIni) => dataIni.komentar.includes(query)) : data;

    // http://localhost:3000/route/lanjut?query=kedua
    // kedua bisa diisi dengan apapun yang ingin dicari pada komentar

    return Response.json(filterComment)
}


export async function POST(req: Request){
    const comment = await req.json();
    const newComment = {
        id: data.length+1,
        komentar: comment.komentar
    };
    data.push(newComment);
    return new Response(JSON.stringify(newComment), {
        headers: { "Contnet-Type": "application/json" },
        status: 201
    })
}