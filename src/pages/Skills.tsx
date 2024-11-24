import React, { useEffect } from "react";
import Icon from "../components/Icon";
import { skills } from "../data/skills";
import { Proficiency, Skill, SkillCategory } from "../models/skill";
import { me } from "../data/me";

import "./Skills.scss";

const Skills: React.FC = () => {

	useEffect(() => {
		document.title = `${me.firstName} - Compétences`;
	}, []);

	const translateProficiency = (arg?: Proficiency) => {
		switch (arg) {
			case Proficiency.Beginner: return "débutant";
			case Proficiency.Intermediate: return "intermédiaire";
			case Proficiency.Advanced: return "avancé";
		}
	}

	const skillItem = (skill: Skill) => {
		return (
			<div className="skill-item">
				<Icon iconName={skill.icon} size={44} />
				<div>
					<p className="title">{skill.title}</p>
					{skill.proficiency && <p className="proficiency">Niveau <span>{translateProficiency(skill.proficiency)}</span></p>}
					{skill.remark && <p>{skill.remark}</p>}
				</div>
			</div>
		)
	}

	return (
		<section className="page-skills-section">
			<h1>Compétences</h1>
			<div className="skill-container">
				<div className="aside">
					<h2>Langages informatiques</h2>
				</div>
				<div className="body">
					{skills
						.filter(skill => skill.category === SkillCategory.Langage)
						.map(skill => skillItem(skill))
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
						.map(skill => skillItem(skill))
					}
				</div>
			</div>
			<hr />
			<div className="skill-container">
				<div className="aside">
					<h2>Langues</h2>
				</div>
				<div className="body">
					{skills
						.filter(skill => skill.category === SkillCategory.Lang)
						.map(skill => (skillItem(skill)))
					}
				</div>
			</div>
		</section>
	);
}

export default Skills;