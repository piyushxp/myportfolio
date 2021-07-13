import Particles from "react-particles-js";
import particlesConfig from "../../themes/particle-config";

import React from "react";

export default function ParticleBackground() {
	return <Particles params={particlesConfig}></Particles>;
}
