import React from "react";
import { me } from "../data/me";
import { IconName } from "../models/icon";
import Icon from "./Icon";

import "./Footer.scss";

const Footer: React.FC = () => {
	return (
		<footer className="app-footer">
			<div className="app-footer-container">
				<div className="footer-item">
					<p className="label">Phone number</p>
					<a className="info" href={`tel:${me.phoneNumber}`}>{me.phoneNumber}</a>
				</div>
				<div className="footer-item">
					<p className="label">Email</p>
					<a className="info" href="mailto:c.berkane@hotmail.fr">{me.email}</a>
				</div>
				<div className="footer-item">
					<p className="label">Follow me</p>
					<a className="info" href={me.socials.github} target="_blank"><Icon iconName={IconName.Github} size={16}/> Github</a>
				</div>
				<div className="footer-item">
					<p className="text-info">
						Site réalisé en React et inspiré par les templates disponible sur <a href="https://www.wix.com/website-template/view/html/2846" target="_blank">Wix</a>.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer;