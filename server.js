require('dotenv').config();

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

console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

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
    const name = req.body.firstName + req.body.lastName;
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));