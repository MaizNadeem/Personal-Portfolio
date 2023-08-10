import { useEffect, useState } from "react";
import { Col, Button } from "react-bootstrap";
import { AiOutlineLink, AiOutlineExpand } from 'react-icons/ai';

import CustomModal from "./CustomModal";

export const ProjectCard = ({ id, title, description, imgUrl, url }) => {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        const allCards = document.querySelectorAll(".card");

        window.addEventListener("mousemove", (ev) => {
            allCards.forEach((e) => {
                const blob = e.querySelector(".blob");
                const fblob = e.querySelector(".fakeblob");

                if (blob && fblob) {
                    const rec = fblob.getBoundingClientRect();
                    blob.style.transform = `translate(${ev.clientX - rec.left - (rec.width / 2)}px, ${ev.clientY - rec.top - (rec.height / 2)}px)`;
                }
            });
        });
    }, []);

    const handleGoToSource = () => {
        window.open(url, '_blank');
    };

    return (
        <Col size={12} sm={6} md={4}>
            <div className="card">
            <div className="proj-container">
                <img src={imgUrl} alt="Project-Card" />
                <div className="proj-details-container">
                    <div className="proj-text">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                    <div className="button-container">
                        <Button className="custom-button text-only" onClick={toggleModal}>
                            <AiOutlineExpand size={15} style={{ marginRight: "7px", marginBottom: "1px" }} />
                            <text>Read More</text>
                        </Button>
                        <Button className="custom-button icon-and-text" onClick={handleGoToSource} >
                            <AiOutlineLink size={15} style={{ marginRight: "5px" }} />
                            <text>Go to Source</text>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="blob"></div>
            <div className="fakeblob"></div>
            </div>
            {showModal && <CustomModal title={title} description={description} showModal={showModal} toggleModal={toggleModal} />}
        </Col>
    );
};
