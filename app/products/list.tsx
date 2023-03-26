'use client'
import Product from './product';
import { useState, useEffect } from 'react';


const List = () => {

    const [products, setProducts] = useState<any>([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/products').then(
            data => data.json()
        ).then(
            data => setProducts(data)
        )
    },[products]);

  //await fetch('../api/products/');
    


    return (
        <>
            <h3>Produkte</h3>
            {
                products.map((product: {}, index: number) => {
                    return (
                        <Product product={product} key={index} />
                    )
                })
            }
        </>
    )
}

export default List;