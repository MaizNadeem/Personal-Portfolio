import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';

const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
        setStatus({});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formDetails.firstName || !formDetails.lastName || !formDetails.email || !formDetails.message) {
            setStatus({ success: false, message: 'Please fill in all required fields.' });
            return;
        }
        if (!isValidEmail(formDetails.email)) {
            setStatus({ success: false, message: 'Please enter a valid email address.' });
            return;
        }
        
        setButtonText("Sending...");
        
        try {
            let response = await fetch("https://personal-portfolio-server-maiznadeem.vercel.app/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(formDetails),
            });

            setButtonText("Send");
            
            if (response.ok) {
                setStatus({ success: true, message: 'Message sent successfully' });
                setFormDetails(formInitialDetails);
            } else {
                setStatus({ success: false, message: 'Something went wrong, please try again later.' });
            }
        } catch (error) {
            setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <img className="" src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col size={12} md={6}>
                        <div>
                            <h2>Get In Touch</h2>
                            <form onSubmit={handleSubmit}>
                                <Row>
                                    <Col size={12} sm={6} className="px-1">
                                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                        {status.field === 'firstName' && !formDetails.firstName && <p className="danger">First name is required.</p>}
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                        {status.field === 'lastName' && !formDetails.lastName && <p className="danger">Last name is required.</p>}
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                        {status.field === 'email' && !formDetails.email && <p className="danger">Email address is required.</p>}
                                        {status.field === 'email' && formDetails.email && !isValidEmail(formDetails.email) && <p className="danger">Please enter a valid email address.</p>}
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                    </Col>
                                    <Col size={12} className="px-1">
                                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                        {status.field === 'message' && !formDetails.message && <p className="danger">Message is required.</p>}
                                        <button type="submit"><span>{buttonText}</span></button>
                                    </Col>
                                </Row>
                                {
                                    status.message &&
                                    <Row>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Row>
                                }
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
