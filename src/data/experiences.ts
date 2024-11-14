import { Experience } from "../models/experience";

/* Images */
import powens from "../assets/images/Powens.png";
import aboutbio from "../assets/images/Aboutbio.png";
import cgi from "../assets/images/CGI.png";


/* Icons */
import  angular  from "../assets/icons/angular.svg";
import  cypress  from "../assets/icons/cypress.svg";
import  debian  from "../assets/icons/debian.svg";
import  django  from "../assets/icons/django.svg";
import  docker  from "../assets/icons/docker.svg";
import  eclipse  from "../assets/icons/eclipse.svg";
import  express  from "../assets/icons/express.svg";
import  figma  from "../assets/icons/figma.svg";
import  github  from "../assets/icons/github.svg";
import  gitlab  from "../assets/icons/gitlab.svg";
import  intellij  from "../assets/icons/intellij.svg";
import  java  from "../assets/icons/java.svg";
import  jira from "../assets/icons/jira.svg";
import  material  from "../assets/icons/material.svg";
import  node from "../assets/icons/node.svg";
import  postgresql from "../assets/icons/postgresql.svg";
import  react from "../assets/icons/react.svg";
import  spring from "../assets/icons/spring-boot.svg";
import  sqlserver from "../assets/icons/sql-server.svg";
import  ubuntu from "../assets/icons/ubuntu.svg";
import  vscode from "../assets/icons/vscode.svg";


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
			angular,
			cypress,
			node,
			react,
			django,
		],
		environment: [
			debian,
			vscode,
			gitlab,
			jira,
			figma,
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
			angular,
			express,
			node,
			postgresql,
		],
		environment: [
			ubuntu,
			intellij,
			github,
			docker,
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
			angular,
			material,
			java,
			spring,
			sqlserver,
		],
		environment: [
			ubuntu,
			vscode,
			eclipse,
			github,
			jira,
		]
	},
]