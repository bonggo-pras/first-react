import React from 'react';
import Child from "../components/Product";
import products from "../data/products.json";

function Product() {
    return <div className="bg-gray-200 py-4 dark:bg-gray-800">
        <div className="md:w-1/2 mx-auto">
            {products.map((product) => (
                <Child product={product} key={product.id} />
            ))}
        </div>
    </div>
}

export default Product;