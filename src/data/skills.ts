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
		title: "CSS et SCSS",
		icon: IconName.SCSS,
		proficiency: Proficiency.Advanced,
		category: SkillCategory.Langage,
	},
	{
		title: "Bases de données SQL",
		icon: IconName.Sql,
		proficiency: Proficiency.Intermediate,
		category: SkillCategory.Langage,
	},
	{
		title: "Python",
		icon: IconName.Python,
		proficiency: Proficiency.Beginner,
		category: SkillCategory.Langage,
	},
	{
		title: "Java",
		icon: IconName.Java,
		proficiency: Proficiency.Beginner,
		category: SkillCategory.Langage,
	},
	{
		title: "Angular",
		icon: IconName.Angular,
		proficiency: Proficiency.Advanced,
		category: SkillCategory.Framework,
	},
	{
		title: "React",
		icon: IconName.React,
		proficiency: Proficiency.Intermediate,
		category: SkillCategory.Framework,
	},
	{
		title: "NodeJS",
		icon: IconName.Node,
		proficiency: Proficiency.Advanced,
		category: SkillCategory.Framework,
	},
	{
		title: "Cypress",
		icon: IconName.Cypress,
		proficiency: Proficiency.Advanced,
		category: SkillCategory.Framework,	
	},
	{
		title: "RxJS",
		icon: IconName.Rxjs,
		proficiency: Proficiency.Advanced,
		category: SkillCategory.Framework,
	},
	{
		title: "Django",
		icon: IconName.Django,
		proficiency: Proficiency.Beginner,
		category: SkillCategory.Framework,
	},
	{
		title: "Github et Gitlab",
		icon: IconName.Github,
		remark: "Utilisation quotidienne",
		category: SkillCategory.Tool,
	},
	{
		title: "Jira",
		icon: IconName.Jira,
		remark: "Utilisation quotidienne",
		category: SkillCategory.Tool,
	},
	{
		title: "VSCode",
		icon: IconName.Vscode,
		remark: "Utilisation quotidienne",
		category: SkillCategory.Tool,
	},
];