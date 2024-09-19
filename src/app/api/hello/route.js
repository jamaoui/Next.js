// Search parameters /?name=....&age=...
export async function GET(request) {
       const searchParams = request.nextUrl.searchParams;
       const name = searchParams.get('name') || '';

       return Response.json(`Hello ${name}`)
}
// JSON (POST,...)
export async function POST(request) {
    const json = await request.json();
    return Response.json(`Hello ${json.name}`)
}
// Form Data (POST,...)

export async function PATCH(request) {
    const formData = await request.formData();
    const name = formData.get('name')
    return Response.json(`Hello ${name}`)
}
