import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    // return NextResponse.redirect(new URL("/", req.url));

    const res = NextResponse.next();
    const themePreference = req.cookies.get("theme")
    if( !themePreference ){
        res.cookies.set("theme", "dark")
    }

    res.headers.set("custom-headerIni", "headerIniTidak-1234")

    return res;

    // if(req.nextUrl.pathname === "/route"){
    //     return NextResponse.redirect(new URL("/learn", req.nextUrl))
    // }
}

// export const config = {
//     matcher: "/route",
// };
