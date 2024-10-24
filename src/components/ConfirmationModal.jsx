import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
    return (
        <Modal show={isOpen} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{message}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    No
                </Button>
                <Button variant="primary" onClick={() => {
                    onConfirm();
                    onClose();
                }}>
                    Sí
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmationModal;
