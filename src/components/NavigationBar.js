import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';

const NavigationBar = () => {

    const [activeLink, setActiveLink] = useState("home")
    const [scrolled, setScrolled] = useState(false)

    useEffect (() => {
        const onScroll = () => {
            if (window.scrollY > 50)
                setScrolled(true)
            else
                setScrolled(false)
        }
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)

    }, [])

    const onUpdateActiveLink = value => {
        setActiveLink(value)
    }

    return (
        <Router>
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt='Logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className='navbar-toggler-icon' ></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link 
                    href="#home"
                    className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => onUpdateActiveLink('home')}
                >Home</Nav.Link>
                <Nav.Link
                    href="#skills"
                    className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => onUpdateActiveLink('skills')}
                >Skills</Nav.Link>
                <Nav.Link 
                    href="#projects"
                    className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => onUpdateActiveLink('projects')}
                >Projects</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='#social1'><img src={navIcon1} alt='Social' /></a>
                    <a href='#social2'><img src={navIcon2} alt='Social' /></a>
                    <a href='#social3'><img src={navIcon3} alt='Social' /></a>
                    <a href='#social4'><img src={navIcon4} alt='Social' /></a>
                </div>
                <HashLink to='#connect'>
                    <button className="vvd"><span>Let’s Connect</span></button>
                </HashLink>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </Router>
    )

}

export default NavigationBar