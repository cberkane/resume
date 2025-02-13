import { Experience } from "../models/experience";
import { IconName } from '../models/icon';

import powens from "../assets/images/Powens.jpeg";
import aboutbio from "../assets/images/Aboutbio.png";
import cgi from "../assets/images/CGI.png";

export const experiences: Experience[] = [
	{
		jobTitle: "software engineer",
		description: "J'ai participé au développement des deux principaux projets web chez Powens. La Console qui permet de configurer services proposés aux clients. Et la Webview, qui est une version graphique et personnalisable de notre API d'Open Banking.",
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
			"Audit, veille et contribution aux choix techniques.",
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
		startDate: "Sept. 2021",
		endDate: "Avril 2022",
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
		startDate: "Sept. 2019",
		endDate: "Mars 2021",
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