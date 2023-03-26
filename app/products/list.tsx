import Product from './product';

const List = async () => {

    const fetch_host = `${process.env.FETCH_HOST}/api/products`
    const data = await fetch(fetch_host);
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