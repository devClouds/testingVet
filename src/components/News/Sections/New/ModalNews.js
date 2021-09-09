import React from 'react'
import { Modal } from 'react-bootstrap'

function ModalNews(props) {

    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='services-modal'
            size="lg"
        >
            <Modal.Header>
                <img className='img-fluid' src={`../images/news/${props.imagePath}`} alt={props.alt} />
                <h3 className='text-center'>{props.title}</h3>
                <p><em>{props.date}</em></p>
            </Modal.Header>
            <Modal.Body
                className='mb-5 px-sm-5 d-flex flex-column align-items-center'>
                <p className='text-muted' dangerouslySetInnerHTML={ {__html: props.text} } ></p>
                <button className='button-small mt-4 px-sm-5'>Zamknij</button>
            </Modal.Body>
        </Modal>
    )
}

export default ModalNews
