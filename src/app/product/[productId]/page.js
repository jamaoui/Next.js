import Product from "@/app/product/[productId]/_components/Product";

export async function generateStaticParams() {
    const data = await fetch('https://dummyjson.com/products?select=id')
    const products = await data.json();

    return products['products'].map((product) => ({
        productId: product.id.toString(),
    }))
}

export async function generateMetadata({params}) {
    const {productId} = await params
    const data = await fetch(`https://dummyjson.com/products/${productId}?select=title`);
    const product = await data.json();

    return {
        title: product.title,
    }
}

const getProduct = async (productId) => {
    const data = await fetch(`https://dummyjson.com/products/${productId}?select=id,title,description,category,price,sku,thumbnail`);

    return await data.json();
}

export default async function ProductDetails({params}) {
    const {productId} = await params
    const product = await getProduct(productId);
    return (
        <main className="flex flex-col items-center justify-between">
            <Product product={product}/>
        </main>
    );
}
