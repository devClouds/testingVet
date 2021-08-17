import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Section from './Section'

function SectionReviews() {
    return (
        <Section id='opinie' name='reviews' paralax='true'>
            <Row>
                <Col sm={5} className='paralax-content'>
                    <h2 className="paragraph-title-green">Opinie</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at maximus lectus. Suspendisse a sapien sit amet ex ultricies tempus nec sit amet nulla. Proin sapien augue, egestas vel arcu a, euismod consequat justo</p>
                </Col>
            </Row>
        </Section>
    )
}

export default SectionReviews
