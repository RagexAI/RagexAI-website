import type { Request, Response } from 'express';
import { sendContactEmail } from '../services/email.service.js';
import { validateContactPayload } from '../validations/email.validation.js';

export const contactController = async (req: Request, res: Response) => {
	try {
		const { value, errors } = validateContactPayload(req.body ?? {});

		if (errors?.length) {
			return res.status(400).json({
				success: false,
				message: 'Validation error',
				errors,
			});
		}

		if (!value) {
			return res.status(400).json({
				success: false,
				message: 'Invalid payload',
			});
		}

		await sendContactEmail(value);

		return res.status(200).json({ success: true, message: 'Email sent' });
	} catch (error) {
		console.error('Contact API error:', error);
		return res.status(500).json({
			success: false,
			message: 'Failed to send email',
		});
	}
};
