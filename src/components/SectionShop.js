import React from 'react'
import Section from './Section'
import { Col, Row } from 'react-bootstrap'

function SectionShop() {
    return (
        <Section name="Shop">
            <Row className='justify-content-end'>
                <Col sm={5} className='paralax-content'>
                    <h2 className="paragraph-title-green">Sklep</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at maximus lectus. Suspendisse a sapien sit amet ex ultricies tempus nec sit amet nulla. Proin sapien augue, egestas vel arcu a, euismod consequat justo</p>
                    <a href='/sklep' className='button-small mt-3'>Przejdź do sklepu</a>
                </Col>
            </Row>
        </Section>
    )
}

export default SectionShop
