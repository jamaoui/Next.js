import {Separator} from "@/components/ui/separator";

export default async function Analytics() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return (
        <div className="mx-auto my-5 flex gap-x-2 w-10/12">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold">Analytics</h2>
                    <Separator/>
                </div>
                <div className="max-w-screen-xl px-4 mx-auto text-center lg:px-6">
                    <div className=" max-w-screen-md gap-8 mx-auto dark:text-white">
                        <div className="flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
                            <dd className="font-light text-gray-500 dark:text-gray-400">developers</dd>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
                            <dd className="font-light text-gray-500 dark:text-gray-400">contributors</dd>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
                            <dd className="font-light text-gray-500 dark:text-gray-400">organizations</dd>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
