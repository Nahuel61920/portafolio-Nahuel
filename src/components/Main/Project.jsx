import React from 'react';

/* Img */
import Proyect5 from '../../img/proyecto-5.jpg';
import Proyect6 from '../../img/proyecto-6.jpg';
import Proyect7 from '../../img/proyecto-7.jpg';
import Proyect8 from '../../img/proyecto-8.jpg';
import Proyect9 from '../../img/proyecto-9.jpg';
import Proyect10 from '../../img/proyecto-10.jpg';
import Proyect11 from '../../img/proyecto-11.jpg';
import Proyect12 from '../../img/proyecto-12.jpg';
import Proyect14 from '../../img/proyecto-14.jpg';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";


const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading" data-section="Nav" data-value="projects">Proyectos</h2 >
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
                        <img src={Proyect14}/>
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
                            <a href="https://nahuel61920.github.io/Power-Engine/" className="custom-btn btn" target="_blank"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/Power-Engine" className="custom-btn btn-codigo" target="_blank">Repository</a>
                        </div> 
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img src={Proyect7}/>
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
                                <a href="https://nahuel61920.github.io/Power-Engine/" className="custom-btn btn" target="_blank"><span>Demo</span></a>
                                <a href="https://github.com/Nahuel61920/Power-Engine" className="custom-btn btn-codigo" target="_blank">Repository</a>
                        </div>
                    </SwiperSlide>                
                    <SwiperSlide className='caja'>
                        <img src={Proyect6}/>
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
                                <a href="https://nahuel61920.github.io/Spider-Man/" className="custom-btn btn" target="_blank"><span>Demo</span></a>
                                <a href="https://github.com/Nahuel61920/Spider-Man" className="custom-btn btn-codigo" target="_blank">Repository</a>
                        </div>
                    </SwiperSlide>                 
                    <SwiperSlide className='caja'>
                        <img src={Proyect12}/>
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
                                <a href="https://nahuel61920.github.io/Bienes-Raices/" className="custom-btn btn" target="_blank"><span>Demo</span></a>
                                <a href="https://github.com/Nahuel61920/Bienes-Raices" className="custom-btn btn-codigo" target="_blank">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img src={Proyect5}/>
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
                                <a href="https://nahuel61920.github.io/PremierFood/" className="custom-btn btn" target="_blank"><span>Demo</span></a>
                                <a href="https://github.com/Nahuel61920/PremierFood" className="custom-btn btn-codigo" target="_blank">Repository</a>
                        </div>
                    </SwiperSlide>                 
                    <SwiperSlide className='caja'>
                        <img src={Proyect8}/>
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
                                <a href="https://nahuel61920.github.io/shop-tec/" className="custom-btn btn" target="_blank"><span>Demo</span></a>
                                <a href="https://github.com/Nahuel61920/shop-tec" className="custom-btn btn-codigo" target="_blank">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img src={Proyect10}/>
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
                                <a href="https://nahuel61920.github.io/ElegantHand/ " className="custom-btn btn" target="_blank"><span>Demo</span></a>
                                <a href="https://github.com/Nahuel61920/ElegantHand" className="custom-btn btn-codigo" target="_blank">Repository</a>
                        </div>
                    </SwiperSlide>                 
                    <SwiperSlide className='caja'>
                        <img src={Proyect9}/>
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
                                <a href="https://nahuel61920.github.io/vida-en-papel/ " className="custom-btn btn" target="_blank"><span>Demo</span></a>
                                <a href="https://github.com/Nahuel61920/vida-en-papel" className="custom-btn btn-codigo" target="_blank">Repository</a>
                        </div>
                    </SwiperSlide>  
                    <SwiperSlide className='caja'>
                        <img src={Proyect11}/>
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
                                <a href="https://nahuel61920.github.io/PlusAnime/" className="custom-btn btn" target="_blank"><span>Demo</span></a>
                                <a href="https://github.com/Nahuel61920/PlusAnime" className="custom-btn btn-codigo" target="_blank">Repository</a>
                        </div>
                    </SwiperSlide>                  
                </Swiper>
                    <div className="swiper-pagination"></div>
            </div>
                <a href="proyectos.html" className="custom-btn btn-codigo portafolio-btn" id="btn-hide" data-section="Projects" data-value="btn-more-projects">Más proyectos</a>
        </section>
    )
};
export default React.memo(Project);