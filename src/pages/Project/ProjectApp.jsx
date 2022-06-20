import React, { useState } from 'react'
import './ProjectPage.css';

/* Modal */
import Modal from "./Modal";

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
    const [estadoModal10, cambiarEstadoModal10] = useState(false);
    const [estadoModal9, cambiarEstadoModal9] = useState(false);
    const [estadoModal8, cambiarEstadoModal8] = useState(false);
    const [estadoModal7, cambiarEstadoModal7] = useState(false);
    const [estadoModal6, cambiarEstadoModal6] = useState(false);
    const [estadoModal5, cambiarEstadoModal5] = useState(false);
    const [estadoModal4, cambiarEstadoModal4] = useState(false);
    const [estadoModal3, cambiarEstadoModal3] = useState(false);
    const [estadoModal2, cambiarEstadoModal2] = useState(false);
    const [estadoModal1, cambiarEstadoModal1] = useState(false);

    return (
        <div>

            <HeaderPage />

            <ParticleBackground />

            <main>
                <section className="proyectos mas-proyect" id="proyectos">
                    <h1 className="heading">
                        <FormattedMessage
                            id='projects'
                            defaultMessage='Projects'
                        />
                    </h1>
                    <nav className="navbar nav-proj">
                        <NavLink to="/project/" offset={-150} duration={500}>
                            <FormattedMessage
                                id='site-web'
                                defaultMessage='websites'
                            />
                        </NavLink>
                        <NavLink to="/project/app" offset={-150} duration={500}>
                            App
                        </NavLink>
                        <NavLink to="/project/game" offset={-150} duration={500}>
                            <FormattedMessage
                                id='games'
                                defaultMessage='games'
                            />
                        </NavLink>
                    </nav>
                </section>
                <section className="projects__grid apps">
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal10(!estadoModal10)}>
                            <img src={proyectsImgApp(`./proyecto-app-10.jpg`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal9(!estadoModal9)}>
                            <img src={proyectsImgApp(`./proyecto-app-9.jpg`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal8(!estadoModal8)}>
                            <img src={proyectsImgApp(`./proyecto-app-8.jpg`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal7(!estadoModal7)}>
                            <img src={proyectsImgApp(`./proyecto-app-7.jpg`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal6(!estadoModal6)}>
                            <img src={proyectsImgApp(`./proyecto-app-6.jpg`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal5(!estadoModal5)}>
                            <img src={proyectsImgApp(`./proyecto-app-5.jpg`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal4(!estadoModal4)}>
                            <img src={proyectsImgApp(`./proyecto-app-4.jpg`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal3(!estadoModal3)}>
                            <img src={proyectsImgApp(`./proyecto-app-3.jpg`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal2(!estadoModal2)}>
                            <img src={proyectsImgApp(`./proyecto-app-2.jpg`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal1(!estadoModal1)}>
                            <img src={proyectsImgApp(`./proyecto-app-1.jpg`)} alt="" className="projects__img" />
                        </a>
                    </div>
                </section>
            </main>

            <Modal
                estado={estadoModal10}
                cambiarEstado={cambiarEstadoModal10}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-10.jpg`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-10-p1'
                                    defaultMessage='Client Manager'
                                />
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-10-p2'
                                    defaultMessage='Authorizes you to take a shift to repair your cell phone, you can edit the shift if you wish.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://nahuel61920.github.io/Administrador-de-Clientes/" target="_blank">https://nahuel61920.github.io/Administrador-de-Clientes/</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal9}
                cambiarEstado={cambiarEstadoModal9}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-9.jpg`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-9-p1'
                                    defaultMessage='Pomodoro app'
                                />
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-9-p2'
                                    defaultMessage='It allows you to add a task to complete it in 25 minutes and at the end rest 5 minutes.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://nahuel61920.github.io/Pomodoro/" target="_blank">https://nahuel61920.github.io/Pomodoro/</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal8}
                cambiarEstado={cambiarEstadoModal8}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-8.jpg`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-8-p1'
                                    defaultMessage='Weekly expenses'
                                />
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-8-p2'
                                    defaultMessage='You can calculate the expenses that you are going to make in the week, having a budget that you choose.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://nahuel61920.github.io/Gastos-semanales/" target="_blank">https://nahuel61920.github.io/Gastos-semanales/</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal7}
                cambiarEstado={cambiarEstadoModal7}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-7.jpg`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-7-p1'
                                    defaultMessage='Quote insurance'
                                />
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-7-p2'
                                    defaultMessage='It allows you to calculate your car insurance, depending on the year and the insurance you choose.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://nahuel61920.github.io/Cotizador-de-seguros/" target="_blank">https://nahuel61920.github.io/Cotizador-de-seguros/</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal6}
                cambiarEstado={cambiarEstadoModal6}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-6.jpg`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-6-p1'
                                    defaultMessage='Course cart'
                                />
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-6-p2'
                                    defaultMessage='It allows you to add a course to the cart, along with its description and value.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://nahuel61920.github.io/Carrito-Cursos/" target="_blank">https://nahuel61920.github.io/Carrito-Cursos/</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal5}
                cambiarEstado={cambiarEstadoModal5}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-5.jpg`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-5-p1'
                                    defaultMessage='Tweet generator'
                                />
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-5-p2'
                                    defaultMessage='You can create tweets and delete them at will.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://nahuel61920.github.io/Tweets/" target="_blank">https://nahuel61920.github.io/Tweets/</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal4}
                cambiarEstado={cambiarEstadoModal4}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-4.jpg`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-4-p1'
                                    defaultMessage='Car finder'
                                />
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-4-p2'
                                    defaultMessage='It allows you to filter cars either by brand, year, price, doors, transmission and color.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://nahuel61920.github.io/Buscador-de-autos" target="_blank">https://nahuel61920.github.io/Buscador-de-autos</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal3}
                cambiarEstado={cambiarEstadoModal3}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-3.jpg`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-3-p1'
                                    defaultMessage='form of needles in honey'
                                />
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-3-p2'
                                    defaultMessage='Classic style form, which allows you to order a book.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://nahuel61920.github.io/FormularioJs-Clasico/" target="_blank">https://nahuel61920.github.io/formularioJs-clasico/</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal2}
                cambiarEstado={cambiarEstadoModal2}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-2.jpg`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-2-p1'
                                    defaultMessage='To-do list App'
                                />
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-2-p2'
                                    defaultMessage='It allows you to add tasks, mark them as completed, and sort them from pending to completed.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://nahuel61920.github.io/To-do-list/" target="_blank">https://nahuel61920.github.io/to-do-list/</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal1}
                cambiarEstado={cambiarEstadoModal1}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-1.jpg`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-1-p1'
                                    defaultMessage='Calculate travel expenses'
                                />
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-1-p2'
                                    defaultMessage='Calculator that allows you to estimate what you are going to spend on a trip to the destination that you indicate.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://nahuel61920.github.io/Calcular-gastos-de-viaje/" target="_blank">https://nahuel61920.github.io/calcular-gastos-de-viaje/</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <ScrollToTop />

            <Footer />
        </div>
    )
}

export default ProjectApp
