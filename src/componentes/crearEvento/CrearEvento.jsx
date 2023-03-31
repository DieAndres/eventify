import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './CrearEvento.css'
export default function CrearEvento({show,handleClose}) {
   const handleCloseEvent = () =>{
        handleClose()
    }
    return (
        <div>
            <Modal show={show} onHide={handleCloseEvent} centered className='modalevent'>
                <Modal.Header closeButton>
                    <ul className='proggresbar'>
                        <li >

                        </li>
                        <li >

                        </li>
                        <li >

                        </li>
                    </ul>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEvent}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseEvent}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}