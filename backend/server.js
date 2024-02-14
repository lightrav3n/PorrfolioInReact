import express from "express";
// import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT


// Middleware
app.use(bodyParser.json());
app.use(cors());

// Endpoint to handle sending emails
app.post("/portfolio/contact", async (req, res) => {
  console.log("Email posting: ", req.body);
  const { name, email, subject, message } = req.body;

  // Create a transporter object using SMTP transport
 

  // Construct the email body
  let emailBody = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

  // Configure email options
  let mailOptions = {
    from: "",
    to: "contact@davidalex.eu",
    subject: subject,
    text: emailBody,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
