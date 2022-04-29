import React from 'react';

/* Multi idioma */
import {FormattedMessage} from 'react-intl';

const Contenido = () => (
    <div className="contenido">
        <section className="inicio" id="inicio">
            <div className="titulo" >
                <p>
                    <FormattedMessage
                        id='greeting'
                        defaultMessage='Hellow'
                    />
                </p>
                <h1>
                    <FormattedMessage
                        id='name'
                        defaultMessage='I am Nahuel Carrizo'
                    />
                </h1>
                <p>
                    <FormattedMessage
                        id='rol'
                        defaultMessage='Front-end developer'
                    />
                </p>
                
                <div className="redes-sociales">
                    <a href="https://www.linkedin.com/in/esteban-nahuel-carrizo-69715422b/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/Nahuel61920/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/nahuelcarrizolc/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=5493815360966" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                </div>
                <div className="wrapper">
                    <a className="button" href="https://www.linkedin.com/in/esteban-nahuel-carrizo-69715422b/" target="_blank" rel="noopener noreferrer">
                        <div className="icon">
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <span>Linkedin</span>
                    </a>
                    <a className="button" href="https://github.com/Nahuel61920/" target="_blank" rel="noopener noreferrer">
                        <div className="icon">
                            <i className="fab fa-github"></i>
                        </div>
                        <span>Github</span>
                    </a>
                    <a className="button" href="https://www.instagram.com/nahuelcarrizolc/" target="_blank" rel="noopener noreferrer">
                        <div className="icon">
                            <i className="fab fa-instagram"></i>
                        </div>
                        <span>Instagram</span>
                    </a>
                    <a className="button" href="https://api.whatsapp.com/send?phone=5493815360966" target="_blank" rel="noopener noreferrer">
                        <div className="icon">
                            <i className="fab fa-whatsapp"></i>
                        </div>
                        <span>Whatsapp</span>
                    </a>
                </div>

                <a href="#sobre-mi" >
                    <div className="scroll-down"></div>
                </a>
            </div>
        </section>
    </div>
);

export default Contenido;