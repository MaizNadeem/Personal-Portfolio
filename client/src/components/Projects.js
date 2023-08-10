import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
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
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

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
                            <Nav.Link eventKey="first">Dev Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Editing</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Side Note</Nav.Link>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <p>In my portfolio, I've masterfully combined video editing and software development, presenting a unique blend of creativitystorytelling and technical innovation. By seamlessly integrating these skills, I offer captivating visual experiences alongside functional digital solutions, demonstrating my versatility and proficiency across diverse domains.</p>
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