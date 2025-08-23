/*'use server';

import { Resend } from 'resend';

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const mobile = formData.get('mobile') as string;
  const message = formData.get('message') as string;

  // Basic validation (optional, but recommended)
  if (!name || !email || !message) {
    throw new Error('Missing required fields');
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Use your verified domain or Resend's testing one
      to: 'emna68215@gmail.com',
      subject: 'New Contact Message from Your Website',
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Mobile:</strong> ${mobile}</p><p><strong>Message:</strong> ${message}</p>`,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}

*/