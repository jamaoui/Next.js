import Link from "next/link";

export default async function Admin() {

    return (
            <div className="mx-auto my-5 flex gap-x-2 w-10/12">
                Hi from Admin.
                <Link href={'/dashboard'}>Go Back</Link>
            </div>
    );
}
