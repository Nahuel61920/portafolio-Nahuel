import React from 'react';
import Typical from 'react-typical';

const Contact = () => (

    <section className="contactos" id="contactos">

        <h2 className="heading" data-section="Nav" data-value="contact">Contactos</h2>
        <h3 className="titulo">
            Contact:{' '}
                <Typical 
                    className="site-contacto"
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'Gmail', 1500, 
                        'WhatsApp', 1500,
                        'Instragram', 1500, 
                        'Twitter', 1500,
                        'Linkedin', 1500, 
                        'Github', 1500,
                    ]}
                />
        </h3>

        <div className="icons">
            <a href="mailto:estebancarrizo619@gmail.com" rel="noopener">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fas fa-envelope"></span>
                </div>
                <div className="text">
                    Gmail
                </div>
            </a>
            <a href="https://api.whatsapp.com/send?phone=5493815360966" rel="noopener">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-whatsapp"></span>
                </div>
                <div className="text">
                    Whatsapp
                </div>
            </a>
            <a href="https://www.instagram.com/nahuelcarrizolc/" rel="noopener">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-instagram"></span>
                </div>
                <div className="text">
                    Instagram
                </div>
            </a>
            <a href="#" rel="noopener">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-twitter"></span>
                </div>
                <div className="text">
                    Twitter
                </div>
            </a>
            <a href="https://www.linkedin.com/in/esteban-nahuel-carrizo-69715422b/" rel="noopener">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-linkedin-in"></span>
                </div>
                <div className="text">
                    Linkedin
                </div>
            </a>
            <a href="https://github.com/Nahuel61920/" rel="noopener">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-github-square"></span>
                </div>
                <div className="text">
                    GitHub
                </div>
            </a>
        </div>
    </section>
);

export default React.memo(Contact);