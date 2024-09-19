//1 export const dynamic = "force-dynamic"
import {cookies, headers} from "next/headers";

export async function GET(request) {
    // 2 const s = request.nextUrl.searchParams
    /* 3
        cookies()
        headers()
    */

    // ONLY GET WILL BE CACHED
    // 4 - POST/PUT/DELETE....

    return Response.json(new Date().toISOString());
}