import React from 'react';
import "./App.css";

/* Componet */
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main';
import Contenido from './components/Contenido';

import ParticleBackground from "./components/ParticleBackground/ParticleBackground";
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  return (
    <div className='App'>
      <Header/>
      
      <ParticleBackground />

      <Contenido/>

      <Main/>

      <ScrollToTop/>

      <Footer/>
    </div>
  );
}

export default App;
