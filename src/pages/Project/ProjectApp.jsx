import React from 'react'
import './ProjectPage.css'

/* React router */
import { NavLink } from 'react-router-dom';

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';


/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
const proyectsImgApp = require.context('../../img', true);

function ProjectApp() {
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
                    <section className="projects__grid apps">
                        <div className="projects__item">
                            <a data-modal-id="proyec-app-10">
                                <img src={proyectsImgApp(`./proyecto-app-10.jpg`)} alt="" className="projects__img" />
                            </a>
                        </div>
                        <div className="projects__item">
                            <a data-modal-id="proyec-app-9">
                                <img src={proyectsImgApp(`./proyecto-app-9.jpg`)} alt="" className="projects__img" />
                            </a>
                        </div>
                        <div className="projects__item">
                            <a data-modal-id="proyec-app-8">
                                <img src={proyectsImgApp(`./proyecto-app-8.jpg`)} alt="" className="projects__img" />
                            </a>
                        </div>
                        <div className="projects__item">
                            <a data-modal-id="proyec-app-7">
                                <img src={proyectsImgApp(`./proyecto-app-7.jpg`)} alt="" className="projects__img" />
                            </a>
                        </div>
                        <div className="projects__item">
                            <a data-modal-id="proyec-app-6">
                                <img src={proyectsImgApp(`./proyecto-app-6.jpg`)} alt="" className="projects__img" />
                            </a>
                        </div>
                        <div className="projects__item">
                            <a data-modal-id="proyec-app-5">
                                <img src={proyectsImgApp(`./proyecto-app-5.jpg`)} alt="" className="projects__img" />
                            </a>
                        </div>
                        <div className="projects__item">
                            <a data-modal-id="proyec-app-4">
                                <img src={proyectsImgApp(`./proyecto-app-4.jpg`)} alt="" className="projects__img" />
                            </a>
                        </div>
                        <div className="projects__item">
                            <a data-modal-id="proyec-app-3">
                                <img src={proyectsImgApp(`./proyecto-app-3.jpg`)} alt="" className="projects__img" />
                            </a>
                        </div>
                        <div className="projects__item">
                            <a data-modal-id="proyec-app-2">
                                <img src={proyectsImgApp(`./proyecto-app-2.jpg`)} alt="" className="projects__img" />
                            </a>
                        </div>
                        <div className="projects__item">
                            <a data-modal-id="proyec-app-1">
                                <img src={proyectsImgApp(`./proyecto-app-1.jpg`)} alt="" className="projects__img" />
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

export default ProjectApp
