import React from "react";
import ResumeItem from "../components/ResumeItem";
import { experiences } from "./../data/experiences"; // TODO: add alias to 
import { education } from "./../data/education"; // TODO: add alias to 
import "./Resume.scss";

const Resume: React.FC = () => {
	return (
		<section className="page-resume-section">
			<h1>Mon CV</h1>
			<div className="resume-container">
				<div className="aside">
					<h2>Expérience pro</h2>
				</div>
				<div className="body">
					{experiences.map((exp, i) => <ResumeItem className="item" experience={exp} key={`resume-experience-${i}`} />)}
				</div>
			</div>
			<hr />
			<div className="resume-container">
				<div className="aside">
					<h2>Formation</h2>
				</div>
				<div className="body">
					{education.map((item, i) => (<ResumeItem className="item" education={item} key={`resume-education-${i}`} />))}
				</div>
			</div>
		</section>
	);
}

export default Resume;