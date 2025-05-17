import { redirect } from "next/navigation";

export async function GET() {
    // redirect cuma mampir exekusi beberapa perintah lalu pergi ke lain page
    redirect ('/route/lagi')
}