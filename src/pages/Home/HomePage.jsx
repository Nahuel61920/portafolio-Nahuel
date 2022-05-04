import React from 'react'

/* Componet */
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/Main';
import Contenido from '../../components/Contenido';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

const Home = () => {
  return (
    <div>

      <Header />

      <ParticleBackground />

      <Contenido />

      <Main />

      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default Home;