import React from 'react';

const Contenido = () => (
    <div className="contenido">
        <section className="inicio" id="inicio">
            <div className="titulo" >
                <p data-section="Home" data-value="greeting" >Hola</p>
                <h1 data-section="Home" data-value="name" >Soy Nahuel Carrizo</h1>
                <p data-section="Home" data-value="rol" >Front-end Developer</p>
                
                <div className="redes-sociales">
                    <a href="https://www.linkedin.com/in/esteban-nahuel-carrizo-69715422b/"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/Nahuel61920/"><i className="fab fa-github"></i></a>
                    <a href=""><i className="fab fa-instagram"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=5493815360966"><i className="fab fa-whatsapp"></i></a>
                </div>
                <div className="wrapper">
                    <a className="button" href="https://www.linkedin.com/in/esteban-nahuel-carrizo-69715422b/" target="_blank">
                        <div className="icon">
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <span>Linkedin</span>
                    </a>
                    <a className="button" href="https://github.com/Nahuel61920/" target="_blank">
                        <div className="icon">
                            <i className="fab fa-github"></i>
                        </div>
                        <span>Github</span>
                    </a>
                    <a className="button" href="https://www.instagram.com/nahuelcarrizolc/" target="_blank">
                        <div className="icon">
                            <i className="fab fa-instagram"></i>
                        </div>
                        <span>Instagram</span>
                    </a>
                    <a className="button" href="https://api.whatsapp.com/send?phone=5493815360966" target="_blank">
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