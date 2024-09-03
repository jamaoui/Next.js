
async function PhotosList() {
    const data = await fetch('https://jsonplaceholder.typicode.com/photos')
    const photos = await data.json()
    return photos.map((photo, index) => (
        <div key={index}
             className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={photo.url} alt=""/>
            </a>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {photo.title}
                </h5>
            </div>
        </div>
    ))
}

export default async function Photos() {
    return <div className={'grid container grid-cols-3 gap-y-2'}>
            <PhotosList/>
    </div>
}
