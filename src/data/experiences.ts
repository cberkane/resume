import { Experience } from "../models/experience";

/* Images */
import powens from "../assets/images/Powens.png";

/* Icons */
import  angular  from "../assets/icons/angular.svg";

export const experiences: Experience[] = [
	{
		jobTitle: "software engineer",
		description: "In charge of Console and Webview for the open finance provider",
		companyName: "Powens",
		companyImg: powens,
		companyHref: "https://www.powens.com",
		startDate: "mai 2020",
		endDate: "sept 2025",
		tasks: [
			"Task 1",
			"Task 2",
			"Task 3"
		],
		technologies: [
			angular,
			angular,
			angular,
		]
	},
	{
		jobTitle: "software engineer",
		description: "In charge of Console and Webview for the open finance provider",
		companyName: "Powens",
		companyImg: powens,
		companyHref: "https://www.powens.com",
		startDate: "mai 2020",
		endDate: "sept 2025",
		tasks: [
			"Task 1",
			"Task 2",
			"Task 3"
		]
	},
]