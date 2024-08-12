require('dotenv').config();

const path = require("path");
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.firstName + " " + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: process.env.EMAIL_USER,
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message Sent" });
        }
    });
});

router.post("/send-resume", (req, res) => {
    const email = req.body.email;
    
    const resumePath = path.join(__dirname, "resume.pdf"); // Update to the correct filename
    const resumeAttachment = {
        filename: "Muhammad Maiz - Resume.pdf",
        path: resumePath,
    };

    const mail = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Developer Application - Resume from Maiz",
        text: `Hello,\n\nThank you for your interest in my profile. Please find the attached resume for your consideration.\n\nIf you have any further questions or would like to discuss my qualifications in more detail, feel free to contact me at your convenience.\n\nThank you.\n\nBest regards,\nMuhammad Maiz`,
        attachments: [resumeAttachment],
    };
      

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Resume Sent" });
        }
    });
});

app.get("/download-resume", (req, res) => {
    const resumePath = path.join(__dirname, "resume.pdf");
    res.download(resumePath, "Muhammad Maiz - Resume.pdf");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));