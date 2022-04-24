import React from "react";
import './Header.css';
/* ReactScroll */
import { Link } from 'react-scroll';

/* DarkMode */
import DarkMode from '../DarkMode/DarkMode';



const Header = () => {
    // Menu desplegable
    let navbar = document.querySelector('.navbar');
    const menuDesplegable = () =>{
        navbar.classList.toggle("activar")
    }

    return(
        <header className="site-header">
            <div id="menu-btn" className="fas fa-bars" onClick={menuDesplegable}></div>

            <a href="#inicio" className="logo">
                <p>(<span>NAHUEL61920</span>)</p>
            </a>

            <nav className="navbar">
                <Link to="inicio" spy={true} smooth={true} offset={-150} duration={500} href="#inicio" data-section="Nav" data-value="home">Inicio</Link>
                <Link to="sobre-mi" spy={true} smooth={true} offset={-150} duration={500} href="#sobre-mi" data-section="Nav" data-value="aboult">Sobre mi</Link>
                <Link to="servicios" spy={true} smooth={true} offset={-150} duration={500} href="#servicios" data-section="Nav" data-value="services">Servicios</Link>
                <Link to="proyectos" spy={true} smooth={true} offset={-150} duration={500} href="#proyectos" data-section="Nav" data-value="projects">Proyectos</Link>
                <Link to="contactos" spy={true} smooth={true} offset={-150} duration={500} href="#contactos" data-section="Nav" data-value="contact">Contactos</Link>
                <div id="buttons">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png" alt="EEUU" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Bandera_de_Espa%C3%B1a_%28nuevo_dise%C3%B1o%29.svg/1500px-Bandera_de_Espa%C3%B1a_%28nuevo_dise%C3%B1o%29.svg.png" alt="España" />
                </div>
            </nav>
            <div className="switch" id="switch">
                <DarkMode />
            </div>
        </header>
    )
}

export default React.memo(Header);