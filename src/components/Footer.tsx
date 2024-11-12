import React from "react";

import "./Footer.scss";

const Footer: React.FC = () => {
	return (
		<footer className="app-footer">
			<div className="app-footer-container">
				<div className="footer-item">
					<p className="label">Phone number</p>
					<a className="info" href="tel:0652000000">0652000000</a>
				</div>
				<div className="footer-item">
					<p className="label">Email</p>
					<a className="info" href="mailto:c.berkane@hotmail.fr">c.berkane@hotmail.fr</a>
				</div>
				<div className="footer-item">
					<p className="label">Follow me</p>
					<a className="info" href="tel:0652000000">0652000000</a>
				</div>
				<div className="footer-item">
					<p className="foo">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aperiam animi natus!
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer;