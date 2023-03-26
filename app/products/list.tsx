import Product from './product';

const List = async () => {
    const data = await fetch('http://0.0.0.0:3000//api/products');
    const products = await data.json()

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