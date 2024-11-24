import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import RoundButton from "./../components/RoundButton";
import { me } from "../data/me";
import myself from "./../assets/myself.jpeg";

import "./Home.scss";
const Home: React.FC = () => {
	const navigate = useNavigate();

	useEffect(() => {
		document.title = `${me.firstName} - Home`;
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<section className="page-home-section">
				<div className="page-home-landing">
					<img src={myself} alt="myself" />
					<div>
						<h2 className="page-home-landing-title">Hello</h2>
						<div className="page-home-landing-text">
							<p>A propos de moi</p>
							<p>
								Développeur passionné et technophile, j'aime les solutions simples, élégantes et efficaces.
							</p>
						</div>
						<div className="page-home-landing-action">
							<RoundButton variant="orange" onClick={() => navigate("/resume")}>CV</RoundButton>
							<RoundButton variant="red" onClick={() => navigate("/skills")}>Compétences</RoundButton>
							<RoundButton variant="azure" onClick={() => navigate("/contact")}>Contact</RoundButton>
						</div>
					</div>
				</div>
			</section>
		</motion.div>
	);
};

export default Home;
