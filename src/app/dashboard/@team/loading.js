import {Separator} from "@/components/ui/separator";

export default async function TeamLoader() {
    return (
            <div className="mx-auto my-5 flex gap-x-2 w-10/12">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 bg-gray-700">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold ">Our Team</h2>
                        <Separator/>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        Team's loading...
                    </div>
                </div>
            </div>
    );
}
