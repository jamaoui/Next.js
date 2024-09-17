export const dynamic = 'force-dynamic'
function prettyDate2() {
    const date = new Date(parseInt(Date.now()));
    const localeSpecificTime = date.toLocaleTimeString();
    return localeSpecificTime.replace(/:\d+ /, ' ');
}

export default async function RandomPage() {
    return (
        <main className="container">
            {prettyDate2()}
        </main>
    );
}
