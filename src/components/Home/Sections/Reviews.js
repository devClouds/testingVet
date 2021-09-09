import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ReviewsCarousel from './Review/ReviewsCarousel'
import Section from '../../Section'
import SectionTitle from '../../SectionTitle'

import Fade from 'react-reveal/Fade'

function Reviews() {
    return (
        <Section id='opinie' name='reviews' paralax='true'>
            <Row>
                <Col sm={6} className='paralax-content'>
                    <SectionTitle title='Opinie klientów' />
                    <Fade bottom >
                        <ReviewsCarousel />
                    </Fade>
                </Col>
            </Row>
        </Section>
    )
}

export default Reviews
