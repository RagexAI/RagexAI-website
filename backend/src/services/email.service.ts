import sgMail from '@sendgrid/mail';
import { env } from '../config/env.js';
import type { ContactPayload } from '../validations/email.validation.js';

const ensureConfig = () => {
	if (!env.sendgridApiKey) throw new Error('SENDGRID_API_KEY is not configured');
	if (!env.adminEmail) throw new Error('ADMIN_EMAIL is not configured');
	if (!env.fromEmail) throw new Error('FROM_EMAIL is not configured');
};

const buildContactEmailHtml = (payload: ContactPayload) => {
	const submittedAt = new Date().toISOString();

	return `
		<div style="font-family: 'Inter', Arial, sans-serif; background: #f8fafc; padding: 32px;">
			<div style="max-width: 640px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
				<div style="padding: 24px 28px; border-bottom: 1px solid #e2e8f0; background: #0f172a; color: #ffffff;">
					<h1 style="margin: 0; font-size: 20px; font-weight: 600;">New Lead from Website</h1>
					<p style="margin: 6px 0 0; font-size: 13px; color: #cbd5f5;">Submission received</p>
				</div>
				<div style="padding: 28px; color: #0f172a;">
					<table style="width: 100%; border-collapse: collapse;">
						<tr>
							<td style="padding: 8px 0; font-weight: 600; width: 120px;">Name</td>
							<td style="padding: 8px 0;">${payload.name}</td>
						</tr>
						<tr>
							<td style="padding: 8px 0; font-weight: 600;">Email</td>
							<td style="padding: 8px 0;">${payload.email}</td>
						</tr>
						<tr>
							<td style="padding: 8px 0; font-weight: 600;">Company</td>
							<td style="padding: 8px 0;">${payload.company ?? '—'}</td>
						</tr>
						<tr>
							<td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Message</td>
							<td style="padding: 8px 0; white-space: pre-wrap;">${payload.message}</td>
						</tr>
					</table>
					<div style="margin-top: 20px; padding: 12px 16px; background: #f1f5f9; border-radius: 12px; font-size: 12px; color: #475569;">
						Submitted at: ${submittedAt}
					</div>
				</div>
			</div>
		</div>
	`.trim();
};

export const sendContactEmail = async (payload: ContactPayload) => {
	ensureConfig();
	sgMail.setApiKey(env.sendgridApiKey);

	const html = buildContactEmailHtml(payload);

	return sgMail.send({
		to: env.adminEmail,
		from: env.fromEmail,
		subject: 'New Lead from Website',
		html,
		replyTo: payload.email,
	});
};
