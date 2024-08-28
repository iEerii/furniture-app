import './../styles/cardProduct.css'

export const CardProduct = ({imgProduct, product, newPrice, oldPrice}) => {
    return(
        <div className='card__product'>
            <img className='card__product-img' src={ imgProduct } alt="" />
            <h4 className="card__product-title">{ product }</h4>
            <p className="card__product-newPrice">{ newPrice }</p>
            <p className="card__product-oldPrice">{ oldPrice }</p>
        </div>
    )
}