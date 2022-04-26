import React from "react";
import Particles from "react-particles-js"
import ParticleConfig from "./particle-config";

import './ParticleBackground.css';

export default function ParticleBackground() {
    return (
        <Particles className="particles-css" params={ParticleConfig}></Particles>
    );
}

