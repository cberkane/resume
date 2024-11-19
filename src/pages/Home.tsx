import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import model from "./../assets/model.webp";
import { me } from "../data/me";

import "./Home.scss";

const Home: React.FC = () => {
	const navigate = useNavigate();

	useEffect(() => {
		document.title = `${me.firstName} - Home`;
	});

	return (
		<section className="page-home-section">
			<div className="page-home-landing">
				<img src={model} alt="myself" />
				<div>
					<h2 className="page-home-landing-title">Hello</h2>
					<div className="page-home-landing-text">
						<p>A propos de moi</p>
						<p>
							Développeur passionné et technophile, j'aime les solutions simples, élégantes et efficaces.
						</p>
					</div>
					<div className="page-home-landing-action">
						<button className="round-btn orange" onClick={() => navigate("/resume")}>CV</button>
						<button className="round-btn red" onClick={() => navigate("/skills")}>Compétences</button>
						<button className="round-btn azure" onClick={() => navigate("/contact")}>Contact</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
