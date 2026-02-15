import { isValidEmail, sanitizeText } from '../utils/helpers.js';

export type ContactPayload = {
	name: string;
	email: string;
	message: string;
	company?: string;
};

export type ValidationResult = {
	value?: ContactPayload;
	errors?: string[];
};

export const validateContactPayload = (payload: ContactPayload): ValidationResult => {
	const errors: string[] = [];

	const name = sanitizeText(payload?.name ?? '');
	const email = sanitizeText(payload?.email ?? '').toLowerCase();
	const message = sanitizeText(payload?.message ?? '');
	const company = sanitizeText(payload?.company ?? '');

	if (!name) errors.push('Name is required');
	if (!email) errors.push('Email is required');
	if (email && !isValidEmail(email)) errors.push('Email is invalid');
	if (!message) errors.push('Message is required');

	if (errors.length) {
		return { errors };
	}

	return {
		value: {
			name,
			email,
			message,
			...(company ? { company } : {}),
		},
	};
};
