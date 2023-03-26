import Product from './product';

const List = async () => {
    const data = await fetch('/api/products');
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