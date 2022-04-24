import React from 'react';
import './App.css';

/* Componet */
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contenido from './components/Contenido';
import Main from './components/Main';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {

    return (
        <div className='App'>
            <Header/>
            <div id="particles-js"></div>

            <Contenido/>

            <Main/>

            <ScrollToTop/>

            <Footer/>
        </div>
    )
}

export default App
