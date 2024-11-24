import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ResumeItem from "../components/ResumeItem";
import { experiences } from "./../data/experiences"; // TODO: add alias to 
import { education } from "./../data/education";
import { me } from "./../data/me";

import "./Resume.scss";

const Resume: React.FC = () => {

	useEffect(() => {
		document.title = `${me.firstName} - Mon CV`;
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
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
		</motion.div>
	);
}

export default Resume;