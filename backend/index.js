import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// FIX 1: Configure CORS to only allow your Vercel Frontend
app.use(
  cors({
    origin: ["https://school-tau-ruddy.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  // REMOVED: res.json({ message: "hii" });  <-- This was breaking your app!

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "recipient@example.com", // Make sure to update this if needed
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

// FIX 2: Use the Port Render provides, or fallback to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
