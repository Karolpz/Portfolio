import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Lottie from 'lottie-react'
import rocketAnimation from '../../data/rocket.json'


const Footer = () => {

  const handleScrollTop = (event) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <footer className='footer'>
      <div className="linkRS">
        <a href='https://github.com/Karolpz' target="_blank" rel="noopener noreferrer" aria-label="lien vers la page github de Caroline Lopez">
          <FontAwesomeIcon icon={faGithub} className='linkRS__github' />
        </a>
        <a href='https://www.linkedin.com/in/caroline-l-435a11b5/' target="_blank" rel="noopener noreferrer" aria-label="lien vers la linkedin de Caroline Lopez">
        <FontAwesomeIcon icon={faLinkedin} className='linkRS__linkedin' />
        </a>
      </div>
      <p>© 2025 - Caroline Lopez. Tous droits réservés.</p>
      <Lottie animationData={rocketAnimation} loop={true} className='rocketAnimation' onClick={handleScrollTop} />
    </footer>
  )
}

export default Footer