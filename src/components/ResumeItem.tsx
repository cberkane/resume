import React from "react";
import { Experience } from "src/models/experience";
import "./ResumeItem.scss";

const ResumeItem: React.FC<{ experience: Experience, className?: string }> = ({ experience, className }) => {

	return (
		<div className={`resume-item ${className}`} style={{ marginBottom: "16px" }}>
			<div className="resume-item-aside">
				<span>{experience.startDate}</span> - <span>{experience.endDate ?? 'today'}</span>
			</div>
			<div>
				<div className="resume-item-header">
					<a href={experience.companyHref} target="_blank">
						<img src={experience.companyImg} />
					</a>
					<div>
						<h3>{experience.jobTitle}</h3>
						<p>At {experience.companyName}</p>
					</div>
				</div>
				<div className="resume-item-body">
					<p className="description">{experience.description}</p>
					{experience.tasks?.map(task => <p className="task">{task}</p>)}
				</div>
				<div className="resume-item-footer">
					<span>Used techs</span>
					<div>
						{experience.technologies?.map(tech => <img width={'24px'} height={'24px'} src={tech}/>)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResumeItem;

