import React from 'react'
import Section from './Section'
import { Col, Row } from 'react-bootstrap'
import SectionTitle from './SectionTitle'

import Fade from 'react-reveal/Fade'

function SectionShop() {
    return (
        <Section id='sklep' name="shop" paralax='true'>
            <Row className='justify-content-end'>
                <Col sm={5} className='paralax-content'>
                    <SectionTitle title='Sklep' />
                    <Fade bottom >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at maximus lectus. Suspendisse a sapien sit amet ex ultricies tempus nec sit amet nulla. Proin sapien augue, egestas vel arcu a, euismod consequat justo</p>
                    <a href='/sklep' className='button-small mt-3'>Przejdź do sklepu</a>
                    </Fade>
                </Col>
            </Row>
        </Section>
    )
}

export default SectionShop
