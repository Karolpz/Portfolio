import React, { lazy, Suspense } from 'react'
import Menu from '../../containers/Menu/Menu'
import AboutMe from '../../containers/AboutMe/AboutMe'
import Skills from '../../containers/Skills/Skills'
const Projects = lazy(() => import('../../containers/Projects/Projects'))
const Form = lazy(() => import('../../containers/Form/Form'))
const Footer = lazy(() => import('../../containers/Footer/Footer'))

const Home = () => {
  return (
    <main>
      <Menu />
      <AboutMe />
      <Skills />

      <Suspense fallback={null}>
        <Projects />
        <Form />
        <Footer />
      </Suspense>
    </main>
  )
}

export default Home