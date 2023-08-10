import { Col, Button } from "react-bootstrap";
import { AiOutlineLink } from 'react-icons/ai';

export const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-container">
                <img src={imgUrl} alt="Project-Card" />
                <div className="proj-details-container">
                    <div className="proj-text">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                    <div className="button-container">
                        <Button className="custom-button text-only" >Read More</Button>
                        <Button className="custom-button icon-and-text" >
                            <AiOutlineLink size={15} style={{ marginRight: "5px" }} />
                            <text>Go to Source</text>
                        </Button>
                    </div>
                </div>
            </div>
        </Col>
    );
};
