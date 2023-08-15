import { useState, useEffect } from "react";
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
    const toRotate = [ "Software Developer", "Video Editor" ]
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

    const handleDownloadResume = () => {
        window.location.href = "https://personal-portfolio-csklx8vjz-maiznadeem.vercel.app/download-resume";
    };

    return (
        <section className="banner" id="home">
        <Container>
            <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
                <div className="animate__animated animate__fadeIn textalignmentbanner">
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi! I'm Maiz,`} <span className="txt-rotate"><span className="wrap">{text}</span></span></h1>
                    <p>Dedicated to creating captivating digital experiences. With a blend of technical expertise and creative flair, I bring ideas to life through code and visual storytelling. As a lifelong learner, I'm always seeking new ways to push the boundaries of what's possible in the digital realm.</p>
                    <button onClick={handleDownloadResume}>Download Resume <ArrowRightCircle size={25} /></button>
                </div>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <div className="animate__animated animate__zoomIn">
                    <img src={headerImg} alt="Header Img"/>
                </div>
            </Col>
            </Row>
        </Container>
        </section>
    )
}

export default Banner