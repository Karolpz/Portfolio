import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

import PortraitDark from '../../../public/pictures/portrait-caroline-lopez-IA.webp'
import PortraitLight from '../../../public/pictures/portrait-caroline-lopez-IA-light.webp'

const AboutMe = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <section className='aboutMe'>
            {theme === 'dark' ?
                <img src={PortraitDark} alt='Portrait de Caroline Lopez' className="aboutMe__pic" /> :
                <img src={PortraitLight} alt='Portrait de Caroline Lopez' className="aboutMe__pic" />
}
            <div className="aboutMe__text">
                <h1>Bonjour, je suis Caroline Lopez, développeuse front-end, bienvenue dans mon univers !</h1>
                <p>J'ai suivi une formation <span>d'intégratrice web</span> sur Openclassrooms, qui m'a permis d'acquérir des compétences afin de développer des sites dynamiques et responsives. J'accorde une importance particulière sur <span>l'accessibilité</span>. Chaque utilisateur mérite une expérience fluide et agréable, mon but est de rendre les sites les plus inclusifs possibles.</p><p>Le developpement web me permet d'assouvir ma curiosité et de m'exprimer à travers mes projets. Je vous invite donc à voyager à travers mon portfolio, et à me contacter si vous souhaitez discuter ou échanger sur un futur projet.</p>
            </div>
        </section>
    )
}

export default AboutMe