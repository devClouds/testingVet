import React from 'react'
import { Modal  } from 'react-bootstrap'

function ModalService(props) {

    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='services-modal text-center '
        >
            <Modal.Header
            >
                <img className='services-modal-img img-fluid' src={`../images/services/${props.path}`} alt={props.alt} />
                <h3>{props.title}</h3>
            </Modal.Header>
            <Modal.Body
                className='mb-5 px-sm-5'>
                <p className='text-muted'>
                    {props.text}
                </p>
                <button className='button-small mt-4 px-sm-5'>Zamknij</button>
            </Modal.Body>
        </Modal>
    )
}

export default ModalService
