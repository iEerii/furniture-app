import './../styles/cardNewArrival.css'

export const CardNewArrival = ({img, newProduct, price}) => {
    return(
        <div className="newProduct__wrap">
            <img className="newProduct__wrap-img" src={ img } alt="" />
            <h4 className="newProduct__wrap-title">{ newProduct }</h4>
            <p className="newProduct__wrap-price">{ price }</p>
        </div>
    )
}