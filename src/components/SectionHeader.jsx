import reusableBamboo from './../assets/container@2x.png'
import './../styles/sectionHeader.css'

export const SectionHeader = () => {
    return (
        <section className='section__header'>
            <div className='section__header-description'>
                <h1>Bambú Reutilizables</h1>
                <p>Saborea cada bocado con cucharas de bambú, una alternativa sostenible a los cubiertos de plástico. Duraderas, elegantes y 100% biodegradables.</p>
                <button>Leer más</button>
            </div>
            <div className='section__header-portrait'>
                <img src={ reusableBamboo }  alt="" />
            </div>
        </section>
    )
}