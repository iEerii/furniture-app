import './../styles/header.css'
import { NavBar } from './NavBar'
import { NavigationBarTop } from './NavigationBarTop'

export const Header = () => {
    return(
        <header className='headerContainer'>
            <button className='headerContainer__shipping-btn'>Envio gratis con una compra minima de $250.00</button>
            <NavigationBarTop />
            <NavBar />
		</header>
    )
}