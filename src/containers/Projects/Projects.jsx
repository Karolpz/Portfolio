import React from 'react'

import projectsData from '../../data/projects.json'
import Cards from '../../components/Cards/Cards'

const Projects = () => {
    return (
        <section className='projects' id='projects'>
            <h2 className='projects__title'>Mes Projets</h2>
            <div className="projects__container">
                {projectsData.map(project => (
                    <Cards
                        key={project.id}
                        link={project.github}
                        siteImg={project.picture}
                        name={project.name}
                        skill={
                            <ul>
                                {project.code.map((code, index) => (
                                    <li key={index}>
                                        {code}</li>
                                ))}
                            </ul>
                        }
                        description={project.description}
                        github={project.github}
                        website={project.website}
                        audit={project.audit}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects