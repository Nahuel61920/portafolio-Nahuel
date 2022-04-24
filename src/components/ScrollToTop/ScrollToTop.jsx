import React from 'react';
import {useEffect, useState} from 'react';

import './ScrollToTop.css';

const ScrollToTop = () => {
    const [backToTopButtom, setBackTopButton]= useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackTopButton(true);
            } else {
                setBackTopButton(false);
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return <div className='App'>
            {backToTopButtom && (
                <button className='cm-up' onClick={scrollUp}> 
                    <span className="cm-icon">
                        <i className="fas fa-chevron-up"></i>
                    </span>
                </button>
            )}
    </div>
};

export default React.memo(ScrollToTop);