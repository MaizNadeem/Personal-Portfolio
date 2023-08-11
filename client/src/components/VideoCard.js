import { useEffect } from "react";
import { Col } from "react-bootstrap";

const VideoCard = ({ id, title, description, imgUrl, url, banUrl }) => {

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

    const handleGoToVideo = () => {
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
                    </div>
                </div>
                <div className="blob"></div>
                <div className="fakeblob"></div>
            </div>
        </Col>
    );
};

export default VideoCard
