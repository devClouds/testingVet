import React from 'react'
import { Card, Button } from 'react-bootstrap'

import image from '../img/Red-Vet-Logo.png'

function News(props) {
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Zobacz więcej</Button>
            </Card.Body>
        </Card>
    )
}

export default News
