import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const CustomModal = ({ title, description, showModal, toggleModal }) => {
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
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{description}</p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CustomModal;
