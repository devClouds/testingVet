import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Section from './Section'

function SectionNews() {
    return (
        <Section id='aktualnosci' name='news' paralax='true'>
            <Row>
                <Col sm={5} className='paralax-content'>
                    <h2 className="paragraph-title-green">Aktualności</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at maximus lectus. Suspendisse a sapien sit amet ex ultricies tempus nec sit amet nulla. Proin sapien augue, egestas vel arcu a, euismod consequat justo</p>
                    <a href='/aktualnosci' className='button-small mt-3'>Przejdź do aktualności</a>
                </Col>
            </Row>
        </Section>
    )
}

export default SectionNews
