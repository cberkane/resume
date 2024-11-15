import { IconName } from "./icon";

export interface Experience {
	jobTitle: string;
	startDate: string;
	endDate: string | undefined;

	companyName: string;
	companyImg: string;
	companyHref: string;

	description: string;
	tasks: string[];
	technologies?: IconName[]; 
	environment?: IconName[];
}
