import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/projects/proj1.png";
import projImg2 from "../assets/projects/proj2.png";
import projImg3 from "../assets/projects/proj3.png";
import projImg4 from "../assets/projects/proj4.png";
import projImg5 from "../assets/projects/proj5.png";
import projImg6 from "../assets/projects/proj6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

    const projects = [
        {
            title: "Homyz - Real Estate Website",
            description: "A comprehensive real estate website that simplifies property search and transactions",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg4,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg5,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg6,
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
                            projects.map((project, index) => {
                                return (
                                    <ProjectCard
                                        key={index}
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