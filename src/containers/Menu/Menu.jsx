import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

import NavItem from '../../components/NavItem/NavItem'

import AstronautImg from '../../assets/images/logos/astronaut-menu.webp'
import RocketImg from '../../assets/images/logos/rocket-menu.webp'
import GalaxyImg from '../../assets/images/logos/galaxy-menu.webp'
import SatelliteImg from '../../assets/images/logos/satellite-menu.webp'
import LogoImg from '../../../public/pictures/logo-site.webp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <header className='menu'>

            <img src={LogoImg} alt="logo du site de Caroline Lopez" className="logo" />

            <div className="navBar">
                {theme === 'dark' ?
                    <button className='navBar__theme' onClick={toggleTheme} aria-label="Mode éclairé" ><FontAwesomeIcon icon={faMoon} className='navBar__theme--moon'/></button> :
                    <button className='navBar__theme' onClick={toggleTheme} aria-label="Mode sombre" ><FontAwesomeIcon icon={faSun} className='navBar__theme--sun'/></button>
                }
                <NavItem
                    icon={AstronautImg}
                    text='A propos de moi'
                    href='#aboutMe'
                />
                <NavItem
                    icon={RocketImg}
                    text='Mes compétences'
                    href='#skills'
                />
                <NavItem
                    icon={GalaxyImg}
                    text='Mes projets'
                    href='#projects'
                />
                <NavItem
                    icon={SatelliteImg}
                    text='Contact'
                    href='#contact'
                />
            </div>
        </header>
    )
}

export default Menu