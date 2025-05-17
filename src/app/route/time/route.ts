export const dynamic = "force-static";
export const revalidate = 10;

export async function GET() {
    // caching in route handlers
    
    return Response.json({ time:new Date().toLocaleTimeString() })
}