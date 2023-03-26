'use client'
const Product = ({product}:{product:any}) => {

    const image = `/shopimages/${product.image}`;

    return (
        <div className="col-md-4">
            <div className="card">
                <img className="card-img-top" src={image} alt="Card image cap" />
                <div className="card-body">
                       <h2>{product.title}</h2>
                </div>
            </div>
        </div>
    )
}

export default Product;