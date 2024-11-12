import React from "react";
import { Experience } from "src/models/experience";
import "./ResumeItem.scss";

const ResumeItem: React.FC<{ experience: Experience }> = ({ experience: item }) => {

	return (
		<div className="resume-item" style={{ marginBottom: "16px" }}>
			<div className="resume-item-aside">
				<span>{item.startDate}</span> - <span>{item.endDate ?? 'today'}</span>
			</div>
			<div>
				<div className="resume-item-header">
					<a href={item.companyHref} target="_blank">
						<img src={item.companyImg} />
					</a>
					<div>
						<h3>{item.jobTitle}</h3>
						<p>At {item.companyName}</p>
					</div>
				</div>
				<div className="resume-item-body">
					<p className="description">{item.description}</p>
					{item.tasks?.map(task => <p className="task">{task}</p>)}
				</div>
			</div>
		</div>
	);
};

export default ResumeItem;

