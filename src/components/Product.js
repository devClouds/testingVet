import React from 'react'
import { Card } from 'react-bootstrap'



function Product(props) {

    return (
        <div className='mb-4 col-lg-4 col-md-6'>
            <Card className='shop-card'>
                <Card.Img className='card-image' src={`../images/products/${props.imagePath}`} alt={props.alt} />
                <Card.Body>
                    <Card.Title><h4>{props.title}</h4></Card.Title>
                    <div className='card-text'>
                        <p className='text-muted' dangerouslySetInnerHTML={ {__html: props.text} } ></p>
                    </div>
                </Card.Body>
            </Card>
        </div>

    )
}

export default Product
