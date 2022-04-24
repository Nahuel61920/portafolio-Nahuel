import React from 'react';

const About = () =>  (
    <section className="sobre-mi" id="sobre-mi">
        <h2 className="heading" data-section="Nav" data-value="aboult">Sobre mi</h2>

        <div className="row container">
            <div className="columns">
                <h3 data-section="Aboult" data-value="im">Quien soy</h3>
                <h4 data-section="Aboult" data-value="description">Mi nombre es Esteban Carrizo y me especializo en Web Developer</h4>
                <p data-section="Aboult" data-value="my-description">Me dedico desde hace 1 año al diseño y desarrollo web, estoy en constante aprendizaje en las tecnologías que ya domino, y busco aprender nuevas tecnologías para enriquecer mis habilidades</p>
                <ul>
                    <li>
                        <p><span data-section="Aboult" data-value="years">Edad:</span> 22</p>
                    </li>
                    <li>
                        <p><span>Email:</span> estebancarrizo619@gmail.com</p>
                    </li>
                    <li>
                        <p><span data-section="Aboult" data-value="from">Desde:</span> Tucumán, Argentina</p>
                    </li>
                </ul>
                <div className="mas-info">
                    <a href="cv/final.docx" download="final.docx" className="custom-btn btn" data-section="Aboult-site" data-value="btn-cv">Descargar CV</a>
                    <a href="sobre-mi.html" className="custom-btn btn-codigo"><span data-section="Aboult" data-value="btn-know-more">Saber más</span></a>
                </div>
            </div>
            <div className="columns col-skill">
                <h3>skills</h3>
                <h4>Front-End</h4>
                <div className="skill">
                    <div>
                        <img alt="HTML" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"/>
                        <h5>HTML</h5>
                    </div>
                    <div>
                        <img alt="CSS" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"/>
                        <h5>CSS</h5>
                    </div>
                    <div>
                        <img alt="Js" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"/>
                        <h5>JavaScript</h5>
                    </div>
                    <div>
                        <img alt="Sass" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"/>
                        <h5>Sass</h5>
                    </div>
                    <div>
                        <img alt="Bootstrap" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"/>
                        <h5>Bootstrap</h5>
                    </div>
                    <div>
                        <img alt="Tailwindcss" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"/>
                        <h5>Tailwindcss</h5>
                    </div>
                    <div>
                        <img alt="SwiperJs" className="icons-skils" src="https://cms-assets.tutsplus.com/uploads/users/780/posts/39427/image-upload/68747470733a2f2f6769746875622e7375726d6f6e2e6d652f696d616765732f636f6d6d6f6e2f7377697065722d6c6f676f2e737667.svg"/>
                        <h5>SwiperJs</h5>
                    </div>
                    <div>
                        <img alt="jQuery" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"/>
                        <h5>jQuery</h5>
                    </div>
                    <div>
                        <img alt="React" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
                        <h5>React</h5>
                    </div>
                    <div>
                        <img alt="Typescript" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"/>
                        <h5>Typescript</h5>
                    </div>
                    <div>
                        <img alt="Angular" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"/>
                        <h5>Angular</h5>
                    </div>
                </div>
                <h4 data-section="Aboult" data-value="tools">Herramientas</h4>
                <div className="skill">
                    <div>
                        <img alt="figma" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" title="figma"/>
                        <h5>Figma</h5>
                    </div>
                    <div>
                        <img alt="photoshop" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"  title="Photoshop"/>
                        <h5>Photoshop</h5>
                    </div>
                    <div>
                        <img alt="Visual Studio Code" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png" title="Visual Studio Code"/>
                        <h5>VS Code</h5></div>
                    <div>
                        <img alt="git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="git"/>
                        <h5>Git</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;