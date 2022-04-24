import React from 'react';

const Service = () =>  (
    <section className="servicios" id="servicios">
            <h2 className="heading" data-section="Nav" data-value="services">Servicios</h2>
            <div className="row">
                <div className="columns">
                    <i className="fas fa-drafting-compass"></i>
                    <h3 data-section="Services" data-value="design">Diseño UX/UI</h3>
                    <p data-section="Services" data-value="design-info">Diseño de interfaz atractivas para usuarios tanto en web como en móvil, aprovechando al máximo la marca o el producto que el cliente dese explotar en su sitio web</p>
                </div>
                <div className="columns">
                    <i className="fas fa-laptop"></i>
                    <h3 data-section="Services" data-value="development">Desarrollo WEB</h3>
                    <p data-section="Services" data-value="development-info">Creación de páginas web, bien estructuradas, buen diseño responsivo, paleta de colores atractivas, con interacciones que le den al usuario satisfacción cuando navegue por el sitio web.</p>
                </div>
                <div className="columns" >
                    <i className="fas fa-chart-line"></i>
                    <h3 data-section="Services" data-value="marketing">Marketing digitals</h3>
                    <p data-section="Services" data-value="marketing-info">Preparar una estrategia y objetivos para la promoción de la marca que nos proporcione el cliente, utilizando internet u otras plataformas para promover productos y servicios de la marca en cuestión.</p>
                </div>
                <div className="columns">
                    <i className="fas fa-wrench"></i>
                    <h3 data-section="Services" data-value="maintenance">Mantenimiento web</h3>
                    <p data-section="Services" data-value="maintenance-info">Mantenimiento completo de páginas web para detectar y solucionar errores, actualización de contenido ya sean textos, fotos, elementos de diseño web, añadir nuevas funciones, etc.</p>
                </div>
                <div className="columns" >
                    <i className="fas fa-search"></i>
                    <h3 data-section="Services" data-value="seo">Posicionamiento web (SEO)</h3>
                    <p data-section="Services" data-value="seo-info">Posicionamiento web mediante SEO, así tu pagina web aparezca en los principales resultados de búsqueda acorde a tu negocio, tanto en Google, Bing, u otros buscadores de internet</p>
                </div>
                <div className="columns" >
                    <i className="fas fa-tachometer-alt"></i>
                    <h3 data-section="Services" data-value="optimization">Optimización web</h3>
                    <p data-section="Services" data-value="optimization-info">Optimización completa de tu pagina web, mejorando la velocidad de carga, usando imágenes optimizadas,, un buen URL, para dar una mejor experiencia a los usuarios que visiten el sitio web </p>
                </div>
            </div>
            <a href="servicios.html" className="custom-btn btn-codigo portafolio-btn" id="btn-hide" data-section="Aboult" data-value="btn-know-more">Saber más</a>
    </section>  
);

export default Service;