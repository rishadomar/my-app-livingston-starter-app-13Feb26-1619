
import { DIGITAL_DESIGN_ASSETS } from '@/constants';
import { Button, Image } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

type AboutModalProps = {
    show: boolean;
    onHide: () => void;
};

export const AboutModal = ({ show, onHide }: AboutModalProps) => {
    return (
        <Modal show={show} centered onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>About</Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex flex-column align-items-center text-center p-6'>
                <h1 className='text-lii-text fw-bold'>Version information</h1>
                <p className='text-lii-text'>Hello World 3333</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='primary' onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
