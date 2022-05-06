import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import './App.css';

/* Pages */
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Services from "./pages/Service/ServicesPage";
import Project from "./pages/Project/ProjectPage";
import ProjectApp from "./pages/Project/ProjectApp";
import ProjectGame from "./pages/Project/ProjectGame";

import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop"

/* Loading spinner */
import HashLoader from "react-spinners/HashLoader";

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])
    return (
        <Router>
            <RouterScrollTop />
            {
                loading ?

                    <div className='loading-pag'>
                        <HashLoader
                            color={"#00e5fe"}
                            loading={loading}
                            size={150}
                        />
                    </div>

                    :

                    <Routes>
                        <Route path="/PortafolioReact/" element={<Home />}></Route>
                        <Route path="/PortafolioReact/about" element={<About />}></Route>
                        <Route path="/PortafolioReact/service" element={<Services />}></Route>
                        <Route path="/PortafolioReact/project" element={<Project />}></Route>
                        <Route path="/PortafolioReact/project/app" element={<ProjectApp />} />
                        <Route path="/PortafolioReact/project/game" element={<ProjectGame />} />
                    </Routes>

            }

        </Router>
    )
}

export default App
