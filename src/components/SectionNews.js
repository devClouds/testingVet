import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Section from './Section'
import SectionTitle from './SectionTitle'

import Fade from 'react-reveal/Fade'

function SectionNews() {
    return (
        <Section id='aktualnosci' name='news' paralax='true'>
            <Row>
                <Col sm={5} className='paralax-content'>
                    <SectionTitle title='Aktualności' />
                    <Fade bottom>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at maximus lectus. Suspendisse a sapien sit amet ex ultricies tempus nec sit amet nulla. Proin sapien augue, egestas vel arcu a, euismod consequat justo</p>
                    <a href='/aktualnosci' className='button-small mt-3'>Przejdź do aktualności</a>
                    </Fade>
                </Col>
            </Row>
        </Section>
    )
}

export default SectionNews
