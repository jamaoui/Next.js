"use client"
import {useEffect, useState} from "react";
import ProductsList from "@/components/ProductsList";
export const revalidate = 3600
export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products', {
            'cache': 'no-store',
        })
            .then(res=>res.json())
            .then( json => setProducts(json))
    }, []);
    return (
        <main className="container">
            <ProductsList products={products}/>
        </main>
    );
}
