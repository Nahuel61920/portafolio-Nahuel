import React, { useState, useEffect } from 'react';
import './App.css';

/* Componet */
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main';
import Contenido from './components/Contenido';
import ParticleBackground from "./components/ParticlesBg/ParticleBackground";
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

/* Loading spinner */
import HashLoader from "react-spinners/HashLoader";

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])
    return (
        <div className='App'>
            {
                loading ?

                    <div className='loading-pag'>
                        <HashLoader
                            color={"#00e5fe"}
                            loading={loading}
                            size={150}
                        />
                    </div>

                    :

                    <div>
                        <Header />

                        <ParticleBackground />

                        <Contenido />

                        <Main />

                        <ScrollToTop />

                        <Footer />
                    </div>
            }
        </div>
    )
}

export default App
