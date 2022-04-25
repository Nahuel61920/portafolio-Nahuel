import React from 'react';

/* Multi idioma */
import {FormattedMessage} from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";


/* Img */
const proyectImg = require.context('../../img', true);


const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img 
                            alt='proyectos'
                            src={proyectImg(`./proyecto-14.jpg`)}
                        />
                        <div className="content">
                            <h3>Justice</h3>
                            <p>
                                lawyers website
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span>-</span> CSS3
                                <span>-</span> JavaScript
                                <span>-</span> jQuery
                                <span>-</span> Bootstrap
                            </p>
                            <a href="https://nahuel61920.github.io/Power-Engine/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/Power-Engine" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div> 
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            alt='proyectos' 
                            src={proyectImg(`./proyecto-7.jpg`)}/>
                        <div className="content">
                                <h3>Power Engine</h3>
                                <p>
                                    Automobiles Website
                                </p>
                                <p className="tecnologias">
                                    HTML5
                                    <span>-</span> CSS3
                                    <span>-</span> JavaScript
                                </p>
                                <a href="https://nahuel61920.github.io/Power-Engine/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                                <a href="https://github.com/Nahuel61920/Power-Engine" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>                
                    <SwiperSlide className='caja'>
                        <img
                            alt='proyectos' 
                            src={proyectImg(`./proyecto-6.jpg`)}/>
                        <div className="content">
                                <h3>Spider-Man fan page</h3>
                                <p>
                                    Fan page Spider-Man
                                </p>
                                <p className="tecnologias">
                                    HTML5
                                    <span>-</span> CSS3
                                    <span>-</span> JavaScript
                                    <span>-</span> Bootstrap
                                </p>
                                <a href="https://nahuel61920.github.io/Spider-Man/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                                <a href="https://github.com/Nahuel61920/Spider-Man" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>                 
                    <SwiperSlide className='caja'>
                        <img
                            alt='proyectos' 
                            src={proyectImg(`./proyecto-12.jpg`)}/>
                        <div className="content">
                                <h3>EveryRunnig</h3>
                                <p>
                                    Website shoes 
                                </p>
                                <p className="tecnologias">
                                    HTML5
                                    <span>-</span> CSS3
                                    <span>-</span> JavaScript
                                    <span>-</span> Bootstrap
                                </p>
                                <a href="https://nahuel61920.github.io/Bienes-Raices/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                                <a href="https://github.com/Nahuel61920/Bienes-Raices" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            alt='proyectos' 
                            src={proyectImg(`./proyecto-5.jpg`)}/>
                        <div className="content">
                                <h3>Premier Food</h3>
                                <p>
                                    Fast food
                                </p>
                                <p className="tecnologias">
                                    HTML5
                                    <span>-</span> CSS3
                                    <span>-</span> JavaScript
                                    <span>-</span> Sass
                                </p>
                                <a href="https://nahuel61920.github.io/PremierFood/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                                <a href="https://github.com/Nahuel61920/PremierFood" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>                 
                    <SwiperSlide className='caja'>
                        <img
                            alt='proyectos' 
                            src={proyectImg(`./proyecto-8.jpg`)}/>
                        <div className="content">
                                <h3>ShopTec</h3>
                                <p>
                                    Ecommerce
                                </p>
                                <p className="tecnologias">
                                    HTML5
                                    <span>-</span> CSS3
                                    <span>-</span> Sass
                                    <span>-</span> JavaScript
                                </p>
                                <a href="https://nahuel61920.github.io/shop-tec/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                                <a href="https://github.com/Nahuel61920/shop-tec" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            alt='proyectos' 
                            src={proyectImg(`./proyecto-10.jpg`)}/>
                        <div className="content">
                                <h3>Elegant Hand</h3>
                                <p>
                                    Watch Shop
                                </p>
                                <p className="tecnologias">
                                    HTML5
                                    <span>-</span> CSS3
                                    <span>-</span> JavaScript
                                </p>
                                <a href="https://nahuel61920.github.io/ElegantHand/ " className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                                <a href="https://github.com/Nahuel61920/ElegantHand" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>                 
                    <SwiperSlide className='caja'>
                        <img
                            alt='proyectos' 
                            src={proyectImg(`./proyecto-9.jpg`)}/>
                        <div className="content">
                                <h3>Vida en papel</h3>
                                <p>
                                    Bookstore
                                </p>
                                <p className="tecnologias">
                                    HTML5
                                    <span>-</span> CSS3
                                    <span>-</span> JavaScript
                                </p>
                                <a href="https://nahuel61920.github.io/vida-en-papel/ " className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                                <a href="https://github.com/Nahuel61920/vida-en-papel" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>  
                    <SwiperSlide className='caja'>
                        <img
                            alt='proyectos' 
                            src={proyectImg(`./proyecto-11.jpg`)}/>
                        <div className="content">
                                <h3>Plus Anime</h3>
                                <p>
                                    Anime website
                                </p>
                                <p className="tecnologias">
                                    HTML5
                                    <span>-</span> CSS3
                                    <span>-</span> JavaScript
                                </p>
                                <a href="https://nahuel61920.github.io/PlusAnime/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                                <a href="https://github.com/Nahuel61920/PlusAnime" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>                  
                </Swiper>
                    <div className="swiper-pagination"></div>
            </div>
                <a href="proyectos.html" className="custom-btn btn-codigo portafolio-btn" id="btn-hide">
                    <FormattedMessage
                        id='btn-more-projects'
                        defaultMessage='More projects'
                    />
                </a>
        </section>
    )
};
export default React.memo(Project);