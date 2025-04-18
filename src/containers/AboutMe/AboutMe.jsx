import React from 'react'

import Portrait from '../../../public/pictures/portrait-caroline-lopez-IA.webp'

const AboutMe = () => {
    return (
        <section className='aboutMe'>
            <img src={Portrait} alt='Portrait de Caroline Lopez' className="aboutMe__pic"/>
            <div className="aboutMe__text">
                <h1>Bonjour, je suis Caroline Lopez, développeuse front-end junior près de Lyon, bienvenue dans mon univers !</h1>
                <p>J'ai suivi une formation <span>d'intégratrice web</span> sur Openclassrooms, qui m'a permis d'acquérir des compétences afin de développer des sites dynamiques et responsives. J'accorde une importance particulière sur <span>l'accessibilité</span>. Chaque utilisateur mérite une expérience fluide et agréable, mon but est de rendre les sites les plus inclusifs possibles.</p><p>Le developpement web me permet d'assouvir ma curiosité et de m'exprimer à travers mes projets. Je vous invite donc à voyager à travers mon portfolio, et à me contacter si vous souhaitez discuter ou échanger sur un futur projet.</p>
            </div>
        </section>
    )
}

export default AboutMe