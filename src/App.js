import React from 'react';
import './App.css';
import ParticlesBackground from './components/Particles/ParticlesBackground'

/* Componet */
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main';
import Contenido from './components/Contenido';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
    return (
        <div className='App'>
            <Header/>

            <Contenido/>

            <ParticlesBackground />

            <Main/>

            <ScrollToTop/>

            <Footer/>
        </div>
    )
}

export default App
