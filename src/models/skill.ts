import { IconName } from "../models/icon";

export interface Skill {
	title: string;
	proficiency: Proficiency;
	icon: IconName;
	category: string;
}

export enum Proficiency {
	Beginner = 'Beginner',
	Intermediate = 'Intermediate',
	Advanced = 'Advanced',
}

export enum SkillCategory {
	Langage = 'langage',
	Framework = 'framework',
	Tool = 'tool',
}