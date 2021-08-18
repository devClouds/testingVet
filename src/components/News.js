import React from 'react'
import { Card, Button } from 'react-bootstrap'

import image from '../img/Red-Vet-Logo.png'

function News(props) {
    return (
        <div className='mb-4 col-lg-3 col-md-4 col-6'>
        <Card >
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    <p>Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                </Card.Text>
                <Button variant="primary">Zobacz więcej</Button>
            </Card.Body>
        </Card>
        </div>

    )
}

export default News
