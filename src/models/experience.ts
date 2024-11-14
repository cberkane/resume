export interface Experience {
	jobTitle: string;
	startDate: string;
	endDate: string | undefined;

	companyName: string;
	companyImg: string;
	companyHref: string;

	description: string;
	tasks: string[];
	technologies?: string[]; 
	environment?: string[];
}
