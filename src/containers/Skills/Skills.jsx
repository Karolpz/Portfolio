import React from 'react';
import skillsData from '../../data/skills.json';

const Skills = () => {
    return (
        <section className='skills' id='skills'>
            <h2 className='skills__title'>Mes compétences</h2>
            <div className="skills__img">
                {skillsData.map(skill => (
                    <img
                        key={skill.id}
                        src={skill.logo}
                        alt={`logo de la compétence ${skill.name}`}
                        className={`skills__img--logo ${skill.className}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;
