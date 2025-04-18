import Home from './pages/Home/Home'
import ParticlesBackground from './Background/ParticlesBackground'
import { ThemeProvider } from './context/ThemeContext'
import SEO from './components/SEO'

function App() {

  return (
    <>
      <ThemeProvider>
        <SEO />
        <ParticlesBackground />
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App
