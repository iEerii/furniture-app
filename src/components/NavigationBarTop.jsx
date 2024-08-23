import logo from './../assets/logo1@2x.png'
import searchIcon from './../assets/search.svg'
import profileIcon from './../assets/profile.svg'
import bagIcon from './../assets/bag@2x.png'

export const NavigationBarTop = () => {
    return(
        <div className='headerContainer__navBar'>
            <img className='logo-icon' src={ logo }  alt="" />
            <div className='navigation-bar'>
                <img src={ searchIcon } alt="" />
                <input type="search" name="search-text" />
            </div>
            <div className='profile-bar'>
                <img className='profile-icon' src={ profileIcon } alt="" />
                <img className='bag-icon' src={ bagIcon } alt="" />
            </div>
        </div>
    )
}