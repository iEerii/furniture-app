import { CardProduct } from './CardProduct'
import Soap from './../assets/product-image@2x.png'
import Shoes from './../assets/product-image1@2x.png'
import Basket from './../assets/product-image2@2x.png'
import LaundrySoap from './../assets/product-image3@2x.png'
import './../styles/inDemand.css'

export const InDemand = () => {
    return(
        <section className="demand__container">
            <h3 className='demand__container-title'>
                Nuestros productos más buscados
            </h3>
            <p className='demand__container-slogan'>
                Bueno para el medio ambiente, bueno para ti.
            </p>
            <ul className='demand__container-products'>
                <li>
                    <CardProduct 
                        imgProduct={ Soap }
                        product='Alpine Provisions | Jabón de Manos de Cedro + Sándalo'
                        newPrice='$99.900'
                        oldPrice='$259.000'
                    />
                </li>
                <li>
                    <CardProduct
                        imgProduct={ Shoes }
                        product="Zapatillas de Lana con Suela Clásica y Espalda Baja Mujer"
                        newPrice="$79.900"
                        oldPrice="$159.900"
                    />
                </li>
                <li>
                    <CardProduct
                        imgProduct={ Basket }
                        product="Cesta de Ropa Grande con Patrón"
                        newPrice="$199.900"
                        oldPrice="$329.900"
                    />
                </li>
                <li>
                    <CardProduct
                        imgProduct={ LaundrySoap }
                        product="Meliora | Polvo de Lavandería Ecológico"
                        newPrice="$159.000"
                        oldPrice="$259.000"
                    />
                </li>
            </ul>
        </section>
    )
}