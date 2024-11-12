import React from "react";
import ResumeItem from "./../components/ResumeItem";
import { experiences } from "./../data/experiences"; // TODO: add alias to 
import "./Resume.scss";

const Resume: React.FC = () => {
	return (
		<section className="page-resume-section">
			<h1>Resume</h1>
			<div className="resume-container">
				<div className="aside">
					<h2>Work experience</h2>
				</div>
				<div className="body">
					{experiences.map(exp => <ResumeItem experience={exp} />)}
				</div>
			</div>
		</section>
	);
}

export default Resume;