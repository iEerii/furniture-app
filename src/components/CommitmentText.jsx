import Bg from './../assets/vector1.svg'
import './../styles/commitmentText.css'

export const CommitmentText = () => {
    return(
        <section className='text__container'>
            <p className='text__container-text'>Compra sin culpa sabiendo que nuestra plataforma de comercio electrónico ecológica está comprometida con la reducción del impacto ambiental y la promoción de prácticas sostenibles en cada paso del proceso de compra.</p>
            <img className='text__container-img' src={ Bg } alt="" />
        </section>
    )
}