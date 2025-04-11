import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChartLine, faGlobe} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "animate.css"

const Cards = ({ siteImg, name, skill, description, github, website, audit }) => {
  return (
    <div className="card">
      <div className="card__picture">
        <img src={siteImg} alt={`aperçu du site ${name}`} className='card__picture--image' loading='lazy'/>
        <h2 className="card__picture--description">{description}</h2>
      </div>
      <div className="card__content">
        <div className="card__content--info">
          <div className="card__content--title"><h3>{name}</h3></div>
          <div className="card__content--skill">{skill}</div>
        </div>
        <div className="card__content--link">
          <a href={github} target="_blank" rel="noopener noreferrer" aria-label="Lien vers le code du site">
            <FontAwesomeIcon icon={faGithub} className='card__content--linkIcon animate__animated animate__heartBeat'/>
          </a>
          {website &&
            <a href={website} target="_blank" rel="noopener noreferrer" aria-label="lien vers le site">
              <FontAwesomeIcon icon={faGlobe} className='card__content--linkIcon animate__animated animate__heartBeat' />
            </a>
          }
          {audit &&
            <a href={audit} target="_blank" rel="noopener noreferrer" aria-label="lien vers l'audit du site">
              <FontAwesomeIcon icon={faChartLine} className='card__content--linkIcon animate__animated animate__heartBeat'  />
            </a>
          }
        </div>
      </div>
    </div>
  )
}

export default Cards