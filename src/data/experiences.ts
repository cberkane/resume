import { Experience } from "../models/experience";
import { IconName } from '../models/icon';

import powens from "../assets/images/Powens.png";
import aboutbio from "../assets/images/Aboutbio.png";
import cgi from "../assets/images/CGI.png";

export const experiences: Experience[] = [
	{
		jobTitle: "software engineer",
		description: "Société leader dans l’Open Finance où j'ai participé au développement d'outils web pour configurer nos solutions d'agrégations financière.",
		companyName: "Powens",
		companyImg: powens,
		companyHref: "https://www.powens.com",
		startDate: "mai 2022",
		endDate: undefined,
		tasks: [
			"Conception de pages web et de parcours utilisateurs (UX/UI).",
			"Création de composantes web personnalisées from scratch.",
			"Refactoring, maintenance et d'optimisation de la performance.",
			"Mise en place de scénarios de tests bout-en-bout.",
			"Veille technique et contribution aux choix techniques",
		],
		technologies: [
			IconName.Angular,
			IconName.Cypress,
			IconName.Node,
			IconName.React,
			IconName.Django,
		],
		environment: [
			IconName.Debian,
			IconName.Vscode,
			IconName.Gitlab,
			IconName.Jira,
			IconName.Figma,
		]
	},
	{
		jobTitle: "Développeur fullstack",
		description: "Laboratoire d’analyse biologique, où j’ai participé au développement de l'application BioContact, à destination des usagers et patients du laboratoire.",
		companyName: "Atoutbio",
		companyImg: aboutbio,
		companyHref: "https://www.atoutbio.eu/",
		startDate: "Mars 2022",
		endDate: "Juillet 2021",
		tasks: [
			"Conception et intégration de pages web.",
			"Création d’API pour exposer des données de santé.",
			"Écriture de script SQL d’extraction des données.",
			"Assistance technique et téléphonique aux usagers et patients.",
		],
		technologies: [
			IconName.Angular,
			IconName.Express,
			IconName.Node,
			IconName.Postgresql,
		],
		environment: [
			IconName.Ubuntu,
			IconName.Intellij,
			IconName.Github,
			IconName.Docker,
		]
	},
	{
		jobTitle: "Analyste programmeur junior",
		description: "Consultant pour le compte de CGI chez le client Hub One (filiale ADP), j'étais chargé du développement d'un catalogue de produits de mobilité numérique à usage B-to-B.",
		companyName: "CGI",
		companyImg: cgi,
		companyHref: "https://www.cgi.com",
		startDate: "Juin 2021",
		endDate: "Sept. 2020",
		tasks: [
			"Développement de web services du catalogue.",
			"Création de pages web en Angular et Material.",
			"Intervention sur projet Wordpress.",
		],
		technologies: [
			IconName.Angular,
			IconName.Material,
			IconName.Java,
			IconName.Spring,
			IconName.Sqlserver,
		],
		environment: [
			IconName.Ubuntu,
			IconName.Vscode,
			IconName.Eclipse,
			IconName.Github,
			IconName.Jira,
		]
	},
];