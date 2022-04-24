import React from 'react';
import './Footer.css';


const Footer = () =>{
    // Fecha
    let fecha = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p data-section="Footer" data-value="footer-info">Pagina creada por Nahuel61920</p>
                    <p>&copy; {fecha}. All Rights Reserved.</p>
                </div>
                <div className="redes-sociales">
                    <a href="https://github.com/Nahuel61920/" rel="noopener"><i className="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/nahuelcarrizolc/" rel="noopener"><i className="fab fa-facebook-square"></i></a>
                    <a href="https://www.linkedin.com/in/esteban-nahuel-carrizo-69715422b/" rel="noopener"><i className="fab fa-linkedin"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=5493815360966" rel="noopener"><i className="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);