import React from "react";
import "./Resume.scss";
import { experiences } from "src/data/experience";
import ResumeItem from "src/components/ResumeItem";

const Resume: React.FC = () => {
	return <>
		{experiences.map(exp =>
			<ResumeItem experience={exp} />
		)}
	</>
}

export default Resume;