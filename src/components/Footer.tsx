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
					<a className="info" href="tel:0652000000">0652000000</a>
				</div>
				<div className="footer-item">
					<p className="label">Follow me</p>
					<a className="info" href="tel:0652000000">0652000000</a>
				</div>
				<div className="footer-item">
					<small>
						This was inspired by this <a href="">Wix template</a> and done with React framework
					</small>
				</div>
			</div>
		</footer>
	)
}

export default Footer;