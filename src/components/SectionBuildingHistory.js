import React from 'react'
import { Col, Row, Accordion } from 'react-bootstrap'
import Section from './Section'
import SectionTitle from './SectionTitle'

import Fade from 'react-reveal/Fade'

function SectionBuildingHistory() {
    return (
        <Section id='historia' name='building-history' paralax='true'>
            <Row>
                <Col sm={5} className='paralax-content'>
                    <SectionTitle title='Nasze początki' />
                    <Fade bottom>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at maximus lectus. Suspendisse a sapien sit amet ex ultricies tempus nec sit amet nulla. Proin sapien augue, egestas vel arcu a, euismod consequat justo</p>
                    </Fade>         
                  
                </Col>
            </Row>
        </Section>
    )
}

export default SectionBuildingHistory
