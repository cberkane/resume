import { Education } from "src/models/education";

import ipi from "./../assets/images/IPI.png";
import cci from "./../assets/images/CCI.png";

export const education: Education[] = [
	{ 
		title: "Bac + 3 Développeur d'application logicielles",
		schoolName: "IPI Paris",
		description: "Diplôme obtenu avec felicitations.",
		startDate: "Sept. 2019",
		endDate: "Juin 2020",
		img: ipi,
		href: "https://www.ipi-ecoles.com/",
	},
	{ 
		title: "Bac +2 Développeur web",
		schoolName: "CCI Nancy",
		description: "Diplôme obtenu.",
		startDate: "Sept. 2018",
		endDate: "Juin 2019",
		img: cci,
		href: "https://www.nancy.cci.fr/",
	},
];