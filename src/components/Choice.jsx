import { ChoiceList } from './ChoiceList'
import Shipping from './../assets/shipping@2x.png'
import Smile from './../assets/smile@2x.png'
import Eco from './../assets/eco@2x.png'
import Cs from './../assets/cs@2x.png'
import './../styles/choice.css'

export const Choice = () => {
    return (
        <section className='choice__container'>
            <h3 className='choice__container-title'>
                ¿Por qué comprar con nosotros?
            </h3>
            <ul className='choice__container-list'>
                <li>
                    <ChoiceList
                        listImg={ Shipping }
                        bold='Envío Gratis'
                        description='Compra ahora y disfruta del envío gratuito en todos los pedidos.'
                    />
                </li>
                <li>
                    <ChoiceList
                        listImg={ Smile }
                        bold='Garantía de Satifacción'
                        description='Nuestra garantía de satisfacción asegura productos de calidad.'
                    />
                </li>
                <li>
                    <ChoiceList 
                        listImg={ Eco }
                        bold='Embalaje Ecológico'
                        description='Utilizamos materiales ecológicos, sostenibles y biodegradables.'
                    />
                </li>
                <li>
                    <ChoiceList 
                        listImg={ Cs }
                        bold='Respuesta Rápida'
                        description='Asistencia rápida y confiable 24/7 siempre que la necesites.'
                    />
                </li>
            </ul>
        </section>
    )
}