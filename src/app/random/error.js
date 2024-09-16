"use client"
export default function Error({error, reset}) {
    return <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 ">{error.message}</h1>
                <p className="mb-4 text-lg font-light text-gray-500 ">Sorry, please retry. </p>
                <button onClick={reset}
                    className="inline-flex text-white bg-slate-600 transition-all hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4">
                    Retry
                </button>
            </div>
        </div>
    </section>
}
