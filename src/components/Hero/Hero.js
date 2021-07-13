import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Hello 👋 <br />I am Piyush Mahapatra
			</SectionTitle>

			<SectionText>
				I am a Full Stack Develper Javascript Developer and a AWS aficionado. I
				specialize in ReactJS, talk science and run thought experiments in my
				head.
			</SectionText>

			<Button onClick={() => (window.location = "https://google.com")}>
				Let's Talk
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;
