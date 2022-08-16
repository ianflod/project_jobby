import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import RandomImage from './RandomImage.js'

const ImageModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className="button-general" onClick={handleShow}>
                Message from Joable
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Joable says:</Modal.Title>
                </Modal.Header>
                <RandomImage />
                <Modal.Footer>
                    <button className="button-general" onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ImageModal;