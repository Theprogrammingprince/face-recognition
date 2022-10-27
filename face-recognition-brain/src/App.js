import React from 'react';
import './App.css';
import ParticleBackground from './Components/Particle/ParticleBackground';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'




const App = () =>  {
  return (
    <div className="App">
        <ParticleBackground />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        


    </div>
  );
}

export default App;
