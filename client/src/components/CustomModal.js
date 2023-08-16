import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import Modal from 'react-bootstrap/Modal';

import FirstProjectHTML from '../assets/projectshtml/FirstProjectHTML';
import SecondProjectHTML from '../assets/projectshtml/SecondProjectHTML';
import ThirdProjectHTML from '../assets/projectshtml/ThirdProjectHTML';
import FourthProjectHTML from '../assets/projectshtml/FourthProjectHTML';
import FifthProjectHTML from '../assets/projectshtml/FifthProjectHTML';
import SixthProjectHTML from '../assets/projectshtml/SixthProjectHTML';

const CustomModal = ({ id, title, description, imgUrl, url, banUrl, showModal, toggleModal }) => {
    const [show, setShow] = useState(showModal);

    const handleClose = () => {
        setShow(false);
        toggleModal();
    };

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                dialogClassName="custom-modal"
                aria-labelledby="example-custom-modal-styling-title"
                centered  // This centers the modal both vertically and horizontally
                style={{
                    zIndex: 9999,
                }}
            >
                <div className="modal-content">
                    <Modal.Header>
                        <Modal.Title id="example-custom-modal-styling-title modal-title">
                            <h1>{title}</h1>
                            <AiOutlineClose size={25} color="white" onClick={handleClose} />
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                        <img src={banUrl} alt="Banner" style={{ borderRadius: "15px" }} />
                        { id === 1 && <FirstProjectHTML />}
                        { id === 2 && <SecondProjectHTML />}
                        { id === 3 && <ThirdProjectHTML />}
                        { id === 4 && <FourthProjectHTML />}
                        { id === 5 && <FifthProjectHTML />}
                        { id === 6 && <SixthProjectHTML />}
                    </Modal.Body>
                </div>
            </Modal>
        </>
    );
}

export default CustomModal;
