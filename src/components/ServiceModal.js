//import { Modal, Button } from 'bootstrap'
import React from 'react'
import { Modal, Button, Row } from 'react-bootstrap'

import buildingImage from '../img/Building.jpg'

function ServiceModal(props) {

    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='services-modal text-center '
        >
            <Modal.Header
            >
                <img className='img-modal img-fluid' src={props.imagePath} alt='Widok frontu przychodni' />
                <h3>{props.title}</h3>
            </Modal.Header>
            <Modal.Body
                className='mb-5 px-sm-5'>
                <p className='text-muted'>
                    {props.children}
                </p>
                <button className='button-small mt-4 px-sm-5'>Close</button>
            </Modal.Body>
        </Modal>
    )
}

export default ServiceModal
