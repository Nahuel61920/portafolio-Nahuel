import React, { useState } from 'react';

function Accordion(props) {
    const [setActive, setActiveState] = useState("");

    function activeAcordion() {
        setActiveState(setActive === "" ? "active" : "");
    }

    return (
        <div data-aos={props.dataAos} data-aos-delay={props.dataAosDelay} >
            <div className={`accordion ${setActive}`} onClick={activeAcordion}>
                <div className="accordion-heading">
                    <h3>{props.title}</h3>
                    <i className="fas fa-angle-down"></i>
                </div>
                <p className="accordioin-content">
                    {props.content}
                </p>
            </div>
        </div>
    )
}

export default Accordion
