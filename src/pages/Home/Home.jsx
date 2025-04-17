import React, { lazy, Suspense } from 'react'
import Menu from '../../containers/Menu/Menu'
import AboutMe from '../../containers/AboutMe/AboutMe'
import Skills from '../../containers/Skills/Skills'
const Projects = lazy(() => import('../../containers/Projects/Projects'))
const Form = lazy(() => import('../../containers/Form/Form'))
const Footer = lazy(() => import('../../containers/Footer/Footer'))

const Home = () => {
  return (
    <main itemscope itemtype="https://schema.org/Person">
      <Menu />
      <AboutMe />
      <Skills />

      <Suspense>
        <Projects />
        <Form />
        <Footer />
      </Suspense>
    </main>
  )
}

export default Home