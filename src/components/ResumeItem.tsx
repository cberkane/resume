import React from "react";
import Icon from "./Icon";
import Tooltip from "./Tooltip";
import { Experience } from "src/models/experience";
import { Education } from "src/models/education";

import "./ResumeItem.scss";

const ResumeItem: React.FC<{ experience?: Experience, education?: Education, className?: string }> = ({ experience, education, className }) => {

	return (
		<div className={`resume-item ${className}`}>
			<div className="item-aside">
				<span>{experience?.startDate || education?.startDate}</span> - <span>{(experience?.endDate || education?.endDate) ?? "aujourd'hui"}</span>
			</div>
			{experience &&
				<div className="item-content">
					<div className="item-header">
						<div>
							<a href={experience?.companyHref}
								target="_blank"
								style={{ backgroundImage: `url("${experience?.companyImg}")` }}
							/>
						</div>
						<div>
							<h3>{experience.jobTitle}</h3>
							<p>Chez {experience.companyName}</p>
						</div>
					</div>
					<div className="item-body">
						<p className="description">{experience.description}</p>
						<p className="label">Taches :</p>
						{experience.tasks?.map(task => <p className="task">{task}</p>)}
					</div>
					<div className="item-footer">
						<p className="label">Technos :</p>
						<div>
							{experience.technologies?.map(tech => <>
								<Tooltip className="tooltip" title={tech}>
									<Icon iconName={tech} />
								</Tooltip>
								<span className="chip">
									<Icon iconName={tech} size={20} />
									{tech}
								</span>
							</>
							)}
						</div>
						<div>
							{experience.environment?.map(env => <>
								<Tooltip className="tooltip" title={env}>
									<Icon iconName={env} />
								</Tooltip>
								<span className="chip">
									<Icon iconName={env} size={20} />
									{env}
								</span>
							</>
							)}
						</div>
					</div>
				</div>
			}
			{education &&
				<div className="item-content">
					<div className="item-header">
						<div>
							<a href={education?.href}
								target="_blank"
								style={{ backgroundImage: `url("${education?.img}")` }}
							/>
						</div>
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

