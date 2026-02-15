import dotenv from 'dotenv';

dotenv.config();

export const env = {
	sendgridApiKey: process.env.SENDGRID_API_KEY ?? '',
	adminEmail: process.env.ADMIN_EMAIL ?? '',
	fromEmail: process.env.FROM_EMAIL ?? '',
};
