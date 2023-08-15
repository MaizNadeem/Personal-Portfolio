import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../assets/img/Logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';

const NavigationBar = () => {

    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [menuExpanded, setMenuExpanded] = useState(false);
    const [isHamburgerMenuVisible, setIsHamburgerMenuVisible] = useState(false);
  
    const handleResize = () => {
        const breakpoint = 991.98;
        const isSmallScreen = window.innerWidth < breakpoint;
        setIsHamburgerMenuVisible(isSmallScreen);
    };
  
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50)
                setScrolled(true);
            else
                setScrolled(false);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener('resize', handleResize);
        }

    }, []);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
    
    const handleExpanded = () => {
        setMenuExpanded(prevMenuExpanded => !prevMenuExpanded);
    };

    const handleLogoClick = () => {
        const links = document.querySelectorAll('.navbar-link');
        links.forEach(link => link.classList.remove('active'));
        handleExpanded()
    }

    return (
        <Router>
        <header>
        <Navbar
            expand="lg"
            className={` ${scrolled ? "scrolled" : ""}${menuExpanded ? " expanded" : ""}`}
            expanded={menuExpanded}
            onClick={isHamburgerMenuVisible ? handleExpanded : null}
        >
        <Container>
            <Navbar.Brand href="#home" className='logo'>
                <img src={logo} alt='Logo' onClick={handleLogoClick}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className='navbar-toggler-icon' ></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link 
                        href="#home"
                        className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                        onClick={() => handleLinkClick('home')}
                    >Home</Nav.Link>
                    <Nav.Link
                        href="#skills"
                        className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                        onClick={() => handleLinkClick('skills')}
                    >Skills</Nav.Link>
                    <Nav.Link 
                        href="#projects"
                        className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                        onClick={() => handleLinkClick('projects')}
                    >Projects</Nav.Link>
                    <Nav.Link
                        href="#aboutme"
                        className={activeLink === 'aboutme' ? 'active navbar-link' : 'navbar-link'}
                        onClick={() => handleLinkClick('aboutme')}
                    >About Me</Nav.Link>
                    <Nav.Link
                        href="#footer"
                        className={activeLink === 'footer' ? 'active navbar-link' : 'navbar-link'}
                        onClick={() => handleLinkClick('footer')}
                    >My Resume</Nav.Link>
            </Nav>
            <span className={`navbar-text ${menuExpanded ? "expanded" : ""}`}>
                <div className='social-icon'>
                    <a href='https://www.linkedin.com/in/m-maiz-nadeem-020949176' target="_blank" rel="noopener noreferrer" className='mr-2'>
                        <img src={navIcon1} alt='Social' />
                    </a>
                    <a href='https://twitter.com/MaizNadeem' target="_blank" rel="noopener noreferrer" className='mr-2'>
                        <img src={navIcon2} alt='Social' />
                    </a>
                    <a href='https://www.instagram.com/m.maiznadeem' target="_blank" rel="noopener noreferrer" className='mr-2'>
                        <img src={navIcon3} alt='Social' />
                    </a>
                    <a href='https://github.com/MaizNadeem' target="_blank" rel="noopener noreferrer">
                        <img src={navIcon4} alt='Social' />
                    </a>
                </div>
                <HashLink to='#connect'>
                    <button className="vvd"><span>Let's Connect</span></button>
                </HashLink>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </header>
        </Router>
    )

}

export default NavigationBar