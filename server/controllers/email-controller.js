import AsyncHandler from "express-async-handler";
import { Resend } from "resend";
import { Resend_API_KEY } from "../config/config.js";
const resend = new Resend(Resend_API_KEY);

/**
 * @controller send email controller
 * @method : POST
 * @description : Send an email using the Resend service
 * @route : /api/contact
 * @access : public
 */

export const sendEmail = AsyncHandler(async (req, res) => {
    const { firstName, lastName, email, phone, subject, message } = req.body;
  
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'zakariyem367@gmail.com',
      subject: subject,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
  
    res.status(200).send({ message: 'Email sent successfully', data: response });
  });