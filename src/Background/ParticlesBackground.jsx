import { useCallback, useContext } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import particlesDark from "../data/particlesjsdark-config.json"
import particlesLight from "../data/particlesjslight-config.json"
import { ThemeContext } from "../context/ThemeContext"

function ParticlesBackground() {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const { theme } = useContext(ThemeContext)

    return (
        <Particles
        id="tsparticles"
            init={particlesInit}
            options={theme === 'dark' ? particlesDark : particlesLight}
        />
    );
}

export default ParticlesBackground;