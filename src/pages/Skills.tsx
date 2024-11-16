import React from "react";
import Icon from "../components/Icon";
import { skills } from "../data/skills";
import { Proficiency, SkillCategory } from "../models/skill";

import "./Skills.scss";

const Skills: React.FC = () => {

	const translateProficiency = (arg?: Proficiency) => {
		switch (arg) {
			case Proficiency.Beginner: return "débutant";
			case Proficiency.Intermediate: return "intermédiaire";
			case Proficiency.Advanced: return "avancé";
		}
	}

	return (
		<section className="page-skills-section">
			<h1>Mes compétences</h1>
			<div className="skill-container">
				<div className="aside">
					<h2>Langages informatiques</h2>
				</div>
				<div className="body">
					{skills
						.filter(skill => skill.category === SkillCategory.Langage)
						.map(skill => (
							<div className="skill-item">
								<Icon iconName={skill.icon} size={36} />
								<div>
									<p className="title">{skill.title}</p>
									<p>Niveau <span style={{ fontWeight: 600 }}>{translateProficiency(skill.proficiency)}</span></p>
								</div>
							</div>
						))
					}
				</div>
			</div>
			<hr />
			<div className="skill-container">
				<div className="aside">
					<h2>Technos</h2>
				</div>
				<div className="body">
					{skills
						.filter(skill => skill.category === SkillCategory.Framework)
						.map(skill => (
							<div className="skill-item">
								<Icon iconName={skill.icon} size={36} />
								<div>
									<p className="title">{skill.title}</p>
									<p>Niveau <span style={{ fontWeight: 600 }}>{translateProficiency(skill.proficiency)}</span></p>
								</div>
							</div>
						))
					}
				</div>
			</div>
			<hr />
			<div className="skill-container">
				<div className="aside">
					<h2>Outils</h2>
				</div>
				<div className="body">
					{skills
						.filter(skill => skill.category === SkillCategory.Tool)
						.map(skill => (
							<div className="skill-item">
								<Icon iconName={skill.icon} size={36} />
								<div>
									<p className="title">{skill.title}</p>
									<p>{skill.remark}</p>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</section>
	);
}

export default Skills;