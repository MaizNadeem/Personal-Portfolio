import React, { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(null);
    const [message, setMessage] = useState("");

    const clearFields = () => {
        setEmail("");
        setStatus(null);
        setMessage("");
    };

    const sendResumeRequest = async (email) => {
        try {
        const response = await fetch("http://localhost:5000/send-resume", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });

        await response.json();

        if (response.ok) {
            setStatus("success");
            setMessage("Resume sent successfully!");
            clearFields()
        } else {
            setStatus("error");
            setMessage("Resume sending failed. Please try again later.");
        }
        } catch (error) {
            setStatus("error");
            setMessage("An error occurred. Please try again later.");
        }
    };

    const handleResumeRequest = (e) => {
        e.preventDefault();

        if (email && email.indexOf("@") > -1) {
        sendResumeRequest(email);
        }
    };

    const handleDownloadResume = () => {
        window.location.href = "http://localhost:5000/download-resume";
    };

    return (
        <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
            <Row>
            <Col lg={12} md={6} xl={5}>
                <h3 style={{ textAlign: "left", display: "flex", alignItems: "center", height: "100%" }}>
                Download my resume or enter Your Email to get it directly in your mailbox!
                </h3>
            </Col>
            <Col md={6} xl={7}>
                <div className="download-resume" onClick={handleDownloadResume} >
                    <button>Download Resume</button>
                </div>
                <form onSubmit={handleResumeRequest}>
                <div className="new-email-bx">
                    <input
                        value={email}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                    />
                    <button type="submit">Get Resume</button>
                </div>
                </form>
                {status === "error" && <Alert variant="danger">{message}</Alert>}
                {status === "success" && <Alert variant="success">{message}</Alert>}
            </Col>
            </Row>
        </div>
        </Col>
    );
};
