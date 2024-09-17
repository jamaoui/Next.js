function ProductsList({products}) {
    return (
        <div className="grid grid-cols-3 gap-4">
            {products.map((product) => (
                <div key={product.id}
                     className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg" src={product.image} alt={product.title}/>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {product.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductsList;