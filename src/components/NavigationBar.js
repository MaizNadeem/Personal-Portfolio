import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const NavigationBar = () => {

    const [active, setActive] = useState("home")
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

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">
                <img src='' alt='Logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className='navbar-toggler-icon' ></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='#'><img src='' alt='Social' /></a>
                    <a href='#'><img src='' alt='Social' /></a>
                    <a href='#'><img src='' alt='Social' /></a>
                </div>
                <Button 
                    className='vvd'
                    onClick={() => console.log('connect')}    
                ><span>Let's Connect</span></Button>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavigationBar