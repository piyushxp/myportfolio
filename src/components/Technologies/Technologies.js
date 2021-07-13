import React from "react";
import {
	DiDjango,
	DiFirebase,
	DiLinux,
	DiNodejs,
	DiReact,
	DiZend,
} from "react-icons/di";
import { BiMinusFront } from "react-icons/bi";
import { SiMaterialdesign } from "react-icons/si";

import { FaServer } from "react-icons/fa";
import {
	Section,
	SectionDivider,
	SectionSubText,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import {
	DevInlineIcon,
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
	<Section id='tech'>
		<SectionDivider />
		<br />
		<SectionTitle>Technologies</SectionTitle>
		<SectionSubText>
			I have worked with Javascript,Typscript, Python and know the basics of
			Golang. I can design,develop and deploy,which makes me a Full Stack
			Designer- Developer
		</SectionSubText>

		<List>
			<ListItem>
				<SiMaterialdesign size='3rem' />
				<ListContainer>
					<ListTitle>UI/UX</ListTitle>
					<ListParagraph>
						Design Enthusiast <br />
						Figma ,Canva and Webflow
					</ListParagraph>
				</ListContainer>
			</ListItem>

			<ListItem>
				<BiMinusFront size='3rem' />
				<ListContainer>
					<ListTitle>Frontend</ListTitle>
					<ListParagraph>
						Experience working with
						<br />
						ReactJs,NextJS and React Native
					</ListParagraph>
				</ListContainer>
			</ListItem>

			<ListItem>
				<FaServer size='3rem' />
				<ListContainer>
					<ListTitle>Backend</ListTitle>
					<ListParagraph>
						Experience with <br />
						NodeJS and Django
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
