import { IconName } from "../models/icon";

export interface Skill {
	title: string;
	icon: IconName;
	category: string;
	proficiency?: Proficiency;
	remark?: string;
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
	Lang = 'lang'
}