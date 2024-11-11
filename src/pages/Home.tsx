import React from "react"; // TODO: use double quotes
import { useNavigate } from "react-router-dom";

import model from "./../assets/model.webp"; // TODO: add src relative path"
import "./Home.scss";

const Home: React.FC = () => {
	const navigate = useNavigate();
	
	return (
		<section className="page-home-section">
			<div className="page-home-landing">
				<img src={model} alt="myself" />
				<div>
					<h2 className="page-home-landing-title">Hello</h2>
					<div className="page-home-landing-text">
						<p>A Bit About Me</p>
						<p>I"m a paragraph. Click here to add your own text and edit me. I"m a great place for you to tell a story and let your users know a little more about you.</p>
					</div>
					<div className="page-home-landing-action">
						<button className="round-btn orange" onClick={() => navigate("/home")}>Resume</button>
						<button className="round-btn red" onClick={() => navigate("/skills")}>Skills</button>
						<button className="round-btn azure" onClick={() => navigate("/contact")}>Contacts</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
