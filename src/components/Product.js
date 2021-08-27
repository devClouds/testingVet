import React from 'react'
import { Card } from 'react-bootstrap'



function Product(props) {

    return (
        <div className='mb-4 col-lg-4 col-md-6'>
            <Card className='shop-card'>
                <Card.Img className='card-image' src={`../images/products/${props.imagePath}`} alt={props.alt} />
                <Card.Body>
                    <Card.Title><h5>{props.title}</h5></Card.Title>
                    <Card.Text>
                    <p className='text-muted' dangerouslySetInnerHTML={ {__html: props.text} } ></p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    )
}

export default Product
