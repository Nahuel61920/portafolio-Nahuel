import React from 'react';
import './AboutPage.css'

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';


/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
import imgabout from '../../img/home.jpg';

const About = () => {
  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={imgabout} alt="" className="sobre-mi-img" />
              <a href="cv/final.docx" download="final.docx" className="btn-codigo cv">
                <FormattedMessage
                  id='btn-cv'
                  defaultMessage='Download cv'
                />
              </a>
            </div>
            <div className="sobre-mi-info">
              <p>
                <FormattedMessage
                  id='aboult-info-1'
                  defaultMessage="Hi, I'm Esteban Nahuel Carrizo, a student at the Technological University of Tucumán; I consider myself a person passionate about programming and web development since in 2020 I had the opportunity to get to know this world of the front-end and I was able to create my first web page only using HTML and CSS from there, I felt a great passion for web development, since you can do amazing things knowing how to use HTML, CSS, JavaScript and to this day I still feel that same passion when I create a web page."
                />
              </p>

              <div className="hide parrafo-active">
                <p>
                  <FormattedMessage
                    id='aboult-info-2'
                    defaultMessage='I consider myself a self-taught person since I like to be constantly learning day by day, both new technologies and new development methods that help me polish and raise my level of learning.'
                  />
                </p>

                <p>
                  <FormattedMessage
                    id='aboult-info-3'
                    defaultMessage="I have experience working as a freelance web designer and developer, which gave me the opportunity to work on many interesting projects, adapting to the client's needs and budget, which allowed me to improve my skills and knowledge; Additionally, I have also had the opportunity to be part of some online and face-to-face courses that helped me enrich my skills and learn a little more about this beautiful world of web development."
                  />
                </p>
              </div>

              <div className="btn-info">
                <div className="custom-btn btn-codigo" id="btn-hide"><span data-section="Aboult" data-value="btn-know-more">Saber más</span></div>
              </div>
            </div>

          </div>

          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            <div className="skill-container">
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="HTML" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" title="HTML5" />
                <h2 className="skill-name">HTML</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='aboult-skills-1'
                    defaultMessage='More than a year of professional experience in this language, allows me to perform without problems in the industry'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="CSS" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" title="CSS3" />
                <h2 className="skill-name">CSS</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='aboult-skills-2'
                    defaultMessage='More than a year of work experience in this language, I use it daily to develop web designs and interfaces'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="Js" className="skills-img icon-li" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" title="Java Script" />
                <h2 className="skill-name">Javascript</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='aboult-skills-3'
                    defaultMessage='A year of experience using it in the front-end branch, allowed me to familiarize myself with the language, and include it in my work projects'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="Sass" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" title="Sass" />
                <h2 className="skill-name">Sass</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='aboult-skills-4'
                    defaultMessage='One year using this preprocessor in the professional field, I include it in many of my projects since it allows me a better structured code'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
                <img alt="Bootstrap" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" title="Bootstrap" />
                <h2 className="skill-name">Bootstrap</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='aboult-skills-5'
                    defaultMessage='Less than a year using this framework, even so, I used it in countless work projects, which allowed me to get to know it for the most part'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="jQuery" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" title="jQuery" />
                <h2 className="skill-name">jQuery</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='aboult-skills-6'
                    defaultMessage='A year using this bookstore in the personal and work environment, it is one of the bookstores that I use and manipulate the most'
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default About;