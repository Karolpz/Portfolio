import React, { Suspense, lazy } from 'react';
import Home from './pages/Home/Home';
import { ThemeProvider } from './context/ThemeContext';

const ParticlesBackground = lazy(() => import('./Background/ParticlesBackground'));

function App() {
  return (
    <ThemeProvider>
      <Suspense>
        <ParticlesBackground />
      </Suspense>
      <Home />
    </ThemeProvider>
  );
}

export default App;
