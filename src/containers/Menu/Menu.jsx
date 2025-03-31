import React from 'react'
import NavItem from '../../components/NavItem/NavItem'

import AstronautImg from '../../assets/images/logos/astronaut-menu.png'
import RocketImg from '../../assets/images/logos/rocket-menu.png'
import GalaxyImg from '../../assets/images/logos/galaxy-menu.png'
import SatelliteImg from '../../assets/images/logos/satellite-menu.png'
import LogoImg from '../../assets/images/logos/logo-site.png'

const Menu = () => {
    return (
        <header className='menu'>

            <img src={LogoImg} alt="logo du site de Caroline Lopez" className="logo" />

            <div className="navBar">
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