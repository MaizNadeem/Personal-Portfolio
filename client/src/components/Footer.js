import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import { Newsletter } from "./Newsletter";

const Footer = () => {
    return (
        <footer className="footer" id="footer" >
            <Container>
                <Row className="align-items-center">
                    <Newsletter />
                    <Col size={12} sm={6}>
                        <div className="d-flex align-items-center footer-logo">
                            <img src={logo} alt="Logo" />
                        </div>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href='https://www.linkedin.com/in/m-maiz-nadeem-020949176' target="_blank" rel="noopener noreferrer">
                                <img src={navIcon1} alt='Social' />
                            </a>
                            <a href='https://twitter.com/MaizNadeem' target="_blank" rel="noopener noreferrer">
                                <img src={navIcon2} alt='Social' />
                            </a>
                            <a href='https://www.instagram.com/m.maiznadeem' target="_blank" rel="noopener noreferrer">
                                <img src={navIcon3} alt='Social' />
                            </a>
                            <a href='https://github.com/MaizNadeem' target="_blank" rel="noopener noreferrer">
                                <img src={navIcon4} alt='Social' />
                            </a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
