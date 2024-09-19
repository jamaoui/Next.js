import {headers} from "next/headers";

export async function GET(request) {
    const head = headers()
    console.log(head.get('X-NAME'))
    return new Response(JSON.stringify({message: 'Header set!'}), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });

}