import React from "react";
import Icon from "./Icon";
import { Experience } from "src/models/experience";
import { Education } from "src/models/education";

import "./ResumeItem.scss";

const ResumeItem: React.FC<{ experience?: Experience, education?: Education, className?: string }> = ({ experience, education, className }) => {

	return (
		<div className={`resume-item ${className}`}>
			<div className="resume-item-aside">
				<span>{experience?.startDate || education?.startDate}</span> - <span>{(experience?.endDate || experience?.endDate) ?? 'today'}</span>
			</div>
			<a className="resume-item-link" href={experience?.companyHref} target="_blank">
				<img src={experience?.companyImg || education?.img} />
			</a>
			{experience &&
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
							{experience.technologies?.map((tech, i) =>
								<span className="tooltip" data-tooltip={tech} key={`resume-item-tech-${i}`}>
									<Icon iconName={tech} />
								</span>
							)}
						</div>
						<div>
							{experience.environment?.map((env, i) =>
								<span className="tooltip" data-tooltip={env} key={`resume-item-env-${i}`}>
									<Icon iconName={env} />
								</span>
							)}
						</div>
					</div>
				</div>
			}
			{education &&
				<div>
					<div className="resume-item-header">
						<div>
							<h3>{education.title}</h3>
							<p>{education.schoolName}</p>
							<p>{education.description}</p>
						</div>
					</div>
				</div>
			}
		</div>
	);
};

export default ResumeItem;

