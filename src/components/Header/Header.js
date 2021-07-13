import Link from "next/link";
import React from "react";
import {
	AiFillDribbbleCircle,
	AiFillGithub,
	AiFillInstagram,
	AiFillLinkedin,
	AiFillTwitterCircle,
} from "react-icons/ai";
import { DiAtom, DiStackoverflow } from "react-icons/di";
import { FaRegMoon, FaSun } from "react-icons/fa";
import Technologies from "../Technologies/Technologies";

import {
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
	Span,
} from "./HeaderStyles";

const Header = () => {
	const [isDark, setIsDark] = React.useState(true);
	return (
		<Container>
			<Div1>
				<Link href='/'>
					<a
						style={{
							display: "flex",
							alignItems: "center",
							color: "white",
							marginBottom: "20px",
						}}>
						<DiAtom size='5rem' />
					</a>
				</Link>
			</Div1>

			<Div2>
				<li>
					<Link href='#about'>
						<NavLink>Intro.</NavLink>
					</Link>
				</li>

				<li>
					<Link href='#projects'>
						<NavLink>Projects.</NavLink>
					</Link>
				</li>

				<li>
					<Link href='#blogs'>
						<NavLink>Blogs.</NavLink>
					</Link>
				</li>
			</Div2>

			<Div3>
				<SocialIcons href='https://linkedin.com'>
					<AiFillLinkedin size='3rem' />
				</SocialIcons>

				<SocialIcons href='https://github.com'>
					<AiFillGithub size='3rem' />
				</SocialIcons>

				<SocialIcons href='https://github.com'>
					<AiFillGithub size='3rem' />
				</SocialIcons>

				<SocialIcons
					href='https://github.com'
					onClick={() => setIsDark(!isDark)}>
					{isDark ? <FaRegMoon size='3.5rem' /> : <FaSun size='3.5rem' />}
				</SocialIcons>
			</Div3>
		</Container>
	);
};

export default Header;
