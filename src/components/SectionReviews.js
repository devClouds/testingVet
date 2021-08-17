import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ReviewsCarousel from './ReviewsCarousel'
import Section from './Section'

function SectionReviews() {
    return (
        <Section id='opinie' name='reviews' paralax='true'>
            <Row>
                <Col sm={6} className='paralax-content'>
                    <h2 className="paragraph-title-green">Opinie</h2>
                    <ReviewsCarousel/>
                </Col>
            </Row>
        </Section>
    )
}

export default SectionReviews
