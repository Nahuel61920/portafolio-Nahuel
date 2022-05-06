import React from 'react'
import './ProjectPage.css'

/* React router */
import { NavLink } from 'react-router-dom';

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

/* Img */
const proyectsImg = require.context('../../img', true);

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Project = () => {
  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">Proyectos</h1 >
          <nav className="navbar nav-proj">
            <NavLink to="/PortafolioReact/project" offset={-150} duration={500}>
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
        </section>

        <section className="projects__grid paginas-web">
          <div className="projects__item">
            <a data-modal-id="proyec-17">
              <img src={proyectsImg(`./proyecto-17.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a data-modal-id="proyec-14">
              <img src={proyectsImg(`./proyecto-14.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a data-modal-id="proyec-15">
              <img src={proyectsImg(`./proyecto-15.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a data-modal-id="proyec-16">
              <img src={proyectsImg(`./proyecto-16.jpg`)} className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a data-modal-id="proyec-13">
              <img src={proyectsImg(`./proyecto-13.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a data-modal-id="proyec-12">
              <img src={proyectsImg(`./proyecto-12.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a data-modal-id="proyec-11">
              <img src={proyectsImg(`./proyecto-11.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a data-modal-id="proyec-10">
              <img src={proyectsImg(`./proyecto-10.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a data-modal-id="proyec-9">
              <img src={proyectsImg(`./proyecto-9.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a data-modal-id="proyec-8">
              <img src={proyectsImg(`./proyecto-8.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a data-modal-id="proyec-7">
              <img src={proyectsImg(`./proyecto-7.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a data-modal-id="proyec-6">
              <img src={proyectsImg(`./proyecto-6.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a data-modal-id="proyec-5">
              <img src={proyectsImg(`./proyecto-5.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a data-modal-id="proyec-3">
              <img src={proyectsImg(`./proyecto-3.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />
    </div>
  )
}
export default Project;