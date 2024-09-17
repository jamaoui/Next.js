import ProductsList from "@/components/ProductsList";

export default async function SSRProducts() {
    const data = await fetch('https://fakestoreapi.com/products', {
        'cache': 'no-store'
    })
    const products = await data.json()
    return (
        <main className="container">
            <ProductsList products={products}/>
        </main>
    );
}
