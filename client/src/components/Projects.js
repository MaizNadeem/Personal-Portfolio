import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/projects/proj1.png";
import projImg2 from "../assets/projects/proj2.png";
import projImg3 from "../assets/projects/proj3.png";
import projImg4 from "../assets/projects/proj4.png";
import projImg5 from "../assets/projects/proj5.png";
import projImg6 from "../assets/projects/proj6.png";
import projBan1 from "../assets/banners/proj1.png";
import projBan2 from "../assets/banners/proj2.png";
import projBan3 from "../assets/banners/proj3.png";
import projBan4 from "../assets/banners/proj4.png";
import projBan5 from "../assets/banners/proj5.png";
import projBan6 from "../assets/banners/proj6.png";
import thumb1 from "../assets/thumbnails/Thumbnail1.jpg";
import thumb2 from "../assets/thumbnails/Thumbnail2.jpg";
import thumb3 from "../assets/thumbnails/Thumbnail3.jpg";
import thumb4 from "../assets/thumbnails/Thumbnail4.jpg";
import thumb5 from "../assets/thumbnails/Thumbnail5.jpg";
import thumb6 from "../assets/thumbnails/Thumbnail6.jpg";
import innovation2 from "../assets/img/innovation2.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { ProjectCard } from "./ProjectCard";
import VideoCard from "./VideoCard";
import WistiaVideo from "./WistiaVideo";

const Projects = () => {

    const projects = [
        {
            id: 1,
            title: "Homyz - Real Estate Website",
            description: "A comprehensive real estate website that simplifies property search and transactions",
            imgUrl: projImg1,
            url: "https://github.com/MaizNadeem/Real-Estate-Web",
            banUrl: projBan1,
        },
        {
            id: 2,
            title: "Deliveroo - Food Delivery Clone",
            description: "A Deliveroo-inspired food delivery clone, highlighting react native + firestore development",
            imgUrl: projImg2,
            url: "https://github.com/MaizNadeem/Deliveroo-2.0",
            banUrl: projBan2,
        },
        {
            id: 3,
            title: "Lifestream - Blood Donation",
            description: "A user-friendly, enterprise level WPF-based Blood Donation System with a robust database",
            imgUrl: projImg3,
            url: "https://github.com/MaizNadeem/Lifestream-WPF",
            banUrl: projBan3,
        },
        {
            id: 4,
            title: "NFT Marketplace",
            description: "An NFT Marketplace: A sleek UI design for a digital platform in trading unique digital assets",
            imgUrl: projImg4,
            url: "https://github.com/MaizNadeem/NFT-Marketplace",
            banUrl: projBan4,
        },
        {
            id: 5,
            title: "Pig Game",
            description: "A fun and interactive multiplayer dice game",
            imgUrl: projImg5,
            url: "https://github.com/MaizNadeem/Pig-Game",
            banUrl: projBan5,
        },
        {
            id: 6,
            title: "ZEGO Cloud: Chat App",
            description: "A feature-rich chat application powered by cloud technology for seamless real-time communication",
            imgUrl: projImg6,
            url: "https://github.com/MaizNadeem/Zego-ChatApp",
            banUrl: projBan6,
        },
    ];

    const videos = [
        {
            id: 1,
            title: "Despacito | A Scrap Edit",
            description: "Relied heavily on Adobe After Effects. This Video Includes Short Rotoscoping, Some of 3D Tracking and many plugins for immersive visual effects. A great way to portray gaming edits.",
            imgUrl: thumb1,
            url: "https://youtu.be/v3kiFn9BV-A",
        },
        {
            id: 2,
            title: "Lalo Salamanca - Better Call Saul",
            description: "In a masterful edit within Premiere Pro, I transformed Lalo Salamanca's character in Better Call Saul into a captivating cinematic narrative, skillfully weaving his story with visual finesse.",
            imgUrl: thumb2,
            url: "https://www.instagram.com/reel/Cmgxzdio3x7/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
        },
        {
            id: 3,
            title: "Baloch Nationalism in Pakistan",
            description: "Year-long relationship, in managing the social channels for the esteemed novelist Tariq Ismail Sagar, reflects a significant contribution to his online presence.",
            imgUrl: thumb3,
            url: "https://youtu.be/R2ZasDkPhCQ",
        },
        {
            id: 4,
            title: "1000+ Skills to become Freelancer",
            description: "1000+ Skills to become Millionaire using Semrush.com | eCommercewala",
            imgUrl: thumb4,
            url: "https://fb.watch/iJH64zDnej/?mibextid=NnVzG8",
        },
        {
            id: 5,
            title: "Future of Wars | Drone Soldiers",
            description: "Ecommerce in Future Digital War using AI-Based Drone Soldiers | eCommercewala",
            imgUrl: thumb5,
            url: "https://fb.watch/iJGWer-zLn/?mibextid=NnVzG8",
        },
        {
            id: 6,
            title: "One Cirriculum Agenda",
            description: "Lets meet Dr. Zaar in this Podcast: talking about making improvements in our typical system",
            imgUrl: thumb6,
            url: "https://fb.watch/iJGZdIJFfR/?mibextid=NnVzG8",
        },
    ]

    return (
        <section className="project" id="projects">
        <Container>
            <Row>
            <Col size={12}>
                <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <p>I've designed and developed this personal portfolio website to showcase my skills and projects. Implemented responsive design, integrated interactive elements, and optimized site performance to create an engaging user experience.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Software Dev Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Video Editing</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Future Goals</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project) => {
                                    return (
                                        <ProjectCard
                                            key={project.id}
                                            {...project}
                                        />
                                    )
                                })
                            }
                        </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <Row>
                            <div className="wistia-video">
                                <WistiaVideo />
                            </div>
                        </Row>
                        <Row>
                            {
                                videos.map((video) => {
                                    return (
                                        <VideoCard
                                            key={video.id}
                                            {...video}
                                        />
                                    )
                                })
                            }
                        </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <Row>
                            <Col>
                                <div className="innovation-container">
                                    <img src={innovation2} className="innovation-img" alt="Innovation Icon" />
                                    <div className="future">
                                        <h1>Future Aspirations</h1>
                                        <p>As I continue on my journey as a Software Developer and Video Editor, my ambitions are fueled by a desire to push the boundaries of digital creativity. I aim to lead innovative projects that seamlessly integrate cutting-edge technology and captivating storytelling. By honing my skills in both coding and visual aesthetics, I aspire to create immersive digital experiences that resonate with audiences on a profound level. Through ongoing learning and collaboration, I seek to contribute to groundbreaking projects that leave a lasting impact in the realm of technology-driven artistry.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                </div>}
                </TrackVisibility>
            </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="color-sharp-bg" ></img>
        </section>
  )
}

export default Projects