import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

import NavItem from '../../components/NavItem/NavItem'

import AstronautImg from '../../assets/images/logos/astronaut-menu.png'
import RocketImg from '../../assets/images/logos/rocket-menu.png'
import GalaxyImg from '../../assets/images/logos/galaxy-menu.png'
import SatelliteImg from '../../assets/images/logos/satellite-menu.png'
import LogoImg from '../../assets/images/logos/logo-site.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <header className='menu'>

            <img src={LogoImg} alt="logo du site de Caroline Lopez" className="logo" />

            <div className="navBar">
                {theme === 'dark' ?
                    <button className='navBar__theme' onClick={toggleTheme} ><FontAwesomeIcon icon={faMoon} className='navBar__theme--moon'/></button> :
                    <button className='navBar__theme' onClick={toggleTheme} ><FontAwesomeIcon icon={faSun} className='navBar__theme--sun'/></button>
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