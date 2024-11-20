import React, { ForwardedRef } from "react";
import { IconName } from "../models/icon";

import angular from "../assets/icons/angular.svg";
import burger from "../assets/icons/burger.svg";
import cypress from "../assets/icons/cypress.svg";
import debian from "../assets/icons/debian.svg";
import django from "../assets/icons/django.svg";
import docker from "../assets/icons/docker.svg";
import eclipse from "../assets/icons/eclipse.svg";
import express from "../assets/icons/express.svg";
import figma from "../assets/icons/figma.svg";
import github from "../assets/icons/github.svg";
import gitlab from "../assets/icons/gitlab.svg";
import info from "../assets/icons/info.svg";
import intellij from "../assets/icons/intellij.svg";
import java from "../assets/icons/java.svg";
import javascript from "../assets/icons/javascript.svg";
import jira from "../assets/icons/jira.svg";
import material from "../assets/icons/material.svg";
import node from "../assets/icons/node.svg";
import postgresql from "../assets/icons/postgresql.svg";
import python from "../assets/icons/python.svg";
import react from "../assets/icons/react.svg";
import rxjs from "../assets/icons/rxjs.svg";
import scss from "../assets/icons/scss.svg";
import spring from "../assets/icons/spring-boot.svg";
import sql from "../assets/icons/sql.svg";
import sqlserver from "../assets/icons/sql-server.svg";
import success from "../assets/icons/success.svg";
import typescript from "../assets/icons/typescript.svg";
import ubuntu from "../assets/icons/ubuntu.svg";
import vscode from "../assets/icons/vscode.svg";

export const icons = {
	"angular": angular,
	"burger": burger,
	"cypress": cypress,
	"debian": debian,
	"django": django,
	"docker": docker,
	"eclipse": eclipse,
	"express": express,
	"figma": figma,
	"github": github,
	"gitlab": gitlab,
	"info": info,
	"intellij": intellij,
	"java": java,
	"javascript": javascript,
	"jira": jira,
	"material": material,
	"node": node,
	"postgresql": postgresql,
	"python": python,
	"react": react,
	"rxjs": rxjs,
	"scss": scss,
	"spring": spring,
	"sql": sql,
	"sqlserver": sqlserver,
	"success": success,
	"typescript": typescript,
	"ubuntu": ubuntu,
	"vscode": vscode,
}


interface MyComponentProps {
	iconName: IconName;
	size?: number;
}

const Icon = React.forwardRef((props: MyComponentProps, ref: ForwardedRef<HTMLImageElement>) => {
	const { iconName, size } = props;

	return (
		<img ref={ref} src={icons[iconName]} width={size ?? 24} height={size ?? 24} />
	);
}
);


export default Icon;