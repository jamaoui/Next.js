import {cookies} from "next/headers";

export async function GET(request) {
    // Api, route handler,
    //request.cookies.get()

    // Server component (cookies())
    const cookie = cookies();
    let name = "unknown"
    if (cookie.has('name')) {
        name = cookie.get('name').value
    }
    cookie.delete('name')

    /*
     const res = new Response(JSON.stringify({ message: 'Cookie set!' }), {
        status: 200,
        headers: {
          'Set-Cookie': 'myCookieName=myValue; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400', // 1 day
          'Content-Type': 'application/json',
        },
       });
     */
    return Response.json(`Hello ${name}`)
}