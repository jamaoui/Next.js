
// Cached by default.
export async function GET() {
    const fruits = [
        'Banana',
        'Apple',
        'Water Melon'
    ]
    return Response.json(fruits)
}