import { useState, useEffect } from "react";
import TrackVisibility from 'react-on-screen';
import { ArrowRightCircle } from 'react-bootstrap-icons';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import headerImg from "../assets/img/header-img.svg";

import 'animate.css';

const Banner = () => {
    
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const toRotate = [ "Web Developer", "Mobile App Developer", "Video/VFX Editor" ]
    const period = 500

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting && updatedText.length === fullText.length-1 ) {
            setDelta(period)
        }
        else if (isDeleting && updatedText.length <= fullText.length-1 && updatedText.length > fullText.length-4 ) {
            setDelta(prevDelta => prevDelta / 1.5)
        } else if (isDeleting) {
            setDelta(prevDelta => prevDelta / 1.2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(2000)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(100)
        }
    }

    useEffect(() => {

        let ticker = setInterval(() => {
            tick()
        }, delta)
        return () => { clearInterval(ticker) };
    // eslint-disable-next-line
    }, [text])

    return (
        <section className="banner" id="home">
        <Container>
            <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi! I'm Maiz,`} <span className="txt-rotate"><span className="wrap">{text}</span></span></h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
                </div>}
                </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                        <img src={headerImg} alt="Header Img"/>
                    </div>}
                </TrackVisibility>
            </Col>
            </Row>
        </Container>
        </section>
    )
}

export default Banner