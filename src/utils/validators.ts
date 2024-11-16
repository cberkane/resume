export class Validator {

	static readonly REQUIRED = "required";
	static readonly INVALID_EMAIL = "invalid_email";

	static isRequired(value: string): boolean {
		return !value.trim();
	}

	static isEmail(value: string): boolean {
		return !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
	}

	static translateError(error: string): string | undefined {
		switch (error) {
			case this.REQUIRED: return "Champs requis";
			case this.INVALID_EMAIL: return "Email invalide";
		}
	}
}