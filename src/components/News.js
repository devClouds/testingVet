import React from 'react'
import { Card, Button } from 'react-bootstrap'

import image from '../img/Red-Vet-Logo.png'

function News(props) {



    // function truncateText() {
    //     var length = 150;
    //     var fullString =  props.text;
    //     alert(fullString);
    //     var truncString = fullString.substring(0,length);

    //     return truncString;
    // }

    return (
        <div className='mb-4 col-lg-3 col-md-4 col-sm-6'>
            <Card className='news-card' >
                <Card.Img className='card-image' src={image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <p className='card-date'>{props.date}</p>
                    <Card.Text>
                        {/* Some quick example text to build on the card title and make up the bulk of
                    the card's content. Lorem ipsum notum datum ergo ibsum pero cratum. Viven croto nat peroxis iber catum mixum voxis. */}
                        {props.text}
                    </Card.Text>
                    <div className='card-read-more'>
                        <a href='#'>Czytaj więcej {'>'}</a>
                    </div>
                </Card.Body>
            </Card>
        </div>

    )
}

export default News
