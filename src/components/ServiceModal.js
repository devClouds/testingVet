import React from 'react'
import { Modal  } from 'react-bootstrap'

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
                <img className='services-modal-img img-fluid' src={props.imagePath} alt={props.alt} />
                <h3>{props.title}</h3>
            </Modal.Header>
            <Modal.Body
                className='mb-5 px-sm-5'>
                <p className='text-muted'>
                    {props.children}
                </p>
                <button className='button-small mt-4 px-sm-5'>Zamknij</button>
            </Modal.Body>
        </Modal>
    )
}

export default ServiceModal
