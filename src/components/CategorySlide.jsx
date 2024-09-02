import Slider from "react-slick";
import Clothing from './../assets/category-banner@3x.png'
import Home from './../assets/image-1002@2x.png'
import Bedding from './../assets/image-1000@2x.png'
import Furniture from './../assets/image-1001@2x.png'
import Accesory from './../assets/image-1003@2x.png'
import './../styles/categorySlide.css'

const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1
};

export const CategorySlide = () => {
    
    return(
        <section className="categorySlide">
            <h2 className="categorySile__title">Categorias</h2>
            
            <Slider {...settings} className="slide__container">
                <li className="category">
                    <img src={ Clothing } alt="" />
                    <button>Clothes</button>
                </li>
                <li className="category">
                    <img src={ Home } alt="" />
                    <button>Hogar</button>
                </li>
                <li className="category">
                    <img src={ Bedding } alt="" />
                    <button>Ropa de Cama</button>
                </li>
                <li className="category">
                    <img src={ Furniture } alt="" />
                    <button>Muebles</button>
                </li>
                <li className="category">
                    <img src={ Accesory } alt="" />
                    <button>Accesorios</button>
                </li>
            </Slider>
        </section>    
    )
}