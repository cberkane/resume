import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import { IconName } from "../models/icon";
import { Validator } from "../utils/validators";
import { me } from "../data/me";
import Icon from "../components/Icon";

import "./Contact.scss";

interface ContactFormValues {
	firstName: string;
	lastName: string;
	email: string;
	subject: string;
	message: string;
}

const Contact: React.FC = () => {

	useEffect(() => {
		document.title = `${me.firstName} - Contact`;
	});

	const [formValues, setFormValues] = useState<ContactFormValues>({
		firstName: '',
		lastName: '',
		email: '',
		subject: '',
		message: '',
	});
	const [formErrors, setFormErrors] = useState<Partial<ContactFormValues>>({});
	const [errorMessage, setErrorMessage] = useState<string>('');
	const [successMessage, setSuccessMessage] = useState<string>('');

	const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.currentTarget;
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const validate = (): boolean => {
		const errors: Record<string, string> = {};
		for (const [key, value] of Object.entries(formValues)) {
			switch (key) {
				case "subject":
					if (Validator.isRequired(value)) errors[key] = Validator.REQUIRED;
					break;
				case "email":
					if (Validator.isRequired(value)) errors[key] = Validator.REQUIRED;
					else if (Validator.isEmail(value)) errors[key] = Validator.INVALID_EMAIL;
					break;
				case "message":
					if (Validator.isRequired(value)) errors[key] = Validator.REQUIRED;
					break;
			}
		}

		setFormErrors(errors);

		return Object.keys(errors).length === 0;
	}

	const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();
		const isValid = validate();
		if (isValid) {

			// TODO: externalize in service
			const serviceId = import.meta.env.VITE_MAILJS_SERVICE_ID;
			const templateId = import.meta.env.VITE_MAILJS_TEMPLATE_ID;
			const publicKey = import.meta.env.VITE_MAILJS_PUBLIC_KEY;
			emailjs
				.send(
					serviceId,
					templateId,
					{
						from_email: formValues.email,
						from_first_name: formValues.firstName,
						from_last_name: formValues.lastName,
						message: formValues.message,
					},
					{
						publicKey,
					}
				)
				.then(() => setSuccessMessage('Message envoyé avec succès'))
				.catch(() => setErrorMessage('Envoi de message échoué. Veuillez réessayer plus tard'));
		}
	}

	return <>
		<section className="page-contact-section">
			<h1>Contact</h1>
			<div className="contact-container">
				<div className="aside">
					<h2>Mes coordonnées</h2>
					<p className="info">Au plaisir de vous lire prochainement.</p>
					<div className="aside-item">
						<p className="title">Téléphone</p>
						<p className="info">{me.phoneNumber}</p>
					</div>
					<div className="aside-item">
						<p className="title">Email</p>
						<p className="info">{me.email}</p>
					</div>
					<div className="aside-item">
						<p className="title">Adresse</p>
						<p className="info">{me.location}</p>
					</div>
				</div>
				<div className="body">
					<form onSubmit={handleSubmit} className="form-grid">
						<div className={`input-text`}>
							<label htmlFor="firstName">First name</label>
							<input type="text" name="firstName" value={formValues.firstName} onChange={handleInputChange} />
						</div>
						<div className={`input-text`}>
							<label htmlFor="name">Last name</label>
							<input type="text" name="lastName" value={formValues.lastName} onChange={handleInputChange} />
						</div>
						<div className={`input-text ${formErrors.email && "error"}`}>
							<label htmlFor="email">Email *</label>
							<input type="text" name="email" value={formValues.email} onChange={handleInputChange} />
							{formErrors.email &&
								<p className="error-info"><Icon iconName={IconName.Info} size={16} />{Validator.translateError(formErrors.email)}</p>
							}
						</div>
						<div className={`input-text ${formErrors.subject && "error"}`}>
							<label htmlFor="subject">Objet *</label>
							<input type="text" name="subject" value={formValues.subject} onChange={handleInputChange} />
							{formErrors.subject &&
								<p className="error-info"><Icon iconName={IconName.Info} size={16} />{Validator.translateError(formErrors.subject)}</p>
							}
						</div>
						<div className={`input-textarea ${formErrors.message && "error"}`}>
							<label htmlFor="message">Message *</label>
							<textarea name="message" rows={6} value={formValues.message} onChange={handleInputChange}></textarea>
							{formErrors.message &&
								<p className="error-info"><Icon iconName={IconName.Info} size={16} />{Validator.translateError(formErrors.message)}</p>
							}
							{errorMessage &&
								<p className="submit-error"><Icon iconName={IconName.Info} size={16} />{errorMessage}</p>
							}
							{successMessage &&
								<p className="submit-success"><Icon iconName={IconName.Success} size={16} />{successMessage}</p>
							}
						</div>
						<div className="submit-container">
							<button className="round-btn" type="submit">Envoyer</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	</>
}

export default Contact;