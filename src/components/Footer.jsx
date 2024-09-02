import BgFoot from './../assets/background@2x.png'
import LogoSvg from './../assets/logo.svg'
import Wpp from './../assets/social-media@2x.png'
import TikTok from './../assets/social-media1@2x.png'
import Ig from './../assets/group-15.svg'
import Vector from './../assets/vector1.svg'
import './../styles/footer.css'

export const Footer = () => {
    return (
        <section className='footer__container'>
            <img className='bgFoot' src={ BgFoot } alt="" />
            <button className='footer__button'>
                <img src={ LogoSvg } alt="" />
            </button>
            <div className='footer__container-lists'>
                <div>
                    <h4 className='footer__container-title'>Eco Shop</h4>
                    <ul className='footer__list'>
                        <li>Acerca de Nostros</li>
                        <li>Contáctanos</li>
                        <li>Preguntas Frecuentes</li>
                    </ul>   
                </div>
                
                <div>
                    <h4 className='footer__container-title'>Productos</h4>
                    <ul className='footer__list'>
                        <li>Nuevos</li>
                        <li>Ropa</li>
                        <li>Baño y Ropa de Cama</li>
                        <li>Artículos del hogar</li>
                        <li>Muevles</li>
                        <li>Accesorios</li>
                        <li>Regalos</li>
                    </ul>
                </div>
                
                <div>
                    <h4 className='footer__container-title'>Soporte</h4>
                    <ul className='footer__list'>
                        <li>Envíos</li>
                        <li>Devoluciones</li>
                        <li>Políticas de Privacidad</li>
                        <li>Términos de uso</li>
                        <li>Afiliados</li>
                    </ul>
                </div>
            </div>
            <footer className='footer__container-rights'>
                <p>© 2024 Todos los Derechos Reservados.</p>
                <div className='footer__container-media'>
                    <button className='button__media'>
                        <img className='img__media' src={ Wpp } alt="" />
                    </button>
                    <button className='button__media'>
                        <img className='img__media' src={ TikTok } alt="" />
                    </button>
                    <button className='button__media'>
                        <img className='img__media' src={ Ig } alt="" />
                    </button>
                    <button className='button__media'>
                        <img className='img__media' src={ Vector } alt="" />
                    </button>
                </div>
            </footer>
        </section>
    )
}