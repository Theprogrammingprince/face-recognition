import Particles from 'react-tsparticles'
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import particleConfig from '../config/particleConfig'

const ParticleBackground =() =>{
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
      }, []);

      return (
        <Particles id="tsparticles"  init={particlesInit}  params={particleConfig} />
      );
    };


export default ParticleBackground;

  