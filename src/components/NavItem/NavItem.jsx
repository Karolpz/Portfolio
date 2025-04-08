import React from 'react'

const NavItem = ({ icon, text, href }) => {
    return (
        <div className='navItem'>
            <div className="navItem__icon">
                <img src={icon} alt={`logo de ${text}`} />
            </div>
            <a href={href}>
                <p className="navItem__text">
                    {text}
                </p>
            </a>
        </div>
    )
}

export default NavItem