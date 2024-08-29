import React, { useRef } from "react";
import Slider from "react-slick";
import { CardNewArrival } from './CardNewArrival'
import Lolligagger from './../assets/product-image4@2x.png'
import LoungeChair from './../assets/product-image5@2x.png'
import Loveseat from './../assets/product-image6@2x.png'
import OutLoungeChair from './../assets/product-image7@2x.png'
import CubbyBench from './../assets/product-image8@2x.png'
import FreshAirTable from './../assets/product-image9@2x.png'
import DiningChair from './../assets/product-image10@2x.png'
import Table from './../assets/product-image11@2x.png'
import Previous from './../assets/arrowleft@2x.png'
import Next from './../assets/arrowright@2x.png'
import './../styles/newArrival.css'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2
};

export const NewArrival = () => {
    let sliderRef = useRef(null);

    const next = () => {
        sliderRef.slickNext();
    }
    const previous = () => {
        sliderRef.slickPrev();
    };

    return(
        <section className='newArrival__wrap'>
            <h3 className='newArrival__wrap-title'>Productos Nuevos</h3>
            <p className='newArrival__wrap-p'>Sé el primero en tener el producto de primera clase</p>
            <div style={{ textAlign: "right" }}>
                <button className="buttonPrev" onClick={previous}>
                    <img src={ Previous } alt="" />
                </button>
                <button className="buttonNext" onClick={next}>
                    <img src={ Next } alt="" />
                </button>
            </div>
            <Slider 
                ref={slider => {
                    sliderRef = slider;
                }}
                {...settings} 
                className='newArrival__wrap-list'
            >
                <li>
                    <CardNewArrival
                        img={ Lolligagger }
                        newProduct='Silla de Descanso Reciclada Lolligagger'
                        price='$699.900'
                    />
                </li>
                <li>
                    <CardNewArrival 
                        img={ LoungeChair }
                        newProduct='Silla de Lounge Reciclada Lollygagger'
                        price='$99.900'
                    />
                </li>
                <li>
                    <CardNewArrival 
                        img={ Loveseat }
                        newProduct='Loveseat Reciclado Nisswa'
                        price='$899.900'
                    />
                </li>
                <li>
                    <CardNewArrival 
                        img={ OutLoungeChair }
                        newProduct='Camastro Reciclado para Exteriores Lolligagger'
                        price='$1,099.90'
                    />
                </li>
                <li>
                    <CardNewArrival 
                        img={ CubbyBench }
                        newProduct='Recycled Cubby Bench'
                        price='$1,159.90'
                    />
                </li>
                <li>
                    <CardNewArrival 
                        img={ FreshAirTable }
                        newProduct='Fresh Air Recycled Rable'
                        price='$999.000'
                    />
                </li>
                <li>
                    <CardNewArrival 
                        img={ DiningChair }
                        newProduct='Emin Recycled Dining Chair'
                        price='$659.000'
                    />
                </li>
                <li>
                    <CardNewArrival 
                        img={ Table }
                        newProduct='Satellite Recycled Round End Table'
                        price='$399.000'
                    />
                </li>
            </Slider>
        </section>
    )
}