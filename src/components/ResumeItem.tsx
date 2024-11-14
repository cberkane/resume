import React from "react";
import { Experience } from "src/models/experience";
import "./ResumeItem.scss";

const ResumeItem: React.FC<{ experience: Experience, className?: string }> = ({ experience, className }) => {

	return (
		<div className={`resume-item ${className}`}>
			<div className="resume-item-aside">
				<span>{experience.startDate}</span> - <span>{experience.endDate ?? 'today'}</span>
			</div>
			<a className="resume-item-link" href={experience.companyHref} target="_blank">
				<img src={experience.companyImg} />
			</a>
			<div>
				<div className="resume-item-header">
					<div>
						<h3>{experience.jobTitle}</h3>
						<p>Chez {experience.companyName}</p>
					</div>
				</div>
				<div className="resume-item-body">
					<p className="description">{experience.description}</p>
					<p className="label">Taches :</p>
					{experience.tasks?.map(task => <p className="task">{task}</p>)}
				</div>
				<div className="resume-item-footer">
					<p className="label">Technos :</p>
					<div>
						{experience.technologies?.map(tech => <img width={'24px'} height={'24px'} src={tech} />)}
					</div>
					<div>
						{experience.environment?.map(env => <img width={'24px'} height={'24px'} src={env} />)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResumeItem;

