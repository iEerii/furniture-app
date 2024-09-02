import './../styles/sectionSubscribe.css'

export const SectionSubscribe = () => {
    return(
        <section className='subscribe__container'>
            <div className='card__subscribe shadow'>
                <h5 className='card__subscribe-title'>Suscríbete a nuestro boletín</h5>
                <p className='description'>¡Sé el primero en conocer ofertas exclusivas, consejos ecológicos y nuevas llegadas!</p>
                <div className='card__sub-button'>
                    <input type="text" placeholder="e-mail" />
                    <button>Suscríbete</button>
                </div>
            </div>
        </section>
    )
}