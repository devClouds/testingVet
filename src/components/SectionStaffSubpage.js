import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Section from './Section'

import buildingImage from '../img/Building.jpg'
import staffImage from '../img/Staff.jpg'
import SectionTitle from './SectionTitle'

import AnnaImage from '../img/Ania.jpg'

import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade'

function SectionStaffSubpage() {
    return (
        <Section id='personel' name='subpage'>
            <div className='justify-content-center text-center'>
                <SectionTitle title='Anna Redlicka' />
            </div>
            <Row>
                <Col md={6}  className='text-center text-md-start mb-4 mb-md-0'  >
                    <Bounce left>
                        <div className='px-2'>
                            <img className='img-about' src={AnnaImage} alt='Anna Redlicka' />
                        </div>
                    </Bounce >
                </Col>
                <Col md={6} className='text-center text-md-start' >
                    <Bounce right>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at maximus lectus. Suspendisse a sapien sit amet ex ultricies tempus nec sit amet nulla. Proin sapien augue, egestas vel arcu a, euismod consequat justo</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at maximus lectus. Suspendisse a sapien sit amet ex ultricies tempus nec sit amet nulla. Proin sapien augue, egestas vel arcu a, euismod consequat justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at maximus lectus. Suspendisse a sapien sit amet ex ultricies tempus nec sit amet nulla. Proin sapien augue, egestas vel arcu a, euismod consequat justo</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at maximus lectus. Suspendisse a sapien sit amet ex ultricies tempus nec sit amet nulla. Proin sapien augue, egestas vel arcu a, euismod consequat justo</p>
                        </div>
                    </Bounce >
                </Col>
            </Row>
        </Section>
    )
}

export default SectionStaffSubpage
