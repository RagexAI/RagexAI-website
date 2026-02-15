export const sanitizeText = (value: string) =>
	value
		.replace(/<[^>]*>/g, '')
		.replace(/[\u0000-\u001F\u007F]/g, '')
		.replace(/\s+/g, ' ')
		.trim();

export const isValidEmail = (value: string) =>
	/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
