import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Get data from request body
      const { name, email, phone, message } = req.body;

      if (!name || !phone || !message || !email) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // Create transporter
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // Gmail SMTP
        port: 587,
        secure: false, // true for 465
        auth: {
          user: process.env.EMAIL_USER, // your email from .env
          pass: process.env.EMAIL_PASS, // your email password or app password
        },
      });

      // Email options
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email, // replace with your receiving email
        subject: `New Contact Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
