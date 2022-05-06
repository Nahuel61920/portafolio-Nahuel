import React from 'react'
import './ProjectPage.css'

/* Img */
const proyectsImg = require.context('../../img', true);

/* React router */
import { NavLink } from 'react-router-dom';

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';


/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const ProjectGame = () => {
    return (
        <div>

            <HeaderPage />

            <ParticleBackground />

            <main>
                <section className="proyectos mas-proyect" id="proyectos">
                    <h1 className="heading" data-section="Nav" data-value="projects">Proyectos</h1 >
                    <nav className="navbar nav-proj">
                        <NavLink to="/PortafolioReact/project/" offset={-150} duration={500}>
                            <FormattedMessage
                                id='site-web'
                                defaultMessage='websites'
                            />
                        </NavLink>
                        <NavLink to="/PortafolioReact/project/app" offset={-150} duration={500}>
                            App
                        </NavLink>
                        <NavLink to="/PortafolioReact/project/game" offset={-150} duration={500}>
                            <FormattedMessage
                                id='games'
                                defaultMessage='games'
                            />
                        </NavLink>
                    </nav>
                    <section className="projects__grid games">
                        <div className="projects__item">
                            <a data-modal-id="proyec-game-1">
                                <img src={proyectsImg(`./proyecto-game-1.jpg`)} alt="" className="projects__img" />

                            </a>
                        </div>
                        <div className="projects__item">
                            <a data-modal-id="proyec-game-2">
                                <img src={proyectsImg(`./proyecto-game-2.jpg`)} alt="" className="projects__img" />

                            </a>
                        </div>
                    </section>
                </section>
            </main>

            <ScrollToTop />

            <Footer />
        </div>
    )
}
export default ProjectGame;
