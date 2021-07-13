import React from "react";

import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
} from "./ProjectsStyles";
import {
	Section,
	SectionDivider,
	SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
	<Section nopadding id='projects'>
		<SectionDivider />
		<SectionTitle main>Projects</SectionTitle>
		<GridContainer>
			{projects.map(
				({ title, image, description, tags, source, visit, id }) => (
					<BlogCard key={id}>
						<Img src={image} />
						<TitleContent>
							<HeaderThree title>{title}</HeaderThree>
							<Hr />
						</TitleContent>
						<CardInfo>{description}</CardInfo>
						<div>
							<TitleContent>Stack</TitleContent>
							<TagList>
								{tags.map((tag, index) => (
									<Tag key={index}>{tag}</Tag>
								))}
							</TagList>
						</div>

						<UtilityList>
							<ExternalLinks href='/'>Code</ExternalLinks>
							<ExternalLinks href='/'>Demo</ExternalLinks>
							<ExternalLinks href='/'>Live</ExternalLinks>
						</UtilityList>
					</BlogCard>
				)
			)}
		</GridContainer>
	</Section>
);

export default Projects;
