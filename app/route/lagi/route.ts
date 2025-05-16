import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(req : NextRequest) {
    // const requestHandlers = new Headers(req.headers);
    // console.log(requestHandlers.get("Authorization"));

    const headerList = await headers();
    console.log(headerList.get("Authorization"));

    const theme = req.cookies.get("theme");
    console.log(theme);

    const cookiesStore = await cookies();
    cookiesStore.set("resultPage", "20");

    console.log(cookiesStore.get("resultPage"));


    return new Response("<h1>Lagi di sini .</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark",
        }
    })
}