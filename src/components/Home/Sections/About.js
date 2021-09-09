import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Section from '../../Section'
import SectionTitle from '../../SectionTitle'

import buildingImage from '../../../img/Building.jpg'
import staffImage from '../../../img/Staff.jpg'

import { NavLink } from 'react-router-dom';

import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade'

function About() {
    return (
        <Section id='o-nas' name='about'>
            <div className='justify-content-center text-center'>
                <SectionTitle title='Red-Vet - przychodnia dla każdego' />
                <Fade bottom>
                    <p className='margined'>Przychodnia weterynaryjna Red-Vet to zlokalizowana w centrum Głuszycy placówka, w której realizowane są usługi weterynaryjne dla szerokiego spektrum zwierząt. Najczęściej trafiają do nas oczywiście małe zwierzęta domowe: koty, psy, ptaki, zółwie czy świnki morskie. Z racji na to, iż nasza przychodnia współpracuje także z okolicznymi gminami zdarza się jednak, że w naszych progach pojawiają sie bardziej osobliwi goście jak choćby sarny, dziki, bociany, a nawet wilk.</p>
                    <p>Niezależnie jednak od tego czy mamy do czynienia ze spokojnym kotkiem czy też dziką sarną zawsze staramy się realizować nasz nadrzędny cel - nieść pomoc medyczną tym zwierzętom, które tego potrzebują.</p>
                </Fade>

            </div>
            <Row>
                <Col md={6} className='text-center text-md-start' >
                    <Bounce left>
                        <div>
                            <NavLink className='h3-link' to={'/przychodnia'}>
                                <img className='img-size' src={buildingImage} alt='Widok frontu przychodni' />
                                <h3 className='text-center text-md-start'>Przychodnia</h3>
                                <p>W dobrych warunkach łatwiej dochodzić do zdrowia - zapraszamy zatem do krótkiej wycieczki po naszej przychodni w trakcie, której zapoznacie się z jej historią, działalnością oraz samym wyglądem. Ważne dla nas jest byście wiedzieli Państwo do jakiego miejsca oddajecie swych pupili.</p>
                            </NavLink>
                        </div>

                    </Bounce >
                </Col>
                <Col md={6} className='text-center text-md-start' >
                    <Bounce right>
                        <div>
                            <NavLink  className='h3-link' to={'/personel'}>
                                <img className='img-size' src={staffImage} alt='Zdjęcie przedstawiające Annę Redlicką - właścicielkę' />
                                <h3 className='text-center text-md-start'>Personel</h3>
                                <p>W niesieniu pomocy dostęp do dobrego sprzętu medycznego jest niezwykle istotny - nie ulega jednak wątpliwości, iż w ostatecznym rozrachunku to człowiek pełni kluczową funkcję w procesie leczenia weterynaryjnego. Zachęcamy więc do zapoznania się z naszym wykwalifikowanym personelem</p>
                            </NavLink >
                        </div>
                    </Bounce >
                </Col>
            </Row>
        </Section>
    )
}

export default About