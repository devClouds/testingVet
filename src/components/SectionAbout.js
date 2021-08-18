import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Section from './Section'

import buildingImage from '../img/Building.jpg'
import staffImage from '../img/About-Photo.jpg'
import SectionTitle from './SectionTitle'

import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade'

function SectionAbout() {
    return (
        <Section id='o-nas' name='about'>
            <div className='justify-content-center text-center'>
                <SectionTitle title='Red-Vet - przychodnia dla każdego' />
                <Fade bottom>
                    <p className='margined'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at maximus lectus. Suspendisse a sapien sit amet ex ultricies tempus nec sit amet nulla. Proin sapien augue, egestas vel arcu a, euismod consequat justo. Aenean lacinia, nunc nec euismod tincidunt, velit neque hendrerit urna, ac tempor lorem ex quis ex.</p>
                </Fade>

            </div>
            <Row>
                <Col md={6} >
                    <Bounce left>
                        <div>
                            <a className='h3-link' href='/przychodnia'>
                                <img className='img-size' src={buildingImage} alt='Widok frontu przychodni' />
                                <h3 className='text-center text-md-start'>Placówka</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at maximus lectus. Suspendisse a sapien sit amet ex ultricies tempus nec sit amet nulla. Proin sapien augue, egestas vel arcu a, euismod consequat justo</p>
                            </a>
                        </div>

                    </Bounce >
                </Col>
                <Col md={6} >
                    <Bounce right>
                        <div>
                            <a className='h3-link' href='/personel'>
                                <img className='img-size' src={staffImage} alt='Zdjęcie przedstawiające Annę Redlicką - właścicielkę' />
                                <h3 className='text-center text-md-start'>Personel</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at maximus lectus. Suspendisse a sapien sit amet ex ultricies tempus nec sit amet nulla. Proin sapien augue, egestas vel arcu a, euismod consequat justo</p>
                            </a>
                        </div>
                    </Bounce >
                </Col>
            </Row>
        </Section>
    )
}

export default SectionAbout