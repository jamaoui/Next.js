import Product from "@/app/product/[productId]/_components/Product";
import {notFound} from "next/navigation";

export const revalidate = 10
export async function generateStaticParams() {
    const data = await fetch('http://localhost:3000/products')
    const products = await data.json();

    return products.map((product) => ({
        productId: product.id.toString(),
    }))
}

const getProduct = async (productId) => {
    const data = await fetch(`http://localhost:3000/products?id=${productId}`);
    const product = await data.json();

    return product[0];
}

export default async function ProductDetails({params}) {
    const {productId} = await params
    const product = await getProduct(productId)
    if(product === undefined) {
        return notFound()
    }

    return (
        <main className="flex flex-col items-center justify-between">
            <Product product={product}/>
        </main>
    );
}
