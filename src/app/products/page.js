import Link from "next/link";
const products = [
    {
        title: 'Iphone',
    },
    {
        title: 'Samsung',
    },
    {
        title: 'Nokia',
    }
]
export const metadata = {
    title: 'Products',
    description: "Products list",
};

export default function Products() {
    return (<>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
            <nav className="flex flex-col gap-1 p-2">
                {products.map((product, key) =>
                    <Link href={`products/${product.title}`} key={key} role="button"
                         className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start">
                        {product.title}
                    </Link>
                )}
            </nav>
        </div>
    </>);
}
