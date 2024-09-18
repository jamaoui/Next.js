export async function GET(request, {params}) {
       return Response.json(`Hello ${params.name}`)
}