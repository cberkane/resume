import { IconName } from "../models/icon";
import { Proficiency, Skill, SkillCategory } from "../models/skill";

export const skills: Skill[] = [
	{
		title: "Javascript",
		icon: IconName.Javacript,
		proficiency: Proficiency.Advanced,
		category: SkillCategory.Langage,
	},
	{
		title: "Typescript",
		icon: IconName.Typescript,
		proficiency: Proficiency.Advanced,
		category: SkillCategory.Langage,
	},
	{
		title: "CSS / SCSS",
		icon: IconName.SCSS,
		proficiency: Proficiency.Advanced,
		category: SkillCategory.Langage,
	},
	{
		title: "SQL",
		icon: IconName.Postgresql,
		proficiency: Proficiency.Intermediate,
		category: SkillCategory.Langage,
	}
];