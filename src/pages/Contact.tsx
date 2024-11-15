import React, { FormEvent } from "react";

import "./Contact.scss";

const Contact: React.FC = () => {
	
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		console.log('event', event);
	}
	
	return <>
		<form onSubmit={handleSubmit} className="form-grid">
			<div className="input-text">
				<label htmlFor="name">First name</label>
				<input type="text" name="firstName" />
			</div>
			<div className="input-text">
				<label htmlFor="name">Last name</label>
				<input type="text" name="lastName" />
			</div>
			<div className="input-text">
				<label htmlFor="name">Email</label>
				<input type="text" name="email" />
			</div>
			<div className="input-text">
				<label htmlFor="name">Subject</label>
				<input type="text" name="subject" />
			</div>
			<div className="input-textarea">
				<label htmlFor="subject">Message</label>
				<textarea name="subject" rows={6} id="subject"></textarea>
			</div>
			<div className="submit-container">
				<button className="round-btn">Envoyer</button>
			</div>
		</form>
	</>
}

export default Contact;