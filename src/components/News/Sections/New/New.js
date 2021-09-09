import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

import ModalNews from './ModalNews';

function New(props) {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    }

    return (
        <div className='mb-4 col-lg-3 col-md-4 col-sm-6'>
            <Card className='news-card' onClick={openModal} >
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <p className='card-date'>{props.date}</p>
                    <div className='card-text text-muted'  >
                        <div dangerouslySetInnerHTML={ {__html: props.text} }></div>
                    </div>
                    <div className='card-read-more mt-3'>
                        <a >Czytaj więcej {'>'}</a>
                    </div>
                    <ModalNews
                            title={props.title}
                            imagePath={props.imagePath}
                            alt={props.alt}
                            text={props.text}
                            date={props.date}
                            show={showModal}
                    />
                </Card.Body>
            </Card>
        </div>

    )
}

export default New
