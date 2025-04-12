import Home from './pages/Home/Home'
import ParticlesBackground from './Background/ParticlesBackground'
import { ThemeProvider } from './context/ThemeContext'

function App() {

  return (
    <>
      <ThemeProvider>
        <ParticlesBackground />
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App
